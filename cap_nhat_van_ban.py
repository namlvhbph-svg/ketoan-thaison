"""Lấy văn bản pháp luật mới từ Công báo Chính phủ (congbao.chinhphu.vn) và soạn bản nháp bài viết.

Chỉ dùng nguồn chính thức của Nhà nước: văn bản quy phạm pháp luật không thuộc đối tượng bảo hộ quyền
tác giả (Luật Sở hữu trí tuệ, Điều 15). Không lấy bài của trang thương mại (thuvienphapluat, trang dịch vụ
kế toán...) vì nội dung các trang đó có bản quyền.

    python cap_nhat_van_ban.py        -> in danh sách văn bản mới liên quan kế toán, thuế
"""
from __future__ import annotations

import html
import json
import re
import subprocess
import urllib.error
import urllib.request
import zipfile
from datetime import date, datetime
from email.utils import parsedate_to_datetime
from io import BytesIO
from pathlib import Path

GOC = Path(__file__).resolve().parent
LUU = GOC / "van_ban_moi"                        # bộ nhớ trên máy, không đưa lên web
CB = "https://congbao.chinhphu.vn"
NGUON = [                                         # (tên, đường dẫn danh sách)
    ("Mới ban hành", "/cac-van-ban-moi-ban-hanh.rss"),
    ("Quốc hội", "/van-ban-dang-cong-bao/quoc-hoi-c31.htm"),
    ("UB Thường vụ QH", "/van-ban-dang-cong-bao/uy-ban-thuong-vu-quoc-hoi-c28.htm"),
    ("Chính phủ", "/van-ban-dang-cong-bao/chinh-phu-c1.htm"),
    ("Thủ tướng", "/van-ban-dang-cong-bao/thu-tuong-chinh-phu-c2.htm"),
    ("Bộ Tài chính", "/van-ban-dang-cong-bao/bo-tai-chinh-c10.htm"),
    ("Bộ Nội vụ", "/van-ban-dang-cong-bao/bo-noi-vu-c5.htm"),
]
TU_KHOA = ["thuế", "kế toán", "hóa đơn", "hoá đơn", "chứng từ", "bảo hiểm xã hội", "bảo hiểm y tế", "bảo hiểm thất nghiệp",
           "tiền lương", "lương tối thiểu", "lương cơ sở", "hộ kinh doanh", "doanh nghiệp", "kiểm toán", "lệ phí",
           "quản lý thuế", "giá trị gia tăng", "thu nhập", "báo cáo tài chính", "hải quan", "người lao động", "đăng ký kinh doanh"]
CM_THEO_TU = [                                    # đoán chuyên mục cho bản nháp
    ("hoa-don-dien-tu", ["hóa đơn", "hoá đơn", "chứng từ điện tử"]),
    ("thue-gtgt", ["giá trị gia tăng", "gtgt"]),
    ("thue-tndn", ["thu nhập doanh nghiệp", "tndn"]),
    ("thue-tncn", ["thu nhập cá nhân", "tncn", "giảm trừ gia cảnh"]),
    ("bhxh-tien-luong", ["bảo hiểm", "tiền lương", "lương tối thiểu", "lương cơ sở", "người lao động"]),
    ("ho-kinh-doanh", ["hộ kinh doanh", "cá nhân kinh doanh"]),
    ("so-sach-bctc", ["chế độ kế toán", "báo cáo tài chính", "chuẩn mực", "kiểm toán"]),
    ("quan-ly-thue", ["quản lý thuế", "xử phạt", "phí", "lệ phí"]),
]
UA = {"User-Agent": "Mozilla/5.0 (KeToanThaiSon cap-nhat-van-ban)"}


def tai(url: str, nhi_phan: bool = False, timeout: int = 30):
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=timeout) as r:
            b = r.read()
    except urllib.error.URLError as e:
        # Máy chủ tải file của Chính phủ gửi thiếu chứng chỉ trung gian; curl của Windows tự bổ sung được
        # (vẫn kiểm tra chứng chỉ, không tắt bảo mật).
        if "CERTIFICATE_VERIFY_FAILED" not in str(e):
            raise
        p = subprocess.run(["curl.exe", "-sSfL", "-m", str(timeout), "-A", UA["User-Agent"], url], capture_output=True,
                           creationflags=getattr(subprocess, "CREATE_NO_WINDOW", 0))
        if p.returncode:
            raise RuntimeError(p.stderr.decode("utf-8", "replace")) from e
        b = p.stdout
    return b if nhi_phan else b.decode("utf-8", "replace")


