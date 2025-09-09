import { Answer, TErrorFirst } from '@/types';
import { httpClient } from '@/utils/http-client.util';
import { Mood } from '@packages/models';
import { LucideIcon, Smile, Frown, AlertTriangle, Leaf } from 'lucide-react';

interface MoodMeta {
	_id: string;
	mood_label: string;
	bgColor: string;
	textColor: string;
	icon: LucideIcon;
}

const MOOD_META: MoodMeta[] = [
	{
		_id: 'mood-1',
		mood_label: 'Hạnh phúc',
		bgColor: '#ecfdf5',
		textColor: 'var(--color-success)',
		icon: Smile,
	},
	{
		_id: 'mood-2',
		mood_label: 'Buồn bã',
		bgColor: '#f0f4ff', // màu nền xanh nhạt dịu hơn
		textColor: '#5B7DB1', // màu chữ xanh lam trầm
		icon: Frown,
	},
	{
		_id: 'mood-3',
		mood_label: 'Lo lắng',
		bgColor: '#fffbeb',
		textColor: 'var(--color-warning)',
		icon: AlertTriangle,
	},
	{
		_id: 'mood-4',
		mood_label: 'Bình yên',
		bgColor: 'var(--color-surface)',
		textColor: 'var(--color-primary)',
		icon: Leaf,
	},
];

class MoodService {
	private static instance: MoodService = MoodService.getInstance();

	private constructor() {}

	public static getInstance(): MoodService {
		if (!MoodService.instance) {
			MoodService.instance = new MoodService();
		}
		return MoodService.instance;
	}

	public getMoodMetaList(): Promise<TErrorFirst<Error, MoodMeta[]>> {
		return Promise.resolve([null, MOOD_META]);
	}

	public getMoodMeta(mood: Mood | null | undefined): MoodMeta {
		if (!mood || !mood._id) {
			return {
				_id: '',
				mood_label: '',
				bgColor: '#ffffff',
				textColor: '#00C9A7',
				icon: Smile,
			};
		}
		const meta = MOOD_META.find((item) => item._id === mood._id);
		return (
			meta || {
				_id: mood._id,
				mood_label: mood.mood_label || '',
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
