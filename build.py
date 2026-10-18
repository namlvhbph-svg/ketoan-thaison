"""Dựng trang web Kế toán Thái Sơn từ bài viết Markdown.

    python build.py            -> sinh toàn bộ trang tĩnh vào thư mục docs/ (GitHub Pages)

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
RA = GOC / "docs"
CH = json.loads((GOC / "cau_hinh.json").read_text(encoding="utf-8"))
CT = CH["cong_ty"]
BASE = CH.get("base_url", "").rstrip("/")


def esc(s: str) -> str:
    return html.escape(s, quote=True)


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
    """Khung trang chung. goc = tiền tố đường dẫn về thư mục gốc ('' hoặc '../')."""
    nav = "".join(f'<a href="{goc}chuyen-muc/{c["slug"]}.html">{esc(c["ten"])}</a>' for c in CH["chuyen_muc"][:6])
    can = f'<link rel="canonical" href="{BASE}/{canonical}">' if BASE and canonical is not None else ""
    return f"""<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(tieu_de)}</title>
<meta name="description" content="{esc(mo_ta)}">
<meta property="og:title" content="{esc(tieu_de)}">
<meta property="og:description" content="{esc(mo_ta)}">
{can}
<link rel="icon" href="{goc}tai-nguyen/icon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap">
<link rel="stylesheet" href="{goc}tai-nguyen/style.css">
</head>
<body>
<header class="top"><div class="wrap nav">
  <a class="logo" href="{goc}index.html"><i>TS</i><span>{esc(CT['ten_ngan'])}</span></a>
  <nav aria-label="Chuyên mục">{nav}<a href="{goc}chuyen-muc/index.html">Tất cả</a></nav>
  <a class="tim-nut" href="{goc}tim-kiem.html" aria-label="Tìm kiếm">Tìm kiếm</a>
</div></header>
<main class="wrap">{than}</main>
<footer><div class="wrap chan">
  <div><b>{esc(CT['ten'])}</b><p>{esc(CT['gioi_thieu'])}</p></div>
  <div><b>Liên hệ</b><p>Zalo: <a href="https://zalo.me/{CT['zalo']}">{esc(CT['zalo_hien'])}</a><br>Email: <a href="mailto:{CT['email'].lower()}">{esc(CT['email'])}</a></p></div>
  <div><b>Lưu ý</b><p>Bài viết mang tính tham khảo, cập nhật theo văn bản đến ngày ghi trên bài. Đối chiếu văn bản gốc trước khi áp dụng.</p></div>
</div><div class="wrap ban-quyen">© {date.today().year} {esc(CT['ten'])}</div></footer>
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