def so_hieu(s: str) -> str:
    m = re.search(r"\d+/\d{4}/[A-ZĐa-zđ0-9\-]+", s)
    return m.group(0).upper() if m else ""


def lien_quan(s: str) -> bool:
    s = s.lower()
    return any(k in s for k in TU_KHOA)


def quet(bao=lambda s: None) -> list[dict]:
    """Đọc danh sách văn bản ở các nguồn. Mỗi phần tử: url, tieu_de, so_hieu, ngay (dd/mm/yyyy hoặc ''), nguon."""
    gap: dict[str, dict] = {}
    for ten, duong in NGUON:
        bao(f"Đang đọc {ten}…")
        try:
            s = tai(CB + duong)
        except Exception as e:                    # mất mạng, trang đổi cấu trúc: bỏ qua nguồn đó
            bao(f"Không đọc được {ten}: {e}")
            continue
        if duong.endswith(".rss"):
            for it in re.findall(r"<item>(.*?)</item>", s, flags=re.S):
                url = re.search(r"<link>(.*?)</link>", it).group(1).strip()
                mo_ta = re.sub(r"<!\[CDATA\[|\]\]>", "", (re.search(r"<description>(.*?)</description>", it, re.S) or [None, ""])[1]).strip()
                tieu = html.unescape((re.search(r"<title>(.*?)</title>", it, re.S) or [None, ""])[1]).strip()
                ngay = ""
                m = re.search(r"<pubDate>(.*?)</pubDate>", it)
                if m:
                    try:
                        ngay = parsedate_to_datetime(m.group(1)).strftime("%d/%m/%Y")
                    except Exception:
                        pass
                ten_vb = ten_tu_url(url)
                gap.setdefault(url, {"url": url, "tieu_de": (tieu or ten_vb) + (" " + html.unescape(mo_ta) if mo_ta else ""),
                                     "so_hieu": so_hieu(ten_vb) or so_hieu(tieu), "ngay": ngay, "nguon": ten})
        else:
            s = html.unescape(s)
            for url, tieu in re.findall(r'href="(/van-ban/[^"#]+)"[^>]*>\s*([^<]{10,400})', s):
                url = CB + url
                tieu = re.sub(r"\s+", " ", tieu).strip()
                gap.setdefault(url, {"url": url, "tieu_de": tieu, "so_hieu": so_hieu(tieu), "ngay": "", "nguon": ten})
    return list(gap.values())


LOAI_URL = {"thong-tu": "Thông tư", "nghi-dinh": "Nghị định", "quyet-dinh": "Quyết định", "nghi-quyet": "Nghị quyết",
            "luat": "Luật", "van-ban-hop-nhat": "Văn bản hợp nhất", "thong-tu-lien-tich": "Thông tư liên tịch", "chi-thi": "Chỉ thị"}


def ten_tu_url(url: str) -> str:
    """'/van-ban/thong-tu-so-64-2026-tt-bct-470691.htm' -> 'Thông tư số 64/2026/TT-BCT'."""
    m = re.search(r"/van-ban/(.+?)-so-(\d+)-(\d{4})-(.+?)-\d+\.htm", url)
    if not m:
        return url
    ky = m.group(4).upper().replace("ND", "NĐ").replace("QD", "QĐ")
    return f"{LOAI_URL.get(m.group(1), m.group(1))} số {m.group(2)}/{m.group(3)}/{ky}"


def chi_tiet(url: str) -> dict:
    """Thông tin văn bản và link PDF / Word gốc."""
    s = html.unescape(tai(url))
    t = re.sub(r"<script.*?</script>|<style.*?</style>", "", s, flags=re.S)
    t = re.sub(r"<[^>]+>", "\n", t)
    t = re.sub(r"[ \t\r]+", " ", t)
    t = re.sub(r"\n\s*\n+", "\n", t)
    def lay(nhan):
        m = re.search(re.escape(nhan) + r"\s*\n\s*([^\n]+)", t)
        return m.group(1).strip() if m else ""
    tieu = re.search(r"<h1[^>]*>(.*?)</h1>", s, re.S)
    tieu = re.sub(r"<[^>]+>|\s+", " ", tieu.group(1)).strip() if tieu else ""
    tep = re.findall(r'href="([^"]+?\.(?:docx|doc|pdf))"', s) + re.findall(r'href="([^"]+?file_name=[^"]+?\.(?:docx|doc|pdf))"', s)
    word = next((u for u in tep if u.lower().endswith(".docx")), "")
    pdf = next((u for u in tep if u.lower().endswith(".pdf")), "")
    return {"url": url, "tieu_de": tieu, "so_hieu": lay("Số, ký hiệu") or lay("Số ký hiệu") or so_hieu(tieu),
            "loai": lay("Loại văn bản"), "ngay_ban_hanh": lay("Ngày ban hành"), "ngay_hieu_luc": lay("Ngày hiệu lực"),
            "nguoi_ky": lay("Người ký"), "trich_yeu": lay("Trích yếu"), "word": word, "pdf": pdf}


