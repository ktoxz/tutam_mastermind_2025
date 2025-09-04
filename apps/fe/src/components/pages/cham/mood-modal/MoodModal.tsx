'use client';
import React, { useEffect, useState } from 'react';
import { MoodService } from '@/services/api/mood/mood.service';
import { LOCAL_STORAGE_KEYS, LocalStorageService } from '@/services/storage/local-storage.service';
import AppSection from '@/components/shared/app-section/AppSection';
import Avatar from '@/components/shared/avatar/Avatar';
import MoodDisplay from './components/mood-display/MoodDisplay';
import { Mood } from '@packages/models';
import Quiz from './components/quiz/Quiz';

type Props = {
	onFinish: () => void;
};

function MoodModal({ onFinish }: Props) {
	const [moods, setMoods] = useState<Mood[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

	useEffect(() => {
		const fetchMoods = async () => {
			setLoading(true);
			setError(null);
			const [err, data] = await MoodService.getInstance().getList();
			if (err) {
				setError('Không thể tải danh sách cảm xúc. Vui lòng thử lại sau.');
			} else {
				setMoods(data || []);
			}
			setLoading(false);
		};
		fetchMoods();
	}, []);

	const handleSelectMood = (mood: Mood) => {
		setSelectedMood(mood);
		LocalStorageService.setItem(LOCAL_STORAGE_KEYS.MOOD_ENTRY, mood._id);
	};

	return (
		<AppSection
			className='flex flex-row items-center justify-center min-h-screen p-4 sm:p-8 relative overflow-hidden'
			disableAppearAnimation
		>
			<div className='relative w-full max-w-5xl h-full flex flex-row items-center justify-center'>
				{!selectedMood ? (
					<div className='w-max min-w-0 flex flex-col items-center gap-8 px-4 sm:px-8 py-6 sm:py-10 rounded-xl bg-white shadow-lg z-10 animate-fade-in-bottom'>
						<header className='flex flex-col items-center gap-4 text-center animate-fade-in-top'>
							<Avatar size={80} />
							<h1 className='text-xl font-bold text-[var(--color-primary)]'>
								Ngày hôm nay của bạn thế nào?
							</h1>
						</header>
						<Quiz onFinish={handleSelectMood} />
					</div>
				) : (
					<MoodDisplay selectedMood={selectedMood} onFinish={onFinish} />
				)}
			</div>
		</AppSection>
	);
}

export default MoodModal;
