'use client';
import React, { useEffect, useRef, useState, ReactNode, useCallback } from 'react';
import AppSection from '@/components/shared/app-section/AppSection';
import InlineLoading from '../inline-loading/InlineLoading';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CarouselProps {
	children: ReactNode[];
	itemWidth: number;
	autoScrollInterval?: number;
	gap?: string;
	containerClassName?: string;
	sectionClassName?: string;
	sectionStyle?: React.CSSProperties;
	fullWidth?: boolean;
	title?: string;
	titleClassName?: string;
	showTitle?: boolean;
	pauseOnHover?: boolean;
	enableManualScroll?: boolean;
	isLoading?: boolean;
	isEmpty?: boolean;
	emptyMessage?: string;
}

const DEFAULT_PROPS = {
	autoScrollInterval: 2000,
	gap: 'gap-2 md:gap-4',
	containerClassName: '',
	sectionClassName: '',
	sectionStyle: {},
	fullWidth: false,
	titleClassName: 'text-2xl md:text-4xl font-bold text-(--color-text-body) mb-6 md:mb-8 text-center',
	showTitle: false,
	pauseOnHover: true,
	enableManualScroll: true,
	isLoading: false,
} as const;

function Carousel({
	children,
	itemWidth,
	autoScrollInterval = DEFAULT_PROPS.autoScrollInterval,
	gap = DEFAULT_PROPS.gap,
	containerClassName = DEFAULT_PROPS.containerClassName,
	sectionClassName = DEFAULT_PROPS.sectionClassName,
	sectionStyle = DEFAULT_PROPS.sectionStyle,
	fullWidth = DEFAULT_PROPS.fullWidth,
	title,
	titleClassName = DEFAULT_PROPS.titleClassName,
	showTitle = DEFAULT_PROPS.showTitle,
	pauseOnHover = DEFAULT_PROPS.pauseOnHover,
	enableManualScroll = DEFAULT_PROPS.enableManualScroll,
	isLoading = DEFAULT_PROPS.isLoading,
	isEmpty = false,
	emptyMessage = 'Không có nội dung phù hợp.',
}: CarouselProps) {
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const galleryRef = useRef<HTMLDivElement>(null);
	const isScrolling = useRef(false);
	const isHovered = useRef(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [numOfItemOnScrolling, setNumOfItemOnScrolling] = useState(1);

	const clearAutoScrollInterval = useCallback(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	}, []);

	const scrollToIndex = useCallback(
		(index: number) => {
			if (!galleryRef.current || itemWidth <= 0) return;

			const validIndex = Math.max(0, Math.min(index, children.length - 1));

			galleryRef.current.scrollTo({
				left: validIndex * itemWidth,
				behavior: 'smooth',
			});
		},
		[itemWidth],
	);

	const handleButtonClick = useCallback(
		(direction: 'left' | 'right') => {
			let newIndex;
			const scrollAmount = Math.max(1, Math.floor((children.length - 1) / 3));
			if (direction === 'left') {
				newIndex = Math.max(0, currentIndex - scrollAmount);
			} else {
				newIndex = Math.min(children.length - 1, currentIndex + scrollAmount);
			}

			setCurrentIndex(newIndex);
			scrollToIndex(newIndex);
		},
		[children.length, currentIndex, scrollToIndex],
	);

	const startInterval = useCallback(() => {
		clearAutoScrollInterval();

		if (autoScrollInterval <= 0) return;

		intervalRef.current = setInterval(() => {
			if (isHovered.current && pauseOnHover) return;

			setCurrentIndex((prevIndex) => {
				let newIndex;
				if (prevIndex + numOfItemOnScrolling >= children.length - 1) {
					newIndex = 0;
				} else {
					newIndex = Math.min(prevIndex + numOfItemOnScrolling, children.length - 1);
				}
				scrollToIndex(newIndex);
				return newIndex;
			});
		}, autoScrollInterval);
	}, [autoScrollInterval, pauseOnHover, numOfItemOnScrolling, children.length, clearAutoScrollInterval, scrollToIndex]);

	const handleScroll = useCallback(() => {
		if (!enableManualScroll) return;

		clearAutoScrollInterval();
		isScrolling.current = true;

		setTimeout(() => {
			isScrolling.current = false;
			if (!isHovered.current || !pauseOnHover) {
				startInterval();
			}
		}, 2000);
	}, [enableManualScroll, pauseOnHover, clearAutoScrollInterval, startInterval]);

	const handleMouseEnter = useCallback(() => {
		if (pauseOnHover) {
			isHovered.current = true;
			clearAutoScrollInterval();
		}
	}, [pauseOnHover, clearAutoScrollInterval]);

	const handleMouseLeave = useCallback(() => {
		if (pauseOnHover) {
			isHovered.current = false;
			if (!isScrolling.current) {
				startInterval();
			}
		}
	}, [pauseOnHover, startInterval]);

	useEffect(() => {
		const updateScrollBehavior = () => {
			const gallery = galleryRef.current;
			if (!gallery || itemWidth <= 0) return;

			const itemWidthPercent = (itemWidth / gallery.offsetWidth) * 100;
			const minScrollPercent = 70;
			const numItems = Math.max(1, Math.floor(minScrollPercent / itemWidthPercent));
			setNumOfItemOnScrolling(numItems);
		};

		updateScrollBehavior();
		window.addEventListener('resize', updateScrollBehavior);

		return () => window.removeEventListener('resize', updateScrollBehavior);
	}, [itemWidth]);

	useEffect(() => {
		if (autoScrollInterval > 0) {
			startInterval();
		}

		const gallery = galleryRef.current;
		if (gallery && enableManualScroll) {
			gallery.addEventListener('scroll', handleScroll);
		}

		return () => {
			if (gallery && enableManualScroll) {
				gallery.removeEventListener('scroll', handleScroll);
			}
			clearAutoScrollInterval();
		};
	}, [autoScrollInterval, enableManualScroll, startInterval, handleScroll, clearAutoScrollInterval]);

	return (
		<AppSection className={sectionClassName} style={sectionStyle} fullWidth={fullWidth}>
			<div className='w-full max-w-[var(--app-max-width)] mx-auto'>
				{showTitle && title && <h2 className={titleClassName}>{title}</h2>}
				{isLoading ? (
					<div className='flex justify-center items-center h-40'>
						<InlineLoading className='p-8' />
					</div>
				) : isEmpty ? (
					<div className='text-center py-12'>
						<div className='text-6xl mb-4' role='img' aria-label='not found'>
							😶‍🌫️
						</div>
						<p className='text-[--color-text-secondary] text-lg mb-2'>{emptyMessage}</p>
						<p className='text-[--color-text-tertiary] text-sm'>Hãy quay lại sau để khám phá những trải nghiệm mới nhé!</p>
					</div>
				) : (
					<div className='relative'>
						<div
							className={`relative flex ${gap} overflow-x-auto pb-4 ${containerClassName}`}
							ref={galleryRef}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							{children}
						</div>
						<div className='absolute inset-0 hidden md:flex justify-between items-center pointer-events-none z-50 px-4'>
							<button
								className='cursor-pointer pointer-events-auto aspect-square p-2 rounded-full border border-gray-200 bg-gray-100/30 backdrop-blur-xs transition-colors hover:bg-gray-300/40'
								type='button'
								onClick={() => handleButtonClick('left')}
							>
								<ArrowLeft
									size={24}
									style={{
										color: 'white',
									}}
								/>
							</button>

							<button
								className='cursor-pointer pointer-events-auto aspect-square p-2 rounded-full border border-gray-200 bg-gray-100/30 backdrop-blur-xs transition-colors hover:bg-gray-300/40'
								type='button'
								onClick={() => handleButtonClick('right')}
							>
								<ArrowRight
									size={24}
									style={{
										color: 'white',
									}}
								/>
							</button>
						</div>
					</div>
				)}
			</div>
		</AppSection>
	);
}

export default Carousel;
