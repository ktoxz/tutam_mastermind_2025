type MusicPlaylist = {
	_id: string;
	title: string;
	description: string;
	ytb_video_id: string;
	ytb_playlist_id: string;
	mood_id: string;
	slug: string;
	createdAt: Date;
	updatedAt: Date;
};

const mapMusicPlaylist = (data: any): MusicPlaylist => {
	return {
		_id: data._id?.toString() || data._id,
		title: data.title,
		description: data.description,
		ytb_video_id: data.ytb_video_id,
		ytb_playlist_id: data.ytb_playlist_id,
		mood_id: data.mood_id,
		slug: data.slug,
		createdAt: data.createdAt,
		updatedAt: data.updatedAt,
	};
};

export type { MusicPlaylist };
export { mapMusicPlaylist };