def chu_word(url: str) -> str:
    """Toàn văn từ file .docx (không cần thư viện ngoài)."""
    z = zipfile.ZipFile(BytesIO(tai(url, nhi_phan=True, timeout=60)))
    x = z.read("word/document.xml").decode("utf-8", "replace")
    doan = []
    for p in re.findall(r"<w:p[ >].*?</w:p>", x, flags=re.S):
        s = "".join(re.findall(r"<w:t[^>]*>([^<]*)</w:t>", p))
        if s.strip():
            doan.append(html.unescape(s.strip()))
    # văn bản gốc đôi khi lẫn chữ Kirin trông giống chữ Latin (vd "BТС")
    return "\n".join(doan).translate(str.maketrans("АВСЕНКМОРТХаеосрх", "ABCEHKMOPTXaeocpx"))


def da_co_bai(sh: str) -> bool:
    if not sh:
        return False
    m = re.match(r"0*(\d+)/(\d{4})", sh)
    if not m:
        return False
    mau = re.compile(rf"(?<![\d/])0*{m.group(1)}/{m.group(2)}(?!\d)")
    return any(mau.search(f.read_text(encoding="utf-8")) for f in (GOC / "noi_dung").glob("*.md"))


def doan_chuyen_muc(s: str) -> str:
    s = s.lower()
    for cm, tu in CM_THEO_TU:
        if any(k in s for k in tu):
            return cm
    return "quan-ly-thue"


# ---------- đã xem
def da_xem() -> set[str]:
    f = LUU / "da_xem.json"
    return set(json.loads(f.read_text(encoding="utf-8"))) if f.exists() else set()


def danh_dau_xem(urls) -> None:
    LUU.mkdir(exist_ok=True)
    (LUU / "da_xem.json").write_text(json.dumps(sorted(da_xem() | set(urls)), ensure_ascii=False, indent=0), encoding="utf-8")


# ---------- soạn bản nháp
def trich_dieu(toan_van: str, ten_dieu: list[str]) -> str:
    """Lấy nguyên văn các điều như 'Phạm vi điều chỉnh', 'Đối tượng áp dụng', 'Hiệu lực thi hành'."""
    ra = []
    dong = toan_van.splitlines()
    for i, d in enumerate(dong):
        if re.match(r"^Điều \d+", d) and any(k.lower() in d.lower() for k in ten_dieu):
            khoi = [d]
            for d2 in dong[i + 1:i + 25]:
                if re.match(r"^(Điều \d+|Chương [IVXLC]+)", d2):
                    break
                khoi.append(d2)
                if d2.rstrip().endswith("./."):            # hết văn bản, sau đó là chữ ký
                    break
            ra.append("\n".join(khoi))
    return "\n\n".join(ra)


def khung_nhap(ct: dict, toan_van: str) -> dict:
    """Bản nháp không dùng AI: thông tin văn bản + điều khoản gốc để người viết diễn giải lại."""
    sh = ct["so_hieu"] or so_hieu(ct["tieu_de"])
    pham_vi = trich_dieu(toan_van, ["Phạm vi điều chỉnh", "Đối tượng áp dụng"])
    hieu_luc = trich_dieu(toan_van, ["Hiệu lực", "thi hành"])
    md = f"""<!-- BẢN NHÁP: thay các đoạn trích nguyên văn bằng lời giải thích của mình, thêm ví dụ, rồi xóa dòng này. -->

## Văn bản mới: {sh}

**{ct['loai'] or 'Văn bản'} {sh}** {ct['trich_yeu'] or ct['tieu_de']}.

| | |
|---|---|
| Ngày ban hành | {ct['ngay_ban_hanh']} |
| Ngày hiệu lực | {ct['ngay_hieu_luc']} |
| Người ký | {ct['nguoi_ky']} |

Toàn văn: [Công báo Chính phủ]({ct['url']})

## Áp dụng cho ai

{pham_vi or '(Ghi đối tượng áp dụng.)'}

## Điểm mới cần lưu ý

- (Điểm mới 1: trước đây thế nào, nay thế nào.)
- (Điểm mới 2.)

## Ví dụ

(Ví dụ có số liệu cho doanh nghiệp / hộ kinh doanh.)

## Hiệu lực

{hieu_luc or 'Văn bản có hiệu lực từ ngày ' + ct['ngay_hieu_luc'] + '.'}

> Doanh nghiệp cần làm gì: (việc cần chuẩn bị).
"""
    return {"title": f"{sh}: {(ct['trich_yeu'] or ct['tieu_de'])[:90]}", "summary": (ct["trich_yeu"] or ct["tieu_de"])[:200],
            "can_cu": [f"{ct['loai']} {sh} ngày {ct['ngay_ban_hanh']} (hiệu lực {ct['ngay_hieu_luc']})".strip()], "md": md}


