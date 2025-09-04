'use client';
import React, { useState } from 'react';
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
	const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

	const handleSelectMood = (mood: Mood) => {
		setSelectedMood(mood);
		LocalStorageService.setItem(LOCAL_STORAGE_KEYS.MOOD_ENTRY, mood._id);
	};

	return (
		<AppSection
			className='flex flex-row items-center justify-center min-h-screen p-4 relative overflow-hidden'
			disableAppearAnimation
		>
			<div className='relative w-full max-w-5xl h-full flex flex-row items-center justify-center'>
				{!selectedMood ? (
					<div className='w-max min-w-0 flex flex-col items-center gap-8 px-4 py-6 rounded-xl bg-white shadow-lg z-10 animate-fade-in-bottom'>
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
