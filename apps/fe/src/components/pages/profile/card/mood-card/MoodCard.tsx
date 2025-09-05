'use client';
import React from 'react';
import { Mood } from '@packages/models';
import { Smile, PlusCircle, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { BASIC_ROUTES } from '@/consts/routes';
import DataCard from '@/components/pages/profile/shared/data-card/DataCard';

export default function MoodCard({ mood, onDelete }: { mood: Mood | null; onDelete: () => void }) {
	return (
		<DataCard
			title='Tâm trạng hôm nay'
			icon={Smile}
			iconBg='bg-blue-500'
			iconColor='text-white'
			className='h-full'
			headerRight={
				mood ? (
					<button
						onClick={onDelete}
						className='text-red-500 border border-red-500 hover:text-red-700 hover:border-red-700 p-2 rounded-full aspect-square cursor-pointer'
					>
						<Trash2 size={16} />
					</button>
				) : null
			}
		>
			{mood ? (
				<div className='relative flex flex-col justify-center items-end gap-2'>
					<div className='bg-blue-50 p-4 rounded-xl border border-blue-200'>
						<h4 className='text-base font-bold text-blue-700 mb-2'>{mood.name}</h4>
						<p className='text-sm text-gray-600 mb-2 leading-relaxed'>{mood.comfortMessage}</p>
					</div>
				</div>
			) : (
				<div className='text-center py-8'>
					<div className='bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
						<Smile size={24} className='text-gray-400' />
					</div>
					<p className='text-sm text-gray-500 mb-4'>Bạn chưa đặt tâm trạng hôm nay</p>
					<Link
						href={BASIC_ROUTES.cham.href}
						className='inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95'
					>
						<PlusCircle size={16} /> Thêm tâm trạng
					</Link>
				</div>
			)}
		</DataCard>
	);
}
