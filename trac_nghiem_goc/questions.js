/* ============================================
   QUESTIONS DATABASE - KẾ TOÁN PRO
   ============================================ */

const QUIZ_CATEGORIES = [
    {
        id: 'all',
        name: 'Tổng hợp tất cả',
        icon: '📚',
        color: 'rgba(99, 102, 241, 0.12)',
        description: 'Bao gồm tất cả chủ đề'
    },
    {
        id: 'nguyen_ly',
        name: 'Nguyên lý kế toán',
        icon: '📒',
        color: 'rgba(16, 185, 129, 0.12)',
        description: 'Nguyên tắc ghi sổ, phương trình kế toán'
    },
    {
        id: 'tai_khoan',
        name: 'Hệ thống tài khoản',
        icon: '🏦',
        color: 'rgba(6, 182, 212, 0.12)',
        description: 'Tài khoản kế toán theo TT200'
    },
    {
        id: 'bao_cao',
        name: 'Báo cáo tài chính',
        icon: '📊',
        color: 'rgba(168, 85, 247, 0.12)',
        description: 'BCĐKT, BCKQKD, BCLCTT'
    },
    {
        id: 'thue',
        name: 'Thuế',
        icon: '💰',
        color: 'rgba(245, 158, 11, 0.12)',
        description: 'Thuế GTGT, TNDN, TNCN'
    },
    {
        id: 'dinh_khoan',
        name: 'Định khoản kế toán',
        icon: '📝',
        color: 'rgba(239, 68, 68, 0.12)',
        description: 'Bút toán ghi sổ các nghiệp vụ'
    },
    {
        id: 'tscd',
        name: 'Tài sản cố định',
        icon: '🏭',
        color: 'rgba(34, 197, 94, 0.12)',
        description: 'Khấu hao, thanh lý, nhượng bán TSCĐ'
    },
    {
        id: 'hang_ton_kho',
        name: 'Hàng tồn kho',
        icon: '📦',
        color: 'rgba(236, 72, 153, 0.12)',
        description: 'Phương pháp tính giá HTK'
    },
    {
        id: 'tien_luong',
        name: 'Tiền lương & BHXH',
        icon: '👥',
        color: 'rgba(14, 165, 233, 0.12)',
        description: 'Lương, BHXH, BHYT, BHTN, KPCĐ'
    },
    {
        id: 'ke_toan_co_ban',
        name: 'Kế toán thực hành',
        icon: '🧾',
        color: 'rgba(20, 184, 166, 0.12)',
        description: 'Nghiệp vụ, định khoản theo TT200'
    },
    {
        id: 'gia_thanh',
        name: 'Giá thành sản xuất',
        icon: '⚙️',
        color: 'rgba(249, 115, 22, 0.12)',
        description: 'Tập hợp chi phí, tính giá thành'
    },
    {
        id: 'thue_gtgt',
        name: 'Thuế GTGT chuyên sâu',
        icon: '🧮',
        color: 'rgba(234, 179, 8, 0.12)',
        description: 'Khấu trừ, hoàn thuế, hóa đơn'
    },
    {
        id: 'thue_tndn',
        name: 'Thuế TNDN chuyên sâu',
        icon: '🏢',
        color: 'rgba(217, 119, 6, 0.12)',
        description: 'Chi phí được trừ, quyết toán'
    },
    {
        id: 'thue_tncn',
        name: 'Thuế TNCN chuyên sâu',
        icon: '🧑‍💼',
        color: 'rgba(202, 138, 4, 0.12)',
        description: 'Giảm trừ gia cảnh, quyết toán'
    },
    {
        id: 'ktt_chung_chi',
        name: 'Chứng chỉ Kế toán trưởng',
        icon: '🎓',
        color: 'rgba(124, 58, 237, 0.12)',
        description: 'Ôn thi chứng chỉ KTT'
    },
    {
        id: 'cpa_viet_nam',
        name: 'Ôn thi CPA Việt Nam',
        icon: '🏅',
        color: 'rgba(79, 70, 229, 0.12)',
        description: 'Kế toán, kiểm toán, thuế nâng cao'
    },
    {
        id: 'acca_f3',
        name: 'ACCA F3 (FA)',
        icon: '🌐',
        color: 'rgba(37, 99, 235, 0.12)',
        description: 'Financial Accounting quốc tế'
    }
];

