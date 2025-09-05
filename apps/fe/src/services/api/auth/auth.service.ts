import { httpClient } from '@/utils/http-client.util';
import { ForgotPasswordDTO, RegisterDTO, VerifyOtpDTO, ResendOtpDTO, LoginDTO, ResetPasswordDTO } from './schemas';
import { TErrorFirst } from '@/types';
import { AxiosError } from 'axios';

class AuthService {
	private static instance: AuthService = AuthService.getInstance();
	private baseUrl: string = '/auth';

	private constructor() {}

	public static getInstance(): AuthService {
		if (!AuthService.instance) {
			AuthService.instance = new AuthService();
		}
		return AuthService.instance;
	}

	public async register(data: RegisterDTO): Promise<TErrorFirst<AxiosError, any>> {
		try {
			const response = await httpClient.post(`${this.baseUrl}/register`, data);
			return [null, response.data];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async verifyOtp(data: VerifyOtpDTO): Promise<TErrorFirst<AxiosError, any>> {
		try {
			const response = await httpClient.post(`${this.baseUrl}/verify-otp`, data);
			return [null, response.data];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async resendOtp(data: ResendOtpDTO): Promise<TErrorFirst<AxiosError, any>> {
		try {
			const response = await httpClient.post(`${this.baseUrl}/resend-otp`, data);
			return [null, response.data];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async login(data: LoginDTO): Promise<TErrorFirst<AxiosError, any>> {
		try {
			const response = await httpClient.post(`${this.baseUrl}/login`, data);
			return [null, response.data];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async logout(): Promise<TErrorFirst<AxiosError, any>> {
		try {
			const response = await httpClient.post(`${this.baseUrl}/logout`);
			return [null, response.data];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async refreshToken(): Promise<TErrorFirst<AxiosError, any>> {
		try {
			const response = await httpClient.post(`${this.baseUrl}/refresh-token`);
			return [null, response.data];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async forgotPassword(data: ForgotPasswordDTO): Promise<TErrorFirst<AxiosError, any>> {
		try {
			const response = await httpClient.post(`${this.baseUrl}/forgot-password`, data);
			return [null, response.data];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async resetPassword(data: ResetPasswordDTO): Promise<TErrorFirst<AxiosError, any>> {
		try {
			const response = await httpClient.post(`${this.baseUrl}/reset-password/${data.token}`, {
				newPassword: data.newPassword,
				confirmNewPassword: data.confirmNewPassword,
			});
			return [null, response.data];
		} catch (err: any) {
			return [err, null];
		}
	}
}

export { AuthService };
