import React from 'react';
import { Mood } from '@models';
import { MoodService } from '@/services/api/mood/mood.service';
import EmotionResultCard from '../EmotionResultCard';
import { CheckCircle } from 'lucide-react';

type Props = { mood: Mood };

const EmotionResultActions: React.FC<Props> = ({ mood }) => {
	if (!mood.actions || mood.actions.length === 0) return null;
	const moodService = MoodService.getInstance();
	const moodMeta = moodService.getMoodMeta(mood);

	return (
		<EmotionResultCard disableAppearAnimation ariaLabel='Gợi ý hành động'>
			<div>
				<h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
					<CheckCircle size={24} style={{ color: moodMeta.textColor }} />
					<span style={{ color: moodMeta.textColor }}>Những việc bạn có thể làm</span>
				</h3>
				<div className='grid gap-3 md:grid-cols-3'>
					{mood.actions.map((action, index) => (
						<div
							key={index}
							className='p-4 rounded-lg border transition-all hover:shadow-md cursor-pointer'
							style={{
								borderColor: `${moodMeta.textColor}20`,
								backgroundColor: `${moodMeta.bgColor}50`,
							}}
						>
							<div className='flex items-center gap-2 mb-2'>
								<div
									className='w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-medium'
									style={{ backgroundColor: moodMeta.textColor }}
									aria-label={`Bước ${index + 1}`}
								>
									{index + 1}
								</div>
							</div>
							<p className='text-gray-700 text-sm leading-relaxed'>{action}</p>
						</div>
					))}
				</div>
			</div>
		</EmotionResultCard>
	);
};

export default EmotionResultActions;
