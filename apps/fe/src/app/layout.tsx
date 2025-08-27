import AppHeader from '@/components/app-header/AppHeader';
import './styles/globals.css';
import AppFooter from '@/components/app-footer/AppFooter';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='vi'>
			<body className={`antialiased`}>
				<AppHeader />
				{children}
				<AppFooter />
			</body>
		</html>
	);
}
