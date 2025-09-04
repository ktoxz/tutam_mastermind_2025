import { TErrorFirst } from '@/types';
import { MusicPlaylist } from '@packages/models';

const musicPlaylists: MusicPlaylist[] = [
	{
		_id: 'playlist-1',
		slug: 'playlist-nhac-nho-cac-cau-du-mot-minh-cung-khong-sao',
		title: 'Playlist này nhắc nhở các cậu rằng dù một mình cũng không sao cả, vẫn ổn thôi đúng không!',
		description: 'Âm nhạc chữa lành cho những lúc cảm thấy cô đơn.',
		ytb_video_id: 'zOTWhWbT804',
		ytb_playlist_id: '',
		mood_id: 'mood-2',
		createdAt: new Date('2023-01-01'),
		updatedAt: new Date('2023-01-01'),
	},
	{
		_id: 'playlist-2',
		slug: 'playlist-am-nhac-chua-lanh-gap-lai-nam-ta-60',
		title: 'Playlist âm nhạc chữa lành - Gặp lại năm ta 60, suýt nữa thì, em có nhớ anh không',
		description: 'Tuyển tập nhạc chữa lành với những bản hit quen thuộc.',
		ytb_video_id: 'VR5E17Bb18g',
		ytb_playlist_id: '',
		mood_id: 'mood-2',
		createdAt: new Date('2023-01-02'),
		updatedAt: new Date('2023-01-02'),
	},
	{
		_id: 'playlist-3',
		slug: 'co-nhung-ngay-tho-thoi-cung-thay-met',
		title: 'Có những ngày thở thôi cũng thấy mệt...',
		description: 'Âm nhạc cho những ngày mệt mỏi, giúp thư giãn.',
		ytb_video_id: 'tljNeEorN54',
		ytb_playlist_id: '',
		mood_id: 'mood-4',
		createdAt: new Date('2023-01-03'),
		updatedAt: new Date('2023-01-03'),
	},
	{
		_id: 'playlist-4',
		slug: 'nguoi-lon-cung-duoc-phep-noi-met',
		title: 'Người lớn cũng được phép nói mệt mà, nên là cứ dùng lại nghỉ ngơi thôi',
		description: 'Nhạc chữa lành khuyến khích nghỉ ngơi và thư giãn.',
		ytb_video_id: 'fH5Z2UPgaek',
		ytb_playlist_id: '',
		mood_id: 'mood-4',
		createdAt: new Date('2023-01-04'),
		updatedAt: new Date('2023-01-04'),
	},
	{
		_id: 'playlist-5',
		slug: 'playlist-nhac-chill-yeu-doi-danh-cho-ban',
		title: 'Playlist nhạc chill yêu đời này chính là dành cho bạn :3',
		description: 'Playlist nhạc chill yêu đời, giúp bạn thư giãn và tận hưởng cuộc sống.',
		ytb_video_id: 'PzNZgR1J3fA',
		ytb_playlist_id: '',
		mood_id: 'mood-1',
		createdAt: new Date('2023-01-05'),
		updatedAt: new Date('2023-01-05'),
	},
	{
		_id: 'playlist-6',
		slug: 'playlist-am-nhac-cua-chillies-cu-chill-thoi',
		title: 'Playlist âm nhạc của Chillies - Cứ Chill Thôi, Có em đời bỗng vui, ...',
		description: 'Tuyển tập nhạc chill vui tươi từ Chillies, mang lại năng lượng tích cực.',
		ytb_video_id: 'DunmJ8xya4U',
		ytb_playlist_id: '',
		mood_id: 'mood-1',
		createdAt: new Date('2023-01-06'),
		updatedAt: new Date('2023-01-06'),
	},
	{
		_id: 'playlist-7',
		slug: 'lofi-cho-hoc-tap-va-lam-viec-ket-hop-tieng-mua',
		title: 'Lofi cho học tập và làm việc, kết hợp với tiếng mưa. Chìm vào tĩnh lặng',
		description: 'Nhạc lofi thư giãn cho học tập và làm việc, kết hợp với tiếng mưa để chìm vào tĩnh lặng.',
		ytb_video_id: '9kzE8isXlQY',
		ytb_playlist_id: '',
		mood_id: 'mood-3',
		createdAt: new Date('2023-01-07'),
		updatedAt: new Date('2023-01-07'),
	},
	{
		_id: 'playlist-8',
		slug: 'playlist-cua-den-vau-am-nhac-chua-lanh',
		title: 'Playlist của Đen Vâu - Âm nhạc chữa lành',
		description: 'Tuyển tập nhạc chữa lành từ Đen Vâu, mang lại sự bình yên và chữa lành tâm hồn.',
		ytb_video_id: 'ZpPBozhojuo',
		ytb_playlist_id: 'PLH_v4r_pvudV5ZrNx9HldKLICIjUSCRLb',
		mood_id: 'mood-2',
		createdAt: new Date('2023-01-08'),
		updatedAt: new Date('2023-01-08'),
	},
];

class MusicPlaylistService {
	private static instance: MusicPlaylistService = MusicPlaylistService.getInstance();

	private constructor() {}

	public static getInstance(): MusicPlaylistService {
		if (!MusicPlaylistService.instance) {
			MusicPlaylistService.instance = new MusicPlaylistService();
		}
		return MusicPlaylistService.instance;
	}

	public async getList(params?: { page?: number; limit?: number }): Promise<TErrorFirst<null, MusicPlaylist[]>> {
		try {
			const page = params?.page ?? 1;
			const limit = params?.limit ?? musicPlaylists.length;
			const start = (page - 1) * limit;
			const end = start + limit;
			const result = musicPlaylists.slice(start, end);
			return [null, result];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async getById(_id: string): Promise<TErrorFirst<null, MusicPlaylist | undefined>> {
		try {
			const playlist = musicPlaylists.find((p) => p._id === _id);
			return [null, playlist];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async getBySlug(slug: string): Promise<TErrorFirst<null, MusicPlaylist | undefined>> {
		try {
			const playlist = musicPlaylists.find((m) => m.slug === slug);
			return [null, playlist];
		} catch (err: any) {
			return [err, null];
		}
	}
	public async getByMoodId(
		mood_id: string,
		params?: { page?: number; limit?: number }
	): Promise<TErrorFirst<null, MusicPlaylist[]>> {
		try {
			const filtered = musicPlaylists.filter((p) => p.mood_id === mood_id);
			const page = params?.page ?? 1;
			const limit = params?.limit ?? filtered.length;
			const start = (page - 1) * limit;
			const end = start + limit;
			const result = filtered.slice(start, end);
			return [null, result];
		} catch (err: any) {
			return [err, null];
		}
	}
}

export { MusicPlaylistService };
