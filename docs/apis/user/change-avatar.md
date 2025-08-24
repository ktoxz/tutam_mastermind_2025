# Change Avatar

[← Quay lại User APIs](./README.md)

Thay đổi ảnh đại diện của người dùng.

## 📝 Endpoint

```
PATCH /user/me/avatar
```

## 🔐 Authentication

Yêu cầu JWT token trong header:

```
Authorization: Bearer <access_token>
```

## 📤 Request

### Content-Type

```
multipart/form-data
```

### Form Data

| Field | Type | Required | Mô tả              |
| ----- | ---- | -------- | ------------------ |
| image | file | ✅       | File ảnh để upload |

### File Requirements

-   **Formats**: JPG, JPEG, PNG, GIF
-   **Max Size**: 5MB
-   **Recommended**: Square images (1:1 ratio)

## 📥 Response

### Success (200)

```json
{
	"status": "success",
	"message": "Cập nhật ảnh đại diện thành công",
	"data": {
		"user": {
			"id": "68a9d7c43528b6857ef12bce",
			"name": "Thùy Dương",
			"email": "user@example.com",
			"avatar": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/avatars/new_avatar.jpg",
			"isVerified": true,
			"createdAt": "2025-08-20T10:00:00Z",
			"updatedAt": "2025-08-24T15:45:00Z"
		}
	}
}
```

### Error Responses

#### 400 - Invalid File

```json
{
	"status": "error",
	"message": "File không hợp lệ",
	"errors": {
		"image": "Chỉ chấp nhận file ảnh (JPG, PNG, GIF)"
	}
}
```

#### 413 - File Too Large

```json
{
	"status": "error",
	"message": "File quá lớn. Kích thước tối đa là 5MB"
}
```

#### 401 - Unauthorized

```json
{
	"status": "error",
	"message": "Token không hợp lệ hoặc đã hết hạn"
}
```

## 🖼️ Image Processing

-   Ảnh sẽ được tự động resize về kích thước tối ưu
-   Format được chuyển đổi để tối ưu hóa dung lượng
-   Ảnh cũ sẽ được xóa khỏi storage khi upload ảnh mới

## 💡 Lưu ý

-   Ảnh được lưu trữ trên Cloudinary
-   URL ảnh trả về có thể cache, nên có thể cần thời gian để cập nhật
-   Nếu upload thất bại, ảnh cũ vẫn được giữ nguyên

## 🔗 Related Endpoints

-   [Get User Profile](./get-me.md) - Xem thông tin và ảnh đại diện hiện tại

---

_[← Quay lại User APIs](./README.md)_
