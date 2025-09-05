import { TErrorFirst } from '@/types';
import { Blog } from '@packages/models';
import BLOGS from './data';

class BlogService {
	private static instance: BlogService = BlogService.getInstance();

	private constructor() {}

	public static getInstance(): BlogService {
		if (!BlogService.instance) {
			BlogService.instance = new BlogService();
		}
		return BlogService.instance;
	}

	public async getList(params?: { page?: number; limit?: number }): Promise<TErrorFirst<null, Blog[]>> {
		try {
			const page = params?.page ?? 1;
			const limit = params?.limit ?? BLOGS.length;
			const start = (page - 1) * limit;
			const end = start + limit;
			const result = BLOGS.slice(start, end);
			return [null, result];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async getById(_id: string): Promise<TErrorFirst<null, Blog | undefined>> {
		try {
			const blog = BLOGS.find((b) => b._id === _id);
			return [null, blog];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async getBySlug(slug: string): Promise<TErrorFirst<null, Blog | undefined>> {
		try {
			const blog = BLOGS.find((b) => b.slug === slug);
			return [null, blog];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async getByMoodId(
		mood_id: string,
		params?: { page?: number; limit?: number }
	): Promise<TErrorFirst<null, Blog[]>> {
		try {
			const filtered = BLOGS.filter((p) => p.mood_id === mood_id);
			const page = params?.page ?? 1;
			const limit = params?.limit ?? filtered.length;
			const start = (page - 1) * limit;
			const end = start + limit;
			const result = filtered.slice(start, end);
			return [null, result];
		} catch (err: any) {
			return [err, null];
		}
	}
}

export { BlogService };
