# Mẫu Thiết Kế Model

Khi thiết kế model mới trong dự án, hãy tuân thủ template dưới đây để đảm bảo tính nhất quán và dễ bảo trì.

```typescript
/**
 * NOTE:
 * Khi thiết kế model mới, phải tuân thủ template này.
 * - Định nghĩa type với tên model thay thế cho 'Template'.
 * - Xây dựng hàm ánh xạ (mapping) với tên tương ứng, ví dụ: mapTenModel.
 * - Đảm bảo các trường dữ liệu và kiểu dữ liệu phù hợp với yêu cầu của model mới.
 * - Đảm bảo xuất (export) cả type model và hàm mapper trong file model.
 * - Đảm bảo thêm xuất (export) cả type model và hàm mapper vào file `index.ts` của thư mục models.
 */

type Template = {
	id: string;
	name: string;
	content: string;
};

/**
 * Hàm mẫu minh họa cách thiết kế file định nghĩa model trong dự án.
 *
 * Hàm `mapTemplate` nhận vào một đối tượng dữ liệu bất kỳ và chuyển đổi nó sang kiểu `Template`.
 * Đây là ví dụ cho cách xây dựng các hàm ánh xạ (mapping) giữa dữ liệu thô và model chuẩn của dự án.
 *
 * File này đóng vai trò như một mẫu (template) để các file model khác trong dự án tham khảo về cách định nghĩa và ánh xạ dữ liệu.
 *
 * @param data Đối tượng dữ liệu đầu vào cần chuyển đổi.
 * @returns Đối tượng kiểu `Template` đã được ánh xạ từ dữ liệu đầu vào.
 */
const mapTemplate = (data: any): Template => {
	return {
		id: data.id,
		name: data.name,
		content: data.content,
	};
};

export type { Template };
export { mapTemplate };
```

**Hướng dẫn:**

-   Đổi tên `Template` thành tên model bạn cần.
-   Định nghĩa các trường dữ liệu phù hợp với yêu cầu.
-   Tạo hàm ánh xạ dữ liệu tương ứng với tên model.
-   Sử dụng mẫu này cho tất cả các file model trong dự án để đảm bảo thống nhất.
-   Đảm bảo xuất (export) cả type model và hàm mapper trong file model.
-   Đảm bảo thêm xuất (export) cả type model và hàm mapper vào file `index.ts` của thư mục models, ví dụ:
    ```typescript
    export * from './TenModel';
    ```
