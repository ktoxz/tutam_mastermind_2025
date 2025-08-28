import { ZodType, ZodError, ZodSchema, ZodIssue } from 'zod';
import { TErrorFirst } from '@types';
import { $ZodIssue } from 'zod/v4/core';

export class ZodValidator {
	private constructor() {}

	static async parseAsync<T>(schema: ZodType<T>, data: unknown): Promise<TErrorFirst<ZodError, T>> {
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

	static parse<T>(schema: ZodType<T>, data: unknown): TErrorFirst<ZodError, T> {
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

	static isValid<T>(schema: ZodType<T>, data: unknown): boolean {
		return schema.safeParse(data).success;
	}

	static getIssues(error: ZodError): $ZodIssue[] {
		return error.issues;
	}

	static getErrorMessages(error: ZodError): string[] {
		return error.issues.map((issue) => issue.message);
	}

	static getErrorMessage(error: ZodError, index: number): string | undefined {
		if (index >= 0 && index < error.issues.length) {
			return error.issues[index].message;
		}
		return undefined;
	}
}
