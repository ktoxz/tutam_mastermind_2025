'use client';
import React from 'react';
import ButtonCTA from '@/components/shared/cta/ButtonCTA';

type Mode = 'select' | 'select-mood' | 'quiz';

type Props = {
	onModeChange: (mode: Mode) => void;
};

export default function SelectMode({ onModeChange }: Props) {
	return (
		<div className='max-w-xl w-[480px] bg-white'>
			<div className='mb-4'>
				<p className='text-lg text-gray-900'>Bạn muốn chọn tâm trạng ngay hay nhận chẩn đoán qua câu hỏi?</p>
			</div>
			<div className='flex flex-col gap-2 mb-6'>
				<ButtonCTA variant='primary' onClick={() => onModeChange('quiz')}>
					Nhận chẩn đoán
				</ButtonCTA>
				<ButtonCTA
					variant='secondary'
					onClick={() => onModeChange('select-mood')}
					className='text-[var(--color-text-secondary)]'
				>
					Chọn tâm trạng ngay
				</ButtonCTA>
			</div>
		</div>
	);
}
