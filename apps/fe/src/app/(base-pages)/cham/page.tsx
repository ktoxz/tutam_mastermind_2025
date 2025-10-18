'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Loading from '@/app/loading';
import { EmotionService } from '@/services/api/emotion/emotion.service';
import { MoodService } from '@/services/api/mood/mood.service';
import { EmotionTag, EMOTION_CONSTANTS } from '@/models/Emotion';
import { Mood } from '@/models/Mood';
import Swal from 'sweetalert2';
import SelectionPage from '@/components/pages/cham/selection-page/SelectionPage';
import EmotionResult from '@/components/pages/cham/emotion-result/EmotionResult';
import AppSection from '@/components/shared/app-section/AppSection';
import { RotateCcw } from 'lucide-react';
import ButtonCTA from '@/components/shared/cta/ButtonCTA';

const { MIN_TAGS_REQUIRED, MAX_DIARY_LENGTH } = EMOTION_CONSTANTS;

function NewChamPage() {
	const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
	const [selectedTags, setSelectedTags] = useState<EmotionTag[]>([]);
	const [saveStatus, setSaveStatus] = useState<'normal' | 'loading' | 'disabled'>('normal');
	const [diary, setDiary] = useState<string>('');
	const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
	const [resultMood, setResultMood] = useState<Mood | null>(null);

	const moodService = useMemo(() => EmotionService.getInstance(), []);

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
		<SelectionPage
			selectedEmotion={selectedEmotion}
			setSelectedEmotion={setSelectedEmotion}
			selectedTags={selectedTags}
			setSelectedTags={setSelectedTags}
			diary={diary}
			setDiary={setDiary}
			saveStatus={saveStatus}
			handleTagToggle={handleTagToggle}
			handleSubmit={handleSubmit}
			MIN_TAGS_REQUIRED={MIN_TAGS_REQUIRED}
			MAX_DIARY_LENGTH={MAX_DIARY_LENGTH}
		/>
	);
}

export default NewChamPage;
