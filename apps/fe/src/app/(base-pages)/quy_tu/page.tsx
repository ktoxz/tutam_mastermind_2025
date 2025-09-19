'use client';
import AppSection from '@/components/shared/app-section/AppSection';
import FireImage from '@/assets/fire.png';
import React from 'react';
import { Check } from 'lucide-react';

type Props = {};

function page({}: Props) {
	return (
		<AppSection>
			<div
				className='relative w-full h-max flex flex-col lg:flex-row justify-between items-top gap-2
			'
			>
				<div className='flex-1 flex flex-col gap-4 items-center'>
					{/* Icon - Description */}
					<div className='relative flex flex-col items-center gap-8'>
						{/* Icon */}
						<div className='relative flex flex-row justify-center items-center'>
							<img src={FireImage.src} alt='Ngọn lửa tình thương' className='relative w-36' />
							<span className='absolute flex flex-row justify-center items-center text-(--color-primary-dark) font-bold text-9xl left-0 right-0 bottom-[-.25em]'>50</span>
						</div>

						{/* Description */}
						<p className='max-w-sm text-xl font-bold text-center text-(--color-text-tertiary) uppercase'>Cảm ơn bạn đã quan tâm đến chính mình thêm 1 ngày!</p>
					</div>

					{/* Date */}
					<div
						className='flex flex-col gap-2 p-4 rounded-lg w-full max-w-xs mx-auto sm:max-w-none'
						style={{
							background: 'var(--color-primary-dark)',
						}}
					>
						{/* Days row */}
						<ul className='flex flex-row gap-2 justify-between items-center mb-2'>
							{['Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'CN'].map((day, i) => (
								<li key={day} className='text-white font-semibold text-center w-8 text-sm sm:w-10 sm:text-base animate-fade-in-scale'>
									{day}
								</li>
							))}
						</ul>
						{/* Checks row */}
						<ul className='flex flex-row gap-2 justify-between items-center'>
							{Array(7)
								.fill(0)
								.map((_, i) => (
									<li key={i} className='flex justify-center animate-fade-in-scale'>
										<Check
											size={22}
											color={i <= 3 ? 'var(--color-primary-dark)' : 'white'}
											style={{
												background: i <= 3 ? 'white' : 'var(--color-primary-dark)',
												borderRadius: '50%',
												padding: '2px',
												boxShadow: 'var(--shadow-button)',
											}}
										/>
									</li>
								))}
						</ul>
					</div>
				</div>
				<div className='flex-1 flex flex-col items-center justify-center rounded-xl p-8 animate-fade-in-scale gap-4'>
					<span className='text-[var(--color-text-secondary)] text-xl font-semibold text-center leading-relaxed'>Gợi ý công việc hôm nay</span>
					<ul className='w-full max-w-md flex flex-col gap-3'>
						{['Dành 10 phút thiền hoặc hít thở sâu', 'Viết ra 3 điều bạn biết ơn hôm nay', 'Đọc một đoạn sách truyền cảm hứng', 'Đi bộ hoặc vận động nhẹ ngoài trời', 'Gọi điện hỏi thăm người thân/bạn bè'].map(
							(suggestion, idx) => (
								<li key={idx} className='flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow transition hover:bg-[var(--color-background-hover)]'>
									<Check
										size={22}
										color='var(--color-primary)'
										className='shrink-0'
										style={{
											background: 'var(--color-surface)',
											borderRadius: '50%',
											padding: '2px',
										}}
									/>
									<span className='text-[var(--color-text-body)] text-base'>{suggestion}</span>
								</li>
							)
						)}
					</ul>
					<span className='text-[var(--color-text-tertiary)] text-base text-center mt-2'>
						Chức năng này sẽ được hoàn thiện trong thời gian tới.
						<br />
						Vui lòng quay lại sau!
					</span>
				</div>
			</div>
		</AppSection>
	);
}

export default page;
