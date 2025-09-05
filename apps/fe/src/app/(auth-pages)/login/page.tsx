'use client';
import React from 'react';
import AuthForm from '@/components/shared/auth-form/AuthForm';
import { Mail, Lock } from 'lucide-react';
import { emailSchema, passwordSchema } from '@/consts/zod-schema';
import { AuthService } from '@/services/api/auth/auth.service';
import { LoginDTO } from '@/services/api/auth/schemas';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { LOCAL_STORAGE_KEYS, LocalStorageService } from '@/services/storage/local-storage.service';
import { AUTH_ROUTES, BASIC_ROUTES } from '@/consts/routes';

function LoginPage() {
	const router = useRouter();

	const fields = [
		{
			label: 'Email',
			id: 'email',
			name: 'email',
			type: 'email',
			required: true,
			placeholder: 'Nhập email của bạn',
			autoComplete: 'email',
			zodSchema: emailSchema,
			icon: Mail,
		},
		{
			label: 'Mật khẩu',
			id: 'password',
			name: 'password',
			type: 'password',
			required: true,
			placeholder: 'Nhập mật khẩu',
			autoComplete: 'current-password',
			zodSchema: passwordSchema,
			icon: Lock,
		},
	];

	const handleSubmit = async (values: LoginDTO) => {
		try {
			const [error, data] = await AuthService.getInstance().login(values);
			if (error) {
				Swal.fire({
					icon: 'error',
					title: 'Đăng nhập thất bại',
					text: error.message || 'Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại.',
				});
				return;
			}

			LocalStorageService.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, data?.accessToken || '');

			Swal.fire({
				icon: 'success',
				title: 'Đăng nhập thành công',
				text: 'Chào mừng bạn trở lại!',
				timer: 1500,
				didClose: () => {
					router.push(BASIC_ROUTES.home.href);
				},
			});

			LocalStorageService.setItem(LOCAL_STORAGE_KEYS.EMAIL_TO_VALIDATE, values.email);
		} catch (err: any) {
			Swal.fire({
				icon: 'error',
				title: 'Đăng nhập thất bại',
				text: 'Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại.',
			});
		}
	};

	return (
		<AuthForm
			title='Đăng nhập'
			subtitle='Chào mừng bạn trở lại!'
			fields={fields}
			ctaText='Đăng nhập'
			ctaHref={AUTH_ROUTES.login.href}
			showDivider
			dividerText='hoặc'
			footerText='Bạn chưa có tài khoản?'
			footerLinkText='Đăng ký ngay'
			footerLinkHref={AUTH_ROUTES.register.href}
			onSubmit={async (values) => {
				await handleSubmit({
					email: values.email,
					password: values.password,
				});
			}}
			additionalContent={
				<div className='flex flex-col items-end'>
					<Link
						href={AUTH_ROUTES.forgot_password.href}
						className='text-sm text-[var(--color-text-link)] hover:text-[var(--color-text-link-hover)] hover:underline transition-colors'
					>
						Quên mật khẩu?
					</Link>
					<Link
						href={AUTH_ROUTES.email_validate.href}
						className='text-sm text-[var(--color-text-link)] hover:text-[var(--color-text-link-hover)] hover:underline transition-colors'
					>
						Xác thực tài khoản
					</Link>
				</div>
			}
		/>
	);
}

export default LoginPage;
