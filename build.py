"""Dựng trang kiến thức kế toán từ bài viết Markdown của Kế toán Thái Sơn.

    python build.py   -> 1) kiến thức (bài viết, chuyên mục, tìm kiếm) vào www.hoangnamsoft.com/kien-thuc
                            = thư mục site/kien-thuc của trang Hoàng Nam (cau_hinh.json > hoang_nam > thu_muc_web)
                         2) docs/ (GitHub Pages Thái Sơn): trang chủ dịch vụ, trắc nghiệm, chơi cờ ;
                            trang kiến thức cũ (kien-thuc.html, bai-viet/, chuyen-muc/, tim-kiem.html) chuyển sang hoangnamsoft

Bài viết: noi_dung/<chuyên mục>.md, mỗi bài mở đầu bằng 1 dòng
    @@@ {"slug": "...", "title": "...", "summary": "...", "date": "2026-10-19", "can_cu": ["..."]}
rồi nội dung Markdown. Thông tin chuyên mục, công ty: cau_hinh.json.
"""
from __future__ import annotations

import html
import json
import re
import shutil
from datetime import date
from pathlib import Path

import markdown

GOC = Path(__file__).resolve().parent
DOCS = GOC / "docs"
CH = json.loads((GOC / "cau_hinh.json").read_text(encoding="utf-8"))
CT = CH["cong_ty"]                                   # Kế toán Thái Sơn: tác giả bài viết, tư vấn
BASE = CH.get("base_url", "").rstrip("/")            # GitHub Pages Thái Sơn
HN = CH["hoang_nam"]                                 # Kế toán Hoàng Nam: nơi đăng kiến thức
HN_BASE = HN["base_url"].rstrip("/")
WEB = Path(HN["thu_muc_web"])
RA = WEB / "site" / "kien-thuc"
ICON = ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%231f4e79'/%3E"
        "%3Ctext x='32' y='41' font-family='Arial' font-weight='700' font-size='26' fill='white' text-anchor='middle'%3EHN%3C/text%3E%3C/svg%3E")
# phần mềm Hoàng Nam gợi ý cuối bài, theo chuyên mục
PHAN_MEM = {
    "ho-kinh-doanh": ("PMKT HKD", "Sổ sách hộ kinh doanh theo TT152/2025, bán hàng, tờ khai 01/CNKD – chạy trên máy hoặc online."),
    "hoa-don-dien-tu": ("HNAUTOHD", "Tải hàng loạt hóa đơn điện tử mua vào, bán ra; lập bảng kê đối chiếu tờ khai GTGT."),
    "": ("PMKT Hoàng Nam", "Tự định khoản hóa đơn điện tử, kho, giá vốn, lương; báo cáo tài chính TT99 / TT133, tờ khai thuế."),
}
CSS_HN = """
/* Kế toán Hoàng Nam (www.hoangnamsoft.com/kien-thuc): màu, logo theo trang chính */
:root{--brand:#1f4e79;--brand-2:#173b5c}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){--brand:#7fb0e0;--brand-2:#0d2236}}
:root[data-theme="dark"]{--brand:#7fb0e0;--brand-2:#0d2236}
.logo i{border-radius:50%;background:#1f4e79}
.tac-gia a{color:inherit}
.hn-pm{margin-top:14px;display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;padding:16px 18px;border-radius:var(--r);background:color-mix(in srgb,var(--brand) 7%,var(--paper));border:1px solid color-mix(in srgb,var(--brand) 28%,var(--line))}
.hn-pm p{color:var(--muted);font-size:14.5px;margin-top:2px}
.hn-pm .nut{padding:10px 16px;font-size:14.5px;white-space:nowrap}
.dai-lien-he.pm{background:#1f4e79}
"""


def esc(s: str) -> str:
    return html.escape(s, quote=True)


