import httpClient from '@/utils/http-client.util';
import { ChangeNameDTO, ChangePasswordDTO } from './schemas';
import { TErrorFirst } from '@/types';
import { AxiosError } from 'axios';
import { User } from '@packages/models';

class UserService {
	private static instance: UserService = UserService.getInstance();
	private baseUrl: string = '/user';

	private constructor() {}

	public static getInstance(): UserService {
		if (!UserService.instance) {
			UserService.instance = new UserService();
		}
		return UserService.instance;
	}

	public async getMe(): Promise<TErrorFirst<AxiosError, Omit<User, 'password'>>> {
		try {
			const response = await httpClient.get(`${this.baseUrl}/me`);
			return [null, response.data];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async changeName(data: ChangeNameDTO): Promise<TErrorFirst<AxiosError, any>> {
		try {
			const response = await httpClient.patch(`${this.baseUrl}/me/name`, data);
			return [null, response.data];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async changePassword(data: ChangePasswordDTO): Promise<TErrorFirst<AxiosError, any>> {
		try {
			const response = await httpClient.patch(`${this.baseUrl}/me/password`, data);
			return [null, response.data];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async changeAvatar(file: File): Promise<TErrorFirst<AxiosError, any>> {
		try {
			const formData = new FormData();
			formData.append('avatar', file);

			const response = await httpClient.patch(`${this.baseUrl}/me/avatar`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			return [null, response.data];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async deleteAccount(): Promise<TErrorFirst<AxiosError, any>> {
		try {
			const response = await httpClient.delete(`${this.baseUrl}/me`);
			return [null, response.data];
		} catch (err: any) {
			return [err, null];
		}
	}
}

export { UserService };
