'use client';
import React, { useCallback, useRef, useState } from 'react';
import AppTextLogo from '../app-logo/AppTextLogo';
import Navbar from './components/nav-bar/Navbar';
import Link from 'next/link';
import Account from './components/account/Account';
import MenuButton from './components/menu-button/MenuButton';
import { BASIC_ROUTES } from '@/consts/routes';

type Props = {};

function AppHeader({}: Props) {
	const menuRef = useRef<HTMLDivElement | null>(null);
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuClick = useCallback((status: boolean) => {
		setMenuOpen(status);
	}, []);

	return (
		<>
			<header className='w-screen max-w-none h-max bg-[--color-surface] flex flex-row items-center justify-center min-h-[60px] max-h-[60px] z-1000'>
				<div className='flex flex-row items-center justify-between w-full max-w-[var(--app-max-width)] min-h-[60px] max-h-[60px] px-4 py-2'>
					<Link href={BASIC_ROUTES.home.href}>
						<AppTextLogo />
					</Link>
					<Navbar className='hidden lg:flex' />
					<div className='relative flex flex-row items-center gap-4'>
						<Account />
						<MenuButton onClick={handleMenuClick} isOpen={menuOpen} menuRef={menuRef} />
					</div>
				</div>
			</header>
			<div ref={menuRef}>
				<Navbar className={`w-screen flex lg:hidden ${menuOpen ? '' : 'hidden'}`} />
			</div>
		</>
	);
}

export default React.memo(AppHeader);
