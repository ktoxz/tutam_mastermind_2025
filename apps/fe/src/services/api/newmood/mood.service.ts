import { TErrorFirst } from '@/types';
import { httpClient } from '@/utils';
import { EMOTION_DATA } from './data';
import { EmotionType, PostEmotionsResponse, PostEmotionsPayload, isValidPostEmotionsResponse } from '@/models/Emotion';

class NewMoodService {
	private static instance: NewMoodService;
	private emotionCache: Map<string, EmotionType> = new Map();

	private constructor() {
		this.initializeCache();
	}

	public static getInstance(): NewMoodService {
		if (!NewMoodService.instance) {
			NewMoodService.instance = new NewMoodService();
		}
		return NewMoodService.instance;
	}

	private initializeCache(): void {
		EMOTION_DATA.forEach((emotion) => {
			this.emotionCache.set(emotion._id, emotion);
		});
	}

	public getEmotionTypes(): Promise<TErrorFirst<Error, EmotionType[]>> {
		return Promise.resolve([null, EMOTION_DATA]);
	}

	public getEmotionTypeById(_id: string): EmotionType | undefined {
		return this.emotionCache.get(_id);
	}

	private validatePayload(tags: string[], diary: string): { valid: boolean; error?: string } {
		if (!Array.isArray(tags) || tags.length === 0) {
			return { valid: false, error: 'Tags array is required and must not be empty' };
		}

		if (tags.some((tag) => typeof tag !== 'string' || tag.trim() === '')) {
			return { valid: false, error: 'All tags must be non-empty strings' };
		}

		if (typeof diary !== 'string') {
			return { valid: false, error: 'Diary must be a string' };
		}

		return { valid: true };
	}

	public async postEmotions(tags: string[], diary: string): Promise<TErrorFirst<Error, PostEmotionsResponse>> {
		try {
			const validation = this.validatePayload(tags, diary);
			if (!validation.valid) {
				throw new Error(validation.error);
			}

			const payload: PostEmotionsPayload = {
				tags: tags.map((tag) => tag.trim()),
				diary: diary.trim(),
			};

			const res = await httpClient.post('/emotion', payload);

			if (!isValidPostEmotionsResponse(res.data)) {
				throw new Error('Invalid response format from server');
			}

			return [null, res.data];
		} catch (error: any) {
			const errorMessage = error?.response?.data?.message || error?.message || 'Failed to post emotions';
			return [new Error(errorMessage), null as any];
		}
	}

	public async getUserEmotionHistory(): Promise<TErrorFirst<Error, any[]>> {
		try {
			const res = await httpClient.get('/emotion/history');
			return [null, res.data];
		} catch (error: any) {
			const errorMessage = error?.response?.data?.message || error?.message || 'Failed to fetch emotion history';
			return [new Error(errorMessage), []];
		}
	}

	public async deleteEmotionHistoryItem(id: string): Promise<TErrorFirst<Error, boolean>> {
		try {
			await httpClient.delete(`/emotion/${id}`);
			return [null, true];
		} catch (error: any) {
			const errorMessage = error?.response?.data?.message || error?.message || 'Failed to delete emotion history item';
			return [new Error(errorMessage), false];
		}
	}
}

export { NewMoodService };
