import React from 'react';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';
import AppSection from '@/components/shared/app-section/AppSection';

const NotFound: React.FC = () => (
	<AppSection className='flex flex-col items-center justify-center min-h-screen px-4'>
		<div className='flex flex-col items-center w-full max-w-md p-6 sm:p-8 bg-white rounded-lg shadow-xl border border-gray-200'>
			<AlertTriangle className='w-12 h-12 sm:w-16 sm:h-16 text-[var(--color-primary)] mb-4' />
			<h1 className='text-5xl sm:text-6xl font-extrabold text-[var(--color-primary)] mb-4'>404</h1>
			<h2 className='text-xl sm:text-2xl font-bold text-[var(--color-text-body)] mb-2'>Không tìm thấy trang</h2>
			<p className='text-sm sm:text-base text-[var(--color-text-secondary)] mb-6 text-center'>
				Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
			</p>
			<Link
				href='/'
				className='inline-block px-4 py-2 sm:px-6 sm:py-2 rounded-md bg-[var(--color-primary)] text-[var(--color-text-inverse)] font-semibold hover:bg-[var(--color-primary-hover)] transition-colors'
			>
				Quay về trang chủ
			</Link>
		</div>
	</AppSection>
);

export default NotFound;
