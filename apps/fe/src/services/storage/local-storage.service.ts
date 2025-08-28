export enum LOCAL_STORAGE_KEYS {
	EMAIL_TO_VALIDATE = 'email-to-validate',
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

	static clear(): void {
		if (this.isWindowAvailable()) {
			window.localStorage.clear();
		}
	}
}

export { LocalStorageService };
