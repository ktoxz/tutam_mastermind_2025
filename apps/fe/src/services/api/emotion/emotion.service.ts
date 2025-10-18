import { TErrorFirst } from '@/types';
import { httpClient } from '@/utils';
import { EMOTION_DATA } from './data';
import { EmotionCategory, EmotionHistory, EmotionHistoryItem, isValidPostEmotionResponse, PostEmotionRequest, PostEmotionResponse } from '@/models';

class EmotionService {
	private static instance: EmotionService;
	private emotionCache: Map<string, EmotionCategory> = new Map();

	private constructor() {
		this.initializeCache();
	}

	public static getInstance(): EmotionService {
		if (!EmotionService.instance) {
			EmotionService.instance = new EmotionService();
		}
		return EmotionService.instance;
	}

	private initializeCache(): void {
		EMOTION_DATA.forEach((emotion) => {
			this.emotionCache.set(emotion._id, emotion);
		});
	}

	public getEmotionCategorys(): Promise<TErrorFirst<Error, EmotionCategory[]>> {
		return Promise.resolve([null, EMOTION_DATA]);
	}

	public getEmotionCategoryById(_id: string): EmotionCategory | undefined {
		return this.emotionCache.get(_id);
	}

	private validatePayload(tags: string[], diary: string): { valid: boolean; error?: string } {
		if (!Array.isArray(tags) || tags.length === 0) {
			return { valid: false, error: 'Mảng các tag không được rỗng' };
		}

		if (tags.some((tag) => typeof tag !== 'string' || tag.trim() === '')) {
			return { valid: false, error: 'Tất cả các tag đều không phải rỗng' };
		}

		if (typeof diary !== 'string') {
			return { valid: false, error: 'Nhật ký phải là chuỗi' };
		}

		return { valid: true };
	}

	public async postEmotions(tags: string[], diary: string): Promise<TErrorFirst<Error, PostEmotionResponse>> {
		try {
			const validation = this.validatePayload(tags, diary);
			if (!validation.valid) {
				throw new Error(validation.error);
			}

			const payload: PostEmotionRequest = {
				tags: tags.map((tag) => tag.trim()),
				diary: diary.trim(),
			};

			const res = await httpClient.post('/emotion', payload);

			if (!isValidPostEmotionResponse(res.data)) {
				throw new Error('Kiểu trả về từ server không khớp');
			}

			return [null, res.data];
		} catch (error: any) {
			const errorMessage = error?.response?.data?.message || error?.message || 'Không thể gửi cảm xúc tới server';
			return [new Error(errorMessage), null as any];
		}
	}

	public async getUserEmotionById(id: string): Promise<TErrorFirst<Error, EmotionHistoryItem>> {
		try {
			const res = await httpClient.get(`/emotion/${id}`);
			return [null, res.data];
		} catch (error: any) {
			const errorMessage = error?.response?.data?.message || error?.message || 'Không thể lấy cảm xúc theo id';
			return [new Error(errorMessage), null as any];
		}
	}

	public async getUserEmotionHistory(): Promise<TErrorFirst<Error, EmotionHistory[]>> {
		try {
			const res = await httpClient.get('/emotion/history');
			return [null, res.data];
		} catch (error: any) {
			const errorMessage = error?.response?.data?.message || error?.message || 'Lấy lịch sử cảm xúc thất bại';
			return [new Error(errorMessage), []];
		}
	}

	public async deleteEmotionHistoryItem(id: string): Promise<TErrorFirst<Error, boolean>> {
		try {
			await httpClient.delete(`/emotion/${id}`);
			return [null, true];
		} catch (error: any) {
			const errorMessage = error?.response?.data?.message || error?.message || 'Xoá cảm xúc khỏi lịch sử thất bại';
			return [new Error(errorMessage), false];
		}
	}
}

export { EmotionService };
