const locks = new Map<string, Promise<any>>();

export async function lockProcess<T>(key: string, fn: () => Promise<T>): Promise<[Error | null, T | null]> {
	if (!locks.has(key)) {
		locks.set(
			key,
			(async () => {
				try {
					const result = await fn();
					return [null, result];
				} catch (err) {
					return [err, null];
				} finally {
					locks.delete(key);
				}
			})()
		);
	}
	return locks.get(key)!;
}
