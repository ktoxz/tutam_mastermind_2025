export type EmotionTag = {
	_id: string;
	label: string;
	emotionCategory: string;
};

export type EmotionCategory = {
	_id: string;
	label: string;
	icon: string;
	bgColor: string;
	textColor: string;
	gradient: { from: string; to: string };
	tags: EmotionTag[];
};

export type PostEmotionRequest = {
	tags: string[];
	diary: string;
};

export type PostEmotionResponse = {
	mood: string;
	header: string;
	validation: string;
	encouragement: string;
	actions: string[];
	quote: string;
};

export type EmotionHistoryItem = {
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
};

export type EmotionHistory = {
	_id: string; // e.g., date string "2025-10-16"
	list: EmotionHistoryItem[];
};

export const isValidEmotionTag = (tag: any): tag is EmotionTag => {
	return tag && typeof tag._id === 'string' && typeof tag.label === 'string' && typeof tag.EmotionCategory === 'string';
};

export const isValidPostEmotionResponse = (data: any): data is PostEmotionResponse => {
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
