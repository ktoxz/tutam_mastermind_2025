'use client';
import React from 'react';
import DataCard from '@/components/pages/profile/shared/data-card/DataCard';
import InfoSection from './components/info-section/InfoSection';
import ActionsSection from './components/actions-section/ActionsSection';

export default function InfoCard({ user }: { user: any }) {
	return (
		<DataCard className='h-full'>
			<div className='flex flex-row w-full'>
				<InfoSection user={user} />
				<ActionsSection />
			</div>
		</DataCard>
	);
}
