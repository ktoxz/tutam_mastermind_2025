'use client';
import React, { useEffect, useState } from 'react';
import { Smile, Users, Frown, Zap, CloudRain, XOctagon, Flame, Eye } from 'lucide-react';
import { NewMoodService } from '@/services/api/newmood/mood.service';
import { EmotionType } from '@/services/api/newmood/data';

interface EmotionWheelProps {
	selectedEmotion: string | null;
	onEmotionSelect: (emotion: string) => void;
}

const EMOTION_ICONS = {
	Smile,
	Users,
	Frown,
	Zap,
	CloudRain,
	XOctagon,
	Flame,
	Eye,
};

const EmotionWheel: React.FC<EmotionWheelProps> = ({ selectedEmotion, onEmotionSelect }) => {
	const [emotions, setEmotions] = useState<EmotionType[]>([]);
	const moodService = NewMoodService.getInstance();

	useEffect(() => {
		moodService.getEmotionTypes().then(([, data]) => {
			if (data) setEmotions(data);
		});
	}, []);

	return (
		<div className='grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4'>
			{emotions.map((emotion) => {
				const Icon = EMOTION_ICONS[emotion.icon as keyof typeof EMOTION_ICONS];
				const isSelected = selectedEmotion === emotion._id;

				return (
					<button
						key={emotion._id}
						onClick={() => onEmotionSelect(emotion._id)}
						className='relative group rounded-xl p-4 md:p-6 transition-all duration-300 hover:scale-103 active:scale-95 shadow-md hover:shadow-xl'
						style={{
							backgroundColor: emotion.bgColor,
							transform: isSelected ? 'scale(1.05)' : 'scale(1)',
							border: isSelected ? `2px solid ${emotion.textColor}` : `2px solid ${emotion.bgColor}`,
						}}
					>
						<div className='flex flex-col items-center gap-2'>
							<Icon size={32} className='animate-fade-in-scale' strokeWidth={1.5} style={{ color: emotion.textColor }} />
							<h3 className='text-base md:text-lg font-bold' style={{ color: emotion.textColor }}>
								{emotion.label}
							</h3>
						</div>
					</button>
				);
			})}
		</div>
	);
};

export default EmotionWheel;
