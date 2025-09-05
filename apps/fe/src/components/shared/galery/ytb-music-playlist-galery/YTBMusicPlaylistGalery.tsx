'use client';
import React from 'react';
import Carousel from '@/components/shared/casourel/Casourel';
import { useRefSize } from '@/hooks/ui/useRefSize';
import { MusicPlaylist } from '@packages/models';
import YTBMusicPlaylistCard from '@/components/shared/card/ytb-music-playlist-card/YTBMusicPlaylistCard';

interface YTBMusicPlaylistGaleryProps {
	playlists: MusicPlaylist[];
	loading?: boolean;
	title?: string;
}

const YTBMusicPlaylistGalery: React.FC<YTBMusicPlaylistGaleryProps> = ({
	playlists,
	loading = false,
	title = 'YouTube Music Playlists',
}) => {
	const [playlistRef, size] = useRefSize();
	const itemWidth = size?.width && size.width > 0 ? size.width / 3.5 : 260;

	return (
		<Carousel
			itemWidth={itemWidth}
			autoScrollInterval={3000}
			title={title}
			showTitle={true}
			gap='gap-2 md:gap-4'
			pauseOnHover={true}
			enableManualScroll={true}
			isLoading={loading}
		>
			{playlists.map((playlist, index) => (
				<YTBMusicPlaylistCard
					key={`${btoa(playlist._id)}-${index}`}
					playlist={playlist}
					ref={index === 0 ? playlistRef : undefined}
				/>
			))}
		</Carousel>
	);
};

export default YTBMusicPlaylistGalery;
