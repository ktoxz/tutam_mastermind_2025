import React from 'react';
import { Shield } from 'lucide-react';
import AppSection from '@/components/shared/app-section/AppSection';
import LinkCTA from '@/components/shared/cta/LinkCTA';
import { BASIC_ROUTES } from '@/consts/routes';

const UnauthPage: React.FC = () => (
	<AppSection className='flex flex-col items-center justify-center min-h-screen px-4'>
		<div className='flex flex-col items-center w-full max-w-md p-6 sm:p-8 bg-white rounded-lg shadow-xl border border-gray-200'>
			<Shield className='w-12 h-12 sm:w-16 sm:h-16 text-[var(--color-primary)] mb-4 animate-pulse' />
			<h1 className='text-5xl sm:text-6xl font-bold text-[var(--color-primary)] mb-4'>403</h1>
			<h2 className='text-xl sm:text-2xl font-semibold text-[var(--color-text-body)] mb-2'>Forbidden</h2>
			<p className='text-sm sm:text-base text-[var(--color-text-secondary)] mb-6 text-center'>
				Trang bạn vừa truy cập từ chối quyền truy cập. Bạn không có quyền truy cập vào trang này.
			</p>
			<LinkCTA href={BASIC_ROUTES.home.href}>Quay về trang chủ</LinkCTA>
		</div>
	</AppSection>
);

export default UnauthPage;
