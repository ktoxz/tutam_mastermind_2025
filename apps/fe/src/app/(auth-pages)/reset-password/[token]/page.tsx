'use client';

import React, { useMemo } from 'react';
import AuthForm, { AuthFormField } from '@/components/shared/auth-form/AuthForm';
import { emailSchema, passwordSchema } from '@/consts/zod-schema';
import { Lock, Mail } from 'lucide-react';
import { AuthService } from '@/services/api/auth/auth.service';
import { ResetPasswordDTO } from '@/services/api/auth/schemas';
import Swal from 'sweetalert2';
import { LOCAL_STORAGE_KEYS, LocalStorageService } from '@/services/storage/local-storage.service';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { AUTH_ROUTES } from '@/consts/routes';

function ResetPasswordPage() {
	const { token }: { token: string } = useParams();
	const router = useRouter();

	const defaultEmail = useMemo(() => {
		return LocalStorageService.getItem(LOCAL_STORAGE_KEYS.EMAIL_TO_RESET_PASSWORD) ?? undefined;
	}, []);

	const fields: AuthFormField[] = [
		{
			label: 'Mật khẩu mới',
			id: 'newPassword',
			name: 'newPassword',
			type: 'newPassword',
			required: true,
			placeholder: 'Nhập mật khẩu mới',
			autoComplete: 'new-password',
			zodSchema: passwordSchema,
			icon: Lock,
		},
		{
			label: 'Xác nhận mật khẩu',
			id: 'confirmNewPassword',
			name: 'confirmNewPassword',
			type: 'password',
			required: true,
			placeholder: 'Xác nhận mật khẩu mới',
			autoComplete: 'new-password',
			zodSchema: passwordSchema,
			icon: Lock,
		},
	];

	const handleSubmit = async (values: Omit<ResetPasswordDTO, 'token'>) => {
		const payload = {
			token,
			...values,
		};

		alert(JSON.stringify(payload));
		const [error, _] = await AuthService.getInstance().resetPassword(payload);
		if (error) {
			Swal.fire({
				icon: 'error',
				title: 'Đặt lại mật khẩu thất bại',
				text: error.message || 'Đã xảy ra lỗi khi đặt lại mật khẩu. Vui lòng thử lại.',
			});
			return;
		}
		Swal.fire({
			icon: 'success',
			title: 'Đặt lại mật khẩu thành công',
			text: 'Mật khẩu của bạn đã được cập nhật!',
			timer: 2000,
			didClose: () => {
				LocalStorageService.removeItem(LOCAL_STORAGE_KEYS.EMAIL_TO_RESET_PASSWORD);
				router.push(AUTH_ROUTES.login.href);
			},
		});
	};

	return (
		<AuthForm
			title='Đặt lại mật khẩu'
			subtitle='Nhập mật khẩu mới cho tài khoản của bạn.'
			fields={fields}
			ctaText='Đặt lại mật khẩu'
			onSubmit={async (values) => {
				await handleSubmit(values as Omit<ResetPasswordDTO, 'token'>);
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

export default ResetPasswordPage;
