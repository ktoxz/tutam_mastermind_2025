'use client';
import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import InlineLoading from '@/components/shared/inline-loading/InlineLoading';
import { Blog, Book, Mood, MusicPlaylist } from '@models';
import { BookService } from '@/services/api/book/book.service';
import { BlogService } from '@/services/api/blog/blog.service';
import { MusicPlaylistService } from '@/services/api/music-playlist/music-playlist.service';
import BookGalery from '@/components/shared/galery/book-galery/BookGalery';
import BlogGalery from '@/components/shared/galery/blog-galery/BlogGalery';
import YTBMusicPlaylistGalery from '@/components/shared/galery/ytb-music-playlist-galery/YTBMusicPlaylistGalery';

// Import các component đã tách
import EmotionResultHeader from './components/emotion-result-header/EmotionResultHeader';
import EmotionResultEncouragement from './components/emotion-result-encouragement/EmotionResultEncouragement';
import EmotionResultActions from './components/emotion-result-actions/EmotionResultActions';
import EmotionResultRecommends from './components/emotion-result-recommends/EmotionResultRecommends';

type Props = {
	mood: Mood;
};

function EmotionResult({ mood }: Props) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const [books, setBooks] = useState<Book[]>([]);
	const [blogs, setBlogs] = useState<Blog[]>([]);
	const [playlists, setPlaylists] = useState<MusicPlaylist[]>([]);
	const [booksLoading, setBooksLoading] = useState(true);
	const [blogsLoading, setBlogsLoading] = useState(true);
	const [playlistsLoading, setPlaylistsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				await new Promise((resolve) => setTimeout(resolve, 300));
				setLoading(false);
			} catch (err: any) {
				setError(err.message || 'Có lỗi xảy ra khi tải dữ liệu.');
				setLoading(false);
			}
		};
		fetchData();
	}, [mood]);

	// Lấy dữ liệu gallery theo mood
	useEffect(() => {
		if (!mood?._id) return;
		setBooksLoading(true);
		setBlogsLoading(true);
		setPlaylistsLoading(true);

		BookService.getInstance()
			.getByMoodId(mood._id, { limit: 10 })
			.then(([err, data]) => {
				setBooks(data || []);
				setBooksLoading(false);
			});
		BlogService.getInstance()
			.getByMoodId(mood._id, { limit: 10 })
			.then(([err, data]) => {
				setBlogs(data || []);
				setBlogsLoading(false);
			});
		MusicPlaylistService.getInstance()
			.getByMoodId(mood._id, { limit: 10 })
			.then(([err, data]) => {
				setPlaylists(data || []);
				setPlaylistsLoading(false);
			});
	}, [mood]);

	if (loading) {
		return <InlineLoading className='p-8' title='Đang tải nội dung...' />;
	}

	if (error) {
		return (
			<div className='flex flex-col items-center justify-center gap-4 p-8 text-red-500'>
				<AlertTriangle size={32} />
				<p className='text-center'>{error}</p>
			</div>
		);
	}

	return (
		<>
			<EmotionResultHeader mood={mood} />
			<EmotionResultEncouragement mood={mood} />
			<EmotionResultActions mood={mood} />
			<EmotionResultRecommends>
				<div className='mt-8 space-y-8'>
					<BookGalery books={books} loading={booksLoading} title='Sách phù hợp cảm xúc của bạn' />
					<BlogGalery blogs={blogs} loading={blogsLoading} title='Blog phù hợp cảm xúc của bạn' />
					<YTBMusicPlaylistGalery playlists={playlists} loading={playlistsLoading} title='Playlist nhạc phù hợp cảm xúc của bạn' />
				</div>
			</EmotionResultRecommends>
		</>
	);
}

export default EmotionResult;
