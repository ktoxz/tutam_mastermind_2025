import { TErrorFirst } from '@/types/error-first.type';
import { Event } from '@models';
import events from './data';

export class EventService {
	private static instance: EventService | null = null;

	static getInstance(): EventService {
		if (!EventService.instance) {
			EventService.instance = new EventService();
		}
		return EventService.instance;
	}

	async getList(params?: { page?: number; limit?: number }): Promise<TErrorFirst<Error, Event[]>> {
		try {
			const page = params?.page ?? 1;
			const limit = params?.limit ?? events.length;
			const start = (page - 1) * limit;
			const end = start + limit;
			const result = events.slice(start, end);
			return [null, result];
		} catch (error) {
			return [error as Error, null];
		}
	}

	async getByMoodId(moodId: string, params?: { page?: number; limit?: number }): Promise<TErrorFirst<Error, Event[]>> {
		try {
			const filtered = events.filter((event) => event.mood_id === moodId);
			const page = params?.page ?? 1;
			const limit = params?.limit ?? filtered.length;
			const start = (page - 1) * limit;
			const end = start + limit;
			const result = filtered.slice(start, end);
			return [null, result];
		} catch (error) {
			return [error as Error, null];
		}
	}

	async getBySlug(slug: string): Promise<TErrorFirst<Error, Event>> {
		try {
			const event = events.find((event) => event.slug === slug);
			if (!event) {
				return [new Error('Event not found'), null];
			}
			return [null, event];
		} catch (error) {
			return [error as Error, null];
		}
	}
}
