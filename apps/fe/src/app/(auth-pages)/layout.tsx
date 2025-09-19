import metadata from './metadata';
import Link from 'next/link';
import { BASIC_ROUTES } from '@/consts/routes';
import { ArrowLeft } from 'lucide-react';

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<section className='flex flex-row justify-center items-center min-h-screen'>
			<Link
				href={BASIC_ROUTES.home.href}
				className='absolute top-4 left-4 flex items-center gap-2 text-sm text-[color:var(--color-text-link)] hover:text-[color:var(--color-text-link-hover)] active:text-[color:var(--color-text-link-active)] underline'
			>
				<ArrowLeft size={16} />
				về nhà chung
			</Link>
			{children}
		</section>
	);
}

export { metadata };
export default Layout;
