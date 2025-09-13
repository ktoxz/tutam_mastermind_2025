'use client';
import React from 'react';
import Link from 'next/link';
import { BASIC_ROUTES } from '@/consts/routes';
import { Blog } from '@models';

interface BlogCardProps {
	blog: Blog;
	ref?: React.RefObject<HTMLAnchorElement>;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, ref }) => {
	return (
		<Link
			href={`${BASIC_ROUTES.dieu_ky.children?.blog.full(blog.slug) || ''}`}
			className='bg-white
				rounded-md overflow-hidden shadow-md transition-all duration-300
				min-w-[180px] max-w-[180px] md:min-w-[260px] md:max-w-[260px] flex flex-col cursor-pointer border border-transparent'
			ref={ref}
		>
			<div className='relative aspect-square w-full group overflow-hidden bg-gray-400 flex'>
				<img src={blog.image} alt={blog.title} className='relative object-cover w-full h-full transition-transform duration-300' />
				<div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
			</div>
			<div className='flex flex-col justify-between p-2 flex-1'>
				<h3 className='text-sm font-bold mb-1 text-gray-900 line-clamp-2'>{blog.title}</h3>
				<p className='text-[10px] text-gray-500 mb-0.5'>
					Tác giả: <span className='font-medium text-gray-700'>{blog.author}</span>
				</p>
				<p className='text-xs text-gray-700 line-clamp-2'>{blog.summary}</p>
			</div>
		</Link>
	);
};

export default BlogCard;
