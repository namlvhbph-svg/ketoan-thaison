# Kế toán Thái Sơn – trang kiến thức kế toán, thuế

Trang web: https://namlvhbph-svg.github.io/ketoan-thaison/

- `noi_dung/<chuyên mục>.md`: bài viết (Markdown). Mỗi bài mở đầu bằng dòng `@@@ {"slug": ..., "title": ..., "summary": ..., "date": ..., "can_cu": [...]}`.
- `cau_hinh.json`: tên công ty, liên hệ, chuyên mục, lịch thuế.
- `giao_dien/`: CSS, JS, biểu tượng.
- `trac_nghiem_goc/`: trang luyện thi trắc nghiệm.
- `build.py`: dựng trang tĩnh vào `docs/` (GitHub Pages phục vụ thư mục này).

## Đăng bài mới, sửa bài

Bấm đúp **DANG_BAI.cmd** (công cụ `dang_bai.py`):

1. **+ Bài mới**, hoặc bấm vào một bài trong danh sách bên trái để sửa.
2. Chọn chuyên mục, gõ tiêu đề, tóm tắt, căn cứ (mỗi dòng 1 văn bản), nội dung. Các nút trên ô nội dung chèn mục, chữ đậm, danh sách, bảng, ảnh.
3. **Lưu** → **Xem thử trên máy** → **Đăng lên web** (tự dựng trang và đưa lên GitHub; khoảng 1 phút sau trang cập nhật).

Cũng có thể sửa tay file trong `noi_dung`, chạy `python build.py` (cần `pip install markdown`), rồi commit và push.

Bài viết là nội dung gốc của Kế toán Thái Sơn, mang tính tham khảo; đối chiếu văn bản pháp luật hiện hành trước khi áp dụng.