def khoa_api() -> str:
    import os
    k = os.environ.get("ANTHROPIC_API_KEY", "").strip()
    f = GOC / "khoa_api.txt"                      # nằm trong .gitignore, không đưa lên GitHub
    return k or (f.read_text(encoding="utf-8").strip() if f.exists() else "")


MAU_AI = "claude-sonnet-5-5"


def soan_ai(ct: dict, toan_van: str, ten_cm: str) -> dict:
    """Bản nháp do Claude viết lại từ toàn văn chính thức. Trả về dict title, summary, can_cu, md."""
    yeu_cau = f"""Bạn là kế toán viên viết bài cho trang kiến thức của Kế toán Thái Sơn (chuyên mục: {ten_cm}).
Viết MỘT bài tiếng Việt, lời văn của chính bạn, giải thích văn bản pháp luật dưới đây cho doanh nghiệp nhỏ và hộ kinh doanh.

Yêu cầu:
- Chỉ dựa vào toàn văn được cung cấp. Không bịa số liệu, mức thuế, thời hạn không có trong văn bản; chỗ nào văn bản không nói rõ thì ghi "xem văn bản hướng dẫn".
- Không chép nguyên đoạn dài; tóm lược, có ví dụ số liệu đơn giản nếu phù hợp.
- Cấu trúc Markdown: các mục "## ..." (Áp dụng cho ai, Điểm mới, Ví dụ, Hiệu lực, Doanh nghiệp cần làm gì), bảng nếu so sánh trước/sau, kết bằng 1 dòng "> ...".
- Không viết tiêu đề cấp 1 (#) trong nội dung.

Trả về DUY NHẤT một JSON: {{"title": "...", "summary": "1-2 câu", "can_cu": ["tên văn bản, ngày ban hành, hiệu lực"], "md": "nội dung Markdown"}}

Thông tin văn bản: {json.dumps({k: ct[k] for k in ('so_hieu', 'loai', 'ngay_ban_hanh', 'ngay_hieu_luc', 'nguoi_ky', 'trich_yeu', 'url')}, ensure_ascii=False)}

TOÀN VĂN:
{toan_van[:150000]}"""
    req = urllib.request.Request("https://api.anthropic.com/v1/messages", method="POST",
        data=json.dumps({"model": MAU_AI, "max_tokens": 8000, "messages": [{"role": "user", "content": yeu_cau}]}).encode(),
        headers={"x-api-key": khoa_api(), "anthropic-version": "2023-06-01", "content-type": "application/json"})
    with urllib.request.urlopen(req, timeout=300) as r:
        kq = json.loads(r.read())
    chu = "".join(b.get("text", "") for b in kq["content"])
    m = re.search(r"\{.*\}", chu, flags=re.S)
    bai = json.loads(m.group(0), strict=False)      # cho phép xuống dòng trần trong chuỗi
    bai["md"] = "<!-- BẢN NHÁP DO AI SOẠN: đối chiếu từng con số, thời hạn với toàn văn trước khi đăng, rồi xóa dòng này. -->\n\n" + bai["md"].strip()
    bai.setdefault("can_cu", [])
    if ct["url"] not in bai["md"]:
        bai["md"] += f"\n\nToàn văn: [Công báo Chính phủ]({ct['url']})"
    return bai


if __name__ == "__main__":
    import sys
    sys.stdout.reconfigure(encoding="utf-8")
    ds = [x for x in quet(print) if lien_quan(x["tieu_de"])]
    for x in ds:
        print(("[đã có bài] " if da_co_bai(x["so_hieu"]) else "") + f"{x['ngay']:10} {x['nguon']:14} {x['tieu_de'][:110]}")
    print(len(ds), "văn bản liên quan")
