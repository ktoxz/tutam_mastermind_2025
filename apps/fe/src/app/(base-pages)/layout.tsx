import AppHeader from '@/components/shared/app-header/AppHeader';
import { AuthContextProvider } from '@/contexts/user/AuthContextProvider';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<AppHeader />
			{children}
		</>
	);
}
