'use client';
import React, { ReactNode } from 'react';
import AppSection from '@/components/shared/app-section/AppSection';

interface MoodResultCardProps {
	children: ReactNode;
	className?: string;
	style?: React.CSSProperties;
	disableAppearAnimation?: boolean;
}

const MoodResultCard: React.FC<MoodResultCardProps> = ({ children, className = '', style = {}, disableAppearAnimation = false }) => {
	return (
		<AppSection className={className} style={style} disableAppearAnimation={disableAppearAnimation}>
			<div className='p-4 md:p-6 shadow-lg rounded-2xl leading-relaxed border border-gray-100 relative overflow-hidden bg-white'>{children}</div>
		</AppSection>
	);
};

export default MoodResultCard;
