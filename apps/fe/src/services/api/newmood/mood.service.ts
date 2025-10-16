import { TErrorFirst } from '@/types';
import { EMOTION_DATA, EmotionType, EmotionTag } from './data';

class NewMoodService {
	private static instance: NewMoodService;

	private constructor() {}

	public static getInstance(): NewMoodService {
		if (!NewMoodService.instance) {
			NewMoodService.instance = new NewMoodService();
		}
		return NewMoodService.instance;
	}

	public getEmotionTypes(): Promise<TErrorFirst<Error, EmotionType[]>> {
		return Promise.resolve([null, EMOTION_DATA]);
	}

	public getEmotionTypeById(_id: string): EmotionType | undefined {
		return EMOTION_DATA.find((emotion) => emotion._id === _id);
	}

	public async postEmotions(tags: EmotionTag[], diary: string): Promise<TErrorFirst<Error, boolean>> {
		try {
			console.log(
				JSON.stringify({
					tags,
					diary,
				}),
			);
			return [null, true];
		} catch (error: any) {
			return [error, false];
		}
	}
}

export { NewMoodService };
