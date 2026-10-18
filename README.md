# Kế toán Thái Sơn – trang kiến thức kế toán, thuế

Trang web: https://namlvhbph-svg.github.io/ketoan-thaison/

- `noi_dung/<chuyên mục>.md`: bài viết (Markdown). Mỗi bài mở đầu bằng dòng `@@@ {"slug": ..., "title": ..., "summary": ..., "date": ..., "can_cu": [...]}`.
- `cau_hinh.json`: tên công ty, liên hệ, chuyên mục, lịch thuế.
- `giao_dien/`: CSS, JS, biểu tượng.
- `trac_nghiem_goc/`: trang luyện thi trắc nghiệm.
- `build.py`: dựng trang tĩnh vào `docs/` (GitHub Pages phục vụ thư mục này).

Thêm / sửa bài: sửa file trong `noi_dung`, chạy `python build.py` (cần `pip install markdown`), rồi commit và push.

Bài viết là nội dung gốc của Kế toán Thái Sơn, mang tính tham khảo; đối chiếu văn bản pháp luật hiện hành trước khi áp dụng.
