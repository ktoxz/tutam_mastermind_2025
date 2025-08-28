'use client';
import React from 'react';
import clsx from 'clsx';

type CTAVariant = 'primary' | 'secondary';
type CTAStatus = 'normal' | 'disabled' | 'loading';

interface CTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: CTAVariant;
	status?: CTAStatus;
}

const variantClasses: Record<CTAVariant, string> = {
	primary: 'bg-[var(--color-primary)] border border-transparent text-[var(--color-text-inverse)]',
	secondary: 'bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)]',
};

const baseClasses =
	'w-full font-medium px-4 py-2 rounded-sm cursor-pointer text-center block ' +
	'transition-all duration-200 ease-in-out ' +
	'hover:scale-101 hover:shadow-lg active:scale-99 active:shadow ' +
	'active:brightness-95';

const disabledClasses = 'opacity-40 pointer-events-none cursor-not-allowed';

export function CTA({ children, className, variant = 'primary', status = 'normal', ...rest }: CTAProps) {
	const isDisabled = status === 'disabled' || status === 'loading';
	const classes = clsx(baseClasses, variantClasses[variant], className, isDisabled && disabledClasses);

	return (
		<button className={classes} disabled={isDisabled} {...rest}>
			{status === 'loading' ? (
				<span className='flex items-center justify-center gap-2'>
					<span className='inline-block w-4 h-4 border-2 border-t-transparent border-current rounded-full animate-spin' />
					<span>Đang tải...</span>
				</span>
			) : (
				children
			)}
		</button>
	);
}

export default CTA;
