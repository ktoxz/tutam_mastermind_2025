// filepath: d:\MyWorkSpace\Projects\Web\tu-tam\apps\fe\src\components\pages\cham\mood-result\MoodResult.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { AlertTriangle, BookOpen, Globe } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import InlineLoading from '@/components/shared/inline-loading/InlineLoading';
import AppSection from '@/components/shared/app-section/AppSection';
import Carousel from '@/components/shared/casourel/Casourel';
import BookCard from '@/components/shared/card/book-card/BookCard';
import BlogCard from '@/components/shared/card/blog-card/BlogCard';
import { Mood } from '@packages/models';
import { Book } from '@packages/models';
import { Blog } from '@packages/models';
import { MusicPlaylist } from '@packages/models';
import { BookService } from '@/services/api/book/book.service';
import { BlogService } from '@/services/api/blog/blog.service';
import { MusicPlaylistService } from '@/services/api/music-playlist/music-playlist.service';
import BookGalery from '@/components/shared/galery/book-galery/BookGalery';
import BlogGalery from '@/components/shared/galery/blog-galery/BlogGalery';
import YTBMusicPlaylistGalery from '@/components/shared/galery/ytb-music-playlist-galery/YTBMusicPlaylistGalery';

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
				// Fetch books related to this mood
				const bookService = BookService.getInstance();
				const [bookErr, bookData] = await bookService.getList();
				if (!bookErr && bookData) {
					const relatedBooks = bookData.filter((book) => book.mood_id === mood._id);
					setBooks(relatedBooks);
				}

				// Fetch blogs related to this mood
				const blogService = BlogService.getInstance();
				const [blogErr, blogData] = await blogService.getList();
				if (!blogErr && blogData) {
					const relatedBlogs = blogData.filter((blog) => blog.mood_id === mood._id);
					setBlogs(relatedBlogs);
				}

				// Fetch playlists related to this mood
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
		return <InlineLoading className='p-8' title={'Đang tải nội dung xoa dịu...'} />;
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
			{books.length > 0 ? <BookGalery books={books} title='Sách gợi ý' /> : null}
			{blogs.length > 0 ? <BlogGalery blogs={blogs} title='Blog gợi ý' /> : null}
			{playlists.length > 0 ? <YTBMusicPlaylistGalery playlists={playlists} title='Playlist gợi ý' /> : null}
		</>
	);
}

function MoodHeader({ mood }: { mood: Mood }) {
	return (
		<AppSection disableAppearAnimation>
			<div className='p-6 md:p-8 bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-2xl leading-relaxed border border-gray-100'>
				<h1 className='text-2xl md:text-4xl font-extrabold mb-6 text-gray-900 tracking-tight'>{mood.name}</h1>
				<p className='text-lg md:text-xl mb-6 text-gray-800 font-medium leading-snug'>{mood.summary}</p>
				<div className='text-base md:text-lg mb-6 text-gray-700 leading-relaxed prose prose-gray max-w-none'>
					<ReactMarkdown>{mood.description}</ReactMarkdown>
				</div>
				<div className='flex items-start gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400'>
					<BookOpen className='text-blue-500 mt-1 flex-shrink-0' size={20} />
					<p className='text-sm md:text-base italic text-gray-600 font-light'>"{mood.comfortMessage}"</p>
				</div>
			</div>
		</AppSection>
	);
}

export default MoodResult;
