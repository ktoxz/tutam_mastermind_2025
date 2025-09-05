'use client';
import React, { ReactNode, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

interface AppSectionProps {
	children: ReactNode;
	disableAppearAnimation?: boolean;
	fullWidth?: boolean;
	className?: string;
	style?: React.CSSProperties;
}

const ANIMATION_CLASSES = ['animate-fade-in-bottom', 'animate-fade-in-scale', 'animate-fade-in'] as const;

function AppSection({
	children,
	disableAppearAnimation = false,
	fullWidth = false,
	className = '',
	style = {},
}: AppSectionProps) {
	const { ref, inView } = useInView({
		threshold: 0.15,
		triggerOnce: true,
	});

	const animationClass = useMemo(() => {
		return ANIMATION_CLASSES[1];
	}, []);

	const sectionClasses = `w-screen min-h-max h-max overflow-x-hidden ${
		!disableAppearAnimation && inView ? animationClass : ''
	}`;

	const containerClasses = fullWidth
		? `w-full h-max mx-auto px-2 md:px-4 lg:px-8 py-2 md:py-4 lg:py-6 ${className}`
		: `w-full h-max mx-auto px-2 md:px-4 lg:px-8 py-2 md:py-4 lg:py-6 max-w-[var(--app-max-width)] ${className}`;

	return (
		<section className={sectionClasses} ref={ref}>
			<div className={containerClasses} style={style}>
				{children}
			</div>
		</section>
	);
}

export default AppSection;
