"""Công cụ đăng / sửa bài viết cho web Kế toán Thái Sơn.

    python dang_bai.py      (hoặc bấm đúp DANG_BAI.cmd)

Viết bài trong cửa sổ, bấm "Lưu", "Xem thử" để mở bài trên máy, "Đăng lên web" để dựng trang
và đưa lên GitHub. Bài lưu vào noi_dung/<chuyên mục>.md theo đúng định dạng build.py đọc.
"""
from __future__ import annotations

import json
import os
import queue
import re
import shutil
import subprocess
import sys
import threading
import unicodedata
import webbrowser
from datetime import date
from pathlib import Path
import tkinter as tk
from tkinter import filedialog, messagebox, ttk

import cap_nhat_van_ban as vb

GOC = Path(__file__).resolve().parent
CH = json.loads((GOC / "cau_hinh.json").read_text(encoding="utf-8"))
CM = CH["chuyen_muc"]
THU_MUC_ANH = GOC / "giao_dien" / "anh"          # build.py chép giao_dien -> docs/tai-nguyen


def tao_slug(s: str) -> str:
    s = s.replace("đ", "d").replace("Đ", "D")
    s = unicodedata.normalize("NFD", s).encode("ascii", "ignore").decode().lower()
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")[:80]


def doc_file(slug_cm: str) -> list[dict]:
    f = GOC / "noi_dung" / f"{slug_cm}.md"
    if not f.exists():
        return []
    ds = []
    for p in re.split(r"^@@@ ", f.read_text(encoding="utf-8"), flags=re.M)[1:]:
        dau, _, than = p.partition("\n")
        meta = json.loads(dau)
        meta["md"] = than.strip()
        ds.append(meta)
    return ds


def ghi_file(slug_cm: str, ds: list[dict]) -> None:
    phan = []
    for b in ds:
        meta = {k: b[k] for k in ("slug", "title", "summary", "date", "can_cu") if k in b}
        phan.append("@@@ " + json.dumps(meta, ensure_ascii=False) + "\n" + b["md"].strip() + "\n")
    (GOC / "noi_dung" / f"{slug_cm}.md").write_text("\n".join(phan), encoding="utf-8")


def tat_ca() -> dict[str, list[dict]]:
    return {c["slug"]: doc_file(c["slug"]) for c in CM}


