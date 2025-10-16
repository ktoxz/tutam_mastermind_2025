'use client';
import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle, Heart, Quote } from 'lucide-react';
import InlineLoading from '@/components/shared/inline-loading/InlineLoading';
import { Mood } from '@models';
import { MoodService } from '@/services/api/mood/mood.service';
import EmotionResultCard from './components/EmotionResultCard';
import { parseLucideIcon } from '@/utils';

type Props = {
	mood: Mood;
};

function EmotionResult({ mood }: Props) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				await new Promise((resolve) => setTimeout(resolve, 300));
				setLoading(false);
			} catch (err: any) {
				setError(err.message || 'Có lỗi xảy ra khi tải dữ liệu.');
				setLoading(false);
			}
		};

		fetchData();
	}, [mood]);

	if (loading) {
		return <InlineLoading className='p-8' title='Đang tải nội dung...' />;
	}

	if (error) {
		return (
			<div className='flex flex-col items-center justify-center gap-4 p-8 text-red-500'>
				<AlertTriangle size={32} />
				<p className='text-center'>{error}</p>
			</div>
		);
	}

	return (
		<>
			<EmotionHeader mood={mood} />
			<EmotionEncouragement mood={mood} />
			<EmotionActions mood={mood} />
		</>
	);
}

function EmotionHeader({ mood }: { mood: Mood }) {
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
}

function EmotionEncouragement({ mood }: { mood: Mood }) {
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
}

function EmotionActions({ mood }: { mood: Mood }) {
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
}

export default EmotionResult;
