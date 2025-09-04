'use client';
import React from 'react';
import AuthForm from '@/components/shared/auth-form/AuthForm';
import { Mail, Lock, User } from 'lucide-react';
import { emailSchema, passwordSchema, nameSchema } from '@/consts/zod-schema';
import { RegisterDTO } from '@/services/api/auth/schemas';
import { AuthService } from '@/services/api/auth/auth.service';
import CheckBox from '@/components/shared/check-box/CheckBox';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { LOCAL_STORAGE_KEYS, LocalStorageService } from '@/services/storage/local-storage.service';
import { AUTH_ROUTES } from '@/consts/routes';

function RegisterPage() {
	const router = useRouter();

	const fields = [
		{
			label: 'Tên người dùng',
			id: 'username',
			name: 'username',
			type: 'text',
			required: true,
			placeholder: 'Nhập tên người dùng',
			autoComplete: 'username',
			zodSchema: nameSchema,
			icon: User,
		},
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
			autoComplete: 'new-password',
			zodSchema: passwordSchema,
			icon: Lock,
		},
		{
			label: 'Xác nhận mật khẩu',
			id: 'confirmPassword',
			name: 'confirmPassword',
			type: 'password',
			required: true,
			placeholder: 'Nhập lại mật khẩu',
			autoComplete: 'new-password',
			zodSchema: passwordSchema,
			icon: Lock,
		},
	];
	const handleSubmit = async (values: RegisterDTO) => {
		const [error, data] = await AuthService.getInstance().register(values);
		if (error) {
			Swal.fire({
				icon: 'error',
				title: 'Đăng ký thất bại',
				text: error.message || 'Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.',
			});
			return;
		}

		Swal.fire({
			icon: 'success',
			title: 'Đăng ký thành công',
			text: 'Tài khoản của bạn đã được tạo thành công!',
			timer: 2000,
			didClose: () => {
				router.push(AUTH_ROUTES.email_validate.href);
			},
		});
		LocalStorageService.setItem(LOCAL_STORAGE_KEYS.EMAIL_TO_VALIDATE, values.email);
	};

	const [acceptTerms, setAcceptTerms] = React.useState(false);
	const [acceptTermsError, setAcceptTermsError] = React.useState<string | undefined>(undefined);

	return (
		<AuthForm
			title='Đăng ký'
			subtitle='Tạo tài khoản mới để bắt đầu trải nghiệm!'
			fields={fields}
			ctaText='Đăng ký'
			ctaHref={AUTH_ROUTES.register.href}
			showDivider
			dividerText='hoặc'
			footerText='Bạn đã có tài khoản?'
			footerLinkText='Đăng nhập'
			footerLinkHref={AUTH_ROUTES.login.href}
			onSubmit={async (values) => {
				if (!acceptTerms) {
					setAcceptTermsError('Bạn phải đồng ý với điều khoản và điều kiện');
					return;
				}
				setAcceptTermsError(undefined);
				await handleSubmit({
					name: values.username,
					email: values.email,
					password: values.password,
					confirmPassword: values.confirmPassword,
					acceptTerms: true,
				});
			}}
			additionalContent={
				<CheckBox
					id='acceptTerms'
					name='acceptTerms'
					label='Tôi đồng ý với điều khoản và điều kiện'
					checked={acceptTerms}
					onChange={(checked) => {
						setAcceptTerms(checked);
						if (checked) setAcceptTermsError(undefined);
					}}
					required
					error={acceptTermsError}
				/>
			}
		/>
	);
}

export default RegisterPage;
