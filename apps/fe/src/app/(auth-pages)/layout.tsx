import metadata from './metadata';

function layout({ children }: { children: React.ReactNode }) {
	return <section className='flex flex-row justify-center items-center min-h-screen'>{children}</section>;
}

export { metadata };
export default layout;
