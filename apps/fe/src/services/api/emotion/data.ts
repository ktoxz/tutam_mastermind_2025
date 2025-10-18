import { EmotionCategory } from '@/models';

export const EMOTION_DATA: EmotionCategory[] = [
	{
		_id: 'joy',
		label: 'Vui vẻ',
		icon: 'Smile',
		bgColor: '#FFF9DB', // pastel vàng
		textColor: '#8A6D1A', // nâu vàng
		gradient: { from: '#FFFDE4', to: '#FFF9DB' },
		tags: [
			{ _id: 'joy-1', label: 'Ngất ngây', emotionCategory: 'joy' },
			{ _id: 'joy-2', label: 'Vui vẻ', emotionCategory: 'joy' },
			{ _id: 'joy-3', label: 'Thư thái', emotionCategory: 'joy' },
		],
	},
	{
		_id: 'trust',
		label: 'Tin tưởng',
		icon: 'Users',
		bgColor: '#F9FBE7', // pastel xanh nhạt vàng
		textColor: '#3A5A40', // xanh lá đậm
		gradient: { from: '#F9FBE7', to: '#FFF9DB' },
		tags: [
			{ _id: 'trust-1', label: 'Ngưỡng mộ', emotionCategory: 'trust' },
			{ _id: 'trust-2', label: 'Tin tưởng', emotionCategory: 'trust' },
			{ _id: 'trust-3', label: 'Chấp nhận', emotionCategory: 'trust' },
		],
	},
	{
		_id: 'fear',
		label: 'Sợ hãi',
		icon: 'Frown',
		bgColor: '#D8F3DC', // pastel xanh rêu
		textColor: '#184D47', // xanh đậm
		gradient: { from: '#F6FFF8', to: '#D8F3DC' },
		tags: [
			{ _id: 'fear-1', label: 'Khiếp đảm', emotionCategory: 'fear' },
			{ _id: 'fear-2', label: 'Sợ hãi', emotionCategory: 'fear' },
			{ _id: 'fear-3', label: 'E sợ', emotionCategory: 'fear' },
		],
	},
	{
		_id: 'surprise',
		label: 'Bất ngờ',
		icon: 'Zap',
		bgColor: '#E3F2FD', // pastel xanh trời
		textColor: '#1E3A8A', // xanh navy
		gradient: { from: '#F0F9FF', to: '#E3F2FD' },
		tags: [
			{ _id: 'surprise-1', label: 'Kinh ngạc', emotionCategory: 'surprise' },
			{ _id: 'surprise-2', label: 'Bất ngờ', emotionCategory: 'surprise' },
			{ _id: 'surprise-3', label: 'Bị lôi cuốn', emotionCategory: 'surprise' },
		],
	},
	{
		_id: 'sadness',
		label: 'Buồn bã',
		icon: 'CloudRain',
		bgColor: '#BDE0FE', // pastel xanh đại dương
		textColor: '#184D47', // xanh đậm
		gradient: { from: '#E3F2FD', to: '#BDE0FE' },
		tags: [
			{ _id: 'sadness-1', label: 'Đau khổ', emotionCategory: 'sadness' },
			{ _id: 'sadness-2', label: 'Buồn bã', emotionCategory: 'sadness' },
			{ _id: 'sadness-3', label: 'Trầm ngâm', emotionCategory: 'sadness' },
		],
	},
	{
		_id: 'disgust',
		label: 'Ghê tởm',
		icon: 'XOctagon',
		bgColor: '#E0BBE4', // pastel tím
		textColor: '#5B2A86', // tím đậm
		gradient: { from: '#F3E8FF', to: '#E0BBE4' },
		tags: [
			{ _id: 'disgust-1', label: 'Ghê tởm', emotionCategory: 'disgust' },
			{ _id: 'disgust-2', label: 'Chán ghét', emotionCategory: 'disgust' },
			{ _id: 'disgust-3', label: 'Chán nản', emotionCategory: 'disgust' },
		],
	},
	{
		_id: 'anger',
		label: 'Giận dữ',
		icon: 'Flame',
		bgColor: '#FFD6D6', // pastel đỏ
		textColor: '#B91C1C', // đỏ đậm
		gradient: { from: '#FFE5E5', to: '#FFD6D6' },
		tags: [
			{ _id: 'anger-1', label: 'Thịnh nộ', emotionCategory: 'anger' },
			{ _id: 'anger-2', label: 'Giận dữ', emotionCategory: 'anger' },
			{ _id: 'anger-3', label: 'Bực bội', emotionCategory: 'anger' },
		],
	},
	{
		_id: 'anticipation',
		label: 'Mong đợi',
		icon: 'Eye',
		bgColor: '#FFE5B4', // pastel cam
		textColor: '#7C3A02', // nâu đậm
		gradient: { from: '#FFF2E0', to: '#FFE5B4' },
		tags: [
			{ _id: 'anticipation-1', label: 'Cảnh giác', emotionCategory: 'anticipation' },
			{ _id: 'anticipation-2', label: 'Mong đợi', emotionCategory: 'anticipation' },
			{ _id: 'anticipation-3', label: 'Hứng thú', emotionCategory: 'anticipation' },
		],
	},
];
