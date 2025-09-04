'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AppSectionProps {
	children: ReactNode;
	disableAppearAnimation?: boolean;
	fullWidth?: boolean;
	className?: string;
	style?: React.CSSProperties;
}

const ANIMATION_CLASSES = ['animate-fade-in-bottom', 'animate-fade-in-scale', 'animate-fade-in'];

const getRandomAnimationClass = () => {
	const randomIndex = Math.floor(Math.random() * ANIMATION_CLASSES.length);
	return ANIMATION_CLASSES[randomIndex];
};

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
	const [animationClass, setAnimationClass] = useState('');

	useEffect(() => {
		if (inView && !animationClass && !disableAppearAnimation) {
			setAnimationClass(getRandomAnimationClass());
		}
	}, [inView, animationClass, disableAppearAnimation]);

	return (
		<section className={`w-screen min-h-max h-max overflow-x-hidden ${animationClass}`} ref={ref}>
			<div
				className={
					fullWidth
						? `w-full h-max mx-auto px-2 md:px-4 lg:px-8 py-2 md:py-4 lg:py-6 ${className}`
						: `w-full h-max mx-auto px-2 md:px-4 lg:px-8 py-2 md:py-4 lg:py-6 max-w-[var(--app-max-width)] ${className}`
				}
				style={style}
			>
				{children}
			</div>
		</section>
	);
}

export default AppSection;
