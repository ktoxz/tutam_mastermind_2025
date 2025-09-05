type Mood = {
	_id: string;
	name: string;
	summary: string;
	description: string;
	slug: string;
	textColor?: string;
	bgColor?: string;
	comfortMessage: string;
	createdAt?: Date;
	updatedAt?: Date;
};

const mapMood = (data: any): Mood => {
	return {
		_id: data._id,
		name: data.name,
		summary: data.summary,
		description: data.description,
		slug: data.slug,
		textColor: data.textColor,
		bgColor: data.bgColor,
		comfortMessage: data.comfortMessage,
		createdAt: data.createdAt,
		updatedAt: data.updatedAt,
	};
};

export type { Mood };
export { mapMood };
