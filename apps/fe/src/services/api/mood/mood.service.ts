import { Answer, TErrorFirst } from '@/types';
import { modelHttpClient } from '@/utils/http-client.util';
import { Mood } from '@packages/models';

const moods: Mood[] = [
	{
		_id: 'mood-1',
		name: 'Hạnh phúc',
		slug: 'hanh-phuc-vui-ve',
		summary: 'Trạng thái cảm xúc tích cực, mang lại niềm vui và sự hài lòng.',
		description: `**Hạnh phúc** là trạng thái cảm xúc **tích cực**, khi con người cảm nhận được sự mãn nguyện, bình yên và thoả mãn trong tâm hồn, thường đi kèm cảm giác nhẹ nhõm, hào hứng hoặc yêu đời. Trạng thái này có thể đến từ những trải nghiệm ý nghĩa, thành tựu đạt được, hoặc đơn giản là tận hưởng những khoảnh khắc nhỏ bé trong cuộc sống.`,
		textColor: '#FFFFFF',
		bgColor: '#2ecc40',
		comfortMessage:
			'Bạn xứng đáng với niềm hạnh phúc này. Hãy trân trọng và lan tỏa nó đến những người xung quanh nhé!',
	},
	{
		_id: 'mood-2',
		name: 'Buồn bã',
		slug: 'buon-ba-tram-lang',
		summary: 'Trạng thái cảm xúc tiêu cực, gây ra sự chán nản và cô lập.',
		description: `**Buồn bã** là trạng thái cảm xúc tiêu cực, khi con người cảm thấy chán nản, cô đơn hoặc mất mát, thường đi kèm với cảm giác nặng nề trong lòng. Trạng thái này có thể xuất hiện sau những thất bại, mất mát, hoặc đơn giản là những ngày u ám, nhưng cũng là cơ hội để suy ngẫm và tìm kiếm sự an ủi từ những người thân yêu.`,
		textColor: '#FFFFFF',
		bgColor: '#3498db',
		comfortMessage:
			'Buồn là cảm xúc rất tự nhiên, đừng cố gắng chối bỏ nó. Hãy cho mình thời gian và đừng quên rằng bạn không hề đơn độc.',
	},
	{
		_id: 'mood-3',
		name: 'Lo lắng',
		slug: 'lo-lang-cang-thang',
		summary: 'Trạng thái lo âu, căng thẳng, dễ bị kích thích và khó thư giãn.',
		description: `**Lo lắng** là trạng thái cảm xúc khi con người cảm thấy bất an, hồi hộp, khó tập trung hoặc dễ bị kích thích. Trạng thái này có thể xuất hiện khi đối mặt với áp lực, thử thách hoặc những điều chưa chắc chắn trong cuộc sống.`,
		textColor: '#FFFFFF',
		bgColor: '#e67e22',
		comfortMessage:
			'Bạn đang trải qua cảm giác lo lắng hoặc căng thẳng. Hãy thử hít thở sâu, nghỉ ngơi và chia sẻ với người thân để cảm thấy nhẹ nhõm hơn.',
	},
	{
		_id: 'mood-4',
		name: 'Bình yên',
		slug: 'binh-yen-thu-gian',
		summary: 'Trạng thái thư thái, an yên, không bị chi phối bởi cảm xúc tiêu cực.',
		description: `**Bình yên** là trạng thái cảm xúc khi con người cảm thấy an toàn, thư thái, không bị chi phối bởi lo lắng hay buồn bã. Đây là trạng thái lý tưởng để nghỉ ngơi, tái tạo năng lượng và tận hưởng cuộc sống.`,
		textColor: '#FFFFFF',
		bgColor: '#16a085',
		comfortMessage:
			'Bạn đang ở trạng thái bình yên và thư giãn. Hãy tận hưởng khoảnh khắc này và tiếp tục duy trì sự cân bằng trong cuộc sống.',
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

	public async getList(params?: { page?: number; limit?: number }): Promise<TErrorFirst<null, Mood[]>> {
		try {
			const page = params?.page ?? 1;
			const limit = params?.limit ?? moods.length;
			const start = (page - 1) * limit;
			const end = start + limit;
			const result = moods.slice(start, end);
			return [null, result];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async getById(_id: string): Promise<TErrorFirst<null, Mood | undefined>> {
		try {
			const mood = moods.find((m) => m._id === _id);
			return [null, mood];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async getBySlug(slug: string): Promise<TErrorFirst<null, Mood | undefined>> {
		try {
			const mood = moods.find((m) => m.slug === slug);
			return [null, mood];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async postMoodEntry(answers: Answer[]): Promise<TErrorFirst<Error, Mood | undefined>> {
		try {
			const listQuestions = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10'];
			const features = answers.reduce<Record<string, Answer>>((acc, answer, idx) => {
				acc[listQuestions[idx]] = answer;
				return acc;
			}, {});

			const response = await modelHttpClient.post('/predict', { features });

			if (!response.data.moodId) return [new Error('No moodId returned from model') as any, undefined];

			const [error, mood] = await this.getById(response.data.moodId);
			if (!mood && error) return [error, undefined];

			return [null, mood];
		} catch (error: any) {
			return [error, undefined];
		}
	}
}

export { MoodService };
