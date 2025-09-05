export enum LOCAL_STORAGE_KEYS {
	EMAIL_TO_VALIDATE = 'email-to-validate',
	EMAIL_TO_RESET_PASSWORD = 'email-to-reset-password',
	ACCESS_TOKEN = 'access-token',
	MOOD_ENTRY = 'mood-entry',
}

class LocalStorageService {
	private static isWindowAvailable(): boolean {
		return typeof window !== 'undefined' && !!window.localStorage;
	}

	private static encode(value: string): string {
		return btoa(encodeURIComponent(value));
	}

	private static decode(value: string): string {
		return decodeURIComponent(atob(value));
	}

	private static encodeKey(key: LOCAL_STORAGE_KEYS): string {
		return this.encode(key);
	}

	static setItem(key: LOCAL_STORAGE_KEYS, value: string): void {
		if (this.isWindowAvailable()) {
			const encodedKey = this.encodeKey(key);
			const encodedValue = this.encode(value);
			window.localStorage.setItem(encodedKey, encodedValue);
		}
	}

	static getItem(key: LOCAL_STORAGE_KEYS): string | null {
		if (this.isWindowAvailable()) {
			const encodedKey = this.encodeKey(key);
			const storedValue = window.localStorage.getItem(encodedKey);
			if (storedValue !== null) {
				try {
					return this.decode(storedValue);
				} catch {
					return null;
				}
			}
		}
		return null;
	}

	static removeItem(key: LOCAL_STORAGE_KEYS): void {
		if (this.isWindowAvailable()) {
			const encodedKey = this.encodeKey(key);
			window.localStorage.removeItem(encodedKey);
		}
	}

	static clear(excludeKeys: LOCAL_STORAGE_KEYS[] = []): void {
		if (this.isWindowAvailable()) {
			if (excludeKeys.length === 0) {
				window.localStorage.clear();
				return;
			}

			const encodedExcludeKeys = new Set(excludeKeys.map((key) => this.encodeKey(key)));
			for (let i = window.localStorage.length - 1; i >= 0; i--) {
				const key = window.localStorage.key(i);
				if (key && !encodedExcludeKeys.has(key)) {
					window.localStorage.removeItem(key);
				}
			}
		}
	}
}

export { LocalStorageService };
