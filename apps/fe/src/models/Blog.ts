type Blog = {
	_id: string;
	title: string;
	author: string;
	summary: string;
	content: string;
	image: string;
	slug: string;
	mood_ids: string[];
	createdAt?: Date;
	updatedAt?: Date;
};

const mapBlog = (data: any): Blog => {
	return {
		_id: data._id,
		title: data.title,
		author: data.author,
		summary: data.summary,
		content: data.content,
		image: data.image,
		slug: data.slug,
		mood_ids: data.mood_ids,
		createdAt: data.createdAt,
		updatedAt: data.updatedAt,
	};
};

export type { Blog };
export { mapBlog };
