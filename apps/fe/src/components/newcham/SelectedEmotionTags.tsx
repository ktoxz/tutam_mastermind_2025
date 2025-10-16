'use client';
import React from 'react';
import { X } from 'lucide-react';
import { NewMoodService } from '@/services/api/newmood/mood.service';
import { EmotionTag } from '@/services/api/newmood/data';

interface SelectedEmotionTagsProps {
	selectedTags: EmotionTag[];
	onRemoveTag: (tagId: string) => void;
}

const SelectedEmotionTags: React.FC<SelectedEmotionTagsProps> = ({ selectedTags, onRemoveTag }) => {
	const moodService = NewMoodService.getInstance();

	if (selectedTags.length === 0) return null;

	return (
		<div className='bg-white rounded-2xl shadow-lg p-4 md:p-6 animate-fade-in-scale'>
			<h3 className='text-lg font-bold text-[var(--color-text-body)] mb-3'>Cảm xúc của bạn ({selectedTags.length})</h3>
			<div className='flex flex-wrap gap-2'>
				{selectedTags.map((tag) => {
					const emotion = moodService.getEmotionTypeById(tag.emotionType);
					if (!emotion) return null;

					return (
						<button
							key={tag._id}
							onClick={() => onRemoveTag(tag._id)}
							className='group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:cursor-pointer'
							style={{
								backgroundColor: emotion.bgColor,
								color: emotion.textColor,
							}}
						>
							<span>{tag.label}</span>
							<X size={16} className='transition-transform group-hover:rotate-90' />
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default SelectedEmotionTags;
