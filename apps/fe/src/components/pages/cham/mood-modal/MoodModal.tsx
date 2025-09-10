'use client';
import React, { useLayoutEffect, useState } from 'react';
import { LOCAL_STORAGE_KEYS, LocalStorageService } from '@/services/storage/local-storage.service';
import AppSection from '@/components/shared/app-section/AppSection';
import Avatar from '@/components/shared/avatar/Avatar';
import MoodDisplay from './components/mood-display/MoodDisplay';
import { Mood } from '@packages/models';
import Quiz from './components/quiz/Quiz';
import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';

type Props = {
	onFinish: (mood: Mood) => void;
};

function MoodModal({ onFinish }: Props) {
	const [mood, setMood] = useState<Mood | null>(null);

	const handleSelectMood = () => {
		try {
			const moodData = JSON.parse(LocalStorageService.getItem(LOCAL_STORAGE_KEYS.MOOD_ENTRY) || '{}');
			if (moodData) {
				const exp: Timestamp = moodData.exp || 0;
				const isAvailable = exp > Date.now();
				if (isAvailable && moodData.mood) setMood(moodData.mood);
			}
		} catch (error) {
			console.error('Error parsing mood data:', error);
		}
	};

	return (
		<AppSection className='flex flex-row items-center justify-center min-h-screen relative overflow-hidden' disableAppearAnimation>
			<div className='relative w-full md:min-w-md max-w-md h-full flex flex-row items-center justify-center'>
				{!mood ? (
					<div className='w-full min-w-0 flex flex-col items-center gap-8 px-6 py-8 rounded-xl bg-white shadow-lg z-10 animate-fade-in-bottom'>
						<header className='flex flex-col items-center gap-4 text-center animate-fade-in-top'>
							<Avatar size={80} />
							<h1 className='text-xl font-bold text-[var(--color-primary)]'>Ngày hôm nay của bạn thế nào?</h1>
						</header>
						<Quiz onFinish={handleSelectMood} />
					</div>
				) : (
					<MoodDisplay mood={mood} onFinish={onFinish} />
				)}
			</div>
		</AppSection>
	);
}

export default MoodModal;
