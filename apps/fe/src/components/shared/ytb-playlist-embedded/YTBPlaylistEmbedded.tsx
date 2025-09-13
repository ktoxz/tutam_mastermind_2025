'use client';
import { MusicPlaylist } from '@models';
import React from 'react';

interface YTBPlaylistEmbeddedProps {
	playlist: MusicPlaylist;
	width: string;
	autoplay?: boolean;
	controls?: boolean;
	loop?: boolean;
	modestBranding?: boolean;
	rel?: boolean;
}

const YTBPlaylistEmbedded: React.FC<YTBPlaylistEmbeddedProps> = ({ playlist, width, autoplay = false, controls = true, loop = false, modestBranding = false, rel = true }) => {
	const isPlaylist = !!playlist?.ytb_playlist_id;
	const param: URLSearchParams = new URLSearchParams();
	if (isPlaylist) param.append('list', playlist.ytb_playlist_id);
	param.append('autoplay', autoplay ? '1' : '0');
	param.append('controls', controls ? '1' : '0');
	param.append('loop', loop ? '1' : '0');
	param.append('modestbranding', modestBranding ? '1' : '0');
	param.append('rel', rel ? '1' : '0');
	param.append('fs', '1');

	const url = `https://www.youtube.com/embed/${playlist.ytb_video_id}?${param.toString()}`;

	return (
		<div style={{ position: 'relative', width, paddingBottom: '56.25%' }}>
			<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }} src={url} allowFullScreen />
		</div>
	);
};

export default YTBPlaylistEmbedded;
