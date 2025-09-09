'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import clsx from 'clsx';

type Props = {
	label: string;
	path: string;
};

const BASE_CLASSES = 'transition-colors capitalize whitespace-nowrap group relative';
const TEXT_CLASSES = 'transition-colors px-4 py-1';

function NavbarElementDesktop({ label, path }: Props) {
	const pathname = usePathname();
	const isActive = pathname === path;

	return (
		<Link href={path} className={clsx(BASE_CLASSES, isActive ? 'bg-[var(--color-primary)] pointer-events-none' : 'hover:after:scale-x-100 active:bg-[var(--color-primary-active)]/50')}>
			<p
				className={clsx(
					TEXT_CLASSES,
					'rounded-md',
					isActive
						? 'text-[color:var(--color-text-inverse)] bg-[var(--color-primary-dark)]'
						: 'text-[color:var(--color-primary-dark)] hover:bg-[color:var(--color-primary-dark-hover)] hover:text-[color:var(--color-text-inverse)] active:bg-[var(--color-primary-dark-active)]'
				)}
			>
				{label}
			</p>
		</Link>
	);
}

function NavbarElementMobile({ label, path }: Props) {
	const pathname = usePathname();
	const isActive = pathname === path;

	return (
		<Link
			href={path}
			className={clsx(
				BASE_CLASSES,
				'after:content-[""] after:block after:h-[2px] after:bg-[var(--color-primary)] after:scale-x-0 after:transition-transform after:duration-300 after:origin-left',
				isActive ? 'bg-[var(--color-primary-dark-hover)] pointer-events-none' : 'hover:after:scale-x-100 active:bg-[var(--color-primary-active)]/50'
			)}
		>
			<p
				className={clsx(
					TEXT_CLASSES,
					isActive
						? 'text-[color:var(--color-text-inverse)] bg-[var(--color-primary-dark)]'
						: 'text-[color:var(--color-primary-dark)] hover:text-[color:var(--color-primary-dark-hover)] active:text-[color:var(--color-text-inverse)]'
				)}
			>
				{label}
			</p>
		</Link>
	);
}

export default function NavbarElement({ label, path }: Props) {
	return (
		<>
			<div className='hidden lg:block'>
				<NavbarElementDesktop label={label} path={path} />
			</div>
			<div className='lg:hidden'>
				<NavbarElementMobile label={label} path={path} />
			</div>
		</>
	);
}
