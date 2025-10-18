'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { Smile, Users, Frown, Zap, CloudRain, XOctagon, Flame, Eye } from 'lucide-react';
import { EmotionService } from '@/services/api/emotion/emotion.service';
import InlineLoading from '@/components/shared/inline-loading/InlineLoading';
import ErrorSection from '@/components/shared/error-section/ErrorSection';
import { EmotionTag, EmotionCategory } from '@/models';
import EmotionTagButton from './components/emotion-tag-button/EmotionTagButton';

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

const EmotionWheel: React.FC<EmotionWheelProps> = ({ selectedEmotion, onEmotionSelect, selectedTags }) => {
	const [emotions, setEmotions] = useState<EmotionCategory[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const moodService = EmotionService.getInstance();

	useEffect(() => {
		const fetchEmotions = async () => {
			setLoading(true);
			setError(null);

			const [err, data] = await moodService.getEmotionCategorys();

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
			countMap[tag.emotionCategory] = (countMap[tag.emotionCategory] || 0) + 1;
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
				<EmotionTagButton
					key={emotion._id}
					emotion={emotion}
					isSelected={selectedEmotion === emotion._id}
					tagCount={getEmotionTagCount[emotion._id] || 0}
					onSelect={onEmotionSelect}
					EMOTION_ICONS={EMOTION_ICONS}
				/>
			))}
		</div>
	);
};

export default EmotionWheel;
