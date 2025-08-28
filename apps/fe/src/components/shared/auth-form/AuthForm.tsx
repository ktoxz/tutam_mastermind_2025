'use client';
import React from 'react';
import InputField from '@/components/shared/input-field/InputField';
import CTA from '@/components/shared/cta/CTA';
import { LucideIcon } from 'lucide-react';
import { ZodType } from 'zod';
import { useAuthState } from '@/hooks/auth-form/useAuthState';
import Link from 'next/link';
export interface AuthFormField {
	label?: string;
	id: string;
	name: string;
	type?: string;
	required?: boolean;
	placeholder?: string;
	autoComplete?: string;
	defaultValue?: string;
	zodSchema?: ZodType;
	icon?: LucideIcon;
}

interface AuthFormProps {
	title: string;
	subtitle?: string;
	fields: AuthFormField[];
	ctaText: string;
	ctaHref?: string;
	onSubmit?: (values: Record<string, string>) => Promise<any>;
	showDivider?: boolean;
	dividerText?: string;
	footerText?: string;
	footerLinkText?: string;
	footerLinkHref?: string;
	additionalContent?: React.ReactNode;
	className?: string;
}

function AuthForm({
	title,
	subtitle,
	fields,
	ctaText,
	onSubmit,
	showDivider = false,
	dividerText = 'hoặc',
	footerText,
	footerLinkText,
	footerLinkHref,
	additionalContent,
	className = '',
}: AuthFormProps) {
	const { state, handleChange, submitable, handleSubmit, submitting } = useAuthState(fields);

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		handleSubmit(e, onSubmit);
	};

	return (
		<form
			className={`animate-fade-in w-full max-w-sm sm:max-w-md p-6 bg-white rounded-lg shadow-xl border border-gray-200 ${className}`}
			onSubmit={handleFormSubmit}
		>
			{/* Header */}
			<div className='text-center mb-6 sm:mb-8'>
				<h1 className='text-4xl font-semibold tracking-tight text-gray-900 capitalize'>{title}</h1>
				{subtitle && <p className='mt-2 text-sm sm:text-base text-gray-500'>{subtitle}</p>}
			</div>

			{/* Body */}
			<div className='space-y-4'>
				{fields.map((field) => (
					<InputField
						key={field.id}
						label={field.label}
						id={field.id}
						name={field.name}
						type={field.type}
						required={field.required}
						placeholder={field.placeholder}
						autoComplete={field.autoComplete}
						icon={field.icon}
						value={state[field.name]?.value || ''}
						error={state[field.name]?.error || ''}
						onChange={(value) => handleChange(field.name, value)}
					/>
				))}

				{additionalContent}

				<CTA
					variant='primary'
					type='submit'
					status={submitting ? 'loading' : submitable ? 'normal' : 'disabled'}
					className='mt-8'
				>
					{ctaText}
				</CTA>
			</div>

			{/* Divider */}
			{showDivider && (
				<div className='flex items-center my-6'>
					<div className='flex-1 h-px bg-gray-200'></div>
					<span className='px-4 text-sm text-gray-400'>{dividerText}</span>
					<div className='flex-1 h-px bg-gray-200'></div>
				</div>
			)}

			{/* Footer */}
			{footerText && footerLinkText && footerLinkHref && (
				<div className='text-center mt-4 sm:mt-6'>
					<p className='text-sm text-gray-500'>
						{footerText}
						<Link
							href={footerLinkHref}
							className='font-semibold text-(--color-text-link) hover:text-(--color-text-link-hover) hover:underline transition-colors ml-1'
						>
							{footerLinkText}
						</Link>
					</p>
				</div>
			)}
		</form>
	);
}

export default AuthForm;
