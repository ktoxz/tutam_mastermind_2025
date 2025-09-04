'use client';
import React from 'react';
import AppSection from '@/components/shared/app-section/AppSection';

interface PageHeaderProps {
	title: string;
	description: string;
	disableAppearAnimation?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, disableAppearAnimation = false }) => {
	return (
		<AppSection disableAppearAnimation={disableAppearAnimation}>
			<div className='text-center mb-12'>
				<h1 className='text-4xl md:text-5xl font-bold text-[--color-primary-dark] mb-4'>{title}</h1>
				<p className='text-lg text-[--color-text-secondary] max-w-3xl mx-auto'>{description}</p>
			</div>
		</AppSection>
	);
};

export default PageHeader;
