import { TErrorFirst } from '@/types/error-first.type';
import { Event } from '@packages/models';

const events: Event[] = [
	{
		_id: '1',
		title: 'Workshop Viết Nhật Ký Cảm Xúc',
		summary: 'Khám phá bản thân qua việc viết nhật ký, chia sẻ cảm xúc và tìm hiểu về tâm lý học tích cực.',
		content: `# Workshop Viết Nhật Ký Cảm Xúc

## Giới thiệu
Workshop này được thiết kế để giúp bạn khám phá bản thân thông qua việc viết nhật ký. Chúng tôi sẽ hướng dẫn bạn cách ghi chép cảm xúc hàng ngày, phân tích chúng và áp dụng các kỹ thuật tâm lý học tích cực để cải thiện sức khỏe tinh thần.

## Nội dung chính
- **Phần 1: Lý thuyết về nhật ký cảm xúc**
  - Tại sao viết nhật ký lại quan trọng?
  - Các loại nhật ký phổ biến và lợi ích của chúng.
- **Phần 2: Thực hành viết**
  - Hướng dẫn chi tiết cách bắt đầu.
  - Ví dụ về các mục nhật ký mẫu.
- **Phần 3: Chia sẻ và thảo luận**
  - Chia sẻ kinh nghiệm cá nhân.
  - Thảo luận nhóm về các chủ đề cảm xúc.

## Lợi ích
- Giảm stress và lo âu.
- Tăng khả năng tự nhận thức.
- Phát triển kỹ năng giao tiếp cảm xúc.

## Thông tin thêm
Workshop kéo dài 2 giờ, phù hợp cho mọi lứa tuổi. Hãy chuẩn bị sổ tay và bút để tham gia hiệu quả nhất!

*Đừng bỏ lỡ cơ hội này để bắt đầu hành trình khám phá bản thân!*`,
		location: 'Quận 1, TP.HCM',
		time: new Date('2024-12-15T14:00:00'),
		mainImage:
			'https://tse2.mm.bing.net/th/id/OIP.WjiXwrT-oaUQ1vVD5jwnoQHaE8?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
		gallery: [],
		members: ['user1', 'user2', 'user3'],
		slug: 'workshop-viet-nhat-ky-cam-xuc',
		mood_id: 'mood1',
	},
	{
		_id: '2',
		title: 'Buổi Thiền Mindfulness',
		summary: 'Thực hành thiền chánh niệm để giảm stress, tăng sự tập trung và cân bằng cảm xúc.',
		content: `# Buổi Thiền Mindfulness

## Mục tiêu
Buổi thiền này nhằm giúp bạn học cách sống chánh niệm, tập trung vào hiện tại và giảm bớt những suy nghĩ tiêu cực. Phù hợp cho cả người mới bắt đầu và những ai đã có kinh nghiệm.

## Chương trình
- **Khởi động (15 phút):** Hướng dẫn cơ bản về thiền.
- **Thực hành (30 phút):** Các bài tập thiền đơn giản.
- **Thảo luận (15 phút):** Chia sẻ cảm nhận sau buổi thiền.

## Lợi ích
- Giảm căng thẳng tinh thần.
- Cải thiện sự tập trung.
- Tăng cường sức khỏe tinh thần tổng thể.

## Lưu ý
Mang theo thảm ngồi thoải mái. Không cần kinh nghiệm trước.

*Hãy tham gia để tìm lại sự bình yên trong tâm hồn!*`,
		location: 'Quận 3, TP.HCM',
		time: new Date('2024-12-20T08:00:00'),
		mainImage:
			'https://tse2.mm.bing.net/th/id/OIP.WjiXwrT-oaUQ1vVD5jwnoQHaE8?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
		gallery: [],
		members: ['user4', 'user5'],
		slug: 'buoi-thien-mindfulness',
		mood_id: 'mood2',
	},
	{
		_id: '3',
		title: 'Hoạt Động Thiện Nguyện',
		summary: 'Cùng nhau tham gia các hoạt động thiện nguyện để lan tỏa yêu thương và tạo kết nối cộng đồng.',
		content: `# Hoạt Động Thiện Nguyện

## Giới thiệu
Hoạt động thiện nguyện hàng tháng của cộng đồng, tập trung vào việc giúp đỡ những người cần hỗ trợ trong khu vực. Chúng tôi tin rằng việc làm thiện sẽ mang lại niềm vui và ý nghĩa cho cuộc sống.

## Chi tiết hoạt động
- **Thời gian:** Sáng thứ Bảy hàng tháng.
- **Địa điểm:** Các khu vực cần hỗ trợ ở Quận 7.
- **Nội dung:** Phân phát đồ ăn, dọn dẹp môi trường, thăm hỏi người già cô đơn.

## Tại sao tham gia?
- Lan tỏa yêu thương.
- Tạo kết nối cộng đồng.
- Phát triển kỹ năng xã hội.

## Yêu cầu
Không cần kỹ năng đặc biệt, chỉ cần lòng nhiệt huyết. Đăng ký trước để nhận thông tin chi tiết.

*Bắt đầu hành trình thiện nguyện ngay hôm nay!*`,
		location: 'Quận 7, TP.HCM',
		time: new Date('2024-12-25T09:00:00'),
		mainImage:
			'https://tse2.mm.bing.net/th/id/OIP.WjiXwrT-oaUQ1vVD5jwnoQHaE8?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
		gallery: [],
		members: ['user6', 'user7', 'user8', 'user9'],
		slug: 'hoat-dong-thien-nguyen',
		mood_id: 'mood3',
	},
	{
		_id: '4',
		title: 'Câu Lạc Bộ Đọc Sách',
		summary: 'Chia sẻ những cuốn sách yêu thích, thảo luận về tâm lý học và phát triển bản thân.',
		content: `# Câu Lạc Bộ Đọc Sách

## Mục đích
Câu lạc bộ này dành cho những ai yêu thích sách và muốn thảo luận về các chủ đề tâm lý học, phát triển bản thân. Mỗi buổi, chúng ta sẽ chọn một cuốn sách để đọc và chia sẻ ý kiến.

## Lịch trình
- **Hàng tuần:** Thứ Năm lúc 19:00.
- **Định dạng:** Đọc trước, sau đó thảo luận nhóm.
- **Chủ đề:** Tâm lý học, tự giúp bản thân, tiểu thuyết truyền cảm hứng.

## Lợi ích
- Mở rộng kiến thức.
- Phát triển kỹ năng giao tiếp.
- Tìm kiếm bạn bè có cùng sở thích.

## Tham gia
Miễn phí, chỉ cần đăng ký. Mang theo cuốn sách nếu muốn chia sẻ.

*Hãy cùng nhau đắm chìm trong thế giới sách!*`,
		location: 'Quận 2, TP.HCM',
		time: new Date('2024-12-18T19:00:00'),
		mainImage:
			'https://tse2.mm.bing.net/th/id/OIP.WjiXwrT-oaUQ1vVD5jwnoQHaE8?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
		gallery: [],
		members: ['user10', 'user11'],
		slug: 'cau-lac-bo-doc-sach',
		mood_id: 'mood1',
	},
	{
		_id: '5',
		title: 'Chuyến Đi Trekking Tâm Hồn',
		summary: 'Kết hợp trekking với thiền tập, tận hưởng thiên nhiên và tìm lại sự bình yên trong tâm hồn.',
		content: `# Chuyến Đi Trekking Tâm Hồn

## Tổng quan
Chuyến đi trekking kết hợp với thiền tập tại Đà Lạt, nơi bạn có thể tận hưởng thiên nhiên và tìm lại sự bình yên. Phù hợp cho những ai muốn thư giãn và suy ngẫm.

## Lộ trình
- **Ngày 1:** Khởi hành và trekking nhẹ.
- **Ngày 2:** Thiền tập buổi sáng, khám phá cảnh quan.
- **Ngày 3:** Kết thúc và trở về.

## Yêu cầu
- Mang giày trekking và áo ấm.
- Kinh nghiệm trekking cơ bản.

## Lợi ích
- Giảm stress.
- Tăng cường sức khỏe thể chất.
- Tìm lại sự cân bằng tinh thần.

*Chuẩn bị cho một chuyến đi ý nghĩa!*`,
		location: 'Đà Lạt',
		time: new Date('2024-12-30T06:00:00'),
		mainImage:
			'https://tse2.mm.bing.net/th/id/OIP.WjiXwrT-oaUQ1vVD5jwnoQHaE8?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
		gallery: [],
		members: ['user12', 'user13', 'user14'],
		slug: 'chuyen-di-trekking-tam-hon',
		mood_id: 'mood4',
	},
];

