import React, { ReactNode } from 'react';

interface AppSectionProps {
	children: ReactNode;
	fullWidth?: boolean;
	className?: string;
}

function AppSection({ children, fullWidth = false, className = '' }: AppSectionProps) {
	return (
		<section className='w-screen max-w-none min-h-fit'>
			<div
				className={
					fullWidth
						? `w-full ${className}`
						: `w-full mx-auto px-8 md:px-4 sm:px-2 py-6 md:py-4 sm:py-2 max-w-[var(--app-max-width)] ${className}`
				}
			>
				{children}
			</div>
		</section>
	);
}

export default AppSection;
