'use client';
import React, { CSSProperties } from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import { CTAVariant, CTAStatus, variantClasses, baseClasses, disabledClasses } from './const';
import LoadingContent from './components/shared/LoadingContent';

interface LinkCTAProps extends LinkProps {
	children: React.ReactNode;
	className?: string;
	variant?: CTAVariant;
	status?: CTAStatus;
	style?: CSSProperties;
}

export function LinkCTA({ children, className, variant = 'primary', status = 'normal', style, ...rest }: LinkCTAProps) {
	const isDisabled = status === 'disabled' || status === 'loading';
	const classes = clsx(baseClasses, variantClasses[variant], className, isDisabled && disabledClasses);

	return (
		<Link className={classes} tabIndex={isDisabled ? -1 : 0} aria-disabled={isDisabled} style={style} {...rest}>
			{status === 'loading' ? <LoadingContent /> : children}
		</Link>
	);
}

export default LinkCTA;
