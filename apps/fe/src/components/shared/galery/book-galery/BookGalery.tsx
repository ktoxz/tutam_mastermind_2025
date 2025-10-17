'use client';
import React from 'react';
import { BASIC_ROUTES } from '@/consts/routes';
import Carousel from '@/components/shared/casourel/Casourel';
import { useRefSize } from '@/hooks/ui/useRefSize';
import { Book } from '@models';
import BookCard from '@/components/shared/card/book-card/BookCard';

interface BookGaleryProps {
	books: Book[];
	loading?: boolean;
	title?: string;
}

const BookGalery: React.FC<BookGaleryProps> = ({ books, loading = false, title = 'Thư Viện Sách Hay' }) => {
	const [bookRef, size] = useRefSize();
	const itemWidth = size?.width && size.width > 0 ? size.width : 200;

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
			isEmpty={books.length === 0}
			emptyMessage='Không có sách phù hợp với cảm xúc này.'
		>
			{books.map((book, index) => (
				<BookCard key={book._id} book={book} ref={index === 0 ? bookRef : undefined} />
			))}
		</Carousel>
	);
};

export default BookGalery;
