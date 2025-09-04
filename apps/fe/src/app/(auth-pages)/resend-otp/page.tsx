'use client';
import React, { useMemo } from 'react';
import AuthForm, { AuthFormField } from '@/components/shared/auth-form/AuthForm';
import { emailSchema } from '@/consts/zod-schema';
import { MailIcon } from 'lucide-react';
import { AuthService } from '@/services/api/auth/auth.service';
import { ResendOtpDTO } from '@/services/api/auth/schemas';
import { LOCAL_STORAGE_KEYS, LocalStorageService } from '@/services/storage/local-storage.service';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AUTH_ROUTES } from '@/consts/routes';

function ResendOtpPage() {
	const router = useRouter();

	const defaultEmail = useMemo(() => {
		return LocalStorageService.getItem(LOCAL_STORAGE_KEYS.EMAIL_TO_VALIDATE) ?? undefined;
	}, []);

	const fields: AuthFormField[] = [
		{
			label: 'Email',
			id: 'email',
			name: 'email',
			type: 'email',
			required: true,
			placeholder: 'Nhập email của bạn',
			autoComplete: 'email',
			defaultValue: defaultEmail,
			zodSchema: emailSchema,
			icon: MailIcon,
		},
	];

	const handleSubmit = async (values: ResendOtpDTO) => {
		try {
			const [error, _] = await AuthService.getInstance().resendOtp(values);
			if (error) {
				Swal.fire({
					icon: 'error',
					title: 'Gửi lại OTP thất bại',
					text: error.message || 'Không thể gửi lại mã OTP. Vui lòng thử lại.',
				});
				return;
			}
			Swal.fire({
				icon: 'success',
				title: 'Đã gửi lại OTP',
				text: 'Mã OTP mới đã được gửi tới email của bạn!',
				timer: 2000,
				didClose: () => {
					router.push(AUTH_ROUTES.email_validate.href);
				},
			});
		} catch (err: any) {
			Swal.fire({
				icon: 'error',
				title: 'Gửi lại OTP thất bại',
				text: 'Không thể gửi lại mã OTP. Vui lòng thử lại.',
			});
		}
	};

	return (
		<AuthForm
			title='Gửi lại mã OTP'
			subtitle='Nhập email để nhận lại mã xác thực OTP.'
			fields={fields}
			ctaText='Gửi lại OTP'
			onSubmit={async (values) => {
				await handleSubmit({
					email: values.email,
				});
			}}
			footerText='Đã có mã OTP?'
			footerLinkText='Xác thực Email'
			footerLinkHref={AUTH_ROUTES.email_validate.href}
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

export default ResendOtpPage;
