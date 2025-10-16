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

	public async saveSelectedEmotions(tags: EmotionTag[], diary: string): Promise<TErrorFirst<Error, boolean>> {
		try {
			// TODO: Implement API call to save selected emotions
			console.log('Saving emotions:', tags);
			console.log('Diary entry:', diary);
			// Backend will receive full emotion tag objects with all details
			return [null, true];
		} catch (error: any) {
			return [error, false];
		}
	}
}

export { NewMoodService };