export class EventService {
	private static instance: EventService | null = null;

	static getInstance(): EventService {
		if (!EventService.instance) {
			EventService.instance = new EventService();
		}
		return EventService.instance;
	}

	async getList(params?: { page?: number; limit?: number }): Promise<TErrorFirst<Error, Event[]>> {
		try {
			const page = params?.page ?? 1;
			const limit = params?.limit ?? events.length;
			const start = (page - 1) * limit;
			const end = start + limit;
			const result = events.slice(start, end);
			return [null, result];
		} catch (error) {
			return [error as Error, null];
		}
	}

	async getByMoodId(
		moodId: string,
		params?: { page?: number; limit?: number }
	): Promise<TErrorFirst<Error, Event[]>> {
		try {
			const filtered = events.filter((event) => event.mood_id === moodId);
			const page = params?.page ?? 1;
			const limit = params?.limit ?? filtered.length;
			const start = (page - 1) * limit;
			const end = start + limit;
			const result = filtered.slice(start, end);
			return [null, result];
		} catch (error) {
			return [error as Error, null];
		}
	}

	async getBySlug(slug: string): Promise<TErrorFirst<Error, Event>> {
		try {
			const event = events.find((event) => event.slug === slug);
			if (!event) {
				return [new Error('Event not found'), null];
			}
			return [null, event];
		} catch (error) {
			return [error as Error, null];
		}
	}
}
