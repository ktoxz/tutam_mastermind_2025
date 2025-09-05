import AppBackground from '@/components/shared/app-background/AppBackground';
import './styles/globals.css';
import { Montserrat } from 'next/font/google';
import { AuthContextProvider } from '@/contexts/user/AuthContextProvider';

const montserrat = Montserrat({
	subsets: ['latin', 'vietnamese'],
	weight: ['100', '300', '400', '500', '700', '900'],
	display: 'swap',
	variable: '--font-montserrat',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='vi' className={montserrat.className}>
			<body className='antialiased bg-(--color-background)'>
				<AppBackground />
				<AuthContextProvider>{children}</AuthContextProvider>
			</body>
		</html>
	);
}
