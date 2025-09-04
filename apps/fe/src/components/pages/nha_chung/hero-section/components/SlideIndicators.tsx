import React from 'react';

interface SlideIndicatorsProps {
	total: number;
	current: number;
	onSelect: (index: number) => void;
	className?: string;
}

const SlideIndicators: React.FC<SlideIndicatorsProps> = ({ total, current, onSelect, className = '' }) => (
	<div
		className={`absolute bottom-2 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20 ${className}`}
	>
		{Array.from({ length: total }).map((_, index) => (
			<button
				key={index}
				onClick={() => onSelect(index)}
				className={`cursor-pointer w-1.5 h-1.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
					index === current ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
				}`}
				aria-label={`Slide ${index + 1}`}
			/>
		))}
	</div>
);

export default SlideIndicators;
