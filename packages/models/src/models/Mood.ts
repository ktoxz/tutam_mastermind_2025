type Mood = {
	_id: string;
	mood_label: string;
	header: string;
	validation: string;
	encouragement: string;
	actions: string[];
	quote: string;
	moodId?: string;
};

type MoodMeta = {
	_id: string;
	mood_label: string;
	bgColor: string;
	textColor: string;
	icon: string;
};

const mapMood = (data: any): Mood => {
	return {
		_id: data._id,
		mood_label: data.mood_label,
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
		bgColor: data.bgColor,
		textColor: data.textColor,
		icon: data.icon,
	};
};

export type { Mood, MoodMeta };
export { mapMood, mapMoodMeta };
