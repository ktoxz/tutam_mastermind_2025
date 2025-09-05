import { z } from 'zod';

export const nameSchema = z.string().trim().min(1, { message: 'Tên là bắt buộc' });

export const emailSchema = z
	.string()
	.transform((val) => val.trim().toLowerCase())
	.pipe(z.email({ message: 'Email không hợp lệ' }));

export const passwordSchema = z
	.string()
	.regex(/[a-z]/, { message: 'Mật khẩu phải chứa ít nhất một chữ thường' })
	.regex(/[A-Z]/, { message: 'Mật khẩu phải chứa ít nhất một chữ hoa' })
	.regex(/[0-9]/, { message: 'Mật khẩu phải chứa ít nhất một số' })
	.regex(/[^a-zA-Z0-9]/, {
		message: 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt',
	})
	.min(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' })
	.max(64, { message: 'Mật khẩu không được vượt quá 64 ký tự' });

export const confirmPasswordSchema = z.string().min(1, { message: 'Vui lòng xác nhận mật khẩu' });

export const acceptTermsSchema = z.boolean().refine((val) => val === true, {
	message: 'Bạn phải đồng ý với điều khoản và điều kiện',
});

export const otpSchema = z.string().trim().length(6, { message: 'OTP phải gồm đúng 6 ký tự' });
