import axios, { AxiosError } from 'axios';
import { LocalStorageService, LOCAL_STORAGE_KEYS } from '../services/storage/local-storage.service';
import { AuthService } from '@/services/api/auth/auth.service';
import { lockProcess } from './process-lock.util';

export const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL || 'http://localhost:5000/api/v1';
export const MODEL_API_URL = process.env.NEXT_PUBLIC_MODEL_API_URL || 'http://localhost:8000';

const httpClient = axios.create({
	withCredentials: true,
	baseURL: BACKEND_API_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

const modelHttpClient = axios.create({
	baseURL: MODEL_API_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

httpClient.interceptors.request.use((config) => {
	const token = LocalStorageService.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
	if (token && config.headers) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}
	return config;
});

httpClient.interceptors.response.use(undefined, async (error: AxiosError) => {
	if (error.response && error.response.status === 403) {
		const originalRequest = error.config;

		if (originalRequest && !(originalRequest as any)._retry) {
			(originalRequest as any)._retry = true;

			const [lockError, refreshResult] = await lockProcess('REFRESH_TOKEN_LOCK', async () => {
				return await AuthService.getInstance().refreshToken();
			});

			const [refreshError, refreshData] = refreshResult || [null, null];

			if (!lockError && !refreshError && refreshData?.accessToken) {
				LocalStorageService.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, refreshData.accessToken);
				if (originalRequest.headers) {
					originalRequest.headers['Authorization'] = `Bearer ${refreshData.accessToken}`;
				}
				return httpClient(originalRequest);
			} else {
				LocalStorageService.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
			}
		}
	}

	error.message = (error.response?.data as any)?.message || '';
	return Promise.reject(error);
});

export { httpClient, modelHttpClient };
