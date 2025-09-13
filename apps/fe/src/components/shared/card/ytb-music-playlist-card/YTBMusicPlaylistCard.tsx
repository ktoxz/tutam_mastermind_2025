'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MusicPlaylist } from '@models';
import { BASIC_ROUTES } from '@/consts/routes';

interface YTBMusicPlaylistCardProps {
	playlist: MusicPlaylist;
	ref?: React.RefObject<HTMLAnchorElement>;
}

const YTBMusicPlaylistCard: React.FC<YTBMusicPlaylistCardProps> = ({ playlist, ref }) => {
	const url = BASIC_ROUTES.dieu_ky.children?.music.full(playlist.slug) || `https://www.youtube.com/watch?v=${playlist.ytb_video_id}&list=${playlist.ytb_playlist_id}`;
	return (
		<Link href={url} className='bg-white rounded-md overflow-hidden shadow-md transition-all duration-300 min-w-[180px] md:min-w-[260px] max-w-[260px] flex flex-col cursor-pointer border border-transparent hover:shadow-lg' ref={ref}>
			<div className='relative aspect-[16/9] w-full group'>
				<Image
					src={`https://img.youtube.com/vi/${playlist.ytb_video_id}/0.jpg`}
					alt={playlist.title}
					fill
					sizes='(max-width: 640px) 180px, 260px'
					className='object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105'
				/>
				<div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
					<span className='text-white text-lg font-bold'>▶ Play</span>
				</div>
			</div>
			<div className='flex flex-col justify-between p-2 flex-1'>
				<h3 className='text-sm font-bold mb-1 text-gray-900 line-clamp-2'>{playlist.title}</h3>
				<p className='text-xs text-gray-700 line-clamp-2'>{playlist.description}</p>
			</div>
		</Link>
	);
};

export default YTBMusicPlaylistCard;
