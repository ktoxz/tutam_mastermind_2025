import { TErrorFirst } from '@/types';
import { Book } from '@models';
import books from './data';

class BookService {
	private static instance: BookService = BookService.getInstance();

	private constructor() {}

	public static getInstance(): BookService {
		if (!BookService.instance) {
			BookService.instance = new BookService();
		}
		return BookService.instance;
	}

	public async getList(params?: { page?: number; limit?: number }): Promise<TErrorFirst<null, Book[]>> {
		try {
			const page = params?.page ?? 1;
			const limit = params?.limit ?? books.length;
			const start = (page - 1) * limit;
			const end = start + limit;
			const result = books.slice(start, end);
			return [null, result];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async getById(_id: string): Promise<TErrorFirst<null, Book | undefined>> {
		try {
			const book = books.find((b) => b._id === _id);
			return [null, book];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async getBySlug(slug: string): Promise<TErrorFirst<null, Book | undefined>> {
		try {
			const book = books.find((b) => b.slug === slug);
			return [null, book];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async getByMoodId(mood_id: string, params?: { page?: number; limit?: number }): Promise<TErrorFirst<null, Book[]>> {
		try {
			const filtered = books.filter((p) => p.mood_ids.includes(mood_id));
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

export { BookService };
