import { Answer, TErrorFirst } from '@/types';
import { httpClient } from '@/utils/http-client.util';
import { Mood } from '@packages/models';
import { LucideIcon, Smile, Frown, AlertTriangle, Leaf, CloudRain, CloudSun, Clover, Drama } from 'lucide-react';

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
		bgColor: '#E6F7F1',
		textColor: '#2E7D32',
		icon: CloudSun,
	},
	{
		_id: 'mood-2',
		mood_label: 'Buồn bã',
		bgColor: '#f0f4ff',
		textColor: '#5B7DB1',
		icon: CloudRain,
	},
	{
		_id: 'mood-3',
		mood_label: 'Lo lắng',
		bgColor: '#E0E7FF',
		textColor: '#4338CA',
		icon: Clover,
	},
	{
		_id: 'mood-4',
		mood_label: 'Bình yên',
		bgColor: '#F9F6F1',
		textColor: '#6B4F3F',
		icon: Leaf,
	},
];

const DEFAULT_MOOD_META: MoodMeta = {
	_id: 'mood-default',
	mood_label: 'Tâm trạng khác',
	bgColor: '#F3F4F6',
	textColor: '#374151',
	icon: Drama,
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

	public getMoodMetaList(): Promise<TErrorFirst<Error, MoodMeta[]>> {
		return Promise.resolve([null, MOOD_META]);
	}

	public getMoodMeta(mood: Mood | null | undefined): MoodMeta {
		if (!mood || !mood._id) return DEFAULT_MOOD_META;
		const meta = MOOD_META.find((item) => item._id === mood._id);
		return meta || DEFAULT_MOOD_META;
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
