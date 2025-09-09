import { Answer, TErrorFirst } from '@/types';
import { httpClient } from '@/utils/http-client.util';
import { Mood } from '@packages/models';
import { LucideIcon, Smile, Frown, AlertTriangle, Leaf } from 'lucide-react';

interface MoodMeta {
	bgColor: string;
	textColor: string;
	icon: LucideIcon;
}

const MOOD_META: Record<string, MoodMeta> = {
	'mood-1': {
		bgColor: 'var(--color-background)',
		textColor: 'var(--color-success)',
		icon: Smile,
	},
	'mood-2': {
		bgColor: '#fef2f2',
		textColor: 'var(--color-error)',
		icon: Frown,
	},
	'mood-3': {
		bgColor: '#fffbeb',
		textColor: 'var(--color-warning)',
		icon: AlertTriangle,
	},
	'mood-4': {
		bgColor: 'var(--color-surface)',
		textColor: 'var(--color-primary)',
		icon: Leaf,
	},
};

class MoodService {
	private static instance: MoodService = MoodService.getInstance();

	private constructor() {}

	public static getInstance(): MoodService {
		if (!MoodService.instance) {
			MoodService.instance = new MoodService();
		}
		return MoodService.instance;
	}

	public getMoodMeta(mood: Mood): MoodMeta {
		return (
			MOOD_META[mood._id] || {
				bgColor: '#ffffff',
				textColor: '#00C9A7',
				icon: Smile,
			}
		);
	}

	public async postMoodEntry(answers: Answer[]): Promise<TErrorFirst<Error, Mood | undefined>> {
		try {
			const listQuestions = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10'];
			const features = answers.reduce<Record<string, Answer>>((acc, answer, idx) => {
				acc[listQuestions[idx]] = answer;
				return acc;
			}, {});

			const response = await httpClient.post('/predict', { features });
			const mood: Mood = response.data;

			if (!mood || !mood._id) {
				throw new Error('Dữ liệu phản hồi không hợp lệ');
			}

			return [null, mood];
		} catch (error: any) {
			return [error, undefined];
		}
	}
}

export { MoodService };
