'use client';
import React from 'react';

export default function AuthedLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
