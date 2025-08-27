import { ZodType, ZodError } from 'zod';
import { TErrorFirst } from '@types';
import { $ZodIssue } from 'zod/v4/core';

class ZodUtil {
	private constructor() {}

	// --- Validation methods ---
	public static async parseAsync<T>(schema: ZodType<T>, data: unknown): Promise<TErrorFirst<ZodError, T>> {
		try {
			const result = await schema.parseAsync(data);
			return [null, result];
		} catch (error) {
			if (error instanceof ZodError) {
				return [error, null];
			}
			throw error;
		}
	}

	public static parseSync<T>(schema: ZodType<T>, data: unknown): TErrorFirst<ZodError, T> {
		try {
			const result = schema.parse(data);
			return [null, result];
		} catch (error) {
			if (error instanceof ZodError) {
				return [error, null];
			}
			throw error;
		}
	}

	public static isValid<T>(schema: ZodType<T>, data: unknown): boolean {
		return schema.safeParse(data).success;
	}

	// --- Error extraction/formatting methods ---
	public static extractIssues(error: ZodError): $ZodIssue[] {
		return error.issues;
	}

	public static formatErrors(error: ZodError): string[] {
		return error.issues.map((issue) => issue.message);
	}

	public static getFirstError(error: ZodError): string | null {
		return error.issues.length > 0 ? error.issues[0].message : null;
	}

	public static flattenErrors(error: ZodError): Record<string, string[]> {
		const flattened: Record<string, string[]> = {};
		error.issues.forEach((issue) => {
			const path = issue.path.join('.');
			if (!flattened[path]) flattened[path] = [];
			flattened[path].push(issue.message);
		});
		return flattened;
	}
}

export { ZodUtil };
