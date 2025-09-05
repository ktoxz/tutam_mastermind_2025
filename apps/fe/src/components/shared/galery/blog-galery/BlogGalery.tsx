'use client';
import React from 'react';
import { BASIC_ROUTES } from '@/consts/routes';
import Carousel from '@/components/shared/casourel/Casourel';
import { useRefSize } from '@/hooks/ui/useRefSize';
import { Blog } from '@packages/models';
import BlogCard from '@/components/shared/card/blog-card/BlogCard';

interface BlogGaleryProps {
	blogs: Blog[];
	loading?: boolean;
	title?: string;
}

const BlogGalery: React.FC<BlogGaleryProps> = ({ blogs, loading = false, title = 'Câu Chuyện Đời Sống' }) => {
	const [blogRef, size] = useRefSize();
	const itemWidth = size?.width && size.width > 0 ? size.width / 3.5 : 260;

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
		>
			{blogs.map((blog, index) => (
				<BlogCard key={blog._id} blog={blog} ref={index === 0 ? blogRef : undefined} />
			))}
		</Carousel>
	);
};

export default BlogGalery;
