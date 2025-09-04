'use client';
import React from 'react';
import NavbarElement from '../components/NavbarElement';
import { NAVBAR_ROUTES } from '@/consts/routes';

type NavbarProps = {
	className?: string;
};

const NavbarItems = () => (
	<>
		{NAVBAR_ROUTES.map((item) => (
			<NavbarElement key={item.href} label={item.label} path={item.href} />
		))}
	</>
);

const NavbarDefault = ({ className }: NavbarProps) => (
	<nav
		className={`hidden lg:flex lg:flex-row lg:items-center justify-center gap-4 w-max px-4 py-2 bg-(--color-surface) rounded-full ${className}`}
	>
		<NavbarItems />
	</nav>
);

const NavbarMobile = ({ className }: NavbarProps) => (
	<nav
		className={`flex flex-col lg:hidden w-max bg-(--color-surface)/50 border-t border-t-(--color-primary) ${className}`}
	>
		<NavbarItems />
	</nav>
);

const Navbar = ({ className }: NavbarProps) => (
	<>
		<NavbarDefault className={className} />
		<NavbarMobile className={className} />
	</>
);

export default Navbar;
