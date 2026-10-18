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

## Cập nhật văn bản mới, soạn bài

Trong DANG_BAI.cmd bấm **Văn bản mới (Công báo) → soạn bài** (mã: `cap_nhat_van_ban.py`):

- Quét văn bản mới trên **Công báo Chính phủ** (congbao.chinhphu.vn): Quốc hội, UBTVQH, Chính phủ, Thủ tướng, Bộ Tài chính, Bộ Nội vụ; lọc văn bản kế toán, thuế, lao động; đánh dấu MỚI / Đã xem / Đã có bài.
- **Xem toàn văn** (lấy từ file Word chính thức), **Soạn bản nháp bài viết**: đưa sang ô soạn bài.
  - Chưa có khóa Claude API: bản nháp là khung bài + thông tin văn bản + nguyên văn điều "Phạm vi", "Hiệu lực" để tự viết lại.
  - Có khóa (nút "Bật soạn bằng Claude"): Claude viết bài từ toàn văn. Khóa lưu ở `khoa_api.txt`, không đưa lên GitHub.
- Bản nháp có dòng `<!-- BẢN NHÁP … -->`: tool không cho Lưu cho đến khi xóa dòng này, để buộc đọc và đối chiếu trước khi đăng.

Chỉ lấy văn bản pháp luật từ nguồn chính thức của Nhà nước (không thuộc đối tượng bảo hộ quyền tác giả). Không lấy bài từ thuvienphapluat hay trang dịch vụ kế toán khác: nội dung các trang đó có bản quyền.

Cũng có thể sửa tay file trong `noi_dung`, chạy `python build.py` (cần `pip install markdown`), rồi commit và push.

Bài viết là nội dung gốc của Kế toán Thái Sơn, mang tính tham khảo; đối chiếu văn bản pháp luật hiện hành trước khi áp dụng.
