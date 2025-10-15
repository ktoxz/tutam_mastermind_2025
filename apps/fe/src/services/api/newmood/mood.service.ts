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

	public getTagById(tagId: string): EmotionTag | undefined {
		for (const emotion of EMOTION_DATA) {
			const tag = emotion.tags.find((t) => t._id === tagId);
			if (tag) return tag;
		}
		return undefined;
	}

	public async saveSelectedEmotions(tagIds: string[]): Promise<TErrorFirst<Error, boolean>> {
		try {
			// TODO: Implement API call to save selected emotions
			console.log('Saving emotions:', tagIds);
			return [null, true];
		} catch (error: any) {
			return [error, false];
		}
	}
}

export { NewMoodService };
