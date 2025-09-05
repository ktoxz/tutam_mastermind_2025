'use client';

import { useRef } from 'react';

type SwipeDirection = 'left' | 'right' | 'up' | 'down';

/**
 * @var {number} minSwipeDistance - The minimum distance (in pixels) required to trigger a swipe.
 */
interface UseSwipeOptions {
	minSwipeDistance?: number;
}

type OnSwipe = (direction: SwipeDirection) => void;

const useSwipe = (onSwipe: OnSwipe, options: UseSwipeOptions = {}) => {
	const { minSwipeDistance = 50 } = options;
	const startX = useRef<number | null>(null);
	const startY = useRef<number | null>(null);
	const isSwiping = useRef(false);

	const handleTouchStart = (e: React.TouchEvent) => {
		isSwiping.current = true;
		startX.current = e.touches[0].clientX;
		startY.current = e.touches[0].clientY;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isSwiping.current) return;
		const currentX = e.touches[0].clientX;
		const currentY = e.touches[0].clientY;

		const deltaX = (startX.current ?? 0) - currentX;
		const deltaY = (startY.current ?? 0) - currentY;

		if (Math.abs(deltaX) > Math.abs(deltaY)) {
			e.preventDefault();
		}
	};

	const handleTouchEnd = (e: React.TouchEvent) => {
		if (!isSwiping.current) return;
		const endX = e.changedTouches[0].clientX;
		const endY = e.changedTouches[0].clientY;

		const deltaX = (startX.current ?? 0) - endX;
		const deltaY = (startY.current ?? 0) - endY;

		if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
			onSwipe(deltaX > 0 ? 'left' : 'right');
		} else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > minSwipeDistance) {
			onSwipe(deltaY > 0 ? 'up' : 'down');
		}

		isSwiping.current = false;
		startX.current = null;
		startY.current = null;
	};

	return {
		onTouchStart: handleTouchStart,
		onTouchMove: handleTouchMove,
		onTouchEnd: handleTouchEnd,
	};
};

export default useSwipe;
