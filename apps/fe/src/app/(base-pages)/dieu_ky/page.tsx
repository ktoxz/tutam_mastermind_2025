'use client';
import React, { useEffect, useState, useCallback, CSSProperties } from 'react';
import { Mood, Book, Blog, MusicPlaylist } from '@packages/models';
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
	mood?: Mood | null;
	isSelected: boolean;
	onClick: (mood: Mood | null) => void;
	children: React.ReactNode;
}

const MoodButton: React.FC<MoodButtonProps> = ({ mood, isSelected, onClick, children }) => {
	const handleClick = () => onClick(mood || null);

	const isMood = !!mood;
	const classes = {
		base: 'bg-white px-4 py-2 rounded-full font-medium transition duration-250',
		hover: !isSelected ? 'cursor-pointer hover:bg-gray-700 hover:text-white' : '',
		active: !isSelected ? 'active:bg-gray-800 active:scale-95' : '',
	};
	const dynamicStyles: CSSProperties = isMood
		? {
				backgroundColor: isSelected ? mood!.bgColor : undefined,
				color: isSelected ? mood!.textColor : undefined,
		  }
		: {
				backgroundColor: isSelected ? 'rgb(31, 41, 55)' : undefined,
				color: isSelected ? 'white' : undefined,
		  };

	return (
		<button onClick={handleClick} className={`${classes.base} ${classes.hover} ${classes.active}`} style={dynamicStyles} aria-pressed={isSelected}>
			{children}
		</button>
	);
};

function DieuKyPage() {
	const [moods, setMoods] = useState([]);
	const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
	const [books, setBooks] = useState<Book[]>([]);
	const [blogs, setBlogs] = useState<Blog[]>([]);
	const [playlists, setPlaylists] = useState<MusicPlaylist[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchAllData = useCallback(async () => {
		setLoading(true);
		const [[, moodData], [, bookData], [, blogData], [, playlistData]] = await Promise.all([
			MoodService.getInstance().getMoodMetaList(),
			BookService.getInstance().getList(),
			BlogService.getInstance().getList(),
			MusicPlaylistService.getInstance().getList(),
		]);
		setMoods(moodData || []);
		setBooks(bookData || []);
		setBlogs(blogData || []);
		setPlaylists(playlistData || []);
		setLoading(false);
	}, []);

	const fetchDataByMood = useCallback(async (moodId: string) => {
		setLoading(true);
		const [[, bookData], [, blogData], [, playlistData]] = await Promise.all([BookService.getInstance().getByMoodId(moodId), BlogService.getInstance().getByMoodId(moodId), MusicPlaylistService.getInstance().getByMoodId(moodId)]);
		setBooks(bookData || []);
		setBlogs(blogData || []);
		setPlaylists(playlistData || []);
		setLoading(false);
	}, []);

	useEffect(() => {
		if (selectedMood) {
			fetchDataByMood(selectedMood._id);
		} else {
			fetchAllData();
		}
	}, [selectedMood, fetchAllData, fetchDataByMood]);

	const handleMoodSelect = (mood: Mood | null) => {
		setSelectedMood(mood);
	};

	return (
		<>
			<PageHeader title='Không Gian Diệu Kỳ' description='Nơi bạn có thể tìm thấy sự bình yên và nguồn cảm hứng qua những trang sách, câu chuyện và giai điệu chữa lành.' disableAppearAnimation />

			<AppSection disableAppearAnimation>
				<div className='flex flex-wrap justify-center gap-3 md:gap-4 mb-12'>
					<MoodButton mood={null} isSelected={!selectedMood} onClick={handleMoodSelect}>
						Tất cả
					</MoodButton>
					{moods.map((mood) => (
						<MoodButton key={mood._id} mood={mood} isSelected={selectedMood?._id === mood._id} onClick={handleMoodSelect}>
							{mood.mood_label}
						</MoodButton>
					))}
				</div>
			</AppSection>

			{loading ? (
				<InlineLoading title='Đang tải nội dung...' />
			) : (
				<>
					{books.length > 0 && <BookGalery books={books} loading={loading} />}
					{blogs.length > 0 && <BlogGalery blogs={blogs} loading={loading} />}
					{playlists.length > 0 && <YTBMusicPlaylistGalery playlists={playlists} loading={loading} />}
					{!loading && books.length === 0 && blogs.length === 0 && playlists.length === 0 && (
						<AppSection disableAppearAnimation>
							<div className='text-center py-12'>
								<div className='text-6xl mb-4'>🌸</div>
								<p className='text-[--color-text-secondary] text-lg mb-2'>Hiện tại chưa có sự kiện nào phù hợp với tâm trạng này.</p>
								<p className='text-[--color-text-tertiary] text-sm'>Hãy quay lại sau để khám phá những trải nghiệm mới nhé!</p>
							</div>
						</AppSection>
					)}
				</>
			)}
		</>
	);
}

export default DieuKyPage;
