# KNotes API Documentation

Tài liệu API cho ứng dụng KNotes - một ứng dụng ghi chú thông minh.

## 🚀 Tổng quan

API KNotes cung cấp các chức năng cốt lõi cho việc quản lý người dùng, xác thực và tải lên tệp. API được thiết kế theo kiến trúc RESTful với JWT authentication.

### Base URL

```
{{DOMAIN_API}}/
```

### Authentication

Hầu hết các endpoint yêu cầu JWT token trong header:

```
Authorization: Bearer <access_token>
```

## 📋 Danh sách API Endpoints

### 🔐 [Authentication APIs](./auth/)

Quản lý xác thực và ủy quyền người dùng

-   [Đăng ký tài khoản](./auth/register.md)
-   [Xác thực OTP](./auth/verify-otp.md)
-   [Gửi lại OTP](./auth/resend-otp.md)
-   [Đăng nhập](./auth/login.md)
-   [Đăng xuất](./auth/logout.md)
-   [Refresh token](./auth/refresh-token.md)
-   [Quên mật khẩu](./auth/forgot-password.md)
-   [Đặt lại mật khẩu](./auth/reset-password.md)

### 👤 [User Management APIs](./user/)

Quản lý thông tin người dùng

-   [Lấy thông tin cá nhân](./user/get-me.md)
-   [Thay đổi tên](./user/change-name.md)
-   [Đổi mật khẩu](./user/change-password.md)
-   [Thay đổi avatar](./user/change-avatar.md)
-   [Xóa tài khoản](./user/delete-account.md)

### 📤 [Upload APIs](./upload/)

Quản lý tải lên tệp

-   [Tải lên hình ảnh](./upload/image.md)

## 🔧 Response Format

### Success Response

```json
{
	"status": "success",
	"data": {
		// Response data
	}
}
```

### Error Response

```json
{
	"status": "error",
	"message": "Error description",
	"errors": {
		// Validation errors (if any)
	}
}
```

## 🌐 Environment Variables

Trong Postman collection, các biến environment được sử dụng:

-   `{{DOMAIN_API}}`: Base URL của API server
