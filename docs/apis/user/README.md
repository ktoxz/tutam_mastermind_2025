# User Management APIs

[← Quay lại trang chính](../README.md)

Quản lý thông tin và cài đặt tài khoản người dùng.

## 📋 Danh sách Endpoints

| Endpoint                                  | Method | Mô tả                 | Auth Required |
| ----------------------------------------- | ------ | --------------------- | ------------- |
| [/user/me](./get-me.md)                   | GET    | Lấy thông tin cá nhân | ✅            |
| [/user/me/name](./change-name.md)         | PATCH  | Thay đổi tên hiển thị | ✅            |
| [/user/me/password](./change-password.md) | PATCH  | Đổi mật khẩu          | ✅            |
| [/user/me/avatar](./change-avatar.md)     | PATCH  | Thay đổi ảnh đại diện | ✅            |
| [/user/me](./delete-account.md)           | DELETE | Xóa tài khoản         | ✅            |

## 🔐 Authentication

Tất cả endpoints trong nhóm này yêu cầu JWT token trong header:

```
Authorization: Bearer <access_token>
```

## 👤 User Object Structure

```json
{
    "id": "string",
    "name": "string",
    "email": "string",
    "avatar": "string|null",
    "isVerified": boolean,
    "createdAt": "string",
    "updatedAt": "string"
}
```

## 🎯 Response Codes

| Code | Mô tả                                     |
| ---- | ----------------------------------------- |
| 200  | Success                                   |
| 400  | Bad Request - Dữ liệu không hợp lệ        |
| 401  | Unauthorized - Token không hợp lệ/hết hạn |
| 403  | Forbidden - Không có quyền truy cập       |
| 404  | Not Found - Người dùng không tồn tại      |
| 413  | Payload Too Large - File quá lớn          |
| 500  | Internal Server Error                     |

## 📤 Upload Specifications

### Avatar Upload

-   **Formats**: JPG, JPEG, PNG, GIF
-   **Max Size**: 5MB
-   **Dimensions**: Tự động resize về 400x400px
-   **Storage**: Cloudinary

---

_[← Quay lại trang chính](../README.md)_
