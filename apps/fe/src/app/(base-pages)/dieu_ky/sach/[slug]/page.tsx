'use client';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { BookService } from '@/services/api/book/book.service';
import { Book } from '@packages/models';
import AppSection from '@/components/shared/app-section/AppSection';
import InlineLoading from '@/components/shared/inline-loading/InlineLoading';
import { useParams } from 'next/navigation';

function Page() {
	const { slug }: { slug: string } = useParams();
	const [book, setBook] = useState<Book | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchBook = async () => {
			const [err, data] = await BookService.getInstance().getBySlug(slug);
			if (err) {
				setError('Failed to load book');
			} else {
				setBook(data || null);
			}
			setLoading(false);
		};
		fetchBook();
	}, [slug]);

	if (loading) return <InlineLoading title='Loading book...' />;
	if (error)
		return (
			<AppSection>
				<div className='text-red-500'>{error}</div>
			</AppSection>
		);
	if (!book)
		return (
			<AppSection>
				<div>Book not found</div>
			</AppSection>
		);

	return (
		<AppSection className='mt-10'>
			<div className='mx-auto flex flex-col-reverse md:flex-row gap-2 md:gap-6'>
				<div className='w-full md:flex-7 bg-white rounded-lg p-6'>
					<h1 className='text-2xl md:text-3xl font-bold mb-2'>{book.title}</h1>
					<p className='text-md md:text-xl mb-6'>By {book.author}</p>
					<div className=''>
						<ReactMarkdown>{book.content}</ReactMarkdown>
					</div>
				</div>
				<div className='w-full md:flex-3 bg-white rounded-lg p-6'>
					<div className='relative aspect-[2/3] max-h-[420px] m-auto overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
						<img src={book.image} alt={book.title} className='w-full h-full object-cover' />
					</div>
					<div className='mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded text-justify'>
						<p className='text-sm'>{book.summary}</p>
					</div>
				</div>
			</div>
		</AppSection>
	);
}

export default Page;
