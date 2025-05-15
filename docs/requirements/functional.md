# Functional Requirements for Mini Job Social Network

## Primary Actors

* **Guest (Khách vãng lai)**: Truy cập hệ thống mà không cần tài khoản, chỉ xem thông tin công khai.
* **Job Seeker (Người tìm việc)**: Tìm việc và quản lý hồ sơ ứng tuyển.
* **Employer (Nhà tuyển dụng)**: Đăng tin tuyển dụng và quản lý ứng viên.
* **Manager (Quản lý cơ sở dữ liệu cơ bản)**: Quản lý dữ liệu xét duyệt cơ bản như tin tuyển dụng, bài viết, người dùng tiêu chuẩn; không truy cập dữ liệu nhạy cảm.
* **Administrator (Quản trị viên)**: Quản lý toàn bộ hệ thống, bao gồm phân quyền, bảo mật cao, sao lưu, và duyệt nội dung đặc thù.

---

## 1. User Management & Authorization

### 1.1 Đăng ký / Đăng nhập

* Guest có thể truy cập trang chủ và xem tin công khai mà không cần tài khoản.
* Job Seeker & Employer có thể tạo tài khoản mới (qua email hoặc OAuth), hỗ trợ tính năng "Quên mật khẩu" và xác thực hai bước (2FA).
* Manager & Administrator đăng nhập qua giao diện quản trị riêng với xác thực mạnh (multi-factor authentication).

### 1.2 Vai trò & Quyền hạn

* Guest: Xem danh sách việc làm và bài viết công khai.
* Job Seeker: Tạo, chỉnh sửa, ẩn/hủy hồ sơ cá nhân; ứng tuyển và theo dõi quá trình ứng tuyển.
* Employer: Quản lý tin tuyển dụng, tài khoản tuyển dụng, xem hồ sơ ứng viên.
* Manager: Duyệt hoặc từ chối tin tuyển dụng, bài viết, người dùng tiêu chuẩn; chỉnh sửa dữ liệu không nhạy cảm.
* Administrator: Khóa/mở khóa tài khoản, truy cập và quản lý dữ liệu nhạy cảm (CV, lịch sử trò chuyện), cấu hình bảo mật, sao lưu toàn hệ thống.

---

## 2. Job Posting & Search

### 2.1 Đăng tin tuyển dụng (Employer)

* Tạo, chỉnh sửa, xóa tin tuyển dụng với các trường thông tin: mô tả công việc, yêu cầu, lương, hình thức làm việc.
* Tin đăng được duyệt bởi Manager hoặc Administrator tuỳ cấu hình hệ thống.

### 2.2 Tìm kiếm & Lọc công việc (Job Seeker & Guest)

* Tìm kiếm theo từ khóa, địa điểm, mức lương, lĩnh vực.
* Guest chỉ xem kết quả, không thể lưu bộ lọc.
* Job Seeker có thể lưu bộ lọc tìm kiếm và nhận thông báo khi có tin phù hợp.

### 2.3 Danh sách yêu thích

* Job Seeker có thể thêm hoặc xoá việc làm đã lưu.
* Guest không có quyền sử dụng tính năng này.

---

## 3. Ứng tuyển & Theo dõi

### 3.1 Ứng tuyển nhanh (Job Seeker)

* Gửi CV và thư xin việc (cover letter) trực tiếp qua nền tảng.
* Theo dõi trạng thái ứng tuyển.
* Manager không can thiệp vào quá trình ứng tuyển.
* Administrator chỉ truy vấn dữ liệu nếu cần điều tra.

### 3.2 Thông báo & Nhắc nhở

* Gửi thông báo qua email hoặc push notification khi có phản hồi từ nhà tuyển dụng, lịch phỏng vấn, hoặc tin phù hợp với bộ lọc.

---

## 4. Giao tiếp & Mạng lưới

### 4.1 Nhắn tin nội bộ

* Job Seeker và Employer có thể trò chuyện bảo mật trong nền tảng.
* Manager chỉ xem được báo cáo vi phạm.
* Administrator có quyền truy cập vào tin nhắn khi cần điều tra.

### 4.2 Networking

* Người dùng có thể kết nối, chia sẻ bài viết.
* Guest chỉ được đọc bài viết, không thể bình luận.

---

## 5. Quản trị & Bảo mật

### 5.1 Dashboard quản trị

* Manager: Xem thống kê cơ bản (số lượng tin tuyển dụng, tài khoản mới), duyệt nội dung tiêu chuẩn.
* Administrator: Xem thống kê nâng cao (lượt xem, lượt ứng tuyển, vi phạm), cấu hình bảo mật, và sao lưu hệ thống.

### 5.2 Kiểm duyệt & Xử lý vi phạm

* Hệ thống tự động phát hiện nội dung spam hoặc không phù hợp.
* Manager xử lý báo cáo người dùng tiêu chuẩn.
* Administrator xử lý vi phạm nghiêm trọng hoặc lặp lại nhiều lần.

### 5.3 Bảo mật & Sao lưu

* Mã hóa dữ liệu nhạy cảm như CV, lịch sử trò chuyện.
* Sao lưu định kỳ toàn bộ hệ thống.
* Administrator là người chịu trách nhiệm phục hồi hệ thống và đặt lại mật khẩu cấp cao nếu cần.
