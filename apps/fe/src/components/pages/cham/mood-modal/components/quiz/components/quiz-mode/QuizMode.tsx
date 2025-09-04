'use client';
import React, { useState } from 'react';
import ButtonCTA from '@/components/shared/cta/ButtonCTA';

type Answer = 0 | 1 | 2 | 3;

type Question = {
	id: number;
	text: string;
};

type Props = {
	questions: Question[];
	answers: string[];
	onFinish: (responses: Answer[]) => void;
};

const QuestionView = React.memo(function QuestionView({
	question,
	current,
	total,
}: {
	question: Question;
	current: number;
	total: number;
}) {
	return (
		<div className='mb-4'>
			<div className='font-semibold mb-2'>
				Câu {current + 1}/{total}
			</div>
			<p className='text-lg min-h-[3.25em] text-gray-900'>{question.text}</p>
		</div>
	);
});

const AnswerOptions = React.memo(function AnswerOptions({
	answers,
	selected,
	onSelect,
}: {
	answers: string[];
	selected: Answer | null;
	onSelect: (ans: Answer) => void;
}) {
	return (
		<div className='flex flex-col gap-2 mb-6'>
			{answers.map((ans, idx) => (
				<button
					key={idx}
					className={`py-2 px-4 rounded border text-left ${
						selected === idx
							? 'bg-green-800 text-white border-green-800 hover:bg-green-700'
							: 'bg-white hover:bg-gray-50 border-gray-300 cursor-pointer'
					}`}
					onClick={() => onSelect(idx as Answer)}
				>
					{ans}
				</button>
			))}
		</div>
	);
});

const NavigationButtons = React.memo(function NavigationButtons({
	current,
	total,
	responses,
	onPrev,
	onNext,
	onSubmit,
}: {
	current: number;
	total: number;
	responses: (Answer | null)[];
	onPrev: () => void;
	onNext: () => void;
	onSubmit: () => void;
}) {
	return (
		<div className='flex justify-between items-center'>
			<ButtonCTA
				variant='secondary'
				status={current === 0 ? 'disabled' : 'normal'}
				onClick={onPrev}
				className='text-[var(--color-text-secondary)]'
			>
				Quay lại
			</ButtonCTA>
			{current < total - 1 ? (
				<ButtonCTA
					variant='primary'
					status={responses[current] === null ? 'disabled' : 'normal'}
					onClick={onNext}
				>
					Tiếp theo
				</ButtonCTA>
			) : (
				<ButtonCTA
					variant='primary'
					status={responses.some((r) => r === null) ? 'disabled' : 'normal'}
					onClick={onSubmit}
				>
					Gửi câu trả lời
				</ButtonCTA>
			)}
		</div>
	);
});

export default function QuizMode({ questions, answers, onFinish }: Props) {
	const [current, setCurrent] = useState(0);
	const [responses, setResponses] = useState<(Answer | null)[]>(Array(questions.length).fill(null));

	const handleSelect = (ans: Answer) => {
		const next = [...responses];
		next[current] = ans;
		setResponses(next);
	};

	const handlePrev = () => setCurrent((c) => Math.max(0, c - 1));
	const handleNext = () => setCurrent((c) => Math.min(questions.length - 1, c + 1));
	const handleSubmit = () => {
		if (!responses.some((r) => r === null)) {
			onFinish(responses as Answer[]);
		}
	};

	return (
		<div className='max-w-xl w-[480px] bg-white'>
			<QuestionView question={questions[current]} current={current} total={questions.length} />
			<AnswerOptions answers={answers} selected={responses[current]} onSelect={handleSelect} />
			<NavigationButtons
				current={current}
				total={questions.length}
				responses={responses}
				onPrev={handlePrev}
				onNext={handleNext}
				onSubmit={handleSubmit}
			/>
		</div>
	);
}
