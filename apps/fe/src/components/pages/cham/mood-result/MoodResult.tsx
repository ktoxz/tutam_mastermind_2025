'use client';
import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle, Heart } from 'lucide-react';
import InlineLoading from '@/components/shared/inline-loading/InlineLoading';
import BookGalery from '@/components/shared/galery/book-galery/BookGalery';
import BlogGalery from '@/components/shared/galery/blog-galery/BlogGalery';
import YTBMusicPlaylistGalery from '@/components/shared/galery/ytb-music-playlist-galery/YTBMusicPlaylistGalery';
import { Mood } from '@models';
import { Book } from '@models';
import { Blog } from '@models';
import { MusicPlaylist } from '@models';
import { BookService } from '@/services/api/book/book.service';
import { BlogService } from '@/services/api/blog/blog.service';
import { MusicPlaylistService } from '@/services/api/music-playlist/music-playlist.service';
import { MoodService } from '@/services/api/mood/mood.service';
import MoodResultCard from './components/MoodResultCard';
import { parseLucideIcon } from '@/utils';

type Props = {
	mood: Mood | null;
};

function MoodResult({ mood }: Props) {
	const [books, setBooks] = useState<Book[]>([]);
	const [blogs, setBlogs] = useState<Blog[]>([]);
	const [playlists, setPlaylists] = useState<MusicPlaylist[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			if (!mood) return;

			setLoading(true);
			setError(null);
			try {
				const bookService = BookService.getInstance();
				const [bookErr, bookData] = await bookService.getList();
				if (!bookErr && bookData) {
					const relatedBooks = bookData.filter((book) => book.mood_id === mood._id);
					setBooks(relatedBooks);
				}

				const blogService = BlogService.getInstance();
				const [blogErr, blogData] = await blogService.getList();
				if (!blogErr && blogData) {
					const relatedBlogs = blogData.filter((blog) => blog.mood_id === mood._id);
					setBlogs(relatedBlogs);
				}

				const playlistService = MusicPlaylistService.getInstance();
				const [playlistErr, playlistData] = await playlistService.getByMoodId(mood._id);
				if (!playlistErr && playlistData) {
					setPlaylists(playlistData);
				}
			} catch (err: any) {
				setError(err.message || 'An error occurred while loading data.');
			} finally {
				setLoading(false);
			}
		};

		fetchData();
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

	if (!mood) {
		return (
			<div className='flex flex-col items-center justify-center gap-4 p-8'>
				<p className='text-center'>Không tìm thấy thông tin mood.</p>
			</div>
		);
	}

	return (
		<>
			<MoodHeader mood={mood} />
			<MoodDetails mood={mood} />
			{books.length > 0 && <BookGalery books={books} title='Sách gợi ý' />}
			{blogs.length > 0 && <BlogGalery blogs={blogs} title='Blog gợi ý' />}
			{playlists.length > 0 && <YTBMusicPlaylistGalery playlists={playlists} title='Playlist gợi ý' />}
		</>
	);
}

function MoodHeader({ mood }: { mood: Mood }) {
	const moodService = MoodService.getInstance();
	const moodMeta = moodService.getMoodMeta(mood);
	const IconComponent = parseLucideIcon(moodMeta.icon);

	return (
		<MoodResultCard disableAppearAnimation>
			<div>
				<div className='flex items-center gap-4 mb-6'>
					<div className='p-2 md:p-3 rounded-xl shadow-sm' style={{ backgroundColor: `${moodMeta.textColor}20` }}>
						{IconComponent && <IconComponent size={32} style={{ color: moodMeta.textColor }} />}
					</div>
					<div>
						<h1 className='text-xl md:text-3xl font-bold tracking-tight' style={{ color: moodMeta.textColor }}>
							{mood.header}
						</h1>
						<p className='text-sm opacity-75' style={{ color: moodMeta.textColor }}>
							{mood.mood_label}
						</p>
					</div>
				</div>

				<div className='mb-6'>
					<div className='flex items-start gap-3 p-2 md:p-4 bg-white/50 rounded-lg border-l-4' style={{ borderLeftColor: moodMeta.textColor }}>
						<Heart className='mt-1 flex-shrink-0' size={20} style={{ color: moodMeta.textColor }} />
						<p className='text-gray-700 leading-relaxed text-sm md:text-base text-justify'>{mood.validation}</p>
					</div>
				</div>

				<div className='p-4 bg-white/30 rounded-lg'>
					<p className='text-gray-800 leading-relaxed text-sm md:text-base text-justify'>{mood.encouragement}</p>
				</div>

				<div className='p-4 bg-gray-50/60 rounded-lg'>
					<p className='text-xs md:text-sm italic leading-relaxed font-medium text-black/30'>{mood.quote}</p>
				</div>
			</div>
		</MoodResultCard>
	);
}

function MoodDetails({ mood }: { mood: Mood }) {
	const moodService = MoodService.getInstance();
	const moodMeta = moodService.getMoodMeta(mood);

	return (
		<MoodResultCard disableAppearAnimation>
			<div>
				<h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
					<CheckCircle size={20} style={{ color: moodMeta.textColor }} />
					Những việc bạn có thể làm
				</h3>
				<div className='grid gap-3 md:grid-cols-3'>
					{mood.actions.map((action, index) => (
						<div key={index} className='p-4 rounded-lg border border-black/10 transition-all hover:shadow-md cursor-pointer'>
							<div className='flex items-center gap-2 mb-2'>
								<div className='w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-medium' style={{ backgroundColor: moodMeta.textColor }}>
									{index + 1}
								</div>
							</div>
							<p className='text-gray-700 text-sm leading-relaxed'>{action}</p>
						</div>
					))}
				</div>
			</div>
		</MoodResultCard>
	);
}

export default MoodResult;