def dep(u: str) -> str:
    """Đường dẫn trong kien-thuc ('bai-viet/x.html', 'index.html') -> địa chỉ chuẩn trên hoangnamsoft (Cloudflare bỏ đuôi .html)."""
    return f"{HN_BASE}/{u.removesuffix('index.html').removesuffix('.html')}"


def doc_bai() -> list[dict]:
    ds = []
    for cm in CH["chuyen_muc"]:
        f = GOC / "noi_dung" / f"{cm['slug']}.md"
        if not f.exists():
            continue
        phan = re.split(r"^@@@ ", f.read_text(encoding="utf-8"), flags=re.M)
        for p in phan[1:]:
            dau, _, than = p.partition("\n")
            meta = json.loads(dau)
            meta["chuyen_muc"] = cm
            meta["md"] = than.strip()
            ds.append(meta)
    slugs = [b["slug"] for b in ds]
    trung = {s for s in slugs if slugs.count(s) > 1}
    if trung:
        raise SystemExit(f"Trùng slug: {trung}")
    return ds


def md_html(text: str) -> tuple[str, list[tuple[str, str]]]:
    md = markdown.Markdown(extensions=["tables", "toc", "sane_lists"], extension_configs={"toc": {"toc_depth": "2-2"}})
    h = md.convert(text)
    toc = [(t["id"], t["name"]) for t in md.toc_tokens]
    h = h.replace("<table>", '<div class="bang"><table>').replace("</table>", "</table></div>")
    return h, toc


def khung(tieu_de: str, mo_ta: str, than: str, sau: str = "", goc: str = "", canonical: str = "") -> str:
    """Khung trang kiến thức trên hoangnamsoft. goc = tiền tố về thư mục kien-thuc ('' hoặc '../')."""
    nav = "".join(f'<a href="{goc}chuyen-muc/{c["slug"]}.html">{esc(c["ten"])}</a>' for c in CH["chuyen_muc"][:4])
    return f"""<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(tieu_de)}</title>
<meta name="description" content="{esc(mo_ta)}">
<meta property="og:title" content="{esc(tieu_de)}">
<meta property="og:description" content="{esc(mo_ta)}">
<meta property="og:image" content="https://www.hoangnamsoft.com/img/desktop17_og.webp">
<link rel="canonical" href="{dep(canonical)}">
<link rel="icon" href="{ICON}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap">
<link rel="stylesheet" href="{goc}tai-nguyen/style.css">
</head>
<body>
<header class="top"><div class="wrap nav">
  <a class="logo" href="/"><i>HN</i><span>{esc(HN['ten'])}</span></a>
  <nav aria-label="Mục chính"><a href="{goc}index.html">Kiến thức</a>{nav}<a href="/#san-pham">Phần mềm</a><a href="/#tai-ve">Tải về</a></nav>
  <a class="tim-nut" href="{goc}tim-kiem.html" aria-label="Tìm kiếm">Tìm kiếm</a>
</div></header>
<main class="wrap">{than}</main>
<footer><div class="wrap chan">
  <div><b>{esc(HN['ten'])}</b><p>Phần mềm kế toán cho doanh nghiệp, hộ kinh doanh; công cụ tải hóa đơn điện tử, tờ khai thuế.<br>
    Zalo <a href="https://zalo.me/{HN['zalo']}">{esc(HN['zalo_hien'])}</a> · <a href="mailto:{HN['email']}">{esc(HN['email'])}</a><br><a href="/">www.hoangnamsoft.com</a></p></div>
  <div><b>Bài viết: {esc(CT['ten'])}</b><p>{esc(CT['gioi_thieu'])}<br>Tư vấn kế toán, thuế: Zalo <a href="https://zalo.me/{CT['zalo']}">{esc(CT['zalo_hien'])}</a> · <a href="{BASE}/">Dịch vụ Thái Sơn</a></p></div>
  <div><b>Lưu ý</b><p>Bài viết mang tính tham khảo, cập nhật theo văn bản đến ngày ghi trên bài. Đối chiếu văn bản gốc trước khi áp dụng.</p></div>
</div><div class="wrap ban-quyen">© {date.today().year} {esc(HN['ten'])} · nội dung kiến thức © {esc(CT['ten'])}</div></footer>
{sau}
</body>
</html>
"""


