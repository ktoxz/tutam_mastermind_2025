type Book = {
	_id: string;
	title: string;
	author: string;
	summary: string;
	content: string;
	image: string;
	slug: string;
	mood_id: string;
	createdAt?: Date;
	updatedAt?: Date;
};

const mapBook = (data: any): Book => {
	return {
		_id: data._id,
		title: data.title,
		author: data.author,
		summary: data.summary,
		content: data.content,
		image: data.image,
		slug: data.slug,
		mood_id: data.mood_id,
		createdAt: data.createdAt,
		updatedAt: data.updatedAt,
	};
};

export type { Book };
export { mapBook };
