# Authentication APIs

[← Quay lại trang chính](../README.md)

Quản lý xác thực và ủy quyền người dùng trong hệ thống KNotes.

## 📋 Danh sách Endpoints

| Endpoint                                           | Method | Mô tả                    | Auth Required |
| -------------------------------------------------- | ------ | ------------------------ | ------------- |
| [/auth/register](./register.md)                    | POST   | Đăng ký tài khoản mới    | ❌            |
| [/auth/verify-otp](./verify-otp.md)                | POST   | Xác thực OTP sau đăng ký | ❌            |
| [/auth/resend-otp](./resend-otp.md)                | POST   | Gửi lại mã OTP           | ❌            |
| [/auth/login](./login.md)                          | POST   | Đăng nhập hệ thống       | ❌            |
| [/auth/logout](./logout.md)                        | POST   | Đăng xuất                | ✅            |
| [/auth/refresh-token](./refresh-token.md)          | POST   | Làm mới access token     | ✅            |
| [/auth/forgot-password](./forgot-password.md)      | POST   | Yêu cầu reset mật khẩu   | ❌            |
| [/auth/reset-password/:token](./reset-password.md) | POST   | Đặt lại mật khẩu         | ❌            |

## 🔐 Flow xác thực

### 1. Đăng ký và kích hoạt tài khoản

```
Register → Verify OTP → Account Activated
    ↓
Resend OTP (nếu cần)
```

### 2. Đăng nhập và quản lý phiên

```
Login → Access Token + Refresh Token
    ↓
Refresh Token (khi access token hết hạn)
    ↓
Logout (khi kết thúc phiên)
```

### 3. Khôi phục mật khẩu

```
Forgot Password → Email với reset link → Reset Password
```

## 🎯 Response Codes

| Code | Mô tả                                     |
| ---- | ----------------------------------------- |
| 200  | Success                                   |
| 400  | Bad Request - Dữ liệu không hợp lệ        |
| 401  | Unauthorized - Token không hợp lệ/hết hạn |
| 409  | Conflict - Email đã tồn tại               |
| 429  | Too Many Requests - Vượt quá giới hạn     |
| 500  | Internal Server Error                     |

---

_[← Quay lại trang chính](../README.md)_
