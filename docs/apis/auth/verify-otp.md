# Verify OTP

[← Quay lại Auth APIs](./README.md)

Xác thực mã OTP được gửi qua email sau khi đăng ký tài khoản.

## 📝 Endpoint

```
POST /auth/verify-otp
```

## 🔓 Authentication

Không yêu cầu authentication.

## 📤 Request Body

```json
{
	"email": "string",
	"otp": "string"
}
```

### Parameters

| Field | Type   | Required | Mô tả            |
| ----- | ------ | -------- | ---------------- |
| email | string | ✅       | Email đã đăng ký |
| otp   | string | ✅       | Mã OTP 6 chữ số  |

## 📥 Response

### Success (200)

```json
{
	"status": "success",
	"message": "Xác thực thành công. Tài khoản đã được kích hoạt.",
	"data": {
		"user": {
			"id": "68a9d7c43528b6857ef12bce",
			"name": "Gia Khang",
			"email": "user@example.com",
			"isVerified": true
		},
		"tokens": {
			"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
			"refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
			"expiresIn": 900
		}
	}
}
```

### Error Responses

#### 400 - Invalid OTP

```json
{
	"status": "error",
	"message": "Mã OTP không chính xác"
}
```

#### 410 - OTP Expired

```json
{
	"status": "error",
	"message": "Mã OTP đã hết hạn. Vui lòng yêu cầu mã mới."
}
```

#### 404 - Email Not Found

```json
{
	"status": "error",
	"message": "Email không tồn tại trong hệ thống"
}
```

## 💡 Lưu ý

-   Mã OTP có hiệu lực trong 10 phút
-   Sau khi xác thực thành công, tài khoản sẽ được kích hoạt và tự động đăng nhập
-   Tokens được trả về để sử dụng ngay lập tức

## 🔗 Related Endpoints

-   [Resend OTP](./resend-otp.md) - Gửi lại mã OTP nếu hết hạn
-   [Register](./register.md) - Đăng ký tài khoản

---

_[← Quay lại Auth APIs](./README.md)_
