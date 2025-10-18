'use client';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Check } from 'lucide-react';
import { EmotionService } from '@/services/api/emotion/emotion.service';
import { EmotionCategory, EmotionTag } from '@/models/Emotion';
import ToolTip from '@/components/shared/tool-tip/ToolTip';

interface EmotionDetailProps {
	selectedEmotion: string | null;
	selectedTags: EmotionTag[];
	onTagToggle: (tag: EmotionTag) => void;
}

const EmotionDetail: React.FC<EmotionDetailProps> = React.memo(({ selectedEmotion, selectedTags, onTagToggle }) => {
	const [emotion, setEmotion] = useState<EmotionCategory | null>(null);
	const moodService = useMemo(() => EmotionService.getInstance(), []);

	const selectedTagIds = useMemo(() => new Set(selectedTags.map((t) => t._id)), [selectedTags]);

	useEffect(() => {
		if (!selectedEmotion) {
			setEmotion(null);
			return;
		}

		const emotionData = moodService.getEmotionCategoryById(selectedEmotion);
		setEmotion(emotionData || null);
	}, [selectedEmotion, moodService]);

	const isTagSelected = useCallback(
		(tagId: string): boolean => {
			return selectedTagIds.has(tagId);
		},
		[selectedTagIds],
	);

	const getButtonStyle = useCallback(
		(tag: EmotionTag, selected: boolean) => {
			if (!emotion) return {};

			return {
				color: emotion.textColor,
				border: selected ? `3px solid ${emotion.textColor}` : '3px solid transparent',
				backgroundColor: selected ? emotion.bgColor : `${emotion.bgColor}33`,
			};
		},
		[emotion],
	);

	if (!emotion) return null;

	return (
		<div className='rounded-2xl p-6 md:p-8 animate-fade-in-scale bg-white shadow-lg' role='region' aria-label={`Chi tiết cảm xúc ${emotion.label}`}>
			<h2 className='text-2xl md:text-3xl font-bold mb-4 text-center' style={{ color: emotion.textColor }}>
				{emotion.label}
			</h2>

			<p className='text-center text-base mb-6' style={{ color: emotion.textColor, opacity: 0.8 }}>
				Chọn mức độ cảm xúc cụ thể:
			</p>

			<div className='flex flex-wrap justify-center gap-2' role='group' aria-label='Danh sách mức độ cảm xúc'>
				{emotion.tags.map((tag) => {
					const isSelected = isTagSelected(tag._id);
					const tooltipDesc = isSelected ? 'Click để bỏ chọn' : 'Click để chọn cảm xúc này';

					return (
						<ToolTip key={tag._id} title={tag.label} description={tooltipDesc} delay={400}>
							<button
								onClick={() => onTagToggle(tag)}
								className='relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 bg-white shadow-md hover:shadow-lg hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2'
								style={{
									...getButtonStyle(tag, isSelected),
								}}
								aria-pressed={isSelected}
								aria-label={`${tag.label} - ${tooltipDesc}`}
								type='button'
							>
								{isSelected && <Check size={16} style={{ color: emotion.textColor }} className='animate-fade-in-scale' aria-hidden='true' />}
								<span>{tag.label}</span>
							</button>
						</ToolTip>
					);
				})}
			</div>
		</div>
	);
});

EmotionDetail.displayName = 'EmotionDetail';

export default EmotionDetail;
