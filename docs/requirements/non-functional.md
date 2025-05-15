# Non-Functional Requirements for Mini Job Social Network

## 1. Performance

* Hệ thống phải xử lý tối thiểu 5000 người dùng đồng thời.
* Trang tìm kiếm việc làm phải phản hồi trong vòng 2 giây với 95% truy vấn.
* Tin nhắn nội bộ và hành động ứng tuyển phải thực hiện dưới 1 giây với dữ liệu quy mô vừa.

## 2. Scalability

* Hệ thống thiết kế theo hướng microservices (hoặc modular layered) để dễ mở rộng tính năng và tăng tải.
* Cơ sở dữ liệu cần hỗ trợ phân vùng (sharding) và sao chép (replication).

## 3. Availability & Reliability

* Tối thiểu 99.5% uptime hàng tháng.
* Triển khai hệ thống sao lưu định kỳ (daily snapshot, weekly full backup).
* Hỗ trợ triển khai nhiều instance và cân bằng tải.

## 4. Security

* Xác thực 2 bước (2FA) cho tài khoản quan trọng (Employer, Admin).
* Dữ liệu nhạy cảm (mật khẩu, CV, lịch sử chat) được mã hoá AES hoặc tương đương.
* Các endpoint API yêu cầu xác thực OAuth2 hoặc JWT.
* Hệ thống có cơ chế phát hiện và ngăn chặn brute force, SQL injection, XSS.

## 5. Maintainability

* Mã nguồn tuân theo quy tắc clean code và SOLID.
* Áp dụng design patterns phù hợp (MVC, Repository, Factory).
* Tách biệt rõ các tầng Controller - Service - Repository.

## 6. Testability

* 80% mã nguồn có unit test (Mockito hoặc tương đương).
* Tích hợp kiểm thử tự động qua CI pipeline với Jacoco để đo lường coverage.

## 7. DevOps / CI-CD

* Tích hợp GitLab/GitHub CI để build/test/lint tự động.
* Docker hóa toàn bộ dịch vụ để dễ deploy lên môi trường staging/production.
* Hỗ trợ manual deploy và rollback nhanh khi cần.

## 8. Monitoring & Logging

* Dùng SonarQube và SonarLint để kiểm soát chất lượng mã.
* Ghi log chi tiết cho các thao tác hệ thống quan trọng.
* Tích hợp hệ thống cảnh báo nếu có lỗi nghiêm trọng (Slack, Email, hoặc Webhook).

## 9. Documentation

* Mỗi tính năng lớn đều có tài liệu Markdown mô tả yêu cầu, luồng xử lý và API tương ứng.
* Có sơ đồ kiến trúc (Context Diagram, Sequence Diagram) trong thư mục `docs/diagrams`.

## 10. Compliance & Audit

* Lưu trữ log đăng nhập, chỉnh sửa dữ liệu trong 6 tháng.
* Hệ thống phân quyền rõ ràng, giới hạn truy cập dữ liệu theo vai trò.
* Kiểm tra bảo mật định kỳ và audit quyền truy cập tối thiểu mỗi quý.
