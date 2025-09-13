'use client';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { MusicPlaylistService } from '@/services/api/music-playlist/music-playlist.service';
import { MusicPlaylist } from '@models';
import AppSection from '@/components/shared/app-section/AppSection';
import InlineLoading from '@/components/shared/inline-loading/InlineLoading';
import YTBPlaylistEmbedded from '@/components/shared/ytb-playlist-embedded/YTBPlaylistEmbedded';
import { useParams } from 'next/navigation';

function Page() {
	const { slug }: { slug: string } = useParams();
	const [playlist, setPlaylist] = useState<MusicPlaylist | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPlaylist = async () => {
			const [err, data] = await MusicPlaylistService.getInstance().getBySlug(slug);
			if (err) {
				setError('Failed to load playlist');
			} else {
				setPlaylist(data || null);
			}
			setLoading(false);
		};
		fetchPlaylist();
	}, [slug]);

	if (loading) return <InlineLoading title='Loading playlist...' />;
	if (error)
		return (
			<AppSection>
				<div className='text-red-500'>{error}</div>
			</AppSection>
		);
	if (!playlist)
		return (
			<AppSection>
				<div>Playlist not found</div>
			</AppSection>
		);

	return (
		<AppSection className='mt-10 bg-white rounded-lg'>
			<div className='mx-auto'>
				<h1 className='text-3xl font-bold mb-4 text-center'>{playlist.title}</h1>
				<p className='prose prose-lg mb-6 text-center'>{playlist.description}</p>
				<YTBPlaylistEmbedded playlist={playlist} width='100%' />
			</div>
		</AppSection>
	);
}

export default Page;
