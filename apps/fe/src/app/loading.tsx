'use client';

import React from 'react';
import Image from 'next/image';
import AppSection from '@/components/shared/app-section/AppSection';
import trainImg from '@/assets/train.png';

function Loading() {
	return (
		<AppSection className='flex flex-col items-center justify-center min-h-screen px-4 bg-transparent'>
			<div className='flex flex-col items-center w-full max-w-md p-6 sm:p-8 bg-white/60 backdrop-blur-md rounded-lg shadow-xl border border-gray-200/50 animate-fade-in-bottom'>
				<div className='mb-4'>
					<div className='animate-bounce-y' style={{ width: 104, height: 104 }}>
						<Image
							src={trainImg}
							alt='Loading...'
							width={100}
							height={100}
							priority
							className='mx-auto'
							style={{ maxWidth: 100, height: 'auto' }}
						/>
					</div>
				</div>
				<h2 className='text-xl sm:text-2xl font-bold text-[var(--color-primary)] mb-2 text-center animate-pulse'>
					Đang tải...
				</h2>
				<p className='text-sm sm:text-base text-[var(--color-text-secondary)] text-center'>
					Xin vui lòng chờ trong giây lát.
				</p>
			</div>
			<style>{`
				@keyframes bounce-y {
					0% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-5px);
					}
					100% {
						transform: translateY(0);
					}
				}
				.animate-bounce-y {
					animation: bounce-y 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
				}
			`}</style>
		</AppSection>
	);
}

export default Loading;
