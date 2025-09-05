'use client';
import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAuthContext } from '@/contexts/user/useAuthContext';
import { BASIC_ROUTES } from '@/consts/routes';
import InlineLoading from '@/components/shared/inline-loading/InlineLoading';

export default function AuthedLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { user, loading } = useAuthContext();

	useEffect(() => {
		if (!loading && !user) {
			redirect(BASIC_ROUTES.unauthorized.href);
		}
	}, [loading, user]);

	if (loading) {
		return <InlineLoading title='Đang xác thực...' />;
	}

	return <>{children}</>;
}
