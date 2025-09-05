'use client';
import React from 'react';
import AuthForm, { AuthFormField } from '@/components/shared/auth-form/AuthForm';
import { Mail } from 'lucide-react';
import { emailSchema } from '@/consts/zod-schema';
import { AuthService } from '@/services/api/auth/auth.service';
import { ForgotPasswordDTO } from '@/services/api/auth/schemas';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { AUTH_ROUTES } from '@/consts/routes';
import { LOCAL_STORAGE_KEYS, LocalStorageService } from '@/services/storage/local-storage.service';

function ForgotPasswordPage() {
	const router = useRouter();

	const fields: AuthFormField[] = [
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
	];

	const handleSubmit = async (values: ForgotPasswordDTO) => {
		try {
			const [error, _] = await AuthService.getInstance().forgotPassword(values);
			if (error) {
				Swal.fire({
					icon: 'error',
					title: 'Gửi yêu cầu thất bại',
					text: error.message || 'Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại.',
				});
				return;
			}

			Swal.fire({
				icon: 'success',
				title: 'Yêu cầu thành công',
				text: 'Vui lòng kiểm tra email để nhận hướng dẫn đặt lại mật khẩu.',
				timer: 3000,
				didClose: () => {
					LocalStorageService.setItem(LOCAL_STORAGE_KEYS.EMAIL_TO_RESET_PASSWORD, values.email);
					router.push(AUTH_ROUTES.reset_password.href);
				},
			});
		} catch (err: any) {
			Swal.fire({
				icon: 'error',
				title: 'Gửi yêu cầu thất bại',
				text: 'Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại.',
			});
		}
	};

	return (
		<AuthForm
			title='Quên mật khẩu'
			subtitle='Nhập email của bạn để thiết lập lại mật khẩu.'
			fields={fields}
			ctaText='Gửi yêu cầu'
			onSubmit={async (values) => {
				await handleSubmit({
					email: values.email,
				});
			}}
			additionalContent={
				<div className='flex flex-row justify-end'>
					<Link
						href={AUTH_ROUTES.login.href}
						className='text-sm text-[var(--color-text-link)] hover:text-[var(--color-text-link-hover)] hover:underline transition-colors'
					>
						Quay về đăng nhập
					</Link>
				</div>
			}
		/>
	);
}

export default ForgotPasswordPage;
