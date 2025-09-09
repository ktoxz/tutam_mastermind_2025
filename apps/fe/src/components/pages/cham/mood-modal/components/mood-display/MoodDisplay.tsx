import React from 'react';
import Image from 'next/image';
import EnvelopSrc from '@/assets/envelop.png';
import { Mood } from '@packages/models';
import { MoodService } from '@/services/api/mood/mood.service';

type Props = {
	mood: Mood;
	onFinish: (mood: Mood) => void;
};

function MoodDisplay({ mood, onFinish }: Props) {
	const moodService = MoodService.getInstance();
	const moodMeta = moodService.getMoodMeta(mood);

	const getGreetingMessage = (moodLabel: string) => {
		switch (moodLabel) {
			case 'Hạnh phúc':
				return 'Tuyệt vời! Hôm nay thật tuyệt vời 🎉';
			case 'Buồn':
				return 'Chúng tôi luôn ở đây lắng nghe bạn 💙';
			case 'Hào hứng':
				return 'Năng lượng thật tuyệt! Hãy giữ vững nhé ⚡';
			case 'Mệt mỏi':
				return 'Bạn xứng đáng được nghỉ ngơi 💌';
			default:
				return 'Cảm xúc của bạn rất quan trọng!';
		}
	};

	return (
		<div className='w-full min-w-0 sm:min-w-[320px] md:min-w-[600px] flex flex-col items-center gap-8 bg-white px-4 sm:px-8 py-6 sm:py-10 rounded-xl shadow-lg z-5 animate-fade-in-bottom'>
			<div className='flex flex-col items-center gap-4 text-center animate-fade-in-top'>
				<div className='flex items-center justify-center w-24 h-24 rounded-full mb-2' style={{ backgroundColor: moodMeta.bgColor || '#f5f5f5' }}>
					<moodMeta.icon size={56} color={moodMeta.textColor || '#222'} />
				</div>
				<h2 className='text-2xl sm:text-3xl font-bold text-[var(--color-primary)]'>{getGreetingMessage(mood.mood_label)}</h2>
				<p className='text-[var(--color-text-secondary)] text-base sm:text-lg max-w-lg'>{mood.validation}</p>
			</div>
			<div className='flex flex-col items-center gap-4 animate-fade-in-bottom'>
				<button
					className='transition-transform duration-200 hover:scale-105 transform-gpu focus:outline-none cursor-pointer active:scale-95'
					onClick={() => {
						onFinish(mood);
					}}
					aria-label='Mở lá thư bất ngờ'
				>
					<Image src={EnvelopSrc} alt='Lá thư bất ngờ' width={160} height={120} className='w-40 h-auto object-contain animate-shake-segmented' priority />
				</button>
				<p className='text-[var(--color-text-secondary)] text-sm text-center max-w-xs'>Hãy mở lá thư này để nhận một thông điệp đặc biệt từ Tự Tâm nhé!</p>
			</div>
		</div>
	);
}

export default MoodDisplay;
