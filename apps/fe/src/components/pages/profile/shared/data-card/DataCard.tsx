'use client';
import React from 'react';

type IconType = React.ElementType<any>;

interface DataCardProps {
	title?: React.ReactNode;
	subtitle?: React.ReactNode;
	icon?: IconType;
	// Tailwind classes for icon background and icon color, e.g. 'bg-blue-500' and 'text-white'
	iconBg?: string;
	iconColor?: string;
	children?: React.ReactNode;
	className?: string;
	// optional element rendered at the right side of header (e.g. a badge or control)
	headerRight?: React.ReactNode;
	// optional footer/actions area
	footer?: React.ReactNode;
	// padding override (default uses p-6)
	paddingClass?: string;
}

export default function DataCard({
	title,
	subtitle,
	icon: Icon,
	iconBg = 'bg-gray-900',
	iconColor = 'text-white',
	children,
	className = '',
	headerRight,
	footer,
	paddingClass = 'px-4 py-6 md:p-6',
}: DataCardProps) {
	const wrapperClasses = `bg-gradient-to-br from-white to-gray-50/50 rounded-2xl shadow-lg border border-gray-100 ${paddingClass} ${className}`;

	return (
		<div className={wrapperClasses}>
			{(Icon || title || headerRight || subtitle) && (
				<div className='flex items-center justify-between gap-3 mb-4'>
					<div className='flex items-center gap-3'>
						{Icon && (
							<div className={`${iconBg} p-2 rounded-xl flex items-center justify-center`}>
								<Icon size={20} className={iconColor} strokeWidth={2} />
							</div>
						)}

						{(title || subtitle) && (
							<div className='flex flex-col leading-tight'>
								{title && <h3 className='text-lg font-bold text-gray-900'>{title}</h3>}
								{subtitle && <p className='text-sm text-gray-500'>{subtitle}</p>}
							</div>
						)}
					</div>

					{headerRight && <div className='flex items-center'>{headerRight}</div>}
				</div>
			)}

			<div className='w-full'>{children}</div>

			{footer && <div className='mt-4'>{footer}</div>}
		</div>
	);
}
