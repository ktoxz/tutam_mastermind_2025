'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import AppSection from '@/components/shared/app-section/AppSection';
import PageHeader from '@/components/shared/page-header/PageHeader';
import EmotionWheel from '@/components/newcham/emotion-wheel/EmotionWheel';
import EmotionDetail from '@/components/newcham/emotion-detail/EmotionDetail';
import ButtonCTA from '@/components/shared/cta/ButtonCTA';
import EmotionResult from '@/components/newcham/emotion-result/EmotionResult';
import { NewMoodService } from '@/services/api/newmood/mood.service';
import { Save, RotateCcw } from 'lucide-react';
import Swal from 'sweetalert2';
import Textarea from '@/components/shared/textarea/Textarea';
import Loading from '@/app/loading';
import { EmotionTag, EMOTION_CONSTANTS } from '@/models/Emotion';
import { Mood } from '@/models/Mood';
import { MoodService } from '@/services/api/mood/mood.service';

const { MIN_TAGS_REQUIRED, MAX_DIARY_LENGTH } = EMOTION_CONSTANTS;

function EmptyState() {
	return (
		<div className='bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center border-2 border-dashed border-gray-200 h-full flex items-center justify-center'>
			<div className='max-w-md mx-auto space-y-4'>
				<div className='w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center'>
					<span className='text-3xl' role='img' aria-label='sparkles'>
						✨
					</span>
				</div>
				<h3 className='text-xl md:text-2xl font-bold text-[var(--color-text-body)]'>Bắt đầu chọn cảm xúc</h3>
				<p className='text-base text-[var(--color-text-secondary)] leading-relaxed'>
					Chọn một cảm xúc ở bên trái để khám phá các mức độ cảm xúc cụ thể và ghi lại trải nghiệm của bạn
				</p>
			</div>
		</div>
	);
}

function NewChamPage() {
	const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
	const [selectedTags, setSelectedTags] = useState<EmotionTag[]>([]);
	const [saveStatus, setSaveStatus] = useState<'normal' | 'loading' | 'disabled'>('normal');
	const [diary, setDiary] = useState<string>('');
	const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
	const [resultMood, setResultMood] = useState<Mood | null>(null);

	const moodService = useMemo(() => NewMoodService.getInstance(), []);

	useEffect(() => {
		setIsPageLoading(false);
	}, []);

	const handleTagToggle = useCallback((tag: EmotionTag) => {
		setSelectedTags((prev) => {
			const exists = prev.find((t) => t._id === tag._id);
			return exists ? prev.filter((t) => t._id !== tag._id) : [...prev, tag];
		});
	}, []);

	const validateSubmission = useCallback((): boolean => {
		if (selectedTags.length < MIN_TAGS_REQUIRED) {
			Swal.fire({
				icon: 'warning',
				title: 'Chưa chọn cảm xúc',
				text: `Vui lòng chọn ít nhất ${MIN_TAGS_REQUIRED} cảm xúc trước khi lưu`,
			});
			return false;
		}

		if (diary.length > MAX_DIARY_LENGTH) {
			Swal.fire({
				icon: 'warning',
				title: 'Nhật ký quá dài',
				text: `Nhật ký không được vượt quá ${MAX_DIARY_LENGTH} ký tự`,
			});
			return false;
		}

		return true;
	}, [selectedTags.length, diary.length]);

	const handleSubmit = useCallback(async () => {
		if (!validateSubmission()) return;

		setSaveStatus('loading');

		const tags = selectedTags.map((tag) => tag.label);
		const [error, response] = await moodService.postEmotions(tags, diary);

		setSaveStatus('normal');

		if (error || !response) {
			Swal.fire({
				icon: 'error',
				title: 'Có lỗi xảy ra',
				text: error?.message || 'Không thể lưu cảm xúc của bạn. Vui lòng thử lại sau.',
			});
			return;
		}

		let mood: Mood | undefined = undefined;

		try {
			mood = await MoodService.getInstance().getMoodByLabel(response.mood);
		} catch (err) {
			Swal.fire({
				icon: 'error',
				title: 'Có lỗi xảy ra',
				text: 'Không thể lấy thông tin cảm xúc. Vui lòng thử lại sau.',
			});
			return;
		}

		if (!mood) {
			Swal.fire({
				icon: 'error',
				title: 'Có lỗi xảy ra',
				text: 'Không tìm thấy cảm xúc phù hợp.',
			});
			return;
		}

		setResultMood({
			...mood,
			header: response.header,
			validation: response.validation,
			encouragement: response.encouragement,
			actions: response.actions,
			quote: response.quote,
		});
	}, [validateSubmission, selectedTags, diary, moodService]);

	const handleReset = useCallback(() => {
		setResultMood(null);
		setSelectedTags([]);
		setSelectedEmotion(null);
		setDiary('');
	}, []);

	const hasSelectedEmotions = useMemo(() => selectedEmotion || selectedTags.length > 0, [selectedEmotion, selectedTags.length]);

	if (isPageLoading) {
		return <Loading />;
	}

	if (resultMood) {
		return (
			<>
				<EmotionResult mood={resultMood} />
				<AppSection>
					<div className='flex justify-center'>
						<ButtonCTA variant='primary' onClick={handleReset} Icon={RotateCcw} className='px-6 py-3'>
							Ghi nhận cảm xúc mới
						</ButtonCTA>
					</div>
				</AppSection>
			</>
		);
	}

	return (
		<>
			<PageHeader
				title='Bạn cảm thấy thế nào?'
				description='Cảm xúc của bạn rất quan trọng! Việc nhận diện và ghi lại cảm xúc giúp bạn hiểu rõ bản thân hơn, từ đó chăm sóc sức khỏe tinh thần tốt hơn mỗi ngày.'
				disableAppearAnimation
			/>

			<AppSection disableAppearAnimation>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
					<div className='space-y-6'>
						<div className='md:sticky md:top-6'>
							<EmotionWheel selectedEmotion={selectedEmotion} onEmotionSelect={setSelectedEmotion} selectedTags={selectedTags} />
						</div>
					</div>

					<div className='space-y-6'>
						{!hasSelectedEmotions ? (
							<EmptyState />
						) : (
							<>
								{selectedEmotion && <EmotionDetail selectedEmotion={selectedEmotion} selectedTags={selectedTags} onTagToggle={handleTagToggle} />}

								{selectedTags.length > 0 && (
									<>
										<div className='bg-white rounded-2xl shadow-lg p-4 md:p-6'>
											<Textarea
												id='emotion-journal'
												name='emotion-journal'
												label='Nhật ký cảm xúc (tuỳ chọn)'
												placeholder='Bạn muốn ghi lại điều gì về cảm xúc này?'
												rows={5}
												value={diary}
												onChange={setDiary}
											/>
											{diary.length > 0 && (
												<p className='text-xs text-gray-500 mt-2 text-right'>
													{diary.length}/{MAX_DIARY_LENGTH} ký tự
												</p>
											)}
										</div>

										<div className='flex justify-center md:justify-end'>
											<ButtonCTA
												variant='primary'
												status={saveStatus}
												onClick={handleSubmit}
												Icon={Save}
												className='px-8 py-3 text-lg w-full'
												disabled={saveStatus === 'loading'}
											>
												{saveStatus === 'loading' ? 'Đang lưu...' : `Lưu cảm xúc (${selectedTags.length})`}
											</ButtonCTA>
										</div>
									</>
								)}
							</>
						)}
					</div>
				</div>
			</AppSection>
		</>
	);
}

export default NewChamPage;
