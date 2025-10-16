'use client';
import React, { useState, useRef, useLayoutEffect } from 'react';

type Props = {
	title: string;
	description: string;
	className?: string;
	children: React.ReactNode;
	delay?: number;
};

function ToolTip({ title, description, className, children, delay = 500 }: Props) {
	const [visible, setVisible] = useState(false);
	const [position, setPosition] = useState<'top' | 'bottom'>('bottom');
	const [align, setAlign] = useState<'center' | 'left' | 'right'>('center');
	const timerRef = useRef<NodeJS.Timeout | null>(null);
	const tooltipRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const handleMouseEnter = () => {
		timerRef.current = setTimeout(() => setVisible(true), delay);
	};

	const handleMouseLeave = () => {
		if (timerRef.current) clearTimeout(timerRef.current);
		setVisible(false);
	};

	useLayoutEffect(() => {
		if (visible && tooltipRef.current && wrapperRef.current) {
			const tooltipRect = tooltipRef.current.getBoundingClientRect();
			const wrapperRect = wrapperRef.current.getBoundingClientRect();
			const spaceAbove = wrapperRect.top;
			const spaceBelow = window.innerHeight - wrapperRect.bottom;

			// Vertical position
			if (spaceBelow > tooltipRect.height + 8) {
				setPosition('bottom');
			} else {
				setPosition('top');
			}

			// Horizontal alignment
			const leftOverflow = tooltipRect.left < 8;
			const rightOverflow = tooltipRect.right > window.innerWidth - 8;

			if (leftOverflow) {
				setAlign('left');
			} else if (rightOverflow) {
				setAlign('right');
			} else {
				setAlign('center');
			}
		}
	}, [visible]);

	const getTooltipPositionClass = () => {
		let pos = '';
		if (position === 'top') {
			pos += 'bottom-full mb-1 ';
		} else {
			pos += 'top-full mt-1 ';
		}
		if (align === 'center') {
			pos += 'left-1/2 -translate-x-1/2 ';
		} else if (align === 'left') {
			pos += 'left-0 ';
		} else if (align === 'right') {
			pos += 'right-0 ';
		}
		return pos;
	};

	return (
		<div ref={wrapperRef} className={`relative group ${className ?? ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<div
				ref={tooltipRef}
				className={`
					absolute pointer-events-none
					${getTooltipPositionClass()}
					w-max max-w-xs p-3 bg-gray-900/70 text-white text-xs rounded-sm shadow-lg transition-opacity duration-150 z-10
					${visible ? 'opacity-100' : 'opacity-0'}
				`}
				style={{ pointerEvents: visible ? 'auto' : 'none' }}
			>
				<h3 className='font-semibold mb-0.5'>{title}</h3>
				<p>{description}</p>
			</div>
			{children}
		</div>
	);
}

export default ToolTip;