class App(tk.Tk):
    def __init__(self) -> None:
        super().__init__()
        self.title("Đăng bài – Kế toán Thái Sơn")
        self.geometry("1180x760")
        self.minsize(900, 600)
        self.dang_sua: tuple[str, str] | None = None     # (chuyên mục, slug) của bài đang mở
        self.thay_doi = False
        self.hang: queue.Queue = queue.Queue()          # việc từ luồng chạy ngầm gửi về giao diện
        self.after(100, self.xu_ly_hang)

        trai = ttk.Frame(self, padding=8)
        trai.pack(side="left", fill="y")
        ttk.Button(trai, text="+ Bài mới", command=self.bai_moi).pack(fill="x")
        ttk.Button(trai, text="Văn bản mới (Công báo) → soạn bài", command=lambda: CuaSoVanBan(self)).pack(fill="x", pady=(4, 0))
        ttk.Label(trai, text="Bài đã có (bấm để sửa):").pack(anchor="w", pady=(10, 2))
        self.cay = ttk.Treeview(trai, show="tree", height=30)
        self.cay.column("#0", width=330)
        self.cay.pack(fill="y", expand=True)
        self.cay.bind("<<TreeviewSelect>>", self.chon_bai)

        phai = ttk.Frame(self, padding=8)
        phai.pack(side="left", fill="both", expand=True)
        phai.columnconfigure(1, weight=1)
        r = 0
        ttk.Label(phai, text="Chuyên mục").grid(row=r, column=0, sticky="w")
        self.cm = ttk.Combobox(phai, state="readonly", values=[c["ten"] for c in CM])
        self.cm.grid(row=r, column=1, sticky="we", pady=2)
        r += 1
        ttk.Label(phai, text="Tiêu đề").grid(row=r, column=0, sticky="w")
        self.tieu_de = ttk.Entry(phai)
        self.tieu_de.grid(row=r, column=1, sticky="we", pady=2)
        r += 1
        ttk.Label(phai, text="Tóm tắt").grid(row=r, column=0, sticky="w")
        self.tom_tat = ttk.Entry(phai)
        self.tom_tat.grid(row=r, column=1, sticky="we", pady=2)
        r += 1
        ttk.Label(phai, text="Ngày cập nhật").grid(row=r, column=0, sticky="w")
        hang = ttk.Frame(phai)
        hang.grid(row=r, column=1, sticky="we", pady=2)
        self.ngay = ttk.Entry(hang, width=14)
        self.ngay.pack(side="left")
        ttk.Label(hang, text="  (năm-tháng-ngày, vd 2026-10-20)   Địa chỉ bài:").pack(side="left")
        self.slug = ttk.Entry(hang)
        self.slug.pack(side="left", fill="x", expand=True)
        r += 1
        ttk.Label(phai, text="Căn cứ\n(mỗi dòng\n1 văn bản)").grid(row=r, column=0, sticky="nw")
        self.can_cu = tk.Text(phai, height=3, wrap="word", font=("Segoe UI", 10))
        self.can_cu.grid(row=r, column=1, sticky="we", pady=2)
        r += 1

        cu = ttk.Frame(phai)
        cu.grid(row=r, column=1, sticky="we", pady=(6, 2))
        ttk.Label(phai, text="Nội dung").grid(row=r, column=0, sticky="w")
        for nhan, ham in [("Mục lớn", lambda: self.dau_dong("## ")), ("Mục nhỏ", lambda: self.dau_dong("### ")),
                          ("Đậm", lambda: self.boc("**")), ("Gạch đầu dòng", lambda: self.dau_dong("- ")),
                          ("Đánh số", lambda: self.dau_dong("1. ")), ("Ghi chú", lambda: self.dau_dong("> ")),
                          ("Bảng", self.chen_bang), ("Chèn ảnh", self.chen_anh), ("Hướng dẫn", self.huong_dan)]:
            ttk.Button(cu, text=nhan, command=ham).pack(side="left", padx=1)
        r += 1
        self.noi_dung = tk.Text(phai, wrap="word", undo=True, font=("Consolas", 11))
        self.noi_dung.grid(row=r, column=1, sticky="nsew")
        phai.rowconfigure(r, weight=1)
        r += 1

        nut = ttk.Frame(phai)
        nut.grid(row=r, column=1, sticky="we", pady=(8, 0))
        ttk.Button(nut, text="Lưu", command=self.luu).pack(side="left")
        ttk.Button(nut, text="Xem thử trên máy", command=self.xem_thu).pack(side="left", padx=6)
        ttk.Button(nut, text="Đăng lên web", command=self.dang).pack(side="left")
        ttk.Button(nut, text="Xóa bài", command=self.xoa).pack(side="right")
        self.trang_thai = ttk.Label(phai, text="", foreground="#1d3f73")
        self.trang_thai.grid(row=r + 1, column=1, sticky="w", pady=(6, 0))

        for w in (self.tieu_de, self.tom_tat, self.ngay, self.slug):
            w.bind("<KeyRelease>", lambda e: self.da_doi())
        for w in (self.can_cu, self.noi_dung):
            w.bind("<<Modified>>", self.text_doi)
        self.tieu_de.bind("<KeyRelease>", self.tieu_de_doi, add="+")
        self.cm.bind("<<ComboboxSelected>>", lambda e: self.da_doi())
        self.protocol("WM_DELETE_WINDOW", self.thoat)
        self.nap_cay()
        self.bai_moi()

    # ---------- danh sách
    def nap_cay(self) -> None:
        self.cay.delete(*self.cay.get_children())
        for c in CM:
            ds = doc_file(c["slug"])
            nut = self.cay.insert("", "end", iid="cm:" + c["slug"], text=f"{c['icon']} {c['ten']} ({len(ds)})", open=False)
            for b in sorted(ds, key=lambda x: x["date"], reverse=True):
                self.cay.insert(nut, "end", iid=f"bai:{c['slug']}:{b['slug']}", text=b["title"])

    def chon_bai(self, _=None) -> None:
        sel = self.cay.selection()
        if not sel or not sel[0].startswith("bai:"):
            return
        _, cm, slug = sel[0].split(":", 2)
        if self.dang_sua == (cm, slug) or not self.hoi_luu():
            return
        b = next(x for x in doc_file(cm) if x["slug"] == slug)
        self.dien(cm, b)
        self.dang_sua = (cm, slug)
        self.thay_doi = False
        self.bao(f"Đang sửa: {b['title']}")

    def dien(self, cm: str, b: dict) -> None:
        self.cm.set(next(c["ten"] for c in CM if c["slug"] == cm))
        for w, v in ((self.tieu_de, b.get("title", "")), (self.tom_tat, b.get("summary", "")),
                     (self.ngay, b.get("date", "")), (self.slug, b.get("slug", ""))):
            w.delete(0, "end")
            w.insert(0, v)
        self.can_cu.delete("1.0", "end")
        self.can_cu.insert("1.0", "\n".join(b.get("can_cu", [])))
        self.noi_dung.delete("1.0", "end")
        self.noi_dung.insert("1.0", b.get("md", ""))
        self.noi_dung.edit_reset()
        for w in (self.can_cu, self.noi_dung):
            w.edit_modified(False)

    def bai_moi(self) -> None:
        if not self.hoi_luu():
            return
        self.dien(CM[0]["slug"], {"date": date.today().isoformat()})
        self.cm.set("")
        self.dang_sua = None
        self.thay_doi = False
        self.cay.selection_remove(self.cay.selection())
        self.bao("Bài mới: chọn chuyên mục, gõ tiêu đề, tóm tắt, nội dung rồi bấm Lưu.")
        self.tieu_de.focus_set()

    # ---------- theo dõi thay đổi
    def da_doi(self) -> None:
        self.thay_doi = True

    def text_doi(self, e) -> None:
        if e.widget.edit_modified():
            self.thay_doi = True
            e.widget.edit_modified(False)

    def tieu_de_doi(self, _=None) -> None:
        if self.dang_sua is None:            # bài mới: địa chỉ tự theo tiêu đề
            self.slug.delete(0, "end")
            self.slug.insert(0, tao_slug(self.tieu_de.get()))

    def hoi_luu(self) -> bool:
        if not self.thay_doi:
            return True
        tl = messagebox.askyesnocancel("Chưa lưu", "Bài đang viết chưa lưu. Lưu trước khi chuyển?")
        if tl is None:
            return False
        return self.luu() if tl else True

    # ---------- soạn thảo
    def dau_dong(self, tien_to: str) -> None:
        t = self.noi_dung
        try:
            a, b = t.index("sel.first linestart"), t.index("sel.last")
        except tk.TclError:
            a = b = t.index("insert linestart")
        dong = int(a.split(".")[0])
        while True:
            t.insert(f"{dong}.0", tien_to)
            dong += 1
            if t.compare(f"{dong}.0", ">", b):
                break
        t.focus_set()

    def boc(self, ky: str) -> None:
        t = self.noi_dung
        try:
            t.insert("sel.last", ky)
            t.insert("sel.first", ky)
        except tk.TclError:
            t.insert("insert", ky + "chữ đậm" + ky)
        t.focus_set()

    def chen_bang(self) -> None:
        self.noi_dung.insert("insert", "\n| Cột 1 | Cột 2 | Cột 3 |\n|---|---|---|\n| a | b | c |\n| d | e | f |\n\n")
        self.noi_dung.focus_set()

    def chen_anh(self) -> None:
        f = filedialog.askopenfilename(title="Chọn ảnh", filetypes=[("Ảnh", "*.png *.jpg *.jpeg *.webp *.gif")])
        if not f:
            return
        THU_MUC_ANH.mkdir(parents=True, exist_ok=True)
        p = Path(f)
        ten = tao_slug(p.stem) + p.suffix.lower()
        dich = THU_MUC_ANH / ten
        if dich.exists() and dich.stat().st_size != p.stat().st_size:
            ten = f"{tao_slug(p.stem)}-{date.today():%Y%m%d}{p.suffix.lower()}"
            dich = THU_MUC_ANH / ten
        shutil.copy2(p, dich)
        if dich.stat().st_size > 1_500_000:
            messagebox.showwarning("Ảnh lớn", f"Ảnh {dich.stat().st_size // 1024} KB, nên giảm dưới 500 KB cho trang tải nhanh.")
        self.noi_dung.insert("insert", f"\n![Mô tả ảnh](../tai-nguyen/anh/{ten})\n")
        self.noi_dung.focus_set()

    def huong_dan(self) -> None:
        messagebox.showinfo("Cách viết nội dung", (
            "## Tiêu đề mục       -> mục lớn (hiện trong mục lục bài)\n"
            "### Tiêu đề nhỏ\n"
            "**chữ đậm**\n"
            "- gạch đầu dòng\n"
            "1. đánh số\n"
            "> ghi chú, lưu ý (khung xanh)\n"
            "| Cột | Cột |  -> bảng (dòng 2 là |---|---|)\n"
            "[chữ](https://...) -> đường link\n\n"
            "Để trống 1 dòng giữa các đoạn.\n"
            "Lưu -> Xem thử trên máy -> Đăng lên web."))

    # ---------- lưu, xóa
    def doc_form(self) -> tuple[str, dict] | None:
        ten_cm = self.cm.get()
        loi = []
        if not ten_cm:
            loi.append("Chọn chuyên mục.")
        b = {"slug": tao_slug(self.slug.get()) or tao_slug(self.tieu_de.get()),
             "title": self.tieu_de.get().strip(), "summary": self.tom_tat.get().strip(),
             "date": self.ngay.get().strip(),
             "can_cu": [x.strip() for x in self.can_cu.get("1.0", "end").splitlines() if x.strip()],
             "md": self.noi_dung.get("1.0", "end").strip()}
        if not b["title"]:
            loi.append("Gõ tiêu đề.")
        if not b["summary"]:
            loi.append("Gõ tóm tắt (1–2 câu, hiện ở thẻ bài và Google).")
        if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", b["date"]):
            loi.append("Ngày phải dạng năm-tháng-ngày, vd 2026-10-20.")
        if not b["md"]:
            loi.append("Nội dung đang trống.")
        if "BẢN NHÁP" in b["md"]:
            loi.append("Bài còn dòng <!-- BẢN NHÁP … -->: đọc lại, đối chiếu toàn văn, sửa xong thì xóa dòng đó rồi Lưu.")
        if b["md"].startswith("@@@") or "\n@@@ " in b["md"]:
            loi.append("Nội dung không được có dòng bắt đầu bằng @@@.")
        if loi:
            messagebox.showerror("Thiếu thông tin", "\n".join(loi))
            return None
        if not b["can_cu"]:
            del b["can_cu"]
        cm = next(c["slug"] for c in CM if c["ten"] == ten_cm)
        return cm, b

    def luu(self) -> bool:
        kq = self.doc_form()
        if not kq:
            return False
        cm, b = kq
        moi = tat_ca()
        cu = self.dang_sua
        for c, ds in moi.items():                      # địa chỉ bài không được trùng bài khác
            if any(x["slug"] == b["slug"] and (c, x["slug"]) != cu for x in ds):
                messagebox.showerror("Trùng địa chỉ", f"Đã có bài khác dùng địa chỉ '{b['slug']}'. Sửa ô Địa chỉ bài.")
                return False
        if cu:
            ds_cu = moi[cu[0]]
            vi_tri = next(i for i, x in enumerate(ds_cu) if x["slug"] == cu[1])
            if cu[0] == cm:
                ds_cu[vi_tri] = b
            else:
                ds_cu.pop(vi_tri)
                ghi_file(cu[0], ds_cu)
                moi[cm].insert(0, b)
        else:
            moi[cm].insert(0, b)
        ghi_file(cm, moi[cm])
        self.dang_sua = (cm, b["slug"])
        self.thay_doi = False
        self.nap_cay()
        iid = f"bai:{cm}:{b['slug']}"
        self.cay.item("cm:" + cm, open=True)
        self.cay.selection_set(iid)
        self.cay.see(iid)
        self.bao(f"Đã lưu trên máy: {b['title']}. Bấm 'Đăng lên web' để đưa lên trang.")
        return True

    def xoa(self) -> None:
        if not self.dang_sua:
            return
        cm, slug = self.dang_sua
        if not messagebox.askyesno("Xóa bài", f"Xóa bài '{self.tieu_de.get()}'?\nSau khi 'Đăng lên web' bài sẽ mất khỏi trang."):
            return
        ghi_file(cm, [x for x in doc_file(cm) if x["slug"] != slug])
        self.thay_doi = False
        self.dang_sua = None
        self.nap_cay()
        self.bai_moi()
        self.bao("Đã xóa trên máy. Bấm 'Đăng lên web' để cập nhật trang.")

    # ---------- dựng, đăng
    def chay(self, lenh: list[str]) -> tuple[int, str]:
        env = dict(os.environ, PYTHONIOENCODING="utf-8")
        p = subprocess.run(lenh, cwd=GOC, capture_output=True, text=True, encoding="utf-8", errors="replace", env=env,
                           creationflags=getattr(subprocess, "CREATE_NO_WINDOW", 0))
        return p.returncode, (p.stdout + p.stderr).strip()

    def dung(self) -> bool:
        ma, ra = self.chay([sys.executable, "build.py"])
        if ma:
            self.goi(lambda: messagebox.showerror("Lỗi dựng trang", ra[-1500:]))
        return ma == 0

    def xem_thu(self) -> None:
        if self.thay_doi and not self.luu():
            return
        self.bao("Đang dựng trang…")

        def lam():
            if self.dung():
                trang = GOC / "docs" / ("bai-viet/" + self.dang_sua[1] + ".html" if self.dang_sua else "kien-thuc.html")
                webbrowser.open(trang.as_uri())
                self.goi(lambda: self.bao("Đã mở bản xem thử trên máy (chưa đăng lên web)."))
        threading.Thread(target=lam, daemon=True).start()

    def dang(self) -> None:
        if self.thay_doi and not self.luu():
            return
        if not messagebox.askyesno("Đăng lên web", "Đưa tất cả bài đã lưu lên trang web Thái Sơn?"):
            return
        self.bao("Đang dựng trang và đưa lên GitHub…")

        def lam():
            if not self.dung():
                return
            self.chay(["git", "add", "-A"])
            ma, ra = self.chay(["git", "commit", "-m", f"Cap nhat bai viet {date.today():%d/%m/%Y}"])
            if ma and "nothing to commit" in ra:
                self.goi(lambda: self.bao("Không có gì mới để đăng."))
                return
            ma, ra = self.chay(["git", "push"])
            if ma:
                self.goi(lambda: messagebox.showerror("Đăng chưa được", "Chưa đưa lên GitHub được (kiểm tra mạng, đăng nhập GitHub):\n\n" + ra[-1500:]))
                self.goi(lambda: self.bao("Đã lưu trên máy nhưng CHƯA lên web."))
                return
            url = CH.get("base_url", "")
            dia_chi = f"{url}/bai-viet/{self.dang_sua[1]}.html" if self.dang_sua else f"{url}/kien-thuc.html"
            self.goi(lambda: self.bao(f"Đã đăng. Trang cập nhật sau khoảng 1 phút: {dia_chi}"))
            self.goi(lambda: messagebox.showinfo("Đã đăng", f"Đã đưa lên web. Khoảng 1 phút sau trang sẽ cập nhật:\n{dia_chi}"))
        threading.Thread(target=lam, daemon=True).start()

    def bao(self, s: str) -> None:
        self.trang_thai.config(text=s)

    def goi(self, ham) -> None:
        """Gọi từ luồng chạy ngầm: ham() sẽ chạy trên luồng giao diện."""
        self.hang.put(ham)

    def xu_ly_hang(self) -> None:
        while not self.hang.empty():
            self.hang.get()()
        self.after(100, self.xu_ly_hang)

    def thoat(self) -> None:
        if self.hoi_luu():
            self.destroy()

    def nhan_ban_nhap(self, cm: str, b: dict) -> None:
        """Đưa bản nháp soạn từ văn bản mới vào ô soạn thảo (chưa lưu)."""
        if not self.hoi_luu():
            return
        b = dict(b, date=date.today().isoformat(), slug=tao_slug(b.get("title", "")))
        self.dien(cm, b)
        self.dang_sua = None
        self.thay_doi = True
        self.cay.selection_remove(self.cay.selection())
        self.lift()
        self.bao("BẢN NHÁP từ văn bản mới: đọc kỹ, sửa, đối chiếu toàn văn, xóa dòng <!-- BẢN NHÁP … --> rồi mới Lưu, Đăng.")


