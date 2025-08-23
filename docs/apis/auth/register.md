# Register Account

[← Quay lại Auth APIs](./README.md)

Đăng ký tài khoản người dùng mới trong hệ thống.

## 📝 Endpoint

```
POST /auth/register
```

## 🔓 Authentication

Không yêu cầu authentication.

## 📤 Request Body

```json
{
    "name": "string",
    "email": "string",
    "password": "string",
    "confirmPassword": "string",
    "acceptTerms": boolean
}
```

### Parameters

| Field           | Type    | Required | Mô tả                                                                    |
| --------------- | ------- | -------- | ------------------------------------------------------------------------ |
| name            | string  | ✅       | Tên đầy đủ của người dùng                                                |
| email           | string  | ✅       | Email của người dùng (phải unique)                                       |
| password        | string  | ✅       | Mật khẩu (ít nhất 8 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt) |
| confirmPassword | string  | ✅       | Xác nhận mật khẩu (phải giống password)                                  |
| acceptTerms     | boolean | ✅       | Đồng ý với điều khoản sử dụng                                            |

## 📥 Response

### Success (200)

```json
{
	"status": "success",
	"message": "Đăng ký thành công. Vui lòng kiểm tra email để xác thực tài khoản.",
	"data": {
		"email": "user@example.com",
		"otpExpiry": "2025-08-24T10:30:00Z"
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
		"password": "Mật khẩu phải có ít nhất 8 ký tự",
		"confirmPassword": "Mật khẩu xác nhận không khớp"
	}
}
```

#### 409 - Email Already Exists

```json
{
	"status": "error",
	"message": "Email đã được sử dụng"
}
```

## 💡 Lưu ý

-   Sau khi đăng ký thành công, một email chứa mã OTP sẽ được gửi đến địa chỉ email đã đăng ký
-   Tài khoản sẽ ở trạng thái chưa kích hoạt cho đến khi xác thực OTP
-   Mã OTP có thời hạn 10 phút

## 🔗 Related Endpoints

-   [Verify OTP](./verify-otp.md) - Xác thực OTP sau đăng ký
-   [Resend OTP](./resend-otp.md) - Gửi lại mã OTP

---

_[← Quay lại Auth APIs](./README.md)_
