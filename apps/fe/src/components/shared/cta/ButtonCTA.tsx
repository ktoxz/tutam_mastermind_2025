'use client';
import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { CTAVariant, CTAStatus, variantClasses, baseClasses, disabledClasses } from './const';
import LoadingContent from './components/shared/LoadingContent';
import { LucideIcon } from 'lucide-react';

interface ButtonCTAProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	variant?: CTAVariant;
	status?: CTAStatus;
	Icon?: LucideIcon;
}

export function ButtonCTA({
	children,
	Icon,
	className,
	variant = 'primary',
	status = 'normal',
	...rest
}: ButtonCTAProps) {
	const isDisabled = status === 'disabled' || status === 'loading';
	const classes = clsx(baseClasses, variantClasses[variant], className, isDisabled && disabledClasses);

	return (
		<button className={classes} disabled={isDisabled} {...rest}>
			{status === 'loading' ? (
				<LoadingContent />
			) : (
				<>
					{Icon && <Icon size={16} />}
					{children}
				</>
			)}
		</button>
	);
}

export default ButtonCTA;
