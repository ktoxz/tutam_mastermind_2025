import { TErrorFirst } from '@/types';
import { Mood, MoodMeta } from '@models';

const MOOD_META: MoodMeta[] = [
	{ _id: 'canh_giac', mood_label: 'cảnh giác', icon: 'Eye', bgColor: '#FFE5B4', textColor: '#7C3A02' }, // pastel cam, text nâu đậm
	{ _id: 'ngat_ngay', mood_label: 'ngất ngây', icon: 'Smile', bgColor: '#FFF9DB', textColor: '#8A6D1A' }, // pastel vàng, text nâu vàng
	{ _id: 'nguong_mo', mood_label: 'ngưỡng mộ', icon: 'Users', bgColor: '#F9FBE7', textColor: '#3A5A40' }, // pastel xanh nhạt vàng, text xanh lá đậm
	{ _id: 'khiep_dam', mood_label: 'khiếp đảm', icon: 'Frown', bgColor: '#D8F3DC', textColor: '#184D47' }, // pastel xanh rêu, text xanh đậm
	{ _id: 'kinh_ngac', mood_label: 'kinh ngạc', icon: 'Zap', bgColor: '#E3F2FD', textColor: '#1E3A8A' }, // pastel xanh trời, text xanh navy
	{ _id: 'dau_kho', mood_label: 'đau khổ', icon: 'CloudRain', bgColor: '#BDE0FE', textColor: '#184D47' }, // pastel xanh đại dương, text xanh đậm
	{ _id: 'ghe_tom', mood_label: 'ghê tởm', icon: 'XOctagon', bgColor: '#E0BBE4', textColor: '#5B2A86' }, // pastel tím, text tím đậm
	{ _id: 'thinh_no', mood_label: 'thịnh nộ', icon: 'Flame', bgColor: '#FFD6D6', textColor: '#B91C1C' }, // pastel đỏ, text đỏ đậm
];

const DEFAULT_MOOD_META: MoodMeta = {
	_id: 'mood-default',
	mood_label: 'Tâm trạng khác',
	icon: 'Drama',
	bgColor: '#F3F4F6',
	textColor: '#374151',
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

	public getMoodByLabel(label: string | null | undefined): MoodMeta | undefined {
		if (!label) return undefined;
		return MOOD_META.find((item) => item.mood_label.toLowerCase().trim() === label.toLowerCase().trim());
	}

	public getMoodById(id: string): MoodMeta | undefined {
		return MOOD_META.find((item) => item._id === id);
	}
}

export { MoodService };
