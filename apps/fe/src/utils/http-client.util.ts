import { TErrorFirst } from '../types/error-first.type';

export async function postJson<T>(url: string, body?: any): Promise<TErrorFirst<Error, T>> {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: body ? JSON.stringify(body) : undefined,
		});
		if (!response.ok) {
			const errorData = await response.json();
			return [new Error(errorData.message || 'Lỗi không xác định'), null];
		}
		const data = await response.json();
		return [null, data];
	} catch (error) {
		return [error as Error, null];
	}
}
