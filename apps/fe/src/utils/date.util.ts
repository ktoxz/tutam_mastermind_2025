import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';

/**
 * Tạo đối tượng Date hết hạn tại giờ, phút, giây chỉ định trong ngày hôm nay.
 * @param hh - Giờ (0-23)
 * @param mm - Phút (0-59)
 * @param ss - Giây (0-59)
 * @returns Đối tượng Date đại diện cho thời điểm hết hạn trong ngày hôm nay
 */
export function generateExpAtTime(hh: number, mm: number, ss: number): Timestamp {
	const now = new Date();
	const exp = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hh, mm, ss, 0);
	return exp.getTime() as Timestamp;
}

/**
 * Hiển thị ngày từ giá trị ngày trong DB, cho phép tuỳ chọn hiển thị giờ/phút/giây.
 * @param date - Giá trị ngày (string, number, hoặc Date)
 * @param options - Tuỳ chọn hiển thị
 *   - showTime: boolean - Có hiển thị giờ/phút/giây không (mặc định: false)
 * @returns Chuỗi ngày đã định dạng theo 'vi-VN'
 */
export function formatDate(date: string | number | Date): string {
	const d = new Date(date);
	if (isNaN(d.getTime())) return '';
	return d.toLocaleDateString('vi-VN', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
}
