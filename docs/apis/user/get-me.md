# Get User Profile

[← Quay lại User APIs](./README.md)

Lấy thông tin chi tiết của người dùng hiện tại.

## 📝 Endpoint

```
GET /user/me
```

## 🔐 Authentication

Yêu cầu JWT token trong header:

```
Authorization: Bearer <access_token>
```

## 📤 Request

Không cần request body.

## 📥 Response

### Success (200)

```json
{
	"status": "success",
	"data": {
		"user": {
			"id": "68a9d7c43528b6857ef12bce",
			"name": "Thùy Dương",
			"email": "user@example.com",
			"avatar": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/avatars/user_avatar.jpg",
			"isVerified": true,
			"createdAt": "2025-08-20T10:00:00Z",
			"updatedAt": "2025-08-24T15:30:00Z"
		}
	}
}
```

### Error Responses

#### 401 - Unauthorized

```json
{
	"status": "error",
	"message": "Token không hợp lệ hoặc đã hết hạn"
}
```

#### 404 - User Not Found

```json
{
	"status": "error",
	"message": "Người dùng không tồn tại"
}
```

## 📊 Response Fields

| Field      | Type         | Mô tả                               |
| ---------- | ------------ | ----------------------------------- |
| id         | string       | ID duy nhất của người dùng          |
| name       | string       | Tên hiển thị                        |
| email      | string       | Địa chỉ email                       |
| avatar     | string\|null | URL ảnh đại diện (null nếu chưa có) |
| isVerified | boolean      | Trạng thái xác thực email           |
| createdAt  | string       | Thời gian tạo tài khoản (ISO 8601)  |
| updatedAt  | string       | Thời gian cập nhật cuối (ISO 8601)  |

## 💡 Lưu ý

-   Endpoint này chỉ trả về thông tin của người dùng hiện tại (dựa trên token)
-   Avatar URL có thể là null nếu người dùng chưa upload ảnh đại diện
-   Thông tin nhạy cảm như mật khẩu không được trả về

## 🔗 Related Endpoints

-   [Change Name](./change-name.md) - Thay đổi tên hiển thị
-   [Change Avatar](./change-avatar.md) - Thay đổi ảnh đại diện

---

_[← Quay lại User APIs](./README.md)_
