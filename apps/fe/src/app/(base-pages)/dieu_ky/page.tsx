'use client';
import React, { useEffect, useState, useCallback, CSSProperties } from 'react';
import { Mood, Book, Blog, MusicPlaylist, MoodMeta } from '@models';
import { MoodService } from '@/services/api/mood/mood.service';
import { BookService } from '@/services/api/book/book.service';
import { BlogService } from '@/services/api/blog/blog.service';
import { MusicPlaylistService } from '@/services/api/music-playlist/music-playlist.service';
import AppSection from '@/components/shared/app-section/AppSection';
import InlineLoading from '@/components/shared/inline-loading/InlineLoading';
import BookGalery from '@/components/shared/galery/book-galery/BookGalery';
import BlogGalery from '@/components/shared/galery/blog-galery/BlogGalery';
import YTBMusicPlaylistGalery from '@/components/shared/galery/ytb-music-playlist-galery/YTBMusicPlaylistGalery';
import PageHeader from '@/components/shared/page-header/PageHeader';

interface MoodButtonProps {
	moodId?: string | null;
	isSelected: boolean;
	onClick: (moodId: string | null) => void;
	children: React.ReactNode;
}

const MoodButton: React.FC<MoodButtonProps> = ({ moodId, isSelected, onClick, children }) => {
	const moodService = MoodService.getInstance();

	const handleClick = useCallback(() => {
		onClick(moodId || null);
	}, [moodId, onClick]);

	const getButtonStyles = (): CSSProperties => {
		if (!isSelected) return {};

		if (!moodId) {
			return {
				backgroundColor: 'rgb(31, 41, 55)',
				color: 'white',
			};
		}

		// Find mood by moodId and get its meta
		const mockMood = { _id: moodId } as Mood; // Temporary mock for getMoodMeta
		const moodMeta = moodService.getMoodMeta(mockMood);

		return {
			backgroundColor: moodMeta.bgColor,
			color: moodMeta.textColor,
		};
	};

	const baseClasses = 'bg-white px-4 py-2 rounded-full font-medium transition duration-250';
	const interactiveClasses = !isSelected ? 'cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-800 active:scale-95' : '';

	return (
		<button onClick={handleClick} className={`${baseClasses} ${interactiveClasses}`} style={getButtonStyles()} aria-pressed={isSelected}>
			{children}
		</button>
	);
};

const EmptyState: React.FC = () => (
	<AppSection disableAppearAnimation>
		<div className='text-center py-12'>
			<div className='text-6xl mb-4'>🌸</div>
			<p className='text-[--color-text-secondary] text-lg mb-2'>Hiện tại chưa có sự kiện nào phù hợp với tâm trạng này.</p>
			<p className='text-[--color-text-tertiary] text-sm'>Hãy quay lại sau để khám phá những trải nghiệm mới nhé!</p>
		</div>
	</AppSection>
);

const ContentGalleries: React.FC<{
	books: Book[];
	blogs: Blog[];
	playlists: MusicPlaylist[];
	loading: boolean;
}> = ({ books, blogs, playlists, loading }) => {
	const hasContent = books.length > 0 || blogs.length > 0 || playlists.length > 0;

	if (loading) {
		return <InlineLoading title='Đang tải nội dung...' />;
	}

	if (!hasContent) {
		return <EmptyState />;
	}

	return (
		<>
			{books.length > 0 && <BookGalery books={books} loading={loading} />}
			{blogs.length > 0 && <BlogGalery blogs={blogs} loading={loading} />}
			{playlists.length > 0 && <YTBMusicPlaylistGalery playlists={playlists} loading={loading} />}
		</>
	);
};

function DieuKyPage() {
	const [moodMetaList, setMoodMetaList] = useState<MoodMeta[]>([]);
	const [selectedMoodId, setSelectedMoodId] = useState<string | null>(null);
	const [books, setBooks] = useState<Book[]>([]);
	const [blogs, setBlogs] = useState<Blog[]>([]);
	const [playlists, setPlaylists] = useState<MusicPlaylist[]>([]);
	const [loading, setLoading] = useState(true);

	const moodService = MoodService.getInstance();
	const bookService = BookService.getInstance();
	const blogService = BlogService.getInstance();
	const musicPlaylistService = MusicPlaylistService.getInstance();

	const fetchAllContent = useCallback(async () => {
		setLoading(true);
		try {
			const [[, moodMetaData], [, bookData], [, blogData], [, playlistData]] = await Promise.all([moodService.getMoodMetaList(), bookService.getList(), blogService.getList(), musicPlaylistService.getList()]);

			setMoodMetaList(moodMetaData || []);
			setBooks(bookData || []);
			setBlogs(blogData || []);
			setPlaylists(playlistData || []);
		} catch (error) {
			console.error('Error fetching all content:', error);
		} finally {
			setLoading(false);
		}
	}, [moodService, bookService, blogService, musicPlaylistService]);

	const fetchContentByMoodId = useCallback(
		async (moodId: string) => {
			setLoading(true);
			try {
				const [[, bookData], [, blogData], [, playlistData]] = await Promise.all([bookService.getByMoodId(moodId), blogService.getByMoodId(moodId), musicPlaylistService.getByMoodId(moodId)]);

				setBooks(bookData || []);
				setBlogs(blogData || []);
				setPlaylists(playlistData || []);
			} catch (error) {
				console.error('Error fetching content by mood:', error);
			} finally {
				setLoading(false);
			}
		},
		[bookService, blogService, musicPlaylistService]
	);

	const handleMoodSelect = useCallback((moodId: string | null) => {
		setSelectedMoodId(moodId);
	}, []);

	useEffect(() => {
		if (selectedMoodId) {
			fetchContentByMoodId(selectedMoodId);
		} else {
			fetchAllContent();
		}
	}, [selectedMoodId, fetchAllContent, fetchContentByMoodId]);

	return (
		<>
			<PageHeader title='Không Gian Diệu Kỳ' description='Nơi bạn có thể tìm thấy sự bình yên và nguồn cảm hứng qua những trang sách, câu chuyện và giai điệu chữa lành.' disableAppearAnimation />

			<AppSection disableAppearAnimation>
				<div className='flex flex-wrap justify-center gap-3 md:gap-4 mb-12'>
					<MoodButton moodId={null} isSelected={!selectedMoodId} onClick={handleMoodSelect}>
						Tất cả
					</MoodButton>
					{moodMetaList.map((moodMeta) => (
						<MoodButton key={moodMeta._id} moodId={moodMeta._id} isSelected={selectedMoodId === moodMeta._id} onClick={handleMoodSelect}>
							{moodMeta.mood_label}
						</MoodButton>
					))}
				</div>
			</AppSection>

			<ContentGalleries books={books} blogs={blogs} playlists={playlists} loading={loading} />
		</>
	);
}

export default DieuKyPage;
