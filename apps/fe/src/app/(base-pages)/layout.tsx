import AppHeader from '@/components/shared/app-header/AppHeader';
import './styles/globals.css';
import AppFooter from '@/components/shared/app-footer/AppFooter';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<AppHeader />
			{children}
			<AppFooter />
		</>
	);
}
