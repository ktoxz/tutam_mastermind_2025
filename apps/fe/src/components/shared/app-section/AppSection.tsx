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
						: `w-full mx-auto px-2 md:px-4 lg:px-8 py-2 md:py-4 lg:py-6 max-w-[var(--app-max-width)] ${className}`
				}
			>
				{children}
			</div>
		</section>
	);
}

export default AppSection;
