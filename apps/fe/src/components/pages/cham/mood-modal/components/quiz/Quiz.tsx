import InlineLoading from '@/components/shared/inline-loading/InlineLoading';
import { MoodService } from '@/services/api/mood/mood.service';
import { Mood } from '@models';
import React, { useState } from 'react';
import QuizMode from './components/quiz-mode/QuizMode';
import Swal from 'sweetalert2';
import { LOCAL_STORAGE_KEYS, LocalStorageService } from '@/services/storage/local-storage.service';
import { Answer } from '@/types';
import { generateExpAtTime } from '@/utils';

const questions = [
	'Bạn thấy khó thở (kiểu như thở gấp, hụt hơi dù chẳng vận động gì nhiều).',
	'Cảm giác như bạn chẳng thể bắt đầu hay làm được việc gì bây giờ cả.',
	'Có lẽ khó mà bạn cảm thấy thư giãn được lúc này.',
	'Có lúc rơi vào mấy tình huống làm bạn lo lắng đến mức chỉ mong nó mau kết thúc.',
	'Bạn dễ bực bội khi bị chờ đợi (kiểu kẹt thang máy, kẹt xe, hay bị ai đó bắt chờ).',
	'Bạn luôn thấy sợ hãi mà chẳng có lý do gì rõ ràng.',
	'Bạn chẳng thấy vui hay hứng thú trong những việc mình đang làm.',
	'Bạn rất dễ trở nên cáu gắt.',
	'Bạn chẳng có hứng thú với bất kỳ điều gì.',
	'Bạn không hề thấy có gì trong tương lai để hy vọng cả.',
];

const answers = ['Không bao giờ', 'Thỉnh thoảng', 'Thường xuyên', 'Gần như luôn luôn'];

type Props = {
	onFinish: () => void;
};

export default function Quiz({ onFinish }: Props) {
	const [isLoading, setIsLoading] = useState(false);

	const handleQuizFinish = async (responses: Answer[]) => {
		setIsLoading(true);

		try {
			const [error, mood] = ['', null] as [string | null, Mood | null];

			if (error || !mood) {
				Swal.fire({
					icon: 'error',
					title: 'Lỗi',
					text: 'Đã có lỗi xảy ra khi gửi câu trả lời. Vui lòng thử lại.',
				});
				return;
			}

			LocalStorageService.setItem(LOCAL_STORAGE_KEYS.MOOD_ENTRY, JSON.stringify({ mood, exp: generateExpAtTime(23, 59, 59) }));
			onFinish();
		} catch {
			Swal.fire({
				icon: 'error',
				title: 'Lỗi',
				text: 'Đã có lỗi xảy ra khi gửi câu trả lời. Vui lòng thử lại.',
			});
		} finally {
			setIsLoading(false);
		}
	};

	if (isLoading) {
		return <InlineLoading title='Đang gửi câu trả lời...' className='mt-8' />;
	}

	return <QuizMode questions={questions} answers={answers} onFinish={handleQuizFinish} />;
}
