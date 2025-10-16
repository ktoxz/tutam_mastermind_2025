'use client';
import React, { useEffect, useState } from 'react';
import AppSection from '@/components/shared/app-section/AppSection';
import { Check } from 'lucide-react';
import { NewMoodService } from '@/services/api/newmood/mood.service';
import { EmotionType, EmotionTag } from '@/services/api/newmood/data';

interface EmotionDetailProps {
	selectedEmotion: string | null;
	selectedTags: EmotionTag[];
	onTagToggle: (tag: EmotionTag) => void;
}

const EmotionDetail: React.FC<EmotionDetailProps> = ({ selectedEmotion, selectedTags, onTagToggle }) => {
	const [emotion, setEmotion] = useState<EmotionType | null>(null);
	const moodService = NewMoodService.getInstance();

	useEffect(() => {
		if (selectedEmotion) {
			const emotionData = moodService.getEmotionTypeById(selectedEmotion);
			setEmotion(emotionData || null);
		}
	}, [selectedEmotion]);

	if (!emotion) return null;

	return (
		<AppSection>
			<div className='rounded-2xl p-6 md:p-8 animate-fade-in-scale bg-white'>
				<h2 className='text-2xl md:text-3xl font-bold mb-4 text-center' style={{ color: emotion.textColor }}>
					{emotion.label}
				</h2>
				<p className='text-center text-base mb-6' style={{ color: emotion.textColor, opacity: 0.8 }}>
					Chọn mức độ cảm xúc cụ thể:
				</p>
				<div className='flex flex-wrap justify-center gap-2'>
					{emotion.tags.map((tag) => {
						const isSelected = selectedTags.some((t) => t._id === tag._id);

						return (
							<button
								key={tag._id}
								onClick={() => onTagToggle(tag)}
								className='relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 bg-white shadow-md hover:shadow-lg hover:cursor-pointer'
								style={{
									color: emotion.textColor,
									border: isSelected ? `3px solid ${emotion.textColor}` : '3px solid transparent',
									backgroundColor: isSelected ? emotion.bgColor : emotion.bgColor + '33',
									fontWeight: isSelected ? 'bold' : 'medium',
								}}
							>
								{isSelected && <Check size={16} style={{ color: emotion.textColor }} className='animate-fade-in-scale' />}
								<span>{tag.label}</span>
							</button>
						);
					})}
				</div>
			</div>
		</AppSection>
	);
};

export default EmotionDetail;
