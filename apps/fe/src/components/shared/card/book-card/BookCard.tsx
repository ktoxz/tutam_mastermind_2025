'use client';
import React from 'react';
import Link from 'next/link';
import { BASIC_ROUTES } from '@/consts/routes';
import { Book } from '@packages/models';

interface BookCardProps {
	book: Book;
	ref?: React.RefObject<HTMLAnchorElement>;
}

const BookCard: React.FC<BookCardProps> = ({ book, ref }) => {
	return (
		<Link
			href={`${BASIC_ROUTES.dieu_ky.children?.sach.full(book.slug) || ''}`}
			className='bg-(--color-surface) hover:bg-(--color-surface-hover) active:bg-(--color-surface-active) 
			rounded-sm overflow-hidden shadow-lg 
			hover:shadow-xl transition-all duration-300 
			min-w-[140px] max-w-[140px] md:min-w-[200px] md:max-w-[200px]
			hover:border-(--color-primary-light-hover)
			cursor-pointer'
			ref={ref}
		>
			<div className='relative overflow-hidden aspect-[2/3] group'>
				<img
					src={book.image}
					alt={book.title}
					className='relative w-full h-full object-cover hover:scale-105 transition-transform duration-300'
				/>
				<div className='absolute inset-0 bg-black/50 text-white p-1 md:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end'>
					<p className='text-xs md:text-sm font-semibold line-clamp-2'>{book.title}</p>
					<p className='text-[10px] md:text-xs'>{book.author}</p>
				</div>
			</div>
		</Link>
	);
};

export default BookCard;
