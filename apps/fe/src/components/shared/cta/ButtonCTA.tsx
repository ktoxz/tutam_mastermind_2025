'use client';
import React from 'react';
import clsx from 'clsx';
import { CTAVariant, CTAStatus, variantClasses, baseClasses, disabledClasses } from './const';
import LoadingContent from './components/shared/LoadingContent';

interface ButtonCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: CTAVariant;
	status?: CTAStatus;
}

export function ButtonCTA({ children, className, variant = 'primary', status = 'normal', ...rest }: ButtonCTAProps) {
	const isDisabled = status === 'disabled' || status === 'loading';
	const classes = clsx(baseClasses, variantClasses[variant], className, isDisabled && disabledClasses);

	return (
		<button className={classes} disabled={isDisabled} {...rest}>
			{status === 'loading' ? <LoadingContent /> : children}
		</button>
	);
}

export default ButtonCTA;