class CuaSoVanBan(tk.Toplevel):
    """Danh sách văn bản mới trên Công báo Chính phủ, xem toàn văn, soạn bản nháp bài viết."""

    def __init__(self, app: App) -> None:
        super().__init__(app)
        self.app = app
        self.title("Văn bản pháp luật mới – Công báo Chính phủ")
        self.geometry("1100x700")
        self.ds: list[dict] = []
        self.ct: dict[str, dict] = {}            # url -> chi tiết đã tải
        self.tv: dict[str, str] = {}             # url -> toàn văn

        tren = ttk.Frame(self, padding=6)
        tren.pack(fill="x")
        ttk.Button(tren, text="Quét văn bản mới", command=self.quet).pack(side="left")
        self.loc = tk.BooleanVar(value=True)
        self.an = tk.BooleanVar(value=False)
        ttk.Checkbutton(tren, text="Chỉ văn bản kế toán, thuế, lao động", variable=self.loc, command=self.hien).pack(side="left", padx=8)
        ttk.Checkbutton(tren, text="Ẩn văn bản đã xem", variable=self.an, command=self.hien).pack(side="left")
        self.nut_khoa = ttk.Button(tren, text="", command=self.dat_khoa)
        self.nut_khoa.pack(side="right")
        self.cap_nhat_nut_khoa()

        khung = ttk.PanedWindow(self, orient="vertical")
        khung.pack(fill="both", expand=True, padx=6)
        cot = ("tt", "so", "nguon", "tieu")
        self.bang = ttk.Treeview(khung, columns=cot, show="headings", height=12)
        for c, t, w in zip(cot, ("Trạng thái", "Số hiệu", "Nguồn", "Tên văn bản"), (90, 150, 110, 700)):
            self.bang.heading(c, text=t)
            self.bang.column(c, width=w, stretch=(c == "tieu"))
        self.bang.tag_configure("moi", font=("Segoe UI", 9, "bold"))
        self.bang.bind("<<TreeviewSelect>>", self.chon)
        self.bang.bind("<Double-1>", lambda e: self.mo_goc())
        khung.add(self.bang, weight=1)
        self.xem = tk.Text(khung, wrap="word", font=("Segoe UI", 10), height=14)
        khung.add(self.xem, weight=1)

        duoi = ttk.Frame(self, padding=6)
        duoi.pack(fill="x")
        ttk.Button(duoi, text="Mở trên Công báo", command=self.mo_goc).pack(side="left")
        ttk.Button(duoi, text="Xem toàn văn", command=self.toan_van).pack(side="left", padx=4)
        ttk.Button(duoi, text="Soạn bản nháp bài viết", command=self.soan).pack(side="left")
        ttk.Button(duoi, text="Đánh dấu đã xem", command=self.danh_dau).pack(side="left", padx=4)
        self.tt = ttk.Label(duoi, text="Bấm 'Quét văn bản mới'. Nguồn: congbao.chinhphu.vn (văn bản chính thức).", foreground="#1d3f73")
        self.tt.pack(side="left", padx=10)
        self.quet()

    def bao(self, s: str) -> None:
        self.app.goi(lambda: self.tt.config(text=s))

    def chay_nen(self, viec, xong, loi="Lỗi") -> None:
        def lam():
            try:
                kq = viec()
            except Exception as e:
                tin = str(e)[:800] or type(e).__name__            # e bị xóa khi ra khỏi khối except
                self.app.goi(lambda: (messagebox.showerror(loi, tin, parent=self), self.bao(loi)))
                return
            self.app.goi(lambda: xong(kq))
        threading.Thread(target=lam, daemon=True).start()

    # ---------- danh sách
    def quet(self) -> None:
        self.bao("Đang quét Công báo…")
        def xong(ds):
            self.ds = ds
            self.hien()
            self.bao(f"Đã quét {len(ds)} văn bản. Bấm một dòng để xem thông tin.")
        self.chay_nen(lambda: vb.quet(self.bao), xong, "Không quét được")

    def hien(self) -> None:
        xem = vb.da_xem()
        self.bang.delete(*self.bang.get_children())
        for x in self.ds:
            if self.loc.get() and not vb.lien_quan(x["tieu_de"]):
                continue
            if self.an.get() and x["url"] in xem:
                continue
            tt = "Đã có bài" if vb.da_co_bai(x["so_hieu"]) else ("Đã xem" if x["url"] in xem else "MỚI")
            self.bang.insert("", "end", iid=x["url"], values=(tt, x["so_hieu"], x["nguon"], x["tieu_de"]),
                             tags=("moi",) if tt == "MỚI" else ())

    def dang_chon(self) -> str | None:
        s = self.bang.selection()
        if not s:
            messagebox.showinfo("Chọn văn bản", "Bấm chọn một văn bản trong danh sách.", parent=self)
            return None
        return s[0]

    def ghi_xem(self, s: str) -> None:
        self.xem.delete("1.0", "end")
        self.xem.insert("1.0", s)

    def chon(self, _=None) -> None:
        s = self.bang.selection()
        if not s:
            return
        url = s[0]
        if url in self.ct:
            self.hien_ct(self.ct[url])
            return
        self.ghi_xem("Đang tải thông tin văn bản…")
        def xong(ct):
            self.ct[url] = ct
            if self.bang.selection() and self.bang.selection()[0] == url:
                self.hien_ct(ct)
        self.chay_nen(lambda: vb.chi_tiet(url), xong, "Không tải được văn bản")

    def hien_ct(self, ct: dict) -> None:
        self.ghi_xem(f"{ct['loai']} {ct['so_hieu']}\n{ct['trich_yeu'] or ct['tieu_de']}\n\n"
                     f"Ngày ban hành: {ct['ngay_ban_hanh']}    Ngày hiệu lực: {ct['ngay_hieu_luc']}    Người ký: {ct['nguoi_ky']}\n"
                     f"Công báo: {ct['url']}\n"
                     + ("" if ct["word"] else "\n(Văn bản không có file Word: bản nháp chỉ có thông tin chung.)"))

    def mo_goc(self) -> None:
        url = self.dang_chon()
        if url:
            webbrowser.open(url)

    def danh_dau(self) -> None:
        url = self.dang_chon()
        if url:
            vb.danh_dau_xem([url])
            self.hien()

    def lay_ct_tv(self, url: str) -> tuple[dict, str]:
        ct = self.ct.get(url) or vb.chi_tiet(url)
        self.ct[url] = ct
        if url not in self.tv:
            self.tv[url] = vb.chu_word(ct["word"]) if ct["word"] else ""
        return ct, self.tv[url]

    def toan_van(self) -> None:
        url = self.dang_chon()
        if not url:
            return
        self.ghi_xem("Đang tải toàn văn…")
        def xong(kq):
            ct, tv = kq
            self.ghi_xem(tv or "Văn bản không có file Word. Bấm 'Mở trên Công báo' để xem bản PDF.")
            self.bao(f"Toàn văn {ct['so_hieu']}: {len(tv):,} ký tự.")
        self.chay_nen(lambda: self.lay_ct_tv(url), xong, "Không tải được toàn văn")

    # ---------- soạn bài
    def soan(self) -> None:
        url = self.dang_chon()
        if not url:
            return
        dung_ai = bool(vb.khoa_api())
        self.bao("Đang tải văn bản và soạn bản nháp" + (" bằng Claude (khoảng 1–2 phút)…" if dung_ai else "…"))

        def viec():
            ct, tv = self.lay_ct_tv(url)
            cm = vb.doan_chuyen_muc(ct["tieu_de"] + " " + ct["trich_yeu"] + " " + tv[:4000])
            ten_cm = next(c["ten"] for c in CM if c["slug"] == cm)
            if dung_ai and tv:
                return cm, vb.soan_ai(ct, tv, ten_cm), "Claude"
            return cm, vb.khung_nhap(ct, tv), "khung"

        def xong(kq):
            cm, bai, cach = kq
            vb.danh_dau_xem([url])
            self.hien()
            self.app.nhan_ban_nhap(cm, bai)
            self.bao("Đã đưa bản nháp sang cửa sổ soạn bài" + (" (Claude soạn)." if cach == "Claude" else " (khung để tự viết)."))
        self.chay_nen(viec, xong, "Không soạn được bản nháp")

    def cap_nhat_nut_khoa(self) -> None:
        self.nut_khoa.config(text="Soạn bằng Claude: ĐANG BẬT" if vb.khoa_api() else "Bật soạn bằng Claude (nhập khóa API)…")

    def dat_khoa(self) -> None:
        from tkinter import simpledialog
        k = simpledialog.askstring("Khóa Claude API", "Dán khóa API (bắt đầu bằng sk-ant-…).\n"
                                   "Khóa chỉ lưu trên máy này (khoa_api.txt), không đưa lên web.\nĐể trống rồi OK để tắt.",
                                   parent=self, show="*")
        if k is None:
            return
        f = GOC / "khoa_api.txt"
        if k.strip():
            f.write_text(k.strip(), encoding="utf-8")
        elif f.exists():
            f.unlink()
        self.cap_nhat_nut_khoa()


if __name__ == "__main__":
    App().mainloop()
