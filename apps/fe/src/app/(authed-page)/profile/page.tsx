'use client';
import AppSection from '@/components/shared/app-section/AppSection';
import React from 'react';
import { useAuthContext } from '@/contexts/user/useAuthContext';
import InfoCard from '@/components/pages/profile/card/info-card/InfoCard';
import DataCard from '@/components/pages/profile/shared/data-card/DataCard';
import EmotionHistoryCard from '@/components/pages/profile/card/emotion-history-card/EmotionHistoryCard';

type Props = {};

export default function ProfilePage({}: Props) {
	const { user, loading } = useAuthContext();

	if (loading) {
		return (
			<AppSection className='min-h-screen flex items-center justify-center'>
				<div className='text-center'>
					<div className='animate-spin rounded-full h-12 w-12 border-4 border-[var(--color-primary)] border-t-transparent mx-auto mb-4'></div>
					<p className='text-lg text-[var(--color-text-secondary)]'>Đang tải thông tin...</p>
				</div>
			</AppSection>
		);
	}

	if (!user) {
		return (
			<AppSection className='min-h-screen flex items-center justify-center'>
				<div className='text-center bg-white p-8 rounded-2xl shadow-lg'>
					<div className='text-[var(--color-error)] text-6xl mb-4'>⚠️</div>
					<h2 className='text-xl font-bold text-[var(--color-text-body)] mb-2'>Có lỗi xảy ra</h2>
					<p className='text-[var(--color-text-secondary)]'>Không thể tải thông tin người dùng.</p>
				</div>
			</AppSection>
		);
	}

	return (
		<AppSection className='min-h-screen'>
			<div className='max-w-6xl mx-auto px-4 py-6'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:items-start'>
					<div className='lg:col-span-1 h-max'>
						<InfoCard user={user} />
					</div>
					<div className='lg:col-span-2'>
						<DataCard title='Lịch sử cảm xúc' className='h-full' paddingClass='p-6'>
							<EmotionHistoryCard />
						</DataCard>
					</div>
				</div>
			</div>
		</AppSection>
	);
}
