export interface EmotionTag {
	_id: string;
	label: string;
	emotionType: string;
}

export interface EmotionGradient {
	from: string;
	to: string;
}

export interface EmotionType {
	_id: string;
	label: string;
	icon: string;
	bgColor: string;
	textColor: string;
	gradient: EmotionGradient;
	tags: EmotionTag[];
}

export interface PostEmotionsPayload {
	tags: string[];
	diary: string;
}

export interface PostEmotionsResponse {
	mood: string;
	header: string;
	validation: string;
	encouragement: string;
	actions: string[];
	quote: string;
}

export interface EmotionHistoryItem {
	_id: string;
	userId: string;
	tags: string[];
	diary: string;
	mood: string;
	header: string;
	validation: string;
	encouragement: string;
	actions: string[];
	quote: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface EmotionHistory {
	_id: string; // e.g., date string "2025-10-16"
	list: EmotionHistoryItem[];
}

export const isValidEmotionTag = (tag: any): tag is EmotionTag => {
	return tag && typeof tag._id === 'string' && typeof tag.label === 'string' && typeof tag.emotionType === 'string';
};

export const isValidPostEmotionsResponse = (data: any): data is PostEmotionsResponse => {
	return (
		data &&
		typeof data.mood === 'string' &&
		typeof data.header === 'string' &&
		typeof data.validation === 'string' &&
		typeof data.encouragement === 'string' &&
		Array.isArray(data.actions) &&
		typeof data.quote === 'string'
	);
};

export const EMOTION_CONSTANTS = {
	MIN_TAGS_REQUIRED: 1,
	MAX_TAGS_ALLOWED: 5,
	MAX_DIARY_LENGTH: 1000,
} as const;
