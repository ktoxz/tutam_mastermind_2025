import { TErrorFirst } from '@/types';
import { MusicPlaylist } from '@models';
import musicPlaylists from './data';

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
	public async getByMoodId(mood_id: string, params?: { page?: number; limit?: number }): Promise<TErrorFirst<null, MusicPlaylist[]>> {
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
