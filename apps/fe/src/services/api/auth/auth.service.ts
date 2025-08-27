import { postJson } from '@utils';
import { TErrorFirst } from '@types';
import { ApiService } from '../api.service';
import {
	ForgotPasswordDTO,
	RegisterDTO,
	VerifyOtpDTO,
	ResendOtpDTO,
	LoginDTO,
	ResetPasswordDTO,
	RegisterSchema,
	VerifyOtpSchema,
	ResendOtpSchema,
	LoginSchema,
	ForgotPasswordSchema,
	ResetPasswordSchema,
} from './schemas';
import { ZodUtil } from '@utils';

class AuthService extends ApiService {
	private static instance: AuthService = AuthService.getInstance();
	private baseUrl: string = this.backendApiUrl + '/auth';

	private constructor() {
		super();
	}

	public static getInstance(): AuthService {
		if (!AuthService.instance) {
			AuthService.instance = new AuthService();
		}
		return AuthService.instance;
	}

	public async register(data: RegisterDTO): Promise<TErrorFirst<Error, any>> {
		const [error] = await ZodUtil.parseAsync(RegisterSchema, data);
		if (error) return Promise.reject(ZodUtil.extractIssues(error));
		return postJson(`${this.baseUrl}/register`, data);
	}

	public async verifyOtp(data: VerifyOtpDTO): Promise<TErrorFirst<Error, any>> {
		const [error] = await ZodUtil.parseAsync(VerifyOtpSchema, data);
		if (error) return Promise.reject(ZodUtil.extractIssues(error));
		return postJson(`${this.baseUrl}/verify-otp`, data);
	}

	public async resendOtp(data: ResendOtpDTO): Promise<TErrorFirst<Error, any>> {
		const [error] = await ZodUtil.parseAsync(ResendOtpSchema, data);
		if (error) return Promise.reject(ZodUtil.extractIssues(error));
		return postJson(`${this.baseUrl}/resend-otp`, data);
	}

	public async login(data: LoginDTO): Promise<TErrorFirst<Error, any>> {
		const [error] = await ZodUtil.parseAsync(LoginSchema, data);
		if (error) return Promise.reject(ZodUtil.extractIssues(error));
		return postJson(`${this.baseUrl}/login`, data);
	}

	public async logout(): Promise<TErrorFirst<Error, any>> {
		return postJson(`${this.baseUrl}/logout`);
	}

	public async refreshToken(): Promise<TErrorFirst<Error, any>> {
		return postJson(`${this.baseUrl}/refresh-token`);
	}

	public async forgotPassword(data: ForgotPasswordDTO): Promise<TErrorFirst<Error, any>> {
		const [error] = await ZodUtil.parseAsync(ForgotPasswordSchema, data);
		if (error) return Promise.reject(ZodUtil.extractIssues(error));
		return postJson(`${this.baseUrl}/forgot-password`, data);
	}

	public async resetPassword(token: string, data: ResetPasswordDTO): Promise<TErrorFirst<Error, any>> {
		const [error] = await ZodUtil.parseAsync(ResetPasswordSchema, data);
		if (error) return Promise.reject(ZodUtil.extractIssues(error));
		return postJson(`${this.baseUrl}/reset-password/${token}`, data);
	}
}

export { AuthService };
