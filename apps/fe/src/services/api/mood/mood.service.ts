import { TErrorFirst } from '@/types';
import { Mood } from '@packages/models';

const moods: Mood[] = [
	{
		_id: 'mood-1',
		name: 'Hạnh phúc',
		slug: 'hanh-phuc',
		summary: 'Trạng thái cảm xúc tích cực, mang lại niềm vui và sự hài lòng.',
		description: `**Hạnh phúc** hay vui vẻ là trạng thái cảm xúc **tích cực**, khi con người cảm nhận được sự mãn nguyện, bình yên và thoả mãn trong tâm hồn, thường đi kèm cảm giác nhẹ nhõm, hào hứng hoặc yêu đời. Trạng thái này có thể đến từ những trải nghiệm ý nghĩa, thành tựu đạt được, hoặc đơn giản là tận hưởng những khoảnh khắc nhỏ bé trong cuộc sống.`,
		textColor: '#FFFFFF',
		bgColor: '#2ecc40',
		comfortMessage:
			'Bạn xứng đáng với niềm hạnh phúc này. Hãy trân trọng và lan tỏa nó đến những người xung quanh nhé!',
	},
	{
		_id: 'mood-2',
		name: 'Buồn',
		slug: 'buon',
		summary: 'Trạng thái cảm xúc tiêu cực, gây ra sự chán nản và cô lập.',
		description: `**Buồn** là trạng thái cảm xúc tiêu cực, khi con người cảm thấy chán nản, cô đơn hoặc mất mát, thường đi kèm với cảm giác nặng nề trong lòng. Trạng thái này có thể xuất hiện sau những thất bại, mất mát, hoặc đơn giản là những ngày u ám, nhưng cũng là cơ hội để suy ngẫm và tìm kiếm sự an ủi từ những người thân yêu.`,
		textColor: '#FFFFFF',
		bgColor: '#3498db',
		comfortMessage:
			'Buồn là cảm xúc rất tự nhiên, đừng cố gắng chối bỏ nó. Hãy cho mình thời gian và đừng quên rằng bạn không hề đơn độc.',
	},
	{
		_id: 'mood-3',
		name: 'Hào hứng',
		slug: 'hao-hung',
		summary: 'Trạng thái phấn khích, đầy năng lượng và sẵn sàng hành động.',
		description: `**Hào hứng** là trạng thái phấn khích, đầy năng lượng, khi con người cảm thấy sẵn sàng đối mặt với mọi thử thách và khám phá điều mới mẻ. Trạng thái này thường đến từ những ý tưởng sáng tạo, kế hoạch thú vị, hoặc những khoảnh khắc bất ngờ, giúp bạn cảm thấy sống động và tràn đầy nhiệt huyết.`,
		textColor: '#FFFFFF',
		bgColor: '#f1c40f',
		comfortMessage:
			'Năng lượng tích cực này thật tuyệt vời! Hãy tận dụng nó để thực hiện những điều bạn đang ấp ủ.',
	},
	{
		_id: 'mood-4',
		name: 'Mệt mỏi',
		slug: 'met-moi',
		summary: 'Trạng thái thiếu năng lượng, gây ra sự uể oải và kém tập trung.',
		description: `**Mệt mỏi** là trạng thái thiếu năng lượng, khi con người cảm thấy uể oải, kém tập trung và muốn nghỉ ngơi. Trạng thái này có thể do làm việc quá sức, thiếu ngủ, hoặc áp lực cuộc sống, nhưng hãy nhớ rằng nghỉ ngơi là cách tốt nhất để tái tạo sức mạnh và quay trở lại với tinh thần sảng khoái.`,
		textColor: '#FFFFFF',
		bgColor: '#757575',
		comfortMessage:
			'Đừng tự tạo áp lực thêm cho bản thân. Hãy để cơ thể và tâm trí được nghỉ ngơi, bạn xứng đáng với điều đó.',
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
}

export { MoodService };
