/* ============================================
   KẾ TOÁN PRO - Main Application Logic
   ============================================ */

(function () {
    'use strict';

    // ============================================
    // PARTICLE BACKGROUND
    // ============================================
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function initParticles() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
        const count = Math.floor((canvas.width * canvas.height) / 15000);
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.4 + 0.1
            });
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
            ctx.fill();
        });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.06 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        animationId = requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();
    window.addEventListener('resize', () => {
        cancelAnimationFrame(animationId);
        initParticles();
        animateParticles();
    });

    // ============================================
    // NAVIGATION
    // ============================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });

    // Navigate to section
    function navigateTo(sectionId) {
        history.replaceState(null, '', sectionId === 'home' ? location.pathname : '#' + sectionId);
        sections.forEach(s => s.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');

        navLinks.forEach(l => {
            l.classList.toggle('active', l.dataset.section === sectionId);
        });
        mobileLinks.forEach(l => {
            l.classList.toggle('active', l.dataset.section === sectionId);
        });

        // Close mobile menu
        navToggle.classList.remove('active');
        mobileMenu.classList.remove('open');

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update stats if navigating to stats
        if (sectionId === 'stats') {
            updateStatsView();
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link.dataset.section);
        });
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link.dataset.section);
        });
    });

    // Logo click
    document.getElementById('nav-logo').addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('home');
    });

    // ============================================
    // HERO ANIMATIONS
    // ============================================
    function animateCounters() {
        document.querySelectorAll('.stat-number[data-count]').forEach(el => {
            const target = parseInt(el.dataset.count);
            let current = 0;
            const increment = target / 40;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    el.textContent = target;
                    clearInterval(timer);
                } else {
                    el.textContent = Math.floor(current);
                }
            }, 30);
        });
    }
    // Real counts from the question bank (minus the "all" pseudo-category)
    document.getElementById('heroQuestionCount').dataset.count = QUESTIONS_DB.length;
    document.getElementById('heroTopicCount').dataset.count = QUIZ_CATEGORIES.length - 1;
    document.getElementById('footerYear').textContent = new Date().getFullYear();
    setTimeout(animateCounters, 500);

    // ============================================
    // HERO BUTTONS
    // ============================================
    document.getElementById('startQuizBtn').addEventListener('click', () => {
        navigateTo('quiz');
        showQuizCategories();
    });

    document.getElementById('viewKnowledgeBtn').addEventListener('click', () => {
        navigateTo('knowledge');
    });

    // ============================================
    // QUIZ LOGIC
    // ============================================
    let quizState = {
        category: null,
        mode: 'practice',      // 'practice' = chấm từng câu, 'exam' = làm hết rồi nộp bài
        examMinutes: 30,
        examTimer: null,
        submitted: false,
        questionCount: 10,
        timePerQuestion: 30,
        questions: [],
        currentIndex: 0,
        correct: 0,
        wrong: 0,
        answers: [],
        timer: null,
        timeLeft: 0,
        startTime: null,
        totalTime: 0
    };

    const quizCategories = document.getElementById('quizCategories');
    const quizSettings = document.getElementById('quizSettings');
    const quizActive = document.getElementById('quizActive');
    const quizResults = document.getElementById('quizResults');

    // Generate category cards
    function renderCategories() {
        const grid = document.getElementById('categoriesGrid');
        grid.innerHTML = '';
        QUIZ_CATEGORIES.forEach(cat => {
            const questionsInCat = cat.id === 'all'
                ? QUESTIONS_DB.length
                : QUESTIONS_DB.filter(q => q.category === cat.id).length;

            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <div class="category-icon" style="background: ${cat.color}">
                    ${cat.icon}
                </div>
                <div class="category-info">
                    <div class="category-name">${cat.name}</div>
                    <div class="category-count">${questionsInCat} câu hỏi</div>
                </div>
                <div class="category-arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </div>
            `;
            card.addEventListener('click', () => selectCategory(cat));
            grid.appendChild(card);
        });
    }

    function showQuizCategories() {
        quizCategories.classList.remove('hidden');
        quizSettings.classList.add('hidden');
        quizActive.classList.add('hidden');
        quizResults.classList.add('hidden');
    }

    function selectCategory(category) {
        quizState.category = category;
        document.getElementById('selectedCategoryTitle').textContent = category.name;

        quizCategories.classList.add('hidden');
        quizSettings.classList.remove('hidden');
    }

    // Settings buttons
    document.querySelectorAll('.setting-btn[data-count]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.setting-btn[data-count]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            quizState.questionCount = parseInt(btn.dataset.count);
        });
    });

    document.querySelectorAll('.setting-btn[data-time]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.setting-btn[data-time]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            quizState.timePerQuestion = parseInt(btn.dataset.time);
        });
    });

    const MODE_HINTS = {
        practice: 'Xem đáp án và giải thích ngay sau mỗi câu.',
        exam: 'Làm như thi thật: chọn đáp án tự do, chuyển câu qua lại, nộp bài khi xong hoặc hết giờ rồi mới chấm điểm.'
    };

    document.querySelectorAll('.setting-btn[data-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.setting-btn[data-mode]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            quizState.mode = btn.dataset.mode;
            const isExam = quizState.mode === 'exam';
            document.getElementById('examTimeGroup').classList.toggle('hidden', !isExam);
            document.getElementById('practiceTimeGroup').classList.toggle('hidden', isExam);
            document.getElementById('modeHint').textContent = MODE_HINTS[quizState.mode];
        });
    });

    document.querySelectorAll('.setting-btn[data-exam-time]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.setting-btn[data-exam-time]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            quizState.examMinutes = parseInt(btn.dataset.examTime);
        });
    });

    // Back to categories
    document.getElementById('backToCategories').addEventListener('click', showQuizCategories);

    // Start exam
    document.getElementById('startExamBtn').addEventListener('click', startQuiz);

    function startQuiz() {
        // Get questions
        let pool = quizState.category.id === 'all'
            ? [...QUESTIONS_DB]
            : QUESTIONS_DB.filter(q => q.category === quizState.category.id);

        // Shuffle
        pool = shuffleArray(pool);

        // Limit count
        quizState.questions = pool.slice(0, Math.min(quizState.questionCount, pool.length));
        quizState.currentIndex = 0;
        quizState.correct = 0;
        quizState.wrong = 0;
        quizState.answers = [];
        quizState.startTime = Date.now();
        quizState.totalTime = 0;
        quizState.submitted = false;
        clearInterval(quizState.timer);
        clearInterval(quizState.examTimer);

        const isExam = quizState.mode === 'exam';
        if (isExam) {
            // Pre-fill so the user can jump between questions and change answers
            quizState.answers = quizState.questions.map(q => ({ question: q, selected: -1, isCorrect: false }));
        }

        // Show quiz
        quizSettings.classList.add('hidden');
        quizActive.classList.remove('hidden');
        quizResults.classList.add('hidden');
        document.getElementById('examNav').classList.toggle('hidden', !isExam);
        document.getElementById('examPaletteCard').classList.toggle('hidden', !isExam);
        document.querySelector('.quiz-score-live').classList.toggle('hidden', isExam);

        // Set labels
        document.getElementById('quizCategoryLabel').textContent =
            (isExam ? 'Thi thử · ' : '') + quizState.category.name;
        document.getElementById('totalQ').textContent = quizState.questions.length;

        if (isExam) {
            renderExamPalette();
            startExamTimer();
        }
        showQuestion();
    }

    function showQuestion() {
        const q = quizState.questions[quizState.currentIndex];
        const idx = quizState.currentIndex;
        const total = quizState.questions.length;
        const isExam = quizState.mode === 'exam';

        // Update header
        document.getElementById('currentQ').textContent = idx + 1;
        if (!isExam) {
            document.getElementById('quizProgressFill').style.width = `${((idx) / total) * 100}%`;
        }
        document.getElementById('liveCorrect').textContent = quizState.correct;
        document.getElementById('liveWrong').textContent = quizState.wrong;

        // Question card
        document.getElementById('questionNumber').textContent = `Câu ${idx + 1}`;
        document.getElementById('questionText').textContent = q.question;

        // Options
        const optionsList = document.getElementById('optionsList');
        const letters = ['A', 'B', 'C', 'D'];
        optionsList.innerHTML = '';

        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            if (isExam && quizState.answers[idx].selected === i) btn.classList.add('selected');
            btn.innerHTML = `
                <span class="option-letter">${letters[i]}</span>
                <span class="option-text">${escapeHtml(opt)}</span>
            `;
            btn.addEventListener('click', () => isExam ? selectExamAnswer(i) : handleAnswer(i));
            optionsList.appendChild(btn);
        });

        // Hide explanation and next button
        document.getElementById('questionExplanation').classList.add('hidden');
        document.getElementById('nextQuestionBtn').classList.add('hidden');

        if (isExam) {
            document.getElementById('examPrevBtn').disabled = idx === 0;
            document.getElementById('examNextBtn').disabled = idx === total - 1;
            updateExamPalette();
        } else {
            // Start timer
            startTimer();
        }

        // Animate card
        const card = document.getElementById('questionCard');
        card.style.animation = 'none';
        card.offsetHeight; // Trigger reflow
        card.style.animation = 'fadeIn 0.3s ease';
    }

    function handleAnswer(selectedIndex) {
        const q = quizState.questions[quizState.currentIndex];

        // Stop timer
        clearInterval(quizState.timer);

        // Disable all options
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(btn => btn.classList.add('disabled'));

        // Mark correct and wrong
        buttons[q.correct].classList.add('correct');
        if (selectedIndex !== q.correct) {
            buttons[selectedIndex].classList.add('wrong');
            quizState.wrong++;
        } else {
            quizState.correct++;
        }

        // Save answer
        quizState.answers.push({
            question: q,
            selected: selectedIndex,
            isCorrect: selectedIndex === q.correct
        });

        // Update live score
        document.getElementById('liveCorrect').textContent = quizState.correct;
        document.getElementById('liveWrong').textContent = quizState.wrong;

        // Show explanation
        document.getElementById('explanationText').textContent = q.explanation;
        document.getElementById('questionExplanation').classList.remove('hidden');

        // Show next button
        const nextBtn = document.getElementById('nextQuestionBtn');
        if (quizState.currentIndex < quizState.questions.length - 1) {
            nextBtn.textContent = '';
            nextBtn.innerHTML = `Câu tiếp theo <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
        } else {
            nextBtn.textContent = '';
            nextBtn.innerHTML = `Xem kết quả <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
        }
        nextBtn.classList.remove('hidden');
    }

    function handleTimeout() {
        const q = quizState.questions[quizState.currentIndex];

        // Disable all options
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(btn => btn.classList.add('disabled'));
        buttons[q.correct].classList.add('correct');

        quizState.wrong++;
        quizState.answers.push({
            question: q,
            selected: -1,
            isCorrect: false
        });

        document.getElementById('liveCorrect').textContent = quizState.correct;
        document.getElementById('liveWrong').textContent = quizState.wrong;

        document.getElementById('explanationText').textContent = '⏰ Hết thời gian! ' + q.explanation;
        document.getElementById('questionExplanation').classList.remove('hidden');

        const nextBtn = document.getElementById('nextQuestionBtn');
        if (quizState.currentIndex < quizState.questions.length - 1) {
            nextBtn.innerHTML = `Câu tiếp theo <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
        } else {
            nextBtn.innerHTML = `Xem kết quả <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
        }
        nextBtn.classList.remove('hidden');

        showToast('Hết thời gian!', 'error');
    }

    // Next question
    document.getElementById('nextQuestionBtn').addEventListener('click', () => {
        if (quizState.currentIndex < quizState.questions.length - 1) {
            quizState.currentIndex++;
            showQuestion();
        } else {
            showResults();
        }
    });

    // ============================================
    // EXAM MODE (Thi thử)
    // ============================================
    function selectExamAnswer(i) {
        if (quizState.submitted) return;
        quizState.answers[quizState.currentIndex].selected = i;
        document.querySelectorAll('.option-btn').forEach((b, j) => b.classList.toggle('selected', j === i));
        updateExamPalette();

        // Auto-advance to the next question after a short pause
        if (quizState.currentIndex < quizState.questions.length - 1) {
            const from = quizState.currentIndex;
            setTimeout(() => {
                if (!quizState.submitted && quizState.currentIndex === from) goToExamQuestion(from + 1);
            }, 350);
        }
    }

    function goToExamQuestion(i) {
        if (i < 0 || i >= quizState.questions.length) return;
        quizState.currentIndex = i;
        showQuestion();
    }

    function renderExamPalette() {
        const palette = document.getElementById('examPalette');
        palette.innerHTML = '';
        quizState.questions.forEach((_, i) => {
            const cell = document.createElement('button');
            cell.className = 'palette-cell';
            cell.textContent = i + 1;
            cell.addEventListener('click', () => goToExamQuestion(i));
            palette.appendChild(cell);
        });
        document.getElementById('examTotalCount').textContent = quizState.questions.length;
    }

    function updateExamPalette() {
        const answered = quizState.answers.filter(a => a.selected !== -1).length;
        document.querySelectorAll('.palette-cell').forEach((cell, i) => {
            cell.classList.toggle('answered', quizState.answers[i].selected !== -1);
            cell.classList.toggle('current', i === quizState.currentIndex);
        });
        document.getElementById('examAnsweredCount').textContent = answered;
        document.getElementById('quizProgressFill').style.width = `${(answered / quizState.questions.length) * 100}%`;
    }

    function startExamTimer() {
        const timerEl = document.getElementById('quizTimer');
        const timerDisplay = document.getElementById('timerDisplay');
        const deadline = Date.now() + quizState.examMinutes * 60 * 1000;

        function tick() {
            const left = Math.max(0, Math.round((deadline - Date.now()) / 1000));
            timerDisplay.textContent = formatTime(left);
            timerEl.className = 'quiz-timer' + (left <= 60 ? ' danger' : left <= 300 ? ' warning' : '');
            if (left <= 0) {
                clearInterval(quizState.examTimer);
                showToast('Hết giờ làm bài! Hệ thống tự động nộp bài.', 'error');
                submitExam();
            }
        }
        tick();
        quizState.examTimer = setInterval(tick, 1000);
    }

    function submitExam() {
        if (quizState.submitted) return;
        quizState.submitted = true;
        clearInterval(quizState.examTimer);

        quizState.correct = 0;
        quizState.wrong = 0;
        quizState.answers.forEach(a => {
            a.isCorrect = a.selected === a.question.correct;
            if (a.isCorrect) quizState.correct++; else quizState.wrong++;
        });
        showResults();
    }

    document.getElementById('examPrevBtn').addEventListener('click', () => goToExamQuestion(quizState.currentIndex - 1));
    document.getElementById('examNextBtn').addEventListener('click', () => goToExamQuestion(quizState.currentIndex + 1));
    document.getElementById('examSubmitBtn').addEventListener('click', () => {
        const unanswered = quizState.answers.filter(a => a.selected === -1).length;
        const msg = unanswered > 0
            ? `Bạn còn ${unanswered} câu chưa làm. Vẫn nộp bài?`
            : 'Bạn chắc chắn muốn nộp bài?';
        askConfirm(msg, 'Nộp bài', submitExam);
    });

    // Timer
    function startTimer() {
        clearInterval(quizState.timer);
        const timerEl = document.getElementById('quizTimer');
        const timerDisplay = document.getElementById('timerDisplay');

        if (quizState.timePerQuestion === 0) {
            timerDisplay.textContent = '∞';
            timerEl.className = 'quiz-timer';
            return;
        }

        quizState.timeLeft = quizState.timePerQuestion;
        timerDisplay.textContent = quizState.timeLeft;
        timerEl.className = 'quiz-timer';

        quizState.timer = setInterval(() => {
            quizState.timeLeft--;
            timerDisplay.textContent = quizState.timeLeft;

            if (quizState.timeLeft <= 5) {
                timerEl.className = 'quiz-timer danger';
            } else if (quizState.timeLeft <= 10) {
                timerEl.className = 'quiz-timer warning';
            }

            if (quizState.timeLeft <= 0) {
                clearInterval(quizState.timer);
                handleTimeout();
            }
        }, 1000);
    }

    // ============================================
    // RESULTS
    // ============================================
    function showResults() {
        quizState.totalTime = Math.floor((Date.now() - quizState.startTime) / 1000);
        clearInterval(quizState.timer);

        quizActive.classList.add('hidden');
        quizResults.classList.remove('hidden');
        document.getElementById('reviewSection').classList.add('hidden');

        const total = quizState.questions.length;
        const correct = quizState.correct;
        const percent = Math.round((correct / total) * 100);

        // Icon and title
        let icon, title;
        if (percent >= 90) { icon = '🏆'; title = 'Xuất sắc!'; }
        else if (percent >= 70) { icon = '🎉'; title = 'Tốt lắm!'; }
        else if (percent >= 50) { icon = '👍'; title = 'Khá tốt!'; }
        else { icon = '💪'; title = 'Cần cố gắng thêm!'; }

        document.getElementById('resultsIcon').textContent = icon;
        document.getElementById('resultsTitle').textContent = title;

        // Animate score circle
        const ring = document.getElementById('scoreRing');
        const circumference = 339.3;
        const offset = circumference - (percent / 100) * circumference;
        setTimeout(() => {
            ring.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
            ring.style.strokeDashoffset = offset;
        }, 100);

        // Animate score number
        animateNumber(document.getElementById('scorePercent'), 0, percent, 1500);

        // Details
        document.getElementById('resultCorrect').textContent = correct;
        document.getElementById('resultWrong').textContent = total - correct;
        document.getElementById('resultTime').textContent = formatTime(quizState.totalTime);

        // Update progress bar
        document.getElementById('quizProgressFill').style.width = '100%';

        // Save to history
        saveQuizResult({
            category: (quizState.mode === 'exam' ? 'Thi thử · ' : '') + quizState.category.name,
            correct: correct,
            wrong: total - correct,
            total: total,
            percent: percent,
            time: quizState.totalTime,
            date: new Date().toLocaleDateString('vi-VN')
        });
    }

    function animateNumber(el, start, end, duration) {
        const startTime = Date.now();
        function update() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(start + (end - start) * eased);
            if (progress < 1) requestAnimationFrame(update);
        }
        update();
    }

    // Review answers
    document.getElementById('reviewAnswersBtn').addEventListener('click', () => {
        const reviewSection = document.getElementById('reviewSection');
        reviewSection.classList.toggle('hidden');

        if (!reviewSection.classList.contains('hidden')) {
            renderReview();
            reviewSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    function renderReview() {
        const list = document.getElementById('reviewList');
        const letters = ['A', 'B', 'C', 'D'];
        list.innerHTML = '';

        quizState.answers.forEach((ans, i) => {
            const item = document.createElement('div');
            item.className = `review-item ${ans.isCorrect ? 'review-correct' : 'review-wrong'}`;

            const q = ans.question;
            const correctHtml = `<div class="review-answer"><strong>Đáp án đúng: ${letters[q.correct]}. ${escapeHtml(q.options[q.correct])}</strong></div>`;
            let answerHtml = correctHtml;
            if (ans.selected === -1) {
                const reason = quizState.mode === 'exam' ? 'Chưa trả lời' : 'Hết thời gian';
                answerHtml += `<div class="review-answer your-answer"><strong>Bạn chọn: ${reason}</strong></div>`;
            } else if (!ans.isCorrect) {
                answerHtml += `<div class="review-answer your-answer"><strong>Bạn chọn: ${letters[ans.selected]}. ${escapeHtml(q.options[ans.selected])}</strong></div>`;
            }

            item.innerHTML = `
                <div class="review-item-header">
                    <span class="review-q-number">Câu ${i + 1}</span>
                    <span class="review-badge ${ans.isCorrect ? 'badge-correct' : 'badge-wrong'}">
                        ${ans.isCorrect ? '✓ Đúng' : '✗ Sai'}
                    </span>
                </div>
                <div class="review-question">${escapeHtml(q.question)}</div>
                ${answerHtml}
                <div class="review-explanation">${escapeHtml(q.explanation)}</div>
            `;
            list.appendChild(item);
        });
    }

    // Retry
    document.getElementById('retryQuizBtn').addEventListener('click', () => {
        // Reset score ring
        document.getElementById('scoreRing').style.transition = 'none';
        document.getElementById('scoreRing').style.strokeDashoffset = '339.3';
        startQuiz();
    });

    // New topic
    document.getElementById('newTopicBtn').addEventListener('click', () => {
        // Reset score ring
        document.getElementById('scoreRing').style.transition = 'none';
        document.getElementById('scoreRing').style.strokeDashoffset = '339.3';
        showQuizCategories();
    });

    // ============================================
    // STORAGE & STATS
    // ============================================
    function saveQuizResult(result) {
        const history = getHistory();
        history.push(result);
        try {
            localStorage.setItem('ketoan_history', JSON.stringify(history));
        } catch {
            // Storage blocked (private window etc.): history just isn't kept
        }
    }

    function getHistory() {
        try {
            return JSON.parse(localStorage.getItem('ketoan_history')) || [];
        } catch {
            return [];
        }
    }

    function updateStatsView() {
        const history = getHistory();

        // Overview
        document.getElementById('totalExams').textContent = history.length;
        document.getElementById('totalCorrectStat').textContent = history.reduce((s, h) => s + h.correct, 0);

        if (history.length > 0) {
            const avgPercent = Math.round(history.reduce((s, h) => s + h.percent, 0) / history.length);
            const bestPercent = Math.max(...history.map(h => h.percent));
            document.getElementById('avgScore').textContent = avgPercent + '%';
            document.getElementById('bestScore').textContent = bestPercent + '%';
        } else {
            document.getElementById('avgScore').textContent = '0%';
            document.getElementById('bestScore').textContent = '0%';
        }

        // History table
        const tbody = document.getElementById('historyBody');
        if (history.length === 0) {
            tbody.innerHTML = '<tr class="empty-row"><td colspan="7">Chưa có bài thi nào. Hãy bắt đầu luyện thi!</td></tr>';
        } else {
            tbody.innerHTML = '';
            [...history].reverse().forEach((h, i) => {
                const tr = document.createElement('tr');
                const scoreColor = h.percent >= 70 ? 'var(--accent-green)' : h.percent >= 50 ? 'var(--accent-amber)' : 'var(--accent-red)';
                tr.innerHTML = `
                    <td>${history.length - i}</td>
                    <td>${h.category}</td>
                    <td style="color: var(--accent-green); font-weight: 600;">${h.correct}</td>
                    <td style="color: var(--accent-red); font-weight: 600;">${h.wrong}</td>
                    <td style="color: ${scoreColor}; font-weight: 700;">${h.percent}%</td>
                    <td>${formatTime(h.time)}</td>
                    <td>${h.date}</td>
                `;
                tbody.appendChild(tr);
            });
        }
    }

    // Clear stats
    document.getElementById('clearStatsBtn').addEventListener('click', () => {
        askConfirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử thi?', 'Xóa lịch sử', () => {
            try { localStorage.removeItem('ketoan_history'); } catch { /* storage blocked */ }
            updateStatsView();
            showToast('Đã xóa lịch sử thi', 'info');
        });
    });

    // ============================================
    // UTILITIES
    // ============================================
    function shuffleArray(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // In-page confirmation dialog (window.confirm is blocked in some hosts)
    let confirmAction = null;
    const confirmModal = document.getElementById('confirmModal');

    function askConfirm(message, okLabel, onYes) {
        document.getElementById('confirmMessage').textContent = message;
        document.getElementById('confirmOkBtn').textContent = okLabel;
        confirmAction = onYes;
        confirmModal.classList.remove('hidden');
        document.getElementById('confirmOkBtn').focus();
    }

    function closeConfirm() {
        confirmModal.classList.add('hidden');
        confirmAction = null;
    }

    document.getElementById('confirmOkBtn').addEventListener('click', () => {
        const action = confirmAction;
        closeConfirm();
        if (action) action();
    });
    document.getElementById('confirmCancelBtn').addEventListener('click', closeConfirm);
    confirmModal.addEventListener('click', (e) => { if (e.target === confirmModal) closeConfirm(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeConfirm(); });

    function escapeHtml(str) {
        return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    }

    function showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('toast-out');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // ============================================
    // INITIALIZATION
    // ============================================
    renderCategories();
    updateStatsView();

    // Deep link: ketoan...netlify.app/#quiz opens that section directly
    const initialSection = location.hash.slice(1);
    if (initialSection && document.getElementById(initialSection)?.classList.contains('section')) {
        navigateTo(initialSection);
    }

    // Keyboard shortcut for quick start
    document.addEventListener('keydown', (e) => {
        if (quizState.mode === 'exam' && !quizState.submitted && !quizActive.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') goToExamQuestion(quizState.currentIndex - 1);
            if (e.key === 'ArrowRight') goToExamQuestion(quizState.currentIndex + 1);
            return;
        }
        if (e.key === 'Enter' && quizActive.classList.contains('hidden') === false) {
            const nextBtn = document.getElementById('nextQuestionBtn');
            if (!nextBtn.classList.contains('hidden')) {
                nextBtn.click();
            }
        }
    });

})();
