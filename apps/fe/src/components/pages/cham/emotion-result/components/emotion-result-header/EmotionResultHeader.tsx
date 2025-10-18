import React from 'react';
import { Mood } from '@models';
import { MoodService } from '@/services/api/mood/mood.service';
import EmotionResultCard from '../EmotionResultCard';
import { Quote } from 'lucide-react';
import { parseLucideIcon } from '@/utils';

type Props = { mood: Mood };

const EmotionResultHeader: React.FC<Props> = ({ mood }) => {
	const moodService = MoodService.getInstance();
	const moodMeta = moodService.getMoodMeta(mood);
	const IconComponent = parseLucideIcon(moodMeta.icon);

	return (
		<EmotionResultCard disableAppearAnimation ariaLabel='Kết quả phân tích cảm xúc'>
			<div>
				<div className='flex items-center gap-4 mb-6'>
					<div className='p-2 md:p-3 rounded-xl shadow-sm' style={{ backgroundColor: `${moodMeta.textColor}20` }}>
						{IconComponent && <IconComponent size={32} style={{ color: moodMeta.textColor }} />}
					</div>
					<div>
						<h1 className='text-xl md:text-3xl font-bold tracking-tight uppercase' style={{ color: moodMeta.textColor }}>
							{moodMeta.mood_label}
						</h1>
						<p className='text-sm opacity-75' style={{ color: moodMeta.textColor }}>
							{mood.header || 'Cảm xúc của bạn'}
						</p>
					</div>
				</div>
				{mood.validation && (
					<div className='mb-6'>
						<div className='p-4 bg-white/30 rounded-lg'>
							<p className='text-gray-800 leading-relaxed text-sm md:text-base text-justify'>{mood.validation}</p>
						</div>
					</div>
				)}
				{mood.quote && (
					<div className='flex items-start gap-3 p-4 md:p-6 bg-gray-50/70 rounded-lg'>
						<Quote size={24} className='mt-1 flex-shrink-0 opacity-40' style={{ color: moodMeta.textColor }} />
						<p className='text-sm md:text-base italic leading-relaxed font-medium text-gray-700'>{mood.quote}</p>
					</div>
				)}
			</div>
		</EmotionResultCard>
	);
};

export default EmotionResultHeader;
