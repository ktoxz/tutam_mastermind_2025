'use client';
import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';
import { useAuthContext } from '@/contexts/user/useAuthProvider';

type Props = {
	avatar?: string;
	size?: number;
	alt?: string;
};

function Avatar({ size = 32 }: Props) {
	const { user } = useAuthContext();
	const avatarSrc = user?.avatarUrl;

	return (
		<div
			className='flex flex-row items-center justify-center rounded-full overflow-hidden aspect-square p-1 bg-white border'
			style={{ width: size, height: size }}
		>
			{avatarSrc ? (
				<img src={avatarSrc} alt={user?.name ?? ''} className='relative object-cover w-full h-full' />
			) : (
				<User className='w-full h-full text-gray-400' />
			)}
		</div>
	);
}

export default Avatar;
