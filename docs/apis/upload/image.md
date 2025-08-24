# Upload Image

[← Quay lại Upload APIs](./README.md)

Tải lên hình ảnh và nhận URL để sử dụng trong ứng dụng.

## 📝 Endpoint

```
POST /upload/image
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

| Field | Type | Required | Mô tả                   |
| ----- | ---- | -------- | ----------------------- |
| image | file | ✅       | File hình ảnh để upload |

### File Requirements

-   **Formats**: JPG, JPEG, PNG, GIF, WebP
-   **Max Size**: 10MB
-   **Dimensions**: Không giới hạn (sẽ được tối ưu hóa)

## 📥 Response

### Success (200)

```json
{
	"status": "success",
	"message": "Upload hình ảnh thành công",
	"data": {
		"image": {
			"url": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/uploads/image_id.jpg",
			"publicId": "uploads/image_id",
			"format": "jpg",
			"width": 1920,
			"height": 1080,
			"size": 245760,
			"uploadedAt": "2025-08-24T15:30:00Z"
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
		"image": "Chỉ chấp nhận file hình ảnh (JPG, PNG, GIF, WebP)"
	}
}
```

#### 413 - File Too Large

```json
{
	"status": "error",
	"message": "File quá lớn. Kích thước tối đa là 10MB"
}
```

#### 401 - Unauthorized

```json
{
	"status": "error",
	"message": "Token không hợp lệ hoặc đã hết hạn"
}
```

#### 500 - Upload Failed

```json
{
	"status": "error",
	"message": "Có lỗi xảy ra khi upload file. Vui lòng thử lại."
}
```

## 📊 Response Fields

| Field      | Type   | Mô tả                                 |
| ---------- | ------ | ------------------------------------- |
| url        | string | URL công khai của hình ảnh            |
| publicId   | string | ID của ảnh trên Cloudinary            |
| format     | string | Format của file (jpg, png, gif, webp) |
| width      | number | Chiều rộng của ảnh (pixels)           |
| height     | number | Chiều cao của ảnh (pixels)            |
| size       | number | Kích thước file (bytes)               |
| uploadedAt | string | Thời gian upload (ISO 8601)           |

## 🖼️ Image Processing

Cloudinary tự động xử lý ảnh:

1. **Auto-optimization**: Tối ưu chất lượng và dung lượng
2. **Format detection**: Chuyển đổi sang format tối ưu
3. **Progressive loading**: Hỗ trợ hiển thị progressive
4. **CDN delivery**: Phân phối qua CDN toàn cầu

## 💡 Use Cases

-   Upload ảnh cho ghi chú
-   Tải ảnh đính kèm
-   Upload hình ảnh cho nội dung rich text
-   Lưu trữ screenshot

## 🔗 URL Transformations

Bạn có thể thêm transformations vào URL để thay đổi kích thước, chất lượng:

```
# Original
https://res.cloudinary.com/your-cloud/image/upload/v1234567890/uploads/image_id.jpg

# Resize to 300x200
https://res.cloudinary.com/your-cloud/image/upload/w_300,h_200,c_fit/v1234567890/uploads/image_id.jpg

# Auto quality
https://res.cloudinary.com/your-cloud/image/upload/q_auto/v1234567890/uploads/image_id.jpg
```

---

_[← Quay lại Upload APIs](./README.md)_
