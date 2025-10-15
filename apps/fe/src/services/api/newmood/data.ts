export interface EmotionTag {
	_id: string;
	label: string;
	emotionType: string;
}

export interface EmotionType {
	_id: string;
	label: string;
	icon: string;
	bgColor: string;
	textColor: string;
	gradient: {
		from: string;
		to: string;
	};
	tags: EmotionTag[];
}

export const EMOTION_DATA: EmotionType[] = [
	{
		_id: 'joy',
		label: 'Vui vẻ',
		icon: 'Smile',
		bgColor: '#fef3c7',
		textColor: '#92400e',
		gradient: { from: '#fef3c7', to: '#fde68a' },
		tags: [
			{ _id: 'joy-1', label: 'Ngất ngây', emotionType: 'joy' },
			{ _id: 'joy-2', label: 'Vui vẻ', emotionType: 'joy' },
			{ _id: 'joy-3', label: 'Thư thái', emotionType: 'joy' },
			{ _id: 'joy-4', label: 'Yêu mến', emotionType: 'joy' },
			{ _id: 'joy-5', label: 'Lạc quan', emotionType: 'joy' },
		],
	},
	{
		_id: 'trust',
		label: 'Tin tưởng',
		icon: 'Users',
		bgColor: '#d1fae5',
		textColor: '#065f46',
		gradient: { from: '#d1fae5', to: '#a7f3d0' },
		tags: [
			{ _id: 'trust-1', label: 'Ngưỡng mộ', emotionType: 'trust' },
			{ _id: 'trust-2', label: 'Tin tưởng', emotionType: 'trust' },
			{ _id: 'trust-3', label: 'Chấp nhận', emotionType: 'trust' },
			{ _id: 'trust-4', label: 'Quy phục', emotionType: 'trust' },
		],
	},
	{
		_id: 'fear',
		label: 'Sợ hãi',
		icon: 'Frown',
		bgColor: '#e9d5ff',
		textColor: '#581c87',
		gradient: { from: '#e9d5ff', to: '#d8b4fe' },
		tags: [
			{ _id: 'fear-1', label: 'Khiếp đảm', emotionType: 'fear' },
			{ _id: 'fear-2', label: 'Sợ hãi', emotionType: 'fear' },
			{ _id: 'fear-3', label: 'E sợ', emotionType: 'fear' },
		],
	},
	{
		_id: 'surprise',
		label: 'Bất ngờ',
		icon: 'Zap',
		bgColor: '#dbeafe',
		textColor: '#1e40af',
		gradient: { from: '#dbeafe', to: '#bfdbfe' },
		tags: [
			{ _id: 'surprise-1', label: 'Kinh ngạc', emotionType: 'surprise' },
			{ _id: 'surprise-2', label: 'Bất ngờ', emotionType: 'surprise' },
			{ _id: 'surprise-3', label: 'Bị lôi cuốn', emotionType: 'surprise' },
			{ _id: 'surprise-4', label: 'Kinh sợ', emotionType: 'surprise' },
		],
	},
	{
		_id: 'sadness',
		label: 'Buồn bã',
		icon: 'CloudRain',
		bgColor: '#e2e8f0',
		textColor: '#334155',
		gradient: { from: '#e2e8f0', to: '#cbd5e1' },
		tags: [
			{ _id: 'sadness-1', label: 'Đau khổ', emotionType: 'sadness' },
			{ _id: 'sadness-2', label: 'Buồn bã', emotionType: 'sadness' },
			{ _id: 'sadness-3', label: 'Trầm ngâm', emotionType: 'sadness' },
			{ _id: 'sadness-4', label: 'Hối hận', emotionType: 'sadness' },
			{ _id: 'sadness-5', label: 'Chối bỏ', emotionType: 'sadness' },
		],
	},
	{
		_id: 'disgust',
		label: 'Ghê tởm',
		icon: 'XOctagon',
		bgColor: '#ccfbf1',
		textColor: '#115e59',
		gradient: { from: '#ccfbf1', to: '#99f6e4' },
		tags: [
			{ _id: 'disgust-1', label: 'Ghê tởm', emotionType: 'disgust' },
			{ _id: 'disgust-2', label: 'Chán ghét', emotionType: 'disgust' },
			{ _id: 'disgust-3', label: 'Chán nản', emotionType: 'disgust' },
		],
	},
	{
		_id: 'anger',
		label: 'Giận dữ',
		icon: 'Flame',
		bgColor: '#fecaca',
		textColor: '#991b1b',
		gradient: { from: '#fecaca', to: '#fca5a5' },
		tags: [
			{ _id: 'anger-1', label: 'Thịnh nộ', emotionType: 'anger' },
			{ _id: 'anger-2', label: 'Giận dữ', emotionType: 'anger' },
			{ _id: 'anger-3', label: 'Bực bội', emotionType: 'anger' },
			{ _id: 'anger-4', label: 'Khinh thường', emotionType: 'anger' },
		],
	},
	{
		_id: 'anticipation',
		label: 'Mong đợi',
		icon: 'Eye',
		bgColor: '#fed7aa',
		textColor: '#9a3412',
		gradient: { from: '#fed7aa', to: '#fdba74' },
		tags: [
			{ _id: 'anticipation-1', label: 'Cảnh giác', emotionType: 'anticipation' },
			{ _id: 'anticipation-2', label: 'Mong đợi', emotionType: 'anticipation' },
			{ _id: 'anticipation-3', label: 'Hứng thú', emotionType: 'anticipation' },
			{ _id: 'anticipation-4', label: 'Hiếu thắng', emotionType: 'anticipation' },
		],
	},
];