def the_bai(b: dict, goc: str) -> str:
    return (f'<a class="the-bai" href="{goc}bai-viet/{b["slug"]}.html"><span class="cm" style="--c:{b["chuyen_muc"]["mau"]}">{esc(b["chuyen_muc"]["ten"])}</span>'
            f'<h3>{esc(b["title"])}</h3><p>{esc(b["summary"])}</p><span class="ngay">Cập nhật {ngay_vn(b["date"])}</span></a>')


def ngay_vn(s: str) -> str:
    y, m, d = s.split("-")
    return f"{d}/{m}/{y}"


def lam_trong(thu_muc: Path) -> None:
    if thu_muc.exists():
        for p in thu_muc.iterdir():
            shutil.rmtree(p) if p.is_dir() else p.unlink()
    thu_muc.mkdir(exist_ok=True)


def dung_hoang_nam(bai: list[dict]) -> None:
    if not (WEB / "site" / "index.html").exists():
        raise SystemExit(f"Không thấy trang Hoàng Nam: {WEB / 'site'} (sửa cau_hinh.json > hoang_nam > thu_muc_web)")
    lam_trong(RA)
    shutil.copytree(GOC / "giao_dien", RA / "tai-nguyen", dirs_exist_ok=True)
    with open(RA / "tai-nguyen" / "style.css", "a", encoding="utf-8") as f:
        f.write(CSS_HN)
    moi = sorted(bai, key=lambda b: (b["date"], b["title"]), reverse=True)

    # ---------- trang bài viết
    (RA / "bai-viet").mkdir()
    for b in bai:
        h, toc = md_html(b["md"])
        cm = b["chuyen_muc"]
        cung = [x for x in bai if x["chuyen_muc"] is cm and x is not b][:4]
        toc_h = ("<nav class='muc-luc'><b>Nội dung</b><ul>" + "".join(f'<li><a href="#{i}">{esc(t)}</a></li>' for i, t in toc) + "</ul></nav>") if len(toc) > 2 else ""
        can = ("<div class='can-cu'><b>Căn cứ</b><ul>" + "".join(f"<li>{esc(c)}</li>" for c in b.get("can_cu", [])) + "</ul></div>") if b.get("can_cu") else ""
        pm, pm_mo_ta = PHAN_MEM.get(cm["slug"], PHAN_MEM[""])
        than = f"""
<nav class="duong-dan"><a href="/">Trang chủ</a> › <a href="../index.html">Kiến thức</a> › <a href="../chuyen-muc/{cm['slug']}.html">{esc(cm['ten'])}</a></nav>
<article class="bai">
  <header><span class="cm" style="--c:{cm['mau']}">{esc(cm['ten'])}</span>
  <h1>{esc(b['title'])}</h1><p class="tom-tat">{esc(b['summary'])}</p>
  <p class="ngay tac-gia">Cập nhật {ngay_vn(b['date'])} · Bài viết: <a href="{BASE}/">{esc(CT['ten'])}</a></p></header>
  <div class="bai-luoi">{toc_h}<div class="noi-dung">{h}{can}
  <p class="mien-tru">Bài viết tham khảo, theo văn bản có hiệu lực đến ngày cập nhật. Quy định thuế, bảo hiểm thay đổi thường xuyên: đối chiếu văn bản gốc hoặc liên hệ {esc(CT['ten_ngan'])} trước khi áp dụng.</p>
  <div class="hoi"><b>Cần tư vấn trường hợp cụ thể?</b> Nhắn Zalo {esc(CT['ten_ngan'])} <a href="https://zalo.me/{CT['zalo']}">{esc(CT['zalo_hien'])}</a></div>
  <div class="hn-pm"><div><b>Làm nhanh hơn với {esc(pm)}</b><p>{esc(pm_mo_ta)}</p></div><a class="nut" href="/#tai-ve">Dùng thử miễn phí</a></div></div></div>
</article>
{"<section class='lien-quan'><h2>Cùng chuyên mục</h2><div class='luoi-bai'>" + "".join(the_bai(x, "../") for x in cung) + "</div></section>" if cung else ""}
"""
        (RA / "bai-viet" / f"{b['slug']}.html").write_text(
            khung(f"{b['title']} | {HN['ten']}", b["summary"], than, goc="../", canonical=f"bai-viet/{b['slug']}.html"), encoding="utf-8")

    # ---------- trang chuyên mục
    (RA / "chuyen-muc").mkdir()
    for cm in CH["chuyen_muc"]:
        ds = [b for b in moi if b["chuyen_muc"] is cm]
        than = f"""<nav class="duong-dan"><a href="/">Trang chủ</a> › <a href="../index.html">Kiến thức</a> › <a href="index.html">Chuyên mục</a></nav>
<section class="dau-cm" style="--c:{cm['mau']}"><span class="bieu-tuong">{cm['icon']}</span><div><h1>{esc(cm['ten'])}</h1><p>{esc(cm['mo_ta'])}</p><p class="dem">{len(ds)} bài viết</p></div></section>
<div class="luoi-bai">{''.join(the_bai(b, '../') for b in ds) or '<p class="trong">Chuyên mục đang cập nhật bài viết.</p>'}</div>"""
        (RA / "chuyen-muc" / f"{cm['slug']}.html").write_text(
            khung(f"{cm['ten']} | {HN['ten']}", cm["mo_ta"], than, goc="../", canonical=f"chuyen-muc/{cm['slug']}.html"), encoding="utf-8")
    the_cm = "".join(
        f'<a class="the-cm" style="--c:{cm["mau"]}" href="{{g}}chuyen-muc/{cm["slug"]}.html"><span class="bieu-tuong">{cm["icon"]}</span>'
        f'<b>{esc(cm["ten"])}</b><span>{esc(cm["mo_ta"])}</span><em>{sum(1 for b in bai if b["chuyen_muc"] is cm)} bài</em></a>' for cm in CH["chuyen_muc"])
    (RA / "chuyen-muc" / "index.html").write_text(khung(
        f"Chuyên mục kế toán – thuế | {HN['ten']}", "Tất cả chuyên mục kiến thức kế toán, thuế, bảo hiểm – bài viết của " + CT["ten"],
        f'<nav class="duong-dan"><a href="/">Trang chủ</a> › <a href="../index.html">Kiến thức</a></nav><h1 class="tieu-de-trang">Chuyên mục</h1><div class="luoi-cm">{the_cm.replace("{g}", "../")}</div>',
        goc="../", canonical="chuyen-muc/index.html"), encoding="utf-8")

    # ---------- trang đầu kiến thức (kien-thuc/index.html)
    lich = "".join(f"<tr><td>{esc(a)}</td><td>{esc(b)}</td></tr>" for a, b in CH["lich_thue"])
    than = f"""
<section class="hero">
  <div><p class="nho">Kiến thức kế toán – thuế · bài viết của {esc(CT['ten'])}</p>
  <h1>Kiến thức <em>kế toán – thuế</em> viết dễ hiểu, cập nhật theo văn bản mới</h1>
  <p class="dan">{esc(CT['gioi_thieu'])}</p>
  <form class="o-tim" action="tim-kiem.html" role="search"><input name="q" type="search" placeholder="Tìm bài viết: thuế GTGT, quyết toán TNCN, hóa đơn sai sót…" aria-label="Tìm bài viết"><button>Tìm</button></form>
  <div class="the-nhanh"><a href="{BASE}/trac-nghiem/index.html">Luyện thi trắc nghiệm</a><a href="#lich-thue">Lịch nộp thuế</a><a href="chuyen-muc/index.html">Tất cả chuyên mục</a><a href="/#tai-ve">Phần mềm kế toán</a></div></div>
  <aside class="o-lich" id="lich-thue"><b>Lịch kê khai, nộp thuế thường gặp</b><table>{lich}</table><p>Ngày hạn rơi vào ngày nghỉ thì chuyển sang ngày làm việc tiếp theo.</p></aside>
</section>
<section><h2 class="tieu-de-muc">Chuyên mục</h2><div class="luoi-cm">{the_cm.replace("{g}", "")}</div></section>
<section><h2 class="tieu-de-muc">Bài viết mới</h2><div class="luoi-bai">{''.join(the_bai(b, '') for b in moi[:9])}</div>
<p class="xem-them"><a href="chuyen-muc/index.html">Xem tất cả {len(bai)} bài theo chuyên mục →</a></p></section>
<section class="dai-lien-he pm"><div><h2>Sổ sách, tờ khai làm nhanh hơn</h2><p>Phần mềm kế toán Hoàng Nam: doanh nghiệp (TT99 / TT133), hộ kinh doanh, tải hóa đơn điện tử. Dùng thử miễn phí.</p></div>
<a class="nut" href="/#tai-ve">Xem phần mềm</a></section>
<section class="dai-lien-he"><div><h2>Cần hỗ trợ kế toán, thuế?</h2><p>Nhắn {esc(CT['ten_ngan'])} để được tư vấn trường hợp cụ thể của doanh nghiệp, hộ kinh doanh.</p></div>
<a class="nut" href="https://zalo.me/{CT['zalo']}">Nhắn Zalo {esc(CT['zalo_hien'])}</a></section>"""
    (RA / "index.html").write_text(khung(f"Kiến thức kế toán, thuế | {HN['ten']}", CT["mo_ta_web"], than, canonical="index.html"), encoding="utf-8")

    # ---------- tìm kiếm
    tk = [{"t": b["title"], "s": b["summary"], "c": b["chuyen_muc"]["ten"], "u": f"bai-viet/{b['slug']}.html",
           "x": re.sub(r"[#*|>`_\-]+", " ", b["md"])[:4000]} for b in moi]
    (RA / "tim-kiem.json").write_text(json.dumps(tk, ensure_ascii=False), encoding="utf-8")
    (RA / "tim-kiem.html").write_text(khung(f"Tìm kiếm | {HN['ten']}", "Tìm bài viết kế toán, thuế",
        '<h1 class="tieu-de-trang">Tìm bài viết</h1><form class="o-tim" role="search" onsubmit="return false"><input id="q" type="search" placeholder="Gõ từ khóa…" aria-label="Từ khóa" autofocus></form><p id="kq-dem" class="dem"></p><div id="kq" class="luoi-bai"></div>',
        sau='<script src="tai-nguyen/tim-kiem.js"></script>', canonical="tim-kiem.html"), encoding="utf-8")

    # ---------- sitemap kiến thức (robots.txt ở gốc trang trỏ tới)
    urls = ["index.html", "chuyen-muc/index.html"] + [f"chuyen-muc/{c['slug']}.html" for c in CH["chuyen_muc"]] + [f"bai-viet/{b['slug']}.html" for b in bai]
    (RA / "sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "".join(f"  <url><loc>{dep(u)}</loc></url>\n" for u in urls) + "</urlset>\n", encoding="utf-8")
    robots = WEB / "site" / "robots.txt"
    if not robots.exists():
        robots.write_text(f"User-agent: *\nAllow: /\nSitemap: {HN_BASE}/sitemap.xml\n", encoding="utf-8")


def chuyen_huong(dich: str) -> str:
    """Trang cũ trên GitHub Pages -> địa chỉ mới trên hoangnamsoft (giữ ?q= của trang tìm kiếm)."""
    return f"""<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Đã chuyển sang www.hoangnamsoft.com</title>
<link rel="canonical" href="{dich}">
<meta http-equiv="refresh" content="0; url={dich}">
<script>location.replace({json.dumps(dich)} + location.search + location.hash);</script>
</head><body style="font-family:system-ui,sans-serif;padding:32px">
<p>Kiến thức kế toán – thuế của {esc(CT['ten'])} đã chuyển sang <a href="{dich}">{dich}</a>.</p>
</body></html>
"""


def dung_thai_son(bai: list[dict]) -> None:
    lam_trong(DOCS)
    shutil.copytree(GOC / "trac_nghiem_goc", DOCS / "trac-nghiem")    # trang luyện thi trắc nghiệm có sẵn của Thái Sơn
    shutil.copytree(GOC / "giao_dien", DOCS / "tai-nguyen", dirs_exist_ok=True)
    shutil.copytree(GOC / "tro_choi_goc", DOCS / "tro-choi")        # chơi cờ: tướng, vua, caro, đam
    (DOCS / ".nojekyll").write_text("", encoding="utf-8")
    # trang chủ dịch vụ Thái Sơn: mục "Kiến thức" trỏ thẳng sang hoangnamsoft
    (DOCS / "index.html").write_text((GOC / "trang_chu_goc" / "index.html").read_text(encoding="utf-8")
                                     .replace('href="kien-thuc.html"', f'href="{dep("index.html")}"'), encoding="utf-8")
    co = DOCS / "tro-choi" / "index.html"
    co.write_text(co.read_text(encoding="utf-8").replace('href="../kien-thuc.html"', f'href="{dep("index.html")}"'), encoding="utf-8")
    (DOCS / "kien-thuc.html").write_text(chuyen_huong(dep("index.html")), encoding="utf-8")
    (DOCS / "tim-kiem.html").write_text(chuyen_huong(dep("tim-kiem.html")), encoding="utf-8")
    (DOCS / "chuyen-muc").mkdir()
    (DOCS / "chuyen-muc" / "index.html").write_text(chuyen_huong(dep("chuyen-muc/index.html")), encoding="utf-8")
    for cm in CH["chuyen_muc"]:
        (DOCS / "chuyen-muc" / f"{cm['slug']}.html").write_text(chuyen_huong(dep(f"chuyen-muc/{cm['slug']}.html")), encoding="utf-8")
    (DOCS / "bai-viet").mkdir()
    for b in bai:
        (DOCS / "bai-viet" / f"{b['slug']}.html").write_text(chuyen_huong(dep(f"bai-viet/{b['slug']}.html")), encoding="utf-8")
    (DOCS / "404.html").write_text(f"""<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Không tìm thấy trang</title></head><body style="font-family:system-ui,sans-serif;padding:32px">
<h1>Không tìm thấy trang</h1><p>Trang đã đổi địa chỉ hoặc không tồn tại.</p>
<p><a href="{BASE}/">Trang chủ {esc(CT['ten'])}</a> · <a href="{dep('index.html')}">Kiến thức kế toán – thuế</a></p></body></html>
""", encoding="utf-8")
    if BASE:
        urls = ["", "trac-nghiem/index.html", "tro-choi/index.html"]
        (DOCS / "sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
            + "".join(f"  <url><loc>{BASE}/{u}</loc></url>\n" for u in urls) + "</urlset>\n", encoding="utf-8")
        (DOCS / "robots.txt").write_text(f"User-agent: *\nAllow: /\nSitemap: {BASE}/sitemap.xml\n", encoding="utf-8")


def build() -> None:
    bai = doc_bai()
    dung_hoang_nam(bai)
    dung_thai_son(bai)
    print(f"Đã dựng {len(bai)} bài, {len(CH['chuyen_muc'])} chuyên mục -> {RA} ; trang Thái Sơn -> {DOCS}")


if __name__ == "__main__":
    build()
