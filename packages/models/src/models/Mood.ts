type Mood = {
	_id: string;
	mood_label: string;
	header: string;
	validation: string;
	encouragement: string;
	actions: string[];
	quote: string;
	moodId?: string;
	moodLabel?: string;
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
		moodLabel: data.moodLabel,
	};
};

export type { Mood };
export { mapMood };
