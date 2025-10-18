'use client';
import React, { ReactNode, memo } from 'react';
import AppSection from '@/components/shared/app-section/AppSection';

interface EmotionResultCardProps {
	children: ReactNode;
	className?: string;
	style?: React.CSSProperties;
	disableAppearAnimation?: boolean;
	ariaLabel?: string;
}

const EmotionResultCard: React.FC<EmotionResultCardProps> = memo(({ children, className = '', style = {}, disableAppearAnimation = false, ariaLabel }) => {
	return (
		<AppSection className={className} style={style} disableAppearAnimation={disableAppearAnimation}>
			<div className={`p-4 md:p-6 shadow-lg rounded-2xl leading-relaxed border border-gray-100 relative overflow-hidden bg-white`} role='article' aria-label={ariaLabel}>
				{children}
			</div>
		</AppSection>
	);
});

EmotionResultCard.displayName = 'EmotionResultCard';

export default EmotionResultCard;
