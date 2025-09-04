import InlineLoading from '@/components/shared/inline-loading/InlineLoading';
import { MoodService } from '@/services/api/mood/mood.service';
import { Mood } from '@packages/models';
import React, { useState } from 'react';
import QuizMode from './components/quiz-mode/QuizMode';

const questions = [
	{ id: 4, text: 'Bạn thấy khó thở (kiểu như thở gấp, hụt hơi dù chẳng vận động gì nhiều).' },
	{ id: 5, text: 'Cảm giác như bạn chẳng thể bắt đầu hay làm được việc gì bây giờ cả.' },
	{ id: 8, text: 'Có lẽ khó mà bạn cảm thấy thư giãn được lúc này.' },
	{ id: 9, text: 'Có lúc rơi vào mấy tình huống làm bạn lo lắng đến mức chỉ mong nó mau kết thúc.' },
	{ id: 14, text: 'Bạn dễ bực bội khi bị chờ đợi (kiểu kẹt thang máy, kẹt xe, hay bị ai đó bắt chờ).' },
	{ id: 20, text: 'Bạn luôn thấy sợ hãi mà chẳng có lý do gì rõ ràng.' },
	{ id: 24, text: 'Bạn chẳng thấy vui hay hứng thú trong những việc mình đang làm.' },
	{ id: 27, text: 'Bạn rất dễ trở nên cáu gắt.' },
	{ id: 31, text: 'Bạn chẳng có hứng thú với bất kỳ điều gì.' },
	{ id: 37, text: 'Bạn không hề thấy có gì trong tương lai để hy vọng cả.' },
];

const answers = [
	'Không bao giờ', // 0
	'Thỉnh thoảng', // 1
	'Thường xuyên', // 2
	'Gần như luôn luôn', // 3
];

type Answer = 0 | 1 | 2 | 3;

type Props = {
	onFinish: (mood: Mood) => void;
};

export default function Quiz({ onFinish }: Props) {
	const [submitted, setSubmitted] = useState(false);

	const handleQuizFinish = async (responses: Answer[]) => {
		setSubmitted(true);
		console.log('Quiz responses:', responses);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		const [err, moodList] = await MoodService.getInstance().getList();
		if (moodList) onFinish(moodList[Math.floor(Math.random() * moodList.length)]);
	};

	if (submitted) {
		return <InlineLoading title='Đang gửi câu trả lời...' className='mt-8' />;
	}

	return <QuizMode questions={questions} answers={answers} onFinish={handleQuizFinish} />;
}
