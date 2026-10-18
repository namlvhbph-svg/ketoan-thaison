// Tìm bài viết ngay trên trình duyệt (không máy chủ): bỏ dấu tiếng Việt, khớp mọi từ khóa
(function () {
  var o = document.getElementById('q'), kq = document.getElementById('kq'), dem = document.getElementById('kq-dem'), ds = [];
  function bo(s) { return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd'); }
  function e(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
  function ve() {
    var tu = bo(o.value).split(/\s+/).filter(Boolean);
    if (!tu.length) { kq.innerHTML = ''; dem.textContent = ds.length + ' bài viết. Gõ từ khóa để tìm.'; return; }
    var r = ds.map(function (b) {
      var t = bo(b.t), all = t + ' ' + bo(b.s) + ' ' + bo(b.c) + ' ' + bo(b.x), d = 0;
      for (var i = 0; i < tu.length; i++) { if (all.indexOf(tu[i]) < 0) return null; d += t.indexOf(tu[i]) >= 0 ? 3 : 1; }
      return { b: b, d: d };
    }).filter(Boolean).sort(function (a, c) { return c.d - a.d; });
    dem.textContent = r.length + ' bài phù hợp';
    kq.innerHTML = r.map(function (x) {
      return '<a class="the-bai" href="' + x.b.u + '"><span class="cm" style="--c:#1d3f73">' + e(x.b.c) + '</span><h3>' + e(x.b.t) + '</h3><p>' + e(x.b.s) + '</p></a>';
    }).join('') || '<p class="trong">Chưa có bài phù hợp. Thử từ khóa khác hoặc nhắn Zalo để được hỗ trợ.</p>';
  }
  fetch('tim-kiem.json').then(function (r) { return r.json(); }).then(function (d) {
    ds = d; var q = new URLSearchParams(location.search).get('q'); if (q) o.value = q; ve();
  });
  o.addEventListener('input', ve);
})();
