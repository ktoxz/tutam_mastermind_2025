'use client';
export function LoadingContent() {
	return (
		<span className='flex items-center justify-center gap-2'>
			<span className='inline-block w-4 h-4 border-2 border-t-transparent border-current rounded-full animate-spin' />
			<span>Đang tải...</span>
		</span>
	);
}

export default LoadingContent;
