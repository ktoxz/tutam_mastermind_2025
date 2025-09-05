'use client';
import { useState, useEffect } from 'react';
import { MoodService } from '@/services/api/mood/mood.service';
import { Mood } from '@packages/models';

export function useMoodData() {
	const [moods, setMoods] = useState<Mood[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchMoods = async () => {
			setLoading(true);
			const [err, data] = await MoodService.getInstance().getList();
			if (data) setMoods(data);
			setLoading(false);
		};
		fetchMoods();
	}, []);

	return { moods, loading };
}
