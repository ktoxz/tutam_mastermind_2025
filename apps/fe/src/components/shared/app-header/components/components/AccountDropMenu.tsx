'use client';
import React, { useMemo } from 'react';
import Link from 'next/link';
import { User, Settings, LogOut } from 'lucide-react';
import { BASIC_ROUTES } from '@/consts/routes';
import { useAuthContext } from '@/contexts/user/useAuthContext';

const AccountDropMenu = () => {
	const { logout } = useAuthContext();

	const menuItems = useMemo(
		() => [
			{
				label: 'Hồ sơ',
				href: BASIC_ROUTES.profile.href,
				Icon: User,
			},
			{
				label: 'Cài đặt',
				href: '#',
				Icon: Settings,
			},
			{
				label: 'Đăng xuất',
				href: '#',
				onClick: logout,
				Icon: LogOut,
			},
		],
		[logout]
	);

	return (
		<div className='absolute top-[125%] w-[215px] z-10 hidden sm:flex flex-row justify-center items-center rounded-sm overflow-hidden opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150'>
			<ul className='relative w-full h-max bg-white'>
				{menuItems.map((item) => (
					<li key={item.label}>
						<Link
							href={item.href}
							onClick={item?.onClick}
							className='flex items-center gap-2 truncate w-full py-2 px-3 hover:bg-gray-100 rounded'
						>
							<item.Icon className='w-4 h-4 text-gray-500' />
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
export default AccountDropMenu;
