'use client';
import React from 'react';
import { Mood } from '@packages/models';
import ButtonCTA from '@/components/shared/cta/ButtonCTA';
import MoodIcon from '@/components/pages/cham/mood-modal/shared/mood-icon/MoodIcon';

type Props = {
	moods: Mood[];
	onFinish: (mood: Mood) => void;
	onBack: () => void;
};

export default function SelectMood({ moods, onFinish, onBack }: Props) {
	return (
		<div className='max-w-xl w-[480px] bg-white'>
			<div className='mb-4'>
				<p className='text-lg text-gray-900'>Chọn tâm trạng của bạn:</p>
			</div>
			<div className='grid grid-cols-2 gap-4 mb-6'>
				{moods.map((mood) => (
					<button
						key={mood._id}
						className={`p-4 rounded flex flex-col items-center cursor-pointer hover:scale-105 transform transition active:scale-95`}
						style={{ backgroundColor: mood.bgColor }}
						onClick={() => onFinish(mood)}
					>
						<MoodIcon mood={mood} size={32} color={mood.textColor} />
						<span className='mt-2' style={{ color: mood.textColor }}>
							{mood.name}
						</span>
					</button>
				))}
			</div>
			<ButtonCTA variant='secondary' onClick={onBack} className='text-[var(--color-text-secondary)]'>
				Quay lại
			</ButtonCTA>
		</div>
	);
}
