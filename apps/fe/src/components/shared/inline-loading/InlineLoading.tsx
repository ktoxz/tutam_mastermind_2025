'use client';
import React from 'react';
import { Loader } from 'lucide-react';

type InlineLoadingProps = {
	title?: string;
	size?: number;
	className?: string;
};

const InlineLoading: React.FC<InlineLoadingProps> = ({ title, size = 32, className = '' }) => (
	<div
		className={`flex flex-col items-center justify-center gap-4 p-4 text-[var(--color-text-secondary)] ${className}`}
	>
		<Loader className='animate-spin' size={size} />
		{title && <p className='text-center text-sm sm:text-base'>{title}</p>}
	</div>
);

export default InlineLoading;
