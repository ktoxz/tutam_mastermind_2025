type Event = {
	_id: string;
	title: string;
	summary: string;
	content: string;
	location: string;
	time: Date;
	mainImage: string;
	gallery: string[];
	members: string[];
	slug: string;
	mood_id: string;
	createdAt?: Date;
	updatedAt?: Date;
};

const mapEvent = (data: any): Event => {
	return {
		_id: data._id,
		title: data.title,
		summary: data.summary,
		content: data.content,
		location: data.location,
		time: data.time,
		mainImage: data.mainImage,
		gallery: data.gallery,
		members: data.members,
		slug: data.slug,
		mood_id: data.mood_id,
		createdAt: data.createdAt,
		updatedAt: data.updatedAt,
	};
};

export type { Event };
export { mapEvent };
