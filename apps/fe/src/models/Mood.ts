type Mood = {
	_id: string;
	mood_label: string;
	icon: string;
	header?: string;
	validation?: string;
	encouragement?: string;
	actions?: string[];
	quote?: string;
	moodId?: string;
};

type MoodMeta = {
	_id: string;
	mood_label: string;
	icon: string;
	bgColor: string;
	textColor: string;
};

const mapMood = (data: any): Mood => {
	return {
		_id: data._id,
		mood_label: data.mood_label,
		icon: data.icon,
		header: data.header,
		validation: data.validation,
		encouragement: data.encouragement,
		actions: data.actions,
		quote: data.quote,
		moodId: data.moodId,
	};
};

const mapMoodMeta = (data: any): MoodMeta => {
	return {
		_id: data._id,
		mood_label: data.mood_label,
		icon: data.icon,
		bgColor: data.bgColor,
		textColor: data.textColor,
	};
};

export type { Mood, MoodMeta };
export { mapMood, mapMoodMeta };
