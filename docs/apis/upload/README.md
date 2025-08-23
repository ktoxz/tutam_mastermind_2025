# Upload APIs

[← Quay lại trang chính](../README.md)

Quản lý tải lên và xử lý tệp trong hệ thống KNotes.

## 📋 Danh sách Endpoints

| Endpoint                    | Method | Mô tả            | Auth Required |
| --------------------------- | ------ | ---------------- | ------------- |
| [/upload/image](./image.md) | POST   | Tải lên hình ảnh | ✅            |

## 🔐 Authentication

Tất cả endpoints trong nhóm này yêu cầu JWT token trong header:

```
Authorization: Bearer <access_token>
```

## 📤 Upload Specifications

### Image Upload

-   **Endpoint**: `/upload/image`
-   **Method**: POST
-   **Content-Type**: `multipart/form-data`
-   **Formats**: JPG, JPEG, PNG, GIF, WebP
-   **Max Size**: 10MB
-   **Storage**: Cloudinary
-   **Processing**: Auto-optimization, format conversion

## 🎯 Response Codes

| Code | Mô tả                                             |
| ---- | ------------------------------------------------- |
| 200  | Upload thành công                                 |
| 400  | Bad Request - File không hợp lệ                   |
| 401  | Unauthorized - Token không hợp lệ/hết hạn         |
| 413  | Payload Too Large - File quá lớn                  |
| 415  | Unsupported Media Type - Format không được hỗ trợ |
| 500  | Internal Server Error - Lỗi upload                |

## 🌐 Storage Integration

Hệ thống sử dụng **Cloudinary** để lưu trữ và xử lý hình ảnh:

-   ✅ Auto-optimization
-   ✅ Multiple format support
-   ✅ CDN delivery
-   ✅ Image transformations
-   ✅ Backup and redundancy

## 💡 Best Practices

1. **Optimize before upload**: Nén ảnh trước khi upload để tiết kiệm bandwidth
2. **Check file size**: Đảm bảo file không vượt quá giới hạn
3. **Handle errors**: Luôn xử lý các lỗi upload có thể xảy ra
4. **Progress tracking**: Hiển thị progress cho upload file lớn

---

_[← Quay lại trang chính](../README.md)_
