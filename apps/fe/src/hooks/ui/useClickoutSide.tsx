'use client';

import { useEffect, useRef, RefObject } from 'react';

type Callback = () => void;

export default function useClickOutside(callback?: Callback): { ref: RefObject<any> } {
	const ref = useRef<any>(null);

	useEffect(() => {
		function handleClick(event: MouseEvent | TouchEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback?.();
			}
		}

		window.addEventListener('mousedown', handleClick);
		window.addEventListener('touchstart', handleClick);

		return () => {
			window.removeEventListener('mousedown', handleClick);
			window.removeEventListener('touchstart', handleClick);
		};
	}, [callback]);

	return { ref };
}
