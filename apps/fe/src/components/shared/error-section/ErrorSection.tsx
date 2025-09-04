'use client';
import React from 'react';
import AppSection from '@/components/shared/app-section/AppSection';

interface ErrorSectionProps {
	message: string;
	title?: string;
}

function ErrorSection({ message, title = 'Error' }: ErrorSectionProps) {
	return (
		<AppSection>
			<div className='text-center py-8 px-4'>
				<div className='text-4xl md:text-5xl mb-3'>⚠️</div>
				<h2 className='text-xl md:text-2xl font-bold mb-3 text-[--color-error]'>{title}</h2>
				<p className='text-[--color-text-secondary] text-base mb-2'>{message}</p>
			</div>
		</AppSection>
	);
}

export default ErrorSection;
