'use client';
import { useRef, useState, useEffect } from 'react';

interface Size {
	width: number;
	height: number;
}

export function useRefSize(): [React.RefObject<any | null>, Size] {
	const ref = useRef<any>(null);
	const [size, setSize] = useState<Size>({ width: 0, height: 0 });

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				const { width, height } = entry.contentRect;
				setSize({ width, height });
			}
		});

		resizeObserver.observe(element);

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	return [ref, size];
}
