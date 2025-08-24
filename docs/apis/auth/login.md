# Login

[← Quay lại Auth APIs](./README.md)

Đăng nhập vào hệ thống với email và mật khẩu.

## 📝 Endpoint

```
POST /auth/login
```

## 🔓 Authentication

Không yêu cầu authentication.

## 📤 Request Body

```json
{
	"email": "string",
	"password": "string"
}
```

### Parameters

| Field    | Type   | Required | Mô tả            |
| -------- | ------ | -------- | ---------------- |
| email    | string | ✅       | Email đã đăng ký |
| password | string | ✅       | Mật khẩu         |

## 📥 Response

### Success (200)

```json
{
	"status": "success",
	"message": "Đăng nhập thành công",
	"data": {
		"user": {
			"id": "68a9d7c43528b6857ef12bce",
			"name": "Gia Khang",
			"email": "user@example.com",
			"avatar": "https://cloudinary.com/image.jpg",
			"isVerified": true,
			"createdAt": "2025-08-24T10:00:00Z"
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

#### 400 - Validation Error

```json
{
	"status": "error",
	"message": "Dữ liệu không hợp lệ",
	"errors": {
		"email": "Email không hợp lệ",
		"password": "Mật khẩu không được để trống"
	}
}
```

#### 401 - Invalid Credentials

```json
{
	"status": "error",
	"message": "Email hoặc mật khẩu không chính xác"
}
```

#### 403 - Account Not Verified

```json
{
	"status": "error",
	"message": "Tài khoản chưa được xác thực. Vui lòng kiểm tra email."
}
```

## 💡 Lưu ý

-   Access token có thời hạn 15 phút (900 giây)
-   Refresh token có thời hạn dài hơn để làm mới access token
-   Tài khoản phải được xác thực (verified) mới có thể đăng nhập
-   Sử dụng access token trong header `Authorization: Bearer <token>` cho các request tiếp theo

## 🔗 Related Endpoints

-   [Refresh Token](./refresh-token.md) - Làm mới access token
-   [Logout](./logout.md) - Đăng xuất

---

_[← Quay lại Auth APIs](./README.md)_
