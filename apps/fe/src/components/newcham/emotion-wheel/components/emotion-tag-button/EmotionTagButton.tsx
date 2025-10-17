'use client';
import React, { useCallback, useMemo } from 'react';
import { EmotionCategory } from '@/models';

interface EmotionTagButtonProps {
	emotion: EmotionCategory;
	isSelected: boolean;
	tagCount: number;
	onSelect: (id: string) => void;
	EMOTION_ICONS: Record<string, React.ElementType>;
}

function EmotionTagButton(props: EmotionTagButtonProps) {
	const { emotion, isSelected, tagCount, onSelect, EMOTION_ICONS } = props;

	const Icon = useMemo(() => EMOTION_ICONS[emotion.icon as keyof typeof EMOTION_ICONS], [EMOTION_ICONS, emotion.icon]);

	const handleClick = useCallback(() => {
		onSelect(emotion._id);
	}, [onSelect, emotion._id]);

	const buttonStyle = useMemo(
		() => ({
			backgroundColor: emotion.bgColor,
			borderColor: isSelected ? emotion.textColor : emotion.bgColor,
		}),
		[emotion.bgColor, emotion.textColor, isSelected],
	);

	const badgeStyle = useMemo(
		() => ({
			backgroundColor: emotion.textColor,
			color: emotion.bgColor,
		}),
		[emotion.textColor, emotion.bgColor],
	);

	return (
		<button
			type='button'
			aria-pressed={isSelected}
			onClick={handleClick}
			className={`
                relative group rounded-xl p-4 md:p-5 shadow-md transition-all duration-300
                hover:scale-105 active:scale-95 hover:shadow-xl focus:outline-none
                focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[${emotion.textColor}]
                hover:cursor-pointer
                ${isSelected ? 'border-2' : 'border'}
            `}
			style={buttonStyle}
		>
			{tagCount > 0 && (
				<div
					className='absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shadow-lg animate-fade-in-scale z-10'
					style={badgeStyle}
				>
					{tagCount}
				</div>
			)}
			<div className='flex flex-col items-center gap-2'>
				<Icon size={28} className='animate-fade-in-scale' strokeWidth={1.5} style={{ color: emotion.textColor }} />
				<h3 className='text-sm md:text-base font-bold text-center' style={{ color: emotion.textColor }}>
					{emotion.label}
				</h3>
			</div>
		</button>
	);
}

export default EmotionTagButton;
