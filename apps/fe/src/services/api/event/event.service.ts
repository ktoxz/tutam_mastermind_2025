import { TErrorFirst } from '@/types/error-first.type';
import { Event } from '@packages/models';

const events: Event[] = [
	{
		_id: '1',
		title: 'Workshop Viết Nhật Ký Cảm Xúc',
		summary: 'Khám phá bản thân qua việc viết nhật ký, chia sẻ cảm xúc và tìm hiểu về tâm lý học tích cực.',
		content: 'Workshop giúp bạn học cách viết nhật ký để hiểu rõ hơn về cảm xúc của mình...',
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
		content: 'Buổi thiền mindfulness dành cho người mới bắt đầu...',
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
		content: 'Hoạt động thiện nguyện hàng tháng của cộng đồng...',
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
		content: 'Câu lạc bộ đọc sách hàng tuần...',
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
		content: 'Chuyến đi trekking kết hợp với thiền tập...',
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
