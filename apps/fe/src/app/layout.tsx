import AppBackground from '@/components/shared/app-background/AppBackground';
import './styles/globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	subsets: ['latin', 'vietnamese'],
	weight: ['100', '300', '400', '500', '700', '900'],
	display: 'swap',
	variable: '--font-roboto',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='vi' className={roboto.className}>
			<body className='antialiased bg-(--color-background)'>
				{children}
				<AppBackground />
			</body>
		</html>
	);
}
