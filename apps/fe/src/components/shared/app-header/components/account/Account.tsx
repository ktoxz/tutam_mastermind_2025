'use client';
import React from 'react';
import { useAuthContext } from '@/contexts/user/useAuthProvider';
import Avatar from '@/components/shared/avatar/Avatar';
import LinkCTA from '@/components/shared/cta/LinkCTA';
import Link from 'next/link';
import { BASIC_ROUTES } from '@/consts/routes';
import AccountDropMenu from '../components/AccountDropMenu';
import InlineLoading from '@/components/shared/inline-loading/InlineLoading';

function Account() {
	const { user, loading } = useAuthContext();

	if (loading) {
		return (
			<div className='flex flex-row justify-end items-center gap-2'>
				<InlineLoading className='p-2' />
			</div>
		);
	}

	if (!user) {
		return (
			<div className='flex flex-row justify-end items-center gap-2'>
				<LinkCTA href='/login'>Đăng nhập</LinkCTA>
			</div>
		);
	}

	const displayName = user.name && user.name.length > 16 ? user.name.slice(0, 16) + '...' : user.name || '';

	return (
		<div className="relative group z-1000 after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-full after:h-[30%] after:transition-all after:duration-150 group-hover:after:h-[200px] group-hover:after:bg-white">
			<Link
				href={BASIC_ROUTES.profile.href}
				className='flex items-center gap-3 px-1 py-1 rounded-lg bg-white transition-colors duration-150'
			>
				<Avatar size={36} />
				<div className='hidden sm:flex flex-col'>
					<span className='font-medium text-[color:var(--color-text-body)] group-hover:text-[color:var(--color-primary)] transition-colors duration-150'>
						{displayName}
					</span>
					<span className='text-xs text-gray-500 truncate max-w-[160px]'>{user.email}</span>
				</div>
			</Link>
			<AccountDropMenu />
		</div>
	);
}

export default Account;
