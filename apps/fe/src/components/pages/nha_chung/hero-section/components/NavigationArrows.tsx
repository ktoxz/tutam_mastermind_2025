import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationArrowsProps {
	onPrev: () => void;
	onNext: () => void;
}

const NavigationArrows: React.FC<NavigationArrowsProps> = ({ onPrev, onNext }) => (
	<>
		<button
			onClick={onPrev}
			aria-label='Previous slide'
			className='cursor-pointer absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30'
		>
			<ChevronLeft className='h-6 w-6' />
		</button>
		<button
			onClick={onNext}
			aria-label='Next slide'
			className='cursor-pointer absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30'
		>
			<ChevronRight className='h-6 w-6' />
		</button>
	</>
);

export default NavigationArrows;
