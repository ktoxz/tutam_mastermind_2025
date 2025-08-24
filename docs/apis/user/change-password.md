# Change Password

[← Quay lại User APIs](./README.md)

Thay đổi mật khẩu tài khoản người dùng.

## 📝 Endpoint

```
PATCH /user/me/password
```

## 🔐 Authentication

Yêu cầu JWT token trong header:

```
Authorization: Bearer <access_token>
```

## 📤 Request Body

```json
{
	"currentPassword": "string",
	"newPassword": "string",
	"confirmNewPassword": "string"
}
```

### Parameters

| Field              | Type   | Required | Mô tả                                                                        |
| ------------------ | ------ | -------- | ---------------------------------------------------------------------------- |
| currentPassword    | string | ✅       | Mật khẩu hiện tại                                                            |
| newPassword        | string | ✅       | Mật khẩu mới (ít nhất 8 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt) |
| confirmNewPassword | string | ✅       | Xác nhận mật khẩu mới                                                        |

## 📥 Response

### Success (200)

```json
{
	"status": "success",
	"message": "Đổi mật khẩu thành công",
	"data": {
		"user": {
			"id": "68a9d7c43528b6857ef12bce",
			"name": "Thùy Dương",
			"email": "user@example.com",
			"avatar": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/avatars/user_avatar.jpg",
			"isVerified": true,
			"updatedAt": "2025-08-24T15:45:00Z"
		}
	}
}
```

### Error Responses

#### 400 - Validation Error

```json
{
	"status": "error",
	"message": "Dữ liệu không hợp lệ",
	"errors": {
		"newPassword": "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt",
		"confirmNewPassword": "Mật khẩu xác nhận không khớp"
	}
}
```

#### 401 - Wrong Current Password

```json
{
	"status": "error",
	"message": "Mật khẩu hiện tại không chính xác"
}
```

#### 401 - Unauthorized

```json
{
	"status": "error",
	"message": "Token không hợp lệ hoặc đã hết hạn"
}
```

## 🔒 Password Requirements

Mật khẩu mới phải đáp ứng các yêu cầu sau:

-   ✅ Ít nhất 8 ký tự
-   ✅ Có ít nhất 1 chữ hoa (A-Z)
-   ✅ Có ít nhất 1 chữ thường (a-z)
-   ✅ Có ít nhất 1 chữ số (0-9)
-   ✅ Có ít nhất 1 ký tự đặc biệt (!@#$%^&\*...)

## 🔐 Security Notes

-   Mật khẩu hiện tại phải được xác thực trước khi thay đổi
-   Mật khẩu mới được hash trước khi lưu vào database
-   Sau khi đổi mật khẩu, tất cả refresh tokens hiện tại sẽ bị vô hiệu hóa
-   Người dùng cần đăng nhập lại trên tất cả thiết bị

## 💡 Lưu ý

-   Thao tác này không làm mất hiệu lực access token hiện tại
-   Khuyến nghị đổi mật khẩu định kỳ để bảo mật tài khoản
-   Không được sử dụng lại mật khẩu cũ

---

_[← Quay lại User APIs](./README.md)_
