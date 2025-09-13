// filepath: d:\MyWorkSpace\Projects\Web\tu-tam\apps\fe\src\app\(base-pages)\nha_chung\page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import BlogGalery from '@/components/shared/galery/blog-galery/BlogGalery';
import BookGalery from '@/components/shared/galery/book-galery/BookGalery';
import HeroSection from '@/components/pages/nha_chung/hero-section/HeroSection';
import YTBMusicPlaylistGalery from '@/components/shared/galery/ytb-music-playlist-galery/YTBMusicPlaylistGalery';
import { BlogService } from '@/services/api/blog/blog.service';
import { BookService } from '@/services/api/book/book.service';
import { MusicPlaylistService } from '@/services/api/music-playlist/music-playlist.service';
import { Blog, Book, MusicPlaylist } from '@models';

type Props = {};

function page({}: Props) {
	const [blogs, setBlogs] = useState<Blog[]>([]);
	const [books, setBooks] = useState<Book[]>([]);
	const [playlists, setPlaylists] = useState<MusicPlaylist[]>([]);
	const [blogsLoading, setBlogsLoading] = useState(true);
	const [booksLoading, setBooksLoading] = useState(true);
	const [playlistsLoading, setPlaylistsLoading] = useState(true);

	useEffect(() => {
		const fetchBlogs = async () => {
			const [error, data] = await BlogService.getInstance().getList({ limit: 10 });
			if (error) {
				console.error('Error fetching blogs:', error);
			} else {
				setBlogs(data || []);
			}
			setBlogsLoading(false);
		};

		const fetchBooks = async () => {
			const [error, data] = await BookService.getInstance().getList({ limit: 10 });
			if (error) {
				console.error('Error fetching books:', error);
			} else {
				setBooks(data || []);
			}
			setBooksLoading(false);
		};

		const fetchPlaylists = async () => {
			const [error, data] = await MusicPlaylistService.getInstance().getList({ limit: 10 });
			if (error) {
				console.error('Error fetching playlists:', error);
			} else {
				setPlaylists(data || []);
			}
			setPlaylistsLoading(false);
		};

		fetchBlogs();
		fetchBooks();
		fetchPlaylists();
	}, []);

	return (
		<>
			<HeroSection />
			<BookGalery books={books} loading={booksLoading} />
			<BlogGalery blogs={blogs} loading={blogsLoading} />
			<YTBMusicPlaylistGalery playlists={playlists} loading={playlistsLoading} />
		</>
	);
}

export default page;
