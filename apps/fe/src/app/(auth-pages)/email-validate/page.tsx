'use client';
import React, { useMemo, useState } from 'react';
import AuthForm, { AuthFormField } from '@/components/shared/auth-form/AuthForm';
import { emailSchema, otpSchema } from '@/consts/zod-schema';
import { KeyRound, MailIcon } from 'lucide-react';
import { AuthService } from '@/services/api/auth/auth.service';
import { VerifyOtpDTO } from '@/services/api/auth/schemas';
import Swal from 'sweetalert2';
import { LOCAL_STORAGE_KEYS, LocalStorageService } from '@/services/storage/local-storage.service';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AUTH_ROUTES } from '@/consts/routes';

function EmailValidatePage() {
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
		{
			label: 'Mã xác thực OTP',
			id: 'otp',
			name: 'otp',
			type: 'text',
			required: true,
			placeholder: 'Nhập mã OTP gồm 6 ký tự',
			autoComplete: 'one-time-code',
			zodSchema: otpSchema,
			icon: KeyRound,
		},
	];

	const handleSubmit = async (values: VerifyOtpDTO) => {
		try {
			const [error, _] = await AuthService.getInstance().verifyOtp(values);
			if (error) {
				Swal.fire({
					icon: 'error',
					title: 'Xác thực thất bại',
					text: error.message || 'Mã OTP không hợp lệ hoặc đã hết hạn.',
				});
				return;
			}
			Swal.fire({
				icon: 'success',
				title: 'Xác thực thành công',
				text: 'Email của bạn đã được xác thực thành công!',
				timer: 2000,
				didClose: () => {
					LocalStorageService.removeItem(LOCAL_STORAGE_KEYS.EMAIL_TO_VALIDATE);
					router.push(AUTH_ROUTES.login.href);
				},
			});
		} catch (err: any) {
			Swal.fire({
				icon: 'error',
				title: 'Xác thực thất bại',
				text: 'Mã OTP không hợp lệ hoặc đã hết hạn.',
			});
		}
	};

	return (
		<AuthForm
			title='Xác thực Email'
			subtitle='Vui lòng nhập mã OTP đã được gửi tới email của bạn.'
			fields={fields}
			ctaText='Xác nhận'
			onSubmit={async (values) => {
				await handleSubmit({
					email: values.email,
					otp: values.otp,
				});
			}}
			footerText='Không nhận được mã?'
			footerLinkText='Gửi lại OTP'
			footerLinkHref={AUTH_ROUTES.resend_otp.href}
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

export default EmailValidatePage;
