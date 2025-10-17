import React from 'react';
import { Mood } from '@models';
import { MoodService } from '@/services/api/mood/mood.service';
import EmotionResultCard from '../EmotionResultCard';
import { Heart } from 'lucide-react';

type Props = { mood: Mood };

const EmotionResultEncouragement: React.FC<Props> = ({ mood }) => {
	if (!mood.encouragement) return null;
	const moodService = MoodService.getInstance();
	const moodMeta = moodService.getMoodMeta(mood);

	return (
		<EmotionResultCard disableAppearAnimation ariaLabel='Động viên'>
			<div>
				<h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
					<Heart size={24} style={{ color: moodMeta.textColor }} />
					<span style={{ color: moodMeta.textColor }}>Lời động viên</span>
				</h3>
				<div className='p-4 bg-gradient-to-br rounded-lg' style={{ background: `linear-gradient(135deg, ${moodMeta.bgColor}40, ${moodMeta.bgColor}20)` }}>
					<p className='text-gray-800 leading-relaxed text-sm md:text-base text-justify'>{mood.encouragement}</p>
				</div>
			</div>
		</EmotionResultCard>
	);
};

export default EmotionResultEncouragement;