def build() -> None:
    bai = doc_bai()
    if RA.exists():
        for p in RA.iterdir():
            shutil.rmtree(p) if p.is_dir() else p.unlink()
    RA.mkdir(exist_ok=True)
    shutil.copytree(GOC / "trac_nghiem_goc", RA / "trac-nghiem")     # trang luyện thi trắc nghiệm có sẵn của Thái Sơn
    shutil.copytree(GOC / "giao_dien", RA / "tai-nguyen", dirs_exist_ok=True)
    (RA / ".nojekyll").write_text("", encoding="utf-8")
    moi = sorted(bai, key=lambda b: (b["date"], b["title"]), reverse=True)

    # ---------- trang bài viết
    (RA / "bai-viet").mkdir()
    for b in bai:
        h, toc = md_html(b["md"])
        cung = [x for x in bai if x["chuyen_muc"] is b["chuyen_muc"] and x is not b][:4]
        toc_h = ("<nav class='muc-luc'><b>Nội dung</b><ul>" + "".join(f'<li><a href="#{i}">{esc(t)}</a></li>' for i, t in toc) + "</ul></nav>") if len(toc) > 2 else ""
        can = ("<div class='can-cu'><b>Căn cứ</b><ul>" + "".join(f"<li>{esc(c)}</li>" for c in b.get("can_cu", [])) + "</ul></div>") if b.get("can_cu") else ""
        than = f"""
<nav class="duong-dan"><a href="../index.html">Trang chủ</a> › <a href="../chuyen-muc/{b['chuyen_muc']['slug']}.html">{esc(b['chuyen_muc']['ten'])}</a></nav>
<article class="bai">
  <header><span class="cm" style="--c:{b['chuyen_muc']['mau']}">{esc(b['chuyen_muc']['ten'])}</span>
  <h1>{esc(b['title'])}</h1><p class="tom-tat">{esc(b['summary'])}</p>
  <p class="ngay">Cập nhật {ngay_vn(b['date'])} · {esc(CT['ten_ngan'])}</p></header>
  <div class="bai-luoi">{toc_h}<div class="noi-dung">{h}{can}
  <p class="mien-tru">Bài viết tham khảo, theo văn bản có hiệu lực đến ngày cập nhật. Quy định thuế, bảo hiểm thay đổi thường xuyên: đối chiếu văn bản gốc hoặc liên hệ {esc(CT['ten_ngan'])} trước khi áp dụng.</p>
  <div class="hoi"><b>Cần tư vấn trường hợp cụ thể?</b> Nhắn Zalo <a href="https://zalo.me/{CT['zalo']}">{esc(CT['zalo_hien'])}</a></div></div></div>
</article>
{"<section class='lien-quan'><h2>Cùng chuyên mục</h2><div class='luoi-bai'>" + "".join(the_bai(x, "../") for x in cung) + "</div></section>" if cung else ""}
"""
        (RA / "bai-viet" / f"{b['slug']}.html").write_text(
            khung(f"{b['title']} | {CT['ten_ngan']}", b["summary"], than, goc="../", canonical=f"bai-viet/{b['slug']}.html"), encoding="utf-8")

    # ---------- trang chuyên mục
    (RA / "chuyen-muc").mkdir()
    for cm in CH["chuyen_muc"]:
        ds = [b for b in moi if b["chuyen_muc"] is cm]
        than = f"""<nav class="duong-dan"><a href="../index.html">Trang chủ</a> › <a href="index.html">Chuyên mục</a></nav>
<section class="dau-cm" style="--c:{cm['mau']}"><span class="bieu-tuong">{cm['icon']}</span><div><h1>{esc(cm['ten'])}</h1><p>{esc(cm['mo_ta'])}</p><p class="dem">{len(ds)} bài viết</p></div></section>
<div class="luoi-bai">{''.join(the_bai(b, '../') for b in ds) or '<p class="trong">Chuyên mục đang cập nhật bài viết.</p>'}</div>"""
        (RA / "chuyen-muc" / f"{cm['slug']}.html").write_text(
            khung(f"{cm['ten']} | {CT['ten_ngan']}", cm["mo_ta"], than, goc="../", canonical=f"chuyen-muc/{cm['slug']}.html"), encoding="utf-8")
    the_cm = "".join(
        f'<a class="the-cm" style="--c:{cm["mau"]}" href="{{g}}chuyen-muc/{cm["slug"]}.html"><span class="bieu-tuong">{cm["icon"]}</span>'
        f'<b>{esc(cm["ten"])}</b><span>{esc(cm["mo_ta"])}</span><em>{sum(1 for b in bai if b["chuyen_muc"] is cm)} bài</em></a>' for cm in CH["chuyen_muc"])
    (RA / "chuyen-muc" / "index.html").write_text(khung(
        f"Chuyên mục kế toán – thuế | {CT['ten_ngan']}", "Tất cả chuyên mục kiến thức kế toán, thuế, bảo hiểm của " + CT["ten_ngan"],
        f'<nav class="duong-dan"><a href="../index.html">Trang chủ</a></nav><h1 class="tieu-de-trang">Chuyên mục</h1><div class="luoi-cm">{the_cm.replace("{g}", "../")}</div>',
        goc="../", canonical="chuyen-muc/index.html"), encoding="utf-8")

    # ---------- trang chủ
    lich = "".join(f"<tr><td>{esc(a)}</td><td>{esc(b)}</td></tr>" for a, b in CH["lich_thue"])
    than = f"""
<section class="hero">
  <div><p class="nho">{esc(CT['ten'])}</p>
  <h1>Kiến thức <em>kế toán – thuế</em> viết dễ hiểu, cập nhật theo văn bản mới</h1>
  <p class="dan">{esc(CT['gioi_thieu'])}</p>
  <form class="o-tim" action="tim-kiem.html" role="search"><input name="q" type="search" placeholder="Tìm bài viết: thuế GTGT, quyết toán TNCN, hóa đơn sai sót…" aria-label="Tìm bài viết"><button>Tìm</button></form>
  <div class="the-nhanh"><a href="trac-nghiem/index.html">Luyện thi trắc nghiệm</a><a href="#lich-thue">Lịch nộp thuế</a><a href="chuyen-muc/index.html">Tất cả chuyên mục</a></div></div>
  <aside class="o-lich" id="lich-thue"><b>Lịch kê khai, nộp thuế thường gặp</b><table>{lich}</table><p>Ngày hạn rơi vào ngày nghỉ thì chuyển sang ngày làm việc tiếp theo.</p></aside>
</section>
<section><h2 class="tieu-de-muc">Chuyên mục</h2><div class="luoi-cm">{the_cm.replace("{g}", "")}</div></section>
<section><h2 class="tieu-de-muc">Bài viết mới</h2><div class="luoi-bai">{''.join(the_bai(b, '') for b in moi[:9])}</div>
<p class="xem-them"><a href="chuyen-muc/index.html">Xem tất cả {len(bai)} bài theo chuyên mục →</a></p></section>
<section class="dai-lien-he"><div><h2>Cần hỗ trợ kế toán, thuế?</h2><p>Nhắn {esc(CT['ten_ngan'])} để được tư vấn trường hợp cụ thể của doanh nghiệp, hộ kinh doanh.</p></div>
<a class="nut" href="https://zalo.me/{CT['zalo']}">Nhắn Zalo {esc(CT['zalo_hien'])}</a></section>"""
    (RA / "index.html").write_text(khung(f"{CT['ten']} – Kiến thức kế toán, thuế", CT["mo_ta_web"], than, canonical=""), encoding="utf-8")

    # ---------- tìm kiếm
    tk = [{"t": b["title"], "s": b["summary"], "c": b["chuyen_muc"]["ten"], "u": f"bai-viet/{b['slug']}.html",
           "x": re.sub(r"[#*|>`_\-]+", " ", b["md"])[:4000]} for b in moi]
    (RA / "tim-kiem.json").write_text(json.dumps(tk, ensure_ascii=False), encoding="utf-8")
    (RA / "tim-kiem.html").write_text(khung(f"Tìm kiếm | {CT['ten_ngan']}", "Tìm bài viết kế toán, thuế",
        '<h1 class="tieu-de-trang">Tìm bài viết</h1><form class="o-tim" role="search" onsubmit="return false"><input id="q" type="search" placeholder="Gõ từ khóa…" aria-label="Từ khóa" autofocus></form><p id="kq-dem" class="dem"></p><div id="kq" class="luoi-bai"></div>',
        sau='<script src="tai-nguyen/tim-kiem.js"></script>', canonical="tim-kiem.html"), encoding="utf-8")

    # ---------- 404, sitemap, robots
    (RA / "404.html").write_text(khung("Không tìm thấy trang", "Trang không tồn tại",
        f'<h1 class="tieu-de-trang">Không tìm thấy trang</h1><p>Trang đã đổi địa chỉ hoặc không tồn tại. <a href="{BASE or "."}/index.html">Về trang chủ</a>.</p>', goc=(BASE + "/") if BASE else ""), encoding="utf-8")
    if BASE:
        urls = [""] + ["chuyen-muc/index.html"] + [f"chuyen-muc/{c['slug']}.html" for c in CH["chuyen_muc"]] + [f"bai-viet/{b['slug']}.html" for b in bai]
        (RA / "sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
            + "".join(f"  <url><loc>{BASE}/{u}</loc></url>\n" for u in urls) + "</urlset>\n", encoding="utf-8")
        (RA / "robots.txt").write_text(f"User-agent: *\nAllow: /\nSitemap: {BASE}/sitemap.xml\n", encoding="utf-8")
    print(f"Đã dựng {len(bai)} bài, {len(CH['chuyen_muc'])} chuyên mục -> {RA}")


if __name__ == "__main__":
    build()