const QUESTIONS_DB = [
    // ============================================
    // NGUYÊN LÝ KẾ TOÁN
    // ============================================
    {
        id: 1,
        category: 'nguyen_ly',
        question: 'Phương trình kế toán cơ bản là gì?',
        options: [
            'Tài sản = Nợ phải trả + Vốn chủ sở hữu',
            'Tài sản = Doanh thu - Chi phí',
            'Tài sản = Vốn chủ sở hữu - Nợ phải trả',
            'Tài sản + Chi phí = Doanh thu + Vốn'
        ],
        correct: 0,
        explanation: 'Phương trình kế toán cơ bản: Tài sản = Nợ phải trả + Vốn chủ sở hữu. Đây là nền tảng của kế toán kép, phản ánh mối quan hệ giữa tài sản và nguồn hình thành tài sản.'
    },
    {
        id: 2,
        category: 'nguyen_ly',
        question: 'Nguyên tắc ghi sổ kép có nghĩa là gì?',
        options: [
            'Mỗi nghiệp vụ ghi vào 2 cuốn sổ khác nhau',
            'Mỗi nghiệp vụ phải ghi ít nhất vào 2 tài khoản, bên Nợ và bên Có',
            'Mỗi nghiệp vụ ghi 2 lần vào cùng một tài khoản',
            'Mỗi nghiệp vụ phải có 2 người ký duyệt'
        ],
        correct: 1,
        explanation: 'Ghi sổ kép là nguyên tắc cơ bản của kế toán, mỗi nghiệp vụ kinh tế phải được ghi vào ít nhất 2 tài khoản kế toán theo quan hệ đối ứng (bên Nợ và bên Có) với số tiền bằng nhau.'
    },
    {
        id: 3,
        category: 'nguyen_ly',
        question: 'Tài khoản loại 1 (Tài sản ngắn hạn) có quy tắc ghi nhận như thế nào?',
        options: [
            'Tăng bên Có, giảm bên Nợ',
            'Tăng bên Nợ, giảm bên Có',
            'Tăng giảm đều ghi bên Nợ',
            'Tăng giảm đều ghi bên Có'
        ],
        correct: 1,
        explanation: 'Tài khoản loại 1 (Tài sản ngắn hạn) thuộc nhóm Tài sản: Số dư bên Nợ, phát sinh tăng ghi bên Nợ, phát sinh giảm ghi bên Có.'
    },
    {
        id: 4,
        category: 'nguyen_ly',
        question: 'Đối tượng nào sau đây thuộc Nguồn vốn?',
        options: [
            'Tiền mặt',
            'Hàng hóa',
            'Vay ngân hàng',
            'Nguyên vật liệu'
        ],
        correct: 2,
        explanation: 'Vay ngân hàng thuộc Nợ phải trả (TK 341), là một phần của Nguồn vốn. Tiền mặt, hàng hóa, nguyên vật liệu đều thuộc Tài sản.'
    },
    {
        id: 5,
        category: 'nguyen_ly',
        question: 'Kỳ kế toán năm bắt đầu từ ngày nào?',
        options: [
            'Ngày 01 tháng 01',
            'Ngày doanh nghiệp bắt đầu hoạt động',
            'Ngày 01 tháng 04',
            'Ngày bất kỳ do doanh nghiệp tự chọn'
        ],
        correct: 0,
        explanation: 'Theo Luật Kế toán, kỳ kế toán năm bắt đầu từ ngày 01/01 và kết thúc vào ngày 31/12 dương lịch. Trường hợp đặc biệt có thể khác nhưng phải đảm bảo 12 tháng.'
    },
    {
        id: 6,
        category: 'nguyen_ly',
        question: 'Nguyên tắc "Giá gốc" trong kế toán có nghĩa là gì?',
        options: [
            'Tài sản luôn được ghi nhận theo giá thị trường hiện tại',
            'Tài sản được ghi nhận theo chi phí thực tế phát sinh để có được tài sản đó',
            'Tài sản được ghi nhận theo giá do cơ quan thuế quy định',
            'Tài sản được ghi nhận theo giá mua ban đầu trừ chiết khấu'
        ],
        correct: 1,
        explanation: 'Nguyên tắc giá gốc yêu cầu tài sản phải được ghi nhận theo chi phí thực tế phát sinh (giá gốc) tại thời điểm giao dịch, bao gồm giá mua và các chi phí liên quan.'
    },
    {
        id: 7,
        category: 'nguyen_ly',
        question: 'Đơn vị tiền tệ sử dụng trong kế toán ở Việt Nam là gì?',
        options: [
            'USD hoặc VND tùy doanh nghiệp',
            'Đồng Việt Nam (VND)',
            'Ngoại tệ do doanh nghiệp chọn',
            'Bất kỳ đơn vị tiền tệ nào'
        ],
        correct: 1,
        explanation: 'Theo Luật Kế toán Việt Nam, đơn vị tiền tệ sử dụng trong kế toán là Đồng Việt Nam (ký hiệu: đ, VND). Trường hợp có thu chi chủ yếu bằng ngoại tệ thì được phép sử dụng ngoại tệ nhưng phải được Bộ Tài chính chấp thuận.'
    },
    {
        id: 8,
        category: 'nguyen_ly',
        question: 'Nguyên tắc "Hoạt động liên tục" giả định điều gì?',
        options: [
            'Doanh nghiệp sẽ hoạt động trong ít nhất 1 năm',
            'Doanh nghiệp sẽ tiếp tục hoạt động trong tương lai gần và không có ý định giải thể',
            'Doanh nghiệp phải hoạt động liên tục 24/7',
            'Doanh nghiệp không được ngừng sản xuất kinh doanh'
        ],
        correct: 1,
        explanation: 'Nguyên tắc hoạt động liên tục giả định rằng doanh nghiệp sẽ tiếp tục hoạt động bình thường trong tương lai gần, không có ý định hay buộc phải ngừng hoạt động hoặc thu hẹp đáng kể quy mô.'
    },
    {
        id: 9,
        category: 'nguyen_ly',
        question: 'Tài khoản loại 3 (Nợ phải trả) có số dư ở bên nào?',
        options: [
            'Số dư bên Nợ',
            'Số dư bên Có',
            'Có thể dư cả hai bên',
            'Không có số dư'
        ],
        correct: 1,
        explanation: 'Tài khoản loại 3 (Nợ phải trả) thuộc nhóm Nguồn vốn: Số dư bên Có, phát sinh tăng ghi bên Có, phát sinh giảm ghi bên Nợ.'
    },
    {
        id: 10,
        category: 'nguyen_ly',
        question: 'Chứng từ kế toán phải có tính chất gì quan trọng nhất?',
        options: [
            'Đẹp và trình bày rõ ràng',
            'Có chữ ký của giám đốc',
            'Trung thực, khách quan và hợp pháp',
            'Được lưu trữ tối thiểu 5 năm'
        ],
        correct: 2,
        explanation: 'Chứng từ kế toán phải trung thực, khách quan và hợp pháp. Đây là cơ sở pháp lý cho việc ghi sổ kế toán và là bằng chứng cho các nghiệp vụ kinh tế phát sinh.'
    },
    {
        id: 11,
        category: 'nguyen_ly',
        question: 'Nguyên tắc "Phù hợp" trong kế toán yêu cầu điều gì?',
        options: [
            'Chi phí phải phù hợp với khả năng tài chính của doanh nghiệp',
            'Doanh thu và chi phí phải được ghi nhận phù hợp với nhau trong cùng kỳ kế toán',
            'Phương pháp kế toán phải phù hợp với quy mô doanh nghiệp',
            'Số liệu kế toán phải phù hợp với số liệu thuế'
        ],
        correct: 1,
        explanation: 'Nguyên tắc phù hợp yêu cầu khi ghi nhận doanh thu thì phải ghi nhận chi phí tương ứng có liên quan đến việc tạo ra doanh thu đó trong cùng kỳ kế toán.'
    },

    // ============================================
    // HỆ THỐNG TÀI KHOẢN
    // ============================================
    {
        id: 12,
        category: 'tai_khoan',
        question: 'Tài khoản 111 dùng để phản ánh gì?',
        options: [
            'Tiền gửi ngân hàng',
            'Tiền mặt',
            'Tiền đang chuyển',
            'Đầu tư tài chính ngắn hạn'
        ],
        correct: 1,
        explanation: 'TK 111 - Tiền mặt: Phản ánh tình hình thu, chi và tồn quỹ tiền mặt tại quỹ doanh nghiệp, bao gồm tiền Việt Nam, ngoại tệ và vàng tiền tệ.'
    },
    {
        id: 13,
        category: 'tai_khoan',
        question: 'Tài khoản 131 phản ánh nội dung gì?',
        options: [
            'Phải trả người bán',
            'Phải thu khách hàng',
            'Phải thu nội bộ',
            'Phải thu khác'
        ],
        correct: 1,
        explanation: 'TK 131 - Phải thu của khách hàng: Phản ánh các khoản nợ phải thu và tình hình thanh toán các khoản nợ phải thu của doanh nghiệp với khách hàng về tiền bán sản phẩm, hàng hóa, dịch vụ.'
    },
    {
        id: 14,
        category: 'tai_khoan',
        question: 'Tài khoản nào dùng để hạch toán Hàng hóa?',
        options: [
            'TK 152',
            'TK 153',
            'TK 155',
            'TK 156'
        ],
        correct: 3,
        explanation: 'TK 156 - Hàng hóa: Phản ánh trị giá hiện có và tình hình biến động tăng, giảm các loại hàng hóa của doanh nghiệp. TK 152 là NVL, TK 153 là CCDC, TK 155 là thành phẩm.'
    },
    {
        id: 15,
        category: 'tai_khoan',
        question: 'TK 211 phản ánh nội dung gì?',
        options: [
            'Tài sản cố định vô hình',
            'Tài sản cố định hữu hình',
            'Bất động sản đầu tư',
            'Tài sản cố định thuê tài chính'
        ],
        correct: 1,
        explanation: 'TK 211 - Tài sản cố định hữu hình: Phản ánh nguyên giá và tình hình biến động tăng giảm TSCĐ hữu hình của doanh nghiệp.'
    },
    {
        id: 16,
        category: 'tai_khoan',
        question: 'TK 331 dùng để hạch toán gì?',
        options: [
            'Phải thu khách hàng',
            'Thuế và các khoản phải nộp',
            'Phải trả người bán',
            'Phải trả người lao động'
        ],
        correct: 2,
        explanation: 'TK 331 - Phải trả cho người bán: Phản ánh tình hình thanh toán về các khoản nợ phải trả của doanh nghiệp cho người bán vật tư, hàng hóa, người cung cấp dịch vụ.'
    },
    {
        id: 17,
        category: 'tai_khoan',
        question: 'TK 511 phản ánh nội dung gì?',
        options: [
            'Doanh thu hoạt động tài chính',
            'Doanh thu bán hàng và cung cấp dịch vụ',
            'Thu nhập khác',
            'Chi phí bán hàng'
        ],
        correct: 1,
        explanation: 'TK 511 - Doanh thu bán hàng và cung cấp dịch vụ: Phản ánh doanh thu bán hàng và cung cấp dịch vụ của doanh nghiệp trong một kỳ kế toán.'
    },
    {
        id: 18,
        category: 'tai_khoan',
        question: 'TK 214 dùng để phản ánh gì?',
        options: [
            'Nguyên giá TSCĐ',
            'Hao mòn TSCĐ',
            'Đầu tư vào công ty con',
            'Chi phí sửa chữa TSCĐ'
        ],
        correct: 1,
        explanation: 'TK 214 - Hao mòn TSCĐ: Phản ánh giá trị hao mòn (khấu hao lũy kế) của TSCĐ trong quá trình sử dụng. Đây là tài khoản điều chỉnh giảm cho TK 211.'
    },
    {
        id: 19,
        category: 'tai_khoan',
        question: 'TK 334 dùng để hạch toán nội dung gì?',
        options: [
            'Phải trả người bán',
            'Thuế phải nộp Nhà nước',
            'Phải trả người lao động',
            'Chi phí phải trả'
        ],
        correct: 2,
        explanation: 'TK 334 - Phải trả người lao động: Phản ánh các khoản phải trả và tình hình thanh toán các khoản phải trả cho người lao động về tiền lương, tiền công, tiền thưởng, BHXH...'
    },
    {
        id: 20,
        category: 'tai_khoan',
        question: 'TK 642 phản ánh chi phí gì?',
        options: [
            'Chi phí sản xuất chung',
            'Chi phí nguyên vật liệu trực tiếp',
            'Giá vốn hàng bán',
            'Chi phí quản lý doanh nghiệp'
        ],
        correct: 3,
        explanation: 'TK 642 - Chi phí quản lý doanh nghiệp: Phản ánh các chi phí quản lý chung của toàn doanh nghiệp như lương bộ phận quản lý, khấu hao, chi phí văn phòng...'
    },
    {
        id: 21,
        category: 'tai_khoan',
        question: 'TK 421 phản ánh nội dung gì?',
        options: [
            'Vốn đầu tư của chủ sở hữu',
            'Lợi nhuận sau thuế chưa phân phối',
            'Quỹ đầu tư phát triển',
            'Nguồn vốn kinh doanh'
        ],
        correct: 1,
        explanation: 'TK 421 - Lợi nhuận sau thuế chưa phân phối: Phản ánh kết quả kinh doanh (lãi, lỗ) sau thuế TNDN và tình hình phân phối lợi nhuận của doanh nghiệp.'
    },
    {
        id: 22,
        category: 'tai_khoan',
        question: 'TK 112 dùng để phản ánh gì?',
        options: [
            'Tiền mặt',
            'Tiền gửi ngân hàng',
            'Tiền đang chuyển',
            'Các khoản tương đương tiền'
        ],
        correct: 1,
        explanation: 'TK 112 - Tiền gửi ngân hàng: Phản ánh số tiền hiện có, tình hình biến động tăng giảm các khoản tiền gửi tại ngân hàng của doanh nghiệp.'
    },

    // ============================================
    // BÁO CÁO TÀI CHÍNH
    // ============================================
    {
        id: 23,
        category: 'bao_cao',
        question: 'Bảng cân đối kế toán (B01-DN) phản ánh điều gì?',
        options: [
            'Doanh thu và chi phí trong kỳ',
            'Tổng quan tình hình tài sản và nguồn vốn tại một thời điểm',
            'Luồng tiền vào ra trong kỳ',
            'Tình hình biến động vốn chủ sở hữu'
        ],
        correct: 1,
        explanation: 'Bảng cân đối kế toán (B01-DN) phản ánh tổng quát tình hình tài sản và nguồn hình thành tài sản của doanh nghiệp tại một thời điểm nhất định (cuối kỳ kế toán).'
    },
    {
        id: 24,
        category: 'bao_cao',
        question: 'Báo cáo kết quả hoạt động kinh doanh có mã số nào?',
        options: [
            'B01-DN',
            'B02-DN',
            'B03-DN',
            'B09-DN'
        ],
        correct: 1,
        explanation: 'Báo cáo kết quả hoạt động kinh doanh có mã số B02-DN, phản ánh tình hình doanh thu, chi phí và kết quả kinh doanh của doanh nghiệp trong kỳ kế toán.'
    },
    {
        id: 25,
        category: 'bao_cao',
        question: 'Báo cáo lưu chuyển tiền tệ phản ánh điều gì?',
        options: [
            'Lợi nhuận của doanh nghiệp',
            'Tình hình tài sản và công nợ',
            'Các luồng tiền vào và ra theo 3 hoạt động chính',
            'Tình hình biến động vốn chủ sở hữu'
        ],
        correct: 2,
        explanation: 'Báo cáo lưu chuyển tiền tệ (B03-DN) phản ánh tình hình thu, chi tiền tệ của DN trong kỳ theo 3 loại hoạt động: Hoạt động kinh doanh, Hoạt động đầu tư, Hoạt động tài chính.'
    },
    {
        id: 26,
        category: 'bao_cao',
        question: 'Hệ thống BCTC theo Thông tư 200 gồm những báo cáo nào?',
        options: [
            'Bảng CĐKT, Báo cáo KQKD, Báo cáo LCTT, Thuyết minh BCTC',
            'Bảng CĐKT, Báo cáo KQKD, Bảng cân đối phát sinh',
            'Bảng CĐKT, Báo cáo LCTT, Sổ nhật ký chung',
            'Báo cáo KQKD, Bảng CĐKT, Sổ cái tài khoản'
        ],
        correct: 0,
        explanation: 'Hệ thống BCTC đầy đủ theo TT200 gồm: Bảng cân đối kế toán (B01-DN), Báo cáo kết quả HĐKD (B02-DN), Báo cáo lưu chuyển tiền tệ (B03-DN), Thuyết minh BCTC (B09-DN).'
    },
    {
        id: 27,
        category: 'bao_cao',
        question: 'Trên Bảng cân đối kế toán, phần "Tài sản" bao gồm những mục nào?',
        options: [
            'Tài sản ngắn hạn và Tài sản dài hạn',
            'Nợ phải trả và Vốn chủ sở hữu',
            'Tài sản cố định và Tài sản lưu động',
            'Tài sản hữu hình và Tài sản vô hình'
        ],
        correct: 0,
        explanation: 'Phần Tài sản trên BCĐKT được chia thành 2 nhóm: Tài sản ngắn hạn (A) bao gồm tiền, phải thu, hàng tồn kho...; và Tài sản dài hạn (B) bao gồm TSCĐ, đầu tư dài hạn...'
    },
    {
        id: 28,
        category: 'bao_cao',
        question: 'Công thức tính Lợi nhuận gộp là gì?',
        options: [
            'Doanh thu thuần - Chi phí quản lý',
            'Doanh thu thuần - Giá vốn hàng bán',
            'Tổng doanh thu - Tổng chi phí',
            'Doanh thu - Thuế GTGT'
        ],
        correct: 1,
        explanation: 'Lợi nhuận gộp = Doanh thu thuần về bán hàng và cung cấp dịch vụ - Giá vốn hàng bán. Đây là chỉ tiêu trên Báo cáo KQKD (B02-DN).'
    },
    {
        id: 29,
        category: 'bao_cao',
        question: 'Thuyết minh báo cáo tài chính có mã số nào?',
        options: [
            'B01-DN',
            'B02-DN',
            'B03-DN',
            'B09-DN'
        ],
        correct: 3,
        explanation: 'Thuyết minh báo cáo tài chính có mã số B09-DN, dùng để mô tả hoặc phân tích chi tiết các thông tin số liệu đã trình bày trong các BCTC khác.'
    },

    // ============================================
    // THUẾ
    // ============================================
    {
        id: 30,
        category: 'thue',
        question: 'Thuế suất thuế GTGT phổ biến nhất hiện nay là bao nhiêu?',
        options: [
            '5%',
            '8%',
            '10%',
            '15%'
        ],
        correct: 2,
        explanation: 'Thuế suất thuế GTGT phổ biến nhất là 10%, áp dụng cho phần lớn hàng hóa, dịch vụ. Ngoài ra còn có mức 0% (xuất khẩu) và 5% (hàng hóa thiết yếu).'
    },
    {
        id: 31,
        category: 'thue',
        question: 'Thuế GTGT phải nộp (phương pháp khấu trừ) được tính bằng công thức nào?',
        options: [
            'Thuế đầu ra + Thuế đầu vào',
            'Thuế đầu ra - Thuế đầu vào',
            'Doanh thu × Thuế suất',
            '(Doanh thu - Chi phí) × Thuế suất'
        ],
        correct: 1,
        explanation: 'Thuế GTGT phải nộp = Thuế GTGT đầu ra - Thuế GTGT đầu vào được khấu trừ. Nếu thuế đầu vào > thuế đầu ra thì được chuyển khấu trừ sang kỳ sau.'
    },
    {
        id: 32,
        category: 'thue',
        question: 'Thuế suất thuế TNDN phổ biến hiện nay là bao nhiêu?',
        options: [
            '15%',
            '20%',
            '22%',
            '25%'
        ],
        correct: 1,
        explanation: 'Thuế suất thuế thu nhập doanh nghiệp (TNDN) phổ biến hiện nay là 20%, áp dụng cho hầu hết các doanh nghiệp. Một số trường hợp đặc biệt có thuế suất ưu đãi 10%, 15%.'
    },
    {
        id: 33,
        category: 'thue',
        question: 'Hàng hóa, dịch vụ nào sau đây chịu thuế GTGT 5%?',
        options: [
            'Xe ô tô',
            'Nước sạch sinh hoạt',
            'Dịch vụ viễn thông',
            'Dịch vụ ăn uống'
        ],
        correct: 1,
        explanation: 'Nước sạch phục vụ sinh hoạt chịu thuế GTGT 5%. Thuế suất 5% áp dụng cho các hàng hóa, dịch vụ thiết yếu như: nước sạch, phân bón, dạy học, sách báo, thực phẩm...'
    },
    {
        id: 34,
        category: 'thue',
        question: 'Hóa đơn GTGT phải có những thông tin bắt buộc nào?',
        options: [
            'Chỉ cần tên hàng hóa và số tiền',
            'Tên, địa chỉ, MST người bán và người mua, tên hàng, số lượng, đơn giá, tiền thuế',
            'Chỉ cần MST và số tiền',
            'Chỉ cần tên người bán và tổng số tiền'
        ],
        correct: 1,
        explanation: 'Hóa đơn GTGT phải có đầy đủ: Tên, địa chỉ, mã số thuế của cả người bán và người mua; tên hàng hóa/dịch vụ; đơn vị tính; số lượng; đơn giá; thành tiền; thuế suất; tiền thuế; tổng thanh toán.'
    },
    {
        id: 35,
        category: 'thue',
        question: 'Thuế GTGT đầu ra chịu thuế suất 0% áp dụng cho trường hợp nào?',
        options: [
            'Hàng hóa bán trong nước',
            'Hàng hóa, dịch vụ xuất khẩu',
            'Hàng hóa thiết yếu',
            'Dịch vụ y tế'
        ],
        correct: 1,
        explanation: 'Thuế suất 0% áp dụng cho hàng hóa, dịch vụ xuất khẩu; vận tải quốc tế; hàng hóa bán cho khu phi thuế quan. Lưu ý: thuế suất 0% khác với không chịu thuế GTGT.'
    },
    {
        id: 36,
        category: 'thue',
        question: 'TK 3331 dùng để hạch toán loại thuế nào?',
        options: [
            'Thuế TNDN',
            'Thuế GTGT phải nộp',
            'Thuế TNCN',
            'Thuế xuất nhập khẩu'
        ],
        correct: 1,
        explanation: 'TK 3331 - Thuế GTGT phải nộp: Phản ánh số thuế GTGT đầu ra, thuế GTGT của hàng nhập khẩu phải nộp, số thuế GTGT đã nộp và còn phải nộp vào NSNN.'
    },
    {
        id: 37,
        category: 'thue',
        question: 'Mức giảm trừ gia cảnh cho bản thân người nộp thuế TNCN hiện nay là bao nhiêu?',
        options: [
            '9 triệu đồng/tháng',
            '11 triệu đồng/tháng',
            '13 triệu đồng/tháng',
            '15 triệu đồng/tháng'
        ],
        correct: 1,
        explanation: 'Mức giảm trừ gia cảnh cho bản thân người nộp thuế TNCN là 11 triệu đồng/tháng (132 triệu đồng/năm). Giảm trừ cho mỗi người phụ thuộc là 4,4 triệu đồng/tháng.'
    },

    // ============================================
    // ĐỊNH KHOẢN KẾ TOÁN
    // ============================================
    {
        id: 38,
        category: 'dinh_khoan',
        question: 'Khi mua hàng hóa nhập kho, thanh toán bằng tiền mặt, định khoản nào đúng?',
        options: [
            'Nợ TK 156 / Có TK 112',
            'Nợ TK 156, Nợ TK 1331 / Có TK 111',
            'Nợ TK 152 / Có TK 111',
            'Nợ TK 111 / Có TK 156'
        ],
        correct: 1,
        explanation: 'Mua hàng hóa nhập kho trả tiền mặt: Nợ TK 156 (giá mua chưa thuế) / Nợ TK 1331 (thuế GTGT đầu vào) / Có TK 111 (tổng thanh toán). Áp dụng cho DN tính thuế GTGT theo phương pháp khấu trừ.'
    },
    {
        id: 39,
        category: 'dinh_khoan',
        question: 'Khi bán hàng thu tiền ngay bằng chuyển khoản, bút toán ghi nhận doanh thu là gì?',
        options: [
            'Nợ TK 111 / Có TK 511, Có TK 3331',
            'Nợ TK 112 / Có TK 511, Có TK 3331',
            'Nợ TK 131 / Có TK 511',
            'Nợ TK 511 / Có TK 112'
        ],
        correct: 1,
        explanation: 'Bán hàng thu tiền ngay qua ngân hàng: Nợ TK 112 (tổng thanh toán) / Có TK 511 (doanh thu chưa thuế) / Có TK 3331 (thuế GTGT đầu ra). TK 112 là tiền gửi ngân hàng.'
    },
    {
        id: 40,
        category: 'dinh_khoan',
        question: 'Khi rút tiền gửi ngân hàng về nhập quỹ tiền mặt, định khoản nào đúng?',
        options: [
            'Nợ TK 112 / Có TK 111',
            'Nợ TK 111 / Có TK 112',
            'Nợ TK 111 / Có TK 113',
            'Nợ TK 113 / Có TK 112'
        ],
        correct: 1,
        explanation: 'Rút tiền gửi ngân hàng nhập quỹ tiền mặt: Nợ TK 111 (Tiền mặt tăng) / Có TK 112 (Tiền gửi NH giảm). Đây là nghiệp vụ chuyển đổi giữa các loại tiền.'
    },
    {
        id: 41,
        category: 'dinh_khoan',
        question: 'Khi tính tiền lương phải trả cho nhân viên bộ phận bán hàng, định khoản nào đúng?',
        options: [
            'Nợ TK 622 / Có TK 334',
            'Nợ TK 641 / Có TK 334',
            'Nợ TK 642 / Có TK 334',
            'Nợ TK 334 / Có TK 111'
        ],
        correct: 1,
        explanation: 'Tính lương nhân viên bán hàng: Nợ TK 641 (Chi phí bán hàng) / Có TK 334 (Phải trả người lao động). TK 622 dùng cho nhân công trực tiếp SX, TK 642 cho bộ phận QLDN.'
    },
    {
        id: 42,
        category: 'dinh_khoan',
        question: 'Khi khách hàng trả nợ bằng tiền mặt, định khoản nào đúng?',
        options: [
            'Nợ TK 131 / Có TK 111',
            'Nợ TK 111 / Có TK 131',
            'Nợ TK 111 / Có TK 331',
            'Nợ TK 331 / Có TK 111'
        ],
        correct: 1,
        explanation: 'Khách hàng trả nợ bằng tiền mặt: Nợ TK 111 (Tiền mặt tăng) / Có TK 131 (Phải thu khách hàng giảm). Nghiệp vụ này làm giảm khoản phải thu và tăng tiền mặt.'
    },
    {
        id: 43,
        category: 'dinh_khoan',
        question: 'Khi DN thanh toán tiền mua NVL cho nhà cung cấp bằng TGNH, định khoản?',
        options: [
            'Nợ TK 331 / Có TK 111',
            'Nợ TK 331 / Có TK 112',
            'Nợ TK 112 / Có TK 331',
            'Nợ TK 152 / Có TK 112'
        ],
        correct: 1,
        explanation: 'Trả nợ nhà cung cấp bằng TGNH: Nợ TK 331 (Phải trả người bán giảm) / Có TK 112 (Tiền gửi NH giảm). Nghiệp vụ này làm giảm cả nợ phải trả và tiền gửi ngân hàng.'
    },
    {
        id: 44,
        category: 'dinh_khoan',
        question: 'Khi xuất kho NVL dùng cho sản xuất sản phẩm, định khoản?',
        options: [
            'Nợ TK 621 / Có TK 152',
            'Nợ TK 152 / Có TK 621',
            'Nợ TK 627 / Có TK 152',
            'Nợ TK 154 / Có TK 152'
        ],
        correct: 0,
        explanation: 'Xuất kho NVL dùng cho SX: Nợ TK 621 (Chi phí NVL trực tiếp) / Có TK 152 (Nguyên vật liệu giảm). TK 621 phản ánh chi phí NVL trực tiếp sử dụng cho sản xuất.'
    },
    {
        id: 45,
        category: 'dinh_khoan',
        question: 'Bút toán kết chuyển giá vốn hàng bán khi xuất kho hàng hóa để bán?',
        options: [
            'Nợ TK 632 / Có TK 156',
            'Nợ TK 156 / Có TK 632',
            'Nợ TK 511 / Có TK 632',
            'Nợ TK 632 / Có TK 155'
        ],
        correct: 0,
        explanation: 'Xuất kho hàng hóa để bán - ghi nhận giá vốn: Nợ TK 632 (Giá vốn hàng bán) / Có TK 156 (Hàng hóa giảm). Bút toán này ghi đồng thời với bút toán ghi nhận doanh thu.'
    },

    // ============================================
    // TÀI SẢN CỐ ĐỊNH
    // ============================================
    {
        id: 46,
        category: 'tscd',
        question: 'TSCĐ hữu hình phải thỏa mãn đồng thời bao nhiêu tiêu chuẩn?',
        options: [
            '2 tiêu chuẩn',
            '3 tiêu chuẩn',
            '4 tiêu chuẩn',
            '5 tiêu chuẩn'
        ],
        correct: 2,
        explanation: 'TSCĐ phải thỏa mãn đồng thời 4 tiêu chuẩn: (1) Chắc chắn thu được lợi ích kinh tế; (2) Nguyên giá xác định tin cậy; (3) Thời gian sử dụng ≥ 1 năm; (4) Giá trị ≥ 30 triệu đồng.'
    },
    {
        id: 47,
        category: 'tscd',
        question: 'Nguyên giá TSCĐ mua sắm bao gồm những khoản nào?',
        options: [
            'Chỉ giá mua trên hóa đơn',
            'Giá mua + chi phí vận chuyển, lắp đặt + thuế không hoàn lại',
            'Giá mua + chi phí sửa chữa',
            'Giá mua + lãi vay mua TSCĐ'
        ],
        correct: 1,
        explanation: 'Nguyên giá TSCĐ mua sắm = Giá mua (chưa có thuế GTGT được khấu trừ) + các khoản thuế không được hoàn lại + chi phí vận chuyển, bốc dỡ, lắp đặt, chạy thử - các khoản giảm giá, chiết khấu.'
    },
    {
        id: 48,
        category: 'tscd',
        question: 'Phương pháp khấu hao đường thẳng tính mức khấu hao năm bằng công thức nào?',
        options: [
            'Nguyên giá × Tỷ lệ khấu hao',
            'Nguyên giá / Số năm sử dụng',
            'Giá trị còn lại / Số năm còn lại',
            'Nguyên giá × Số năm sử dụng'
        ],
        correct: 1,
        explanation: 'Mức khấu hao năm (đường thẳng) = Nguyên giá / Thời gian sử dụng (năm). Hoặc: Mức KH năm = Nguyên giá × Tỷ lệ KH (tỷ lệ KH = 1/số năm sử dụng × 100%).'
    },
    {
        id: 49,
        category: 'tscd',
        question: 'Bút toán trích khấu hao TSCĐ dùng cho bộ phận sản xuất là gì?',
        options: [
            'Nợ TK 641 / Có TK 214',
            'Nợ TK 642 / Có TK 214',
            'Nợ TK 627 / Có TK 214',
            'Nợ TK 211 / Có TK 214'
        ],
        correct: 2,
        explanation: 'Trích KH TSCĐ dùng cho SX: Nợ TK 627 (Chi phí sản xuất chung) / Có TK 214 (Hao mòn TSCĐ). TK 641 cho bộ phận bán hàng, TK 642 cho bộ phận quản lý DN.'
    },
    {
        id: 50,
        category: 'tscd',
        question: 'Giá trị còn lại của TSCĐ được tính bằng công thức nào?',
        options: [
            'Nguyên giá + Hao mòn lũy kế',
            'Nguyên giá - Hao mòn lũy kế',
            'Nguyên giá - Chi phí sửa chữa',
            'Nguyên giá × (1 - Tỷ lệ khấu hao)'
        ],
        correct: 1,
        explanation: 'Giá trị còn lại = Nguyên giá - Hao mòn lũy kế (khấu hao lũy kế). Đây là giá trị sổ sách của TSCĐ tại một thời điểm nhất định.'
    },
    {
        id: 51,
        category: 'tscd',
        question: 'Khi thanh lý TSCĐ, bút toán ghi giảm TSCĐ là gì?',
        options: [
            'Nợ TK 211 / Có TK 214, Có TK 811',
            'Nợ TK 214, Nợ TK 811 / Có TK 211',
            'Nợ TK 214 / Có TK 211',
            'Nợ TK 811 / Có TK 211'
        ],
        correct: 1,
        explanation: 'Ghi giảm TSCĐ khi thanh lý: Nợ TK 214 (Hao mòn lũy kế) / Nợ TK 811 (Giá trị còn lại - Chi phí khác) / Có TK 211 (Nguyên giá). Thu nhập thanh lý ghi Có TK 711.'
    },

    // ============================================
    // HÀNG TỒN KHO
    // ============================================
    {
        id: 52,
        category: 'hang_ton_kho',
        question: 'Phương pháp "Nhập trước, xuất trước" (FIFO) có đặc điểm gì?',
        options: [
            'Hàng nhập sau được xuất trước',
            'Hàng nhập trước được xuất trước, giá xuất theo giá nhập trước',
            'Giá xuất bằng giá bình quân',
            'Giá xuất luôn bằng giá nhập cuối cùng'
        ],
        correct: 1,
        explanation: 'Phương pháp FIFO (First In, First Out): Hàng nhập trước được xuất trước. Giá trị hàng xuất kho tính theo giá của lô hàng nhập trước. Hàng tồn cuối kỳ được tính theo giá nhập sau.'
    },
    {
        id: 53,
        category: 'hang_ton_kho',
        question: 'Phương pháp bình quân gia quyền tính giá xuất kho theo công thức nào?',
        options: [
            'Giá xuất = Tổng giá trị nhập / Tổng số lượng nhập',
            'Giá xuất = (Giá trị tồn ĐK + Giá trị nhập trong kỳ) / (SL tồn ĐK + SL nhập trong kỳ)',
            'Giá xuất = Giá nhập gần nhất',
            'Giá xuất = Giá mua ban đầu'
        ],
        correct: 1,
        explanation: 'Đơn giá bình quân = (Giá trị HTK tồn đầu kỳ + Giá trị HTK nhập trong kỳ) / (Số lượng tồn đầu kỳ + Số lượng nhập trong kỳ). Có thể tính bình quân cuối kỳ hoặc sau mỗi lần nhập.'
    },
    {
        id: 54,
        category: 'hang_ton_kho',
        question: 'Phương pháp kê khai thường xuyên hạch toán hàng tồn kho như thế nào?',
        options: [
            'Chỉ theo dõi cuối kỳ bằng cách kiểm kê',
            'Theo dõi liên tục, phản ánh thường xuyên mọi biến động nhập xuất tồn',
            'Theo dõi hàng tháng vào cuối tháng',
            'Theo dõi khi có yêu cầu kiểm toán'
        ],
        correct: 1,
        explanation: 'Phương pháp kê khai thường xuyên: Theo dõi và phản ánh thường xuyên, liên tục tình hình nhập, xuất, tồn kho trên sổ kế toán. Giá trị HTK cuối kỳ = Tồn ĐK + Nhập TK - Xuất TK.'
    },
    {
        id: 55,
        category: 'hang_ton_kho',
        question: 'Hàng tồn kho bao gồm những loại nào?',
        options: [
            'Chỉ có hàng hóa mua về để bán',
            'Hàng hóa, thành phẩm, NVL, CCDC, sản phẩm dở dang, hàng gửi bán',
            'Chỉ có nguyên vật liệu và hàng hóa',
            'Chỉ có thành phẩm và hàng hóa'
        ],
        correct: 1,
        explanation: 'Hàng tồn kho bao gồm: Hàng hóa (TK156), Thành phẩm (TK155), NVL (TK152), CCDC (TK153), Chi phí SXKD dở dang (TK154), Hàng gửi bán (TK157).'
    },
    {
        id: 56,
        category: 'hang_ton_kho',
        question: 'TK 154 phản ánh nội dung gì?',
        options: [
            'Chi phí trả trước',
            'Chi phí sản xuất kinh doanh dở dang',
            'Chi phí phải trả',
            'Dự phòng giảm giá hàng tồn kho'
        ],
        correct: 1,
        explanation: 'TK 154 - Chi phí sản xuất kinh doanh dở dang: Phản ánh tổng hợp chi phí SX, kinh doanh phát sinh trong kỳ, chi phí SXKD dở dang đầu kỳ và cuối kỳ của các hoạt động SX kinh doanh.'
    },
    {
        id: 57,
        category: 'hang_ton_kho',
        question: 'Khi lập dự phòng giảm giá hàng tồn kho, bút toán là gì?',
        options: [
            'Nợ TK 632 / Có TK 229',
            'Nợ TK 229 / Có TK 632',
            'Nợ TK 642 / Có TK 159',
            'Nợ TK 632 / Có TK 159'
        ],
        correct: 0,
        explanation: 'Lập dự phòng giảm giá HTK: Nợ TK 632 (Giá vốn hàng bán) / Có TK 229 (Dự phòng tổn thất tài sản - theo TT200). Khoản dự phòng làm tăng giá vốn và giảm lợi nhuận.'
    },

    // ============================================
    // TIỀN LƯƠNG & BHXH
    // ============================================
    {
        id: 58,
        category: 'tien_luong',
        question: 'Tỷ lệ BHXH doanh nghiệp đóng cho người lao động là bao nhiêu?',
        options: [
            '14%',
            '17%',
            '17.5%',
            '21.5%'
        ],
        correct: 2,
        explanation: 'Doanh nghiệp đóng BHXH: 17.5% (gồm BHXH 17%, BHTN 0.5% - tổng BHXH+BHTN). Ngoài ra: BHYT 3%, KPCĐ 2%. Tổng DN đóng = 17% BHXH + 3% BHYT + 1% BHTN + 2% KPCĐ = 23%.'
    },
    {
        id: 59,
        category: 'tien_luong',
        question: 'Người lao động phải đóng tổng các khoản bảo hiểm là bao nhiêu phần trăm?',
        options: [
            '8%',
            '10.5%',
            '12%',
            '15%'
        ],
        correct: 1,
        explanation: 'Người lao động đóng: BHXH 8% + BHYT 1.5% + BHTN 1% = 10.5% lương. Khoản này được trừ vào lương của người lao động.'
    },
    {
        id: 60,
        category: 'tien_luong',
        question: 'Bút toán tính lương phải trả cho công nhân trực tiếp sản xuất là gì?',
        options: [
            'Nợ TK 622 / Có TK 334',
            'Nợ TK 627 / Có TK 334',
            'Nợ TK 641 / Có TK 334',
            'Nợ TK 642 / Có TK 334'
        ],
        correct: 0,
        explanation: 'Tính lương CNSX trực tiếp: Nợ TK 622 (Chi phí nhân công trực tiếp) / Có TK 334 (Phải trả NLĐ). TK 622 phản ánh chi phí nhân công trực tiếp tham gia sản xuất.'
    },
    {
        id: 61,
        category: 'tien_luong',
        question: 'Khi trích BHXH, BHYT, BHTN phần DN phải chịu cho nhân viên quản lý, bút toán là?',
        options: [
            'Nợ TK 622 / Có TK 338',
            'Nợ TK 627 / Có TK 338',
            'Nợ TK 642 / Có TK 338',
            'Nợ TK 334 / Có TK 338'
        ],
        correct: 2,
        explanation: 'Trích BH phần DN chịu cho NV quản lý: Nợ TK 642 (Chi phí QLDN) / Có TK 338 (Phải trả phải nộp khác). TK 642 vì NV thuộc bộ phận quản lý doanh nghiệp.'
    },
    {
        id: 62,
        category: 'tien_luong',
        question: 'Khi chi trả lương cho người lao động bằng tiền mặt, bút toán là gì?',
        options: [
            'Nợ TK 642 / Có TK 111',
            'Nợ TK 334 / Có TK 111',
            'Nợ TK 111 / Có TK 334',
            'Nợ TK 334 / Có TK 112'
        ],
        correct: 1,
        explanation: 'Chi trả lương bằng tiền mặt: Nợ TK 334 (Phải trả NLĐ giảm) / Có TK 111 (Tiền mặt giảm). Bút toán này ghi nhận việc thanh toán khoản nợ lương cho NLĐ.'
    },

    // ============================================
    // THÊM CÂU HỎI BỔ SUNG
    // ============================================
    {
        id: 63,
        category: 'nguyen_ly',
        question: 'Tài khoản loại 5 (Doanh thu) có quy tắc ghi nhận như thế nào?',
        options: [
            'Tăng bên Nợ, giảm bên Có',
            'Tăng bên Có, giảm bên Nợ',
            'Tăng giảm đều ghi bên Có',
            'Không có quy tắc cố định'
        ],
        correct: 1,
        explanation: 'TK loại 5 (Doanh thu): Phát sinh tăng ghi bên Có, phát sinh giảm (giảm giá, chiết khấu, hàng bán bị trả lại) ghi bên Nợ. Cuối kỳ kết chuyển sang TK 911, không có số dư cuối kỳ.'
    },
    {
        id: 64,
        category: 'nguyen_ly',
        question: 'Tài khoản loại 6 (Chi phí) có quy tắc ghi nhận như thế nào?',
        options: [
            'Tăng bên Có, giảm bên Nợ',
            'Tăng bên Nợ, giảm bên Có',
            'Tăng giảm đều ghi bên Nợ',
            'Số dư bên Có'
        ],
        correct: 1,
        explanation: 'TK loại 6 (Chi phí SXKD): Phát sinh tăng ghi bên Nợ, phát sinh giảm ghi bên Có. Cuối kỳ kết chuyển sang TK 911, không có số dư cuối kỳ (trừ TK 631 theo PP kiểm kê định kỳ).'
    },
    {
        id: 65,
        category: 'tai_khoan',
        question: 'TK 1331 phản ánh nội dung gì?',
        options: [
            'Thuế GTGT phải nộp',
            'Thuế GTGT được khấu trừ của hàng hóa, dịch vụ',
            'Thuế TNDN phải nộp',
            'Thuế TNCN phải nộp'
        ],
        correct: 1,
        explanation: 'TK 1331 - Thuế GTGT được khấu trừ của hàng hóa, dịch vụ: Phản ánh số thuế GTGT đầu vào được khấu trừ khi mua hàng hóa, dịch vụ. Đây là tài khoản con của TK 133.'
    },
    {
        id: 66,
        category: 'tai_khoan',
        question: 'TK 911 dùng để hạch toán nội dung gì?',
        options: [
            'Chi phí sản xuất',
            'Doanh thu chưa thực hiện',
            'Xác định kết quả kinh doanh',
            'Lợi nhuận sau thuế'
        ],
        correct: 2,
        explanation: 'TK 911 - Xác định kết quả kinh doanh: Dùng để xác định kết quả hoạt động sản xuất kinh doanh và hoạt động khác trong kỳ. Cuối kỳ kết chuyển DT, CP vào TK 911 để xác định lãi/lỗ.'
    },
    {
        id: 67,
        category: 'bao_cao',
        question: 'Doanh thu thuần được tính bằng công thức nào?',
        options: [
            'Tổng doanh thu - Thuế GTGT',
            'Tổng doanh thu - Các khoản giảm trừ doanh thu',
            'Tổng doanh thu - Giá vốn hàng bán',
            'Tổng doanh thu - Chi phí bán hàng'
        ],
        correct: 1,
        explanation: 'Doanh thu thuần = Tổng doanh thu - Các khoản giảm trừ DT (bao gồm: chiết khấu thương mại, giảm giá hàng bán, hàng bán bị trả lại, thuế TTĐB, thuế XK).'
    },
    {
        id: 68,
        category: 'thue',
        question: 'Doanh nghiệp nào phải áp dụng phương pháp tính thuế GTGT trực tiếp?',
        options: [
            'Doanh nghiệp có doanh thu trên 1 tỷ/năm',
            'Doanh nghiệp mới thành lập dưới 1 năm (trừ tự nguyện đăng ký PP khấu trừ)',
            'Tất cả doanh nghiệp FDI',
            'Doanh nghiệp xuất nhập khẩu'
        ],
        correct: 1,
        explanation: 'Doanh nghiệp mới thành lập (trừ trường hợp tự nguyện đăng ký PP khấu trừ khi đủ điều kiện), hộ kinh doanh, cá nhân kinh doanh áp dụng phương pháp tính thuế GTGT trực tiếp.'
    },
    {
        id: 69,
        category: 'dinh_khoan',
        question: 'Khi DN vay ngắn hạn ngân hàng, tiền về tài khoản ngân hàng, bút toán?',
        options: [
            'Nợ TK 112 / Có TK 341',
            'Nợ TK 341 / Có TK 112',
            'Nợ TK 111 / Có TK 311',
            'Nợ TK 112 / Có TK 311'
        ],
        correct: 0,
        explanation: 'Vay ngắn hạn NH, tiền về TGNH: Nợ TK 112 (TGNH tăng) / Có TK 341 (Vay và nợ thuê tài chính tăng - theo TT200). Trước đây dùng TK 311 nhưng TT200 gộp thành TK 341.'
    },
    {
        id: 70,
        category: 'tscd',
        question: 'TSCĐ vô hình bao gồm những loại nào?',
        options: [
            'Nhà cửa, máy móc, phương tiện',
            'Quyền sử dụng đất, phần mềm, bản quyền, bằng sáng chế',
            'Hàng hóa, nguyên vật liệu',
            'Tiền mặt, tiền gửi ngân hàng'
        ],
        correct: 1,
        explanation: 'TSCĐ vô hình (TK 213) gồm: Quyền sử dụng đất, quyền phát hành, bản quyền, bằng sáng chế, phần mềm máy tính, giấy phép nhượng quyền, công thức, bí quyết...'
    },
    {
        id: 71,
        category: 'hang_ton_kho',
        question: 'Phương pháp tính giá xuất kho nào KHÔNG được phép áp dụng theo VAS?',
        options: [
            'FIFO (Nhập trước xuất trước)',
            'Bình quân gia quyền',
            'LIFO (Nhập sau xuất trước)',
            'Thực tế đích danh'
        ],
        correct: 2,
        explanation: 'Theo VAS 02 và Thông tư 200, phương pháp LIFO (nhập sau xuất trước) không được phép áp dụng. Chỉ được sử dụng: FIFO, Bình quân gia quyền, Thực tế đích danh.'
    },
    {
        id: 72,
        category: 'tien_luong',
        question: 'Kinh phí công đoàn (KPCĐ) doanh nghiệp phải trích là bao nhiêu phần trăm?',
        options: [
            '1%',
            '2%',
            '3%',
            '4%'
        ],
        correct: 1,
        explanation: 'Kinh phí công đoàn doanh nghiệp trích = 2% quỹ tiền lương. Trong đó 1% nộp công đoàn cấp trên, 1% giữ lại công đoàn cơ sở.'
    },
    {
        id: 73,
        category: 'dinh_khoan',
        question: 'Khi kết chuyển doanh thu thuần cuối kỳ, bút toán là?',
        options: [
            'Nợ TK 511 / Có TK 911',
            'Nợ TK 911 / Có TK 511',
            'Nợ TK 511 / Có TK 421',
            'Nợ TK 421 / Có TK 511'
        ],
        correct: 0,
        explanation: 'Kết chuyển DT thuần cuối kỳ: Nợ TK 511 / Có TK 911. Kết chuyển giá vốn: Nợ TK 911 / Có TK 632. So sánh để xác định lãi/lỗ trên TK 911.'
    },
    {
        id: 74,
        category: 'bao_cao',
        question: 'Lợi nhuận sau thuế TNDN được tính bằng công thức nào?',
        options: [
            'Doanh thu thuần - Giá vốn hàng bán',
            'Lợi nhuận trước thuế - Chi phí thuế TNDN',
            'Doanh thu - Tổng chi phí',
            'Lợi nhuận gộp - Chi phí bán hàng'
        ],
        correct: 1,
        explanation: 'Lợi nhuận sau thuế TNDN = Lợi nhuận trước thuế - Chi phí thuế TNDN hiện hành - Chi phí thuế TNDN hoãn lại. Đây là chỉ tiêu cuối cùng trên Báo cáo KQKD.'
    },
    {
        id: 75,
        category: 'nguyen_ly',
        question: 'Sổ kế toán bao gồm những loại sổ chính nào?',
        options: [
            'Sổ Nhật ký và Sổ Cái',
            'Sổ Chi tiết và Sổ Tổng hợp',
            'Sổ theo dõi và Sổ ghi chép',
            'Sổ thu chi và Sổ công nợ'
        ],
        correct: 0,
        explanation: 'Mỗi đơn vị kế toán phải mở và sử dụng Sổ Nhật ký (ghi các nghiệp vụ theo trình tự thời gian) và Sổ Cái (ghi theo từng tài khoản kế toán). Ngoài ra có thể mở các sổ chi tiết.'
    }
];
