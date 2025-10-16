'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { Smile, Users, Frown, Zap, CloudRain, XOctagon, Flame, Eye } from 'lucide-react';
import { NewMoodService } from '@/services/api/newmood/mood.service';
import { EmotionType, EmotionTag } from '@/services/api/newmood/data';
import InlineLoading from '@/components/shared/inline-loading/InlineLoading';
import ErrorSection from '@/components/shared/error-section/ErrorSection';

interface EmotionWheelProps {
	selectedEmotion: string | null;
	onEmotionSelect: (emotion: string) => void;
	selectedTags: EmotionTag[];
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

interface EmotionButtonProps {
	emotion: EmotionType;
	isSelected: boolean;
	tagCount: number;
	onSelect: (id: string) => void;
}

const EmotionButton: React.FC<EmotionButtonProps> = ({ emotion, isSelected, tagCount, onSelect }) => {
	const Icon = EMOTION_ICONS[emotion.icon as keyof typeof EMOTION_ICONS];

	return (
		<button
			type='button'
			aria-pressed={isSelected}
			onClick={() => onSelect(emotion._id)}
			className={`
				relative group rounded-xl p-4 md:p-5 shadow-md transition-all duration-300
				hover:scale-105 active:scale-95 hover:shadow-xl focus:outline-none
				focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[${emotion.textColor}]
				${isSelected ? 'border-2' : 'border'}
			`}
			style={{
				backgroundColor: emotion.bgColor,
				borderColor: isSelected ? emotion.textColor : emotion.bgColor,
			}}
		>
			{tagCount > 0 && (
				<div
					className='absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shadow-lg animate-fade-in-scale z-10'
					style={{
						backgroundColor: emotion.textColor,
						color: emotion.bgColor,
					}}
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
};

const EmotionWheel: React.FC<EmotionWheelProps> = ({ selectedEmotion, onEmotionSelect, selectedTags }) => {
	const [emotions, setEmotions] = useState<EmotionType[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const moodService = NewMoodService.getInstance();

	useEffect(() => {
		const fetchEmotions = async () => {
			setLoading(true);
			setError(null);

			const [err, data] = await moodService.getEmotionTypes();

			if (err) {
				setError('Không thể tải danh sách cảm xúc. Vui lòng thử lại.');
			} else if (data) {
				setEmotions(data);
			}

			setLoading(false);
		};

		fetchEmotions();
	}, []);

	const getEmotionTagCount = useMemo(() => {
		const countMap: Record<string, number> = {};
		selectedTags.forEach((tag) => {
			countMap[tag.emotionType] = (countMap[tag.emotionType] || 0) + 1;
		});
		return countMap;
	}, [selectedTags]);

	if (loading) {
		return (
			<div className='bg-white rounded-2xl shadow-lg p-8'>
				<InlineLoading title='Đang tải cảm xúc...' size={32} />
			</div>
		);
	}

	if (error) {
		return <ErrorSection message={error} title='Lỗi tải dữ liệu' />;
	}

	return (
		<div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3'>
			{emotions.map((emotion) => (
				<EmotionButton
					key={emotion._id}
					emotion={emotion}
					isSelected={selectedEmotion === emotion._id}
					tagCount={getEmotionTagCount[emotion._id] || 0}
					onSelect={onEmotionSelect}
				/>
			))}
		</div>
	);
};

export default EmotionWheel;
