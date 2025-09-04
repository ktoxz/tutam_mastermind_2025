'use client';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { BlogService } from '@/services/api/blog/blog.service';
import { Blog } from '@packages/models';
import AppSection from '@/components/shared/app-section/AppSection';
import InlineLoading from '@/components/shared/inline-loading/InlineLoading';
import { useParams } from 'next/navigation';

function Page() {
	const { slug }: { slug: string } = useParams();
	const [blog, setBlog] = useState<Blog | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchBlog = async () => {
			const [err, data] = await BlogService.getInstance().getBySlug(slug);
			if (err) {
				setError('Failed to load blog');
			} else {
				setBlog(data || null);
			}
			setLoading(false);
		};
		fetchBlog();
	}, [slug]);

	if (loading) return <InlineLoading title='Loading blog...' />;
	if (error)
		return (
			<AppSection>
				<div className='text-red-500'>{error}</div>
			</AppSection>
		);
	if (!blog)
		return (
			<AppSection>
				<div>Blog not found</div>
			</AppSection>
		);

	return (
		<AppSection className='mt-10'>
			<div className='mx-auto flex flex-row gap-8'>
				<div className='flex-7 bg-white rounded-lg p-6'>
					<h1 className='text-3xl font-bold mb-2'>{blog.title}</h1>
					<p className='text-lg text-gray-600 mb-4'>- By {blog.author} -</p>
					<div className='prose xl:prose-xl'>
						<ReactMarkdown>{blog.content}</ReactMarkdown>
					</div>
				</div>
				<div className='flex-3 bg-white rounded-lg p-6'>
					<img
						src={blog.image}
						alt={blog.title}
						className='top-0 aspect-3/2 w-full object-cover rounded-lg mb-6'
					/>
					<div className='mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded text-justify text-md'>
						{blog.summary}
					</div>
				</div>
			</div>
		</AppSection>
	);
}

export default Page;
