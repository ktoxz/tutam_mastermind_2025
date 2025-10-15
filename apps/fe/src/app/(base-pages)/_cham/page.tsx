'use client';
import MoodModal from '@/components/pages/cham/mood-modal/MoodModal';
import MoodResult from '@/components/pages/cham/mood-result/MoodResult';
import InlineLoading from '@/components/shared/inline-loading/InlineLoading';
import { LOCAL_STORAGE_KEYS, LocalStorageService } from '@/services/storage/local-storage.service';
import { Mood } from '@models';
import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';
import { useLayoutEffect, useState } from 'react';

type Props = {};

function page({}: Props) {
	const [mood, setMood] = useState<Mood | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const handleFinish = async (mood: Mood) => {
		setMood(mood);
	};

	useLayoutEffect(() => {
		try {
			const storedData = LocalStorageService.getItem(LOCAL_STORAGE_KEYS.MOOD_ENTRY);
			if (!storedData) return;

			const {
				mood,
				exp,
			}: {
				mood: Mood;
				exp: Timestamp;
			} = JSON.parse(storedData);

			if (!mood) return;

			if (exp > Date.now()) {
				setMood(mood);
			}
		} finally {
			setIsLoading(false);
		}
	}, []);

	return <>{isLoading ? <InlineLoading title='Đang tải...' /> : mood ? <MoodResult mood={mood} /> : <MoodModal onFinish={handleFinish} />}</>;
}

export default page;
