'use client';
import React, { useState } from 'react';
import Avatar from '@/components/shared/avatar/Avatar';
import { CheckCircle } from 'lucide-react';
import { formatDate } from '@/utils';
import AvatarModal from '../avatar-modal/AvatarModal';

export default function InfoSection({ user }: { user: any }) {
	const [openAVTModal, setOpenAVTModal] = useState(false);

	return (
		<>
			<div className='flex flex-col items-start gap-2'>
				<button className='relative mb-6 h-max w-max cursor-pointer' onClick={() => setOpenAVTModal(true)}>
					<Avatar size={80} alt={user.name} />
					<div className='absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-3 border-white flex items-center justify-center'>
						<div className='w-2 h-2 bg-white rounded-full'></div>
					</div>
				</button>

				<div className='flex items-center gap-2'>
					<h2 className='text-lg md:text-xl font-bold text-gray-900'>{user.name}</h2>
					{user.isVerified && <CheckCircle size={20} className='text-blue-500' strokeWidth={2.5} />}
				</div>

				<p className='text-xs md:text-sm text-gray-600'>{user.email}</p>

				<div className='bg-gray-100 px-4 py-2 rounded-md w-max'>
					<p className='text-xs text-gray-500'>Tham gia từ {formatDate(user.createdAt)}</p>
				</div>
			</div>
			{openAVTModal && <AvatarModal onClose={() => setOpenAVTModal(false)} />}
		</>
	);
}
