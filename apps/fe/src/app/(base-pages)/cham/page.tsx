'use client';
import React, { useState } from 'react';
import AppSection from '@/components/shared/app-section/AppSection';
import PageHeader from '@/components/shared/page-header/PageHeader';
import EmotionWheel from '@/components/newcham/EmotionWheel';
import EmotionDetail from '@/components/newcham/EmotionDetail';
import SelectedEmotionTags from '@/components/newcham/SelectedEmotionTags';
import ButtonCTA from '@/components/shared/cta/ButtonCTA';
import { NewMoodService } from '@/services/api/newmood/mood.service';
import { EmotionTag } from '@/services/api/newmood/data';
import { Save } from 'lucide-react';
import Swal from 'sweetalert2';
import Textarea from '@/components/shared/textarea/Textarea';

function NewChamPage() {
	const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
	const [selectedTags, setSelectedTags] = useState<EmotionTag[]>([]);
	const [saveStatus, setSaveStatus] = useState<'normal' | 'loading' | 'disabled'>('normal');
	const [diary, setDiary] = useState<string>('');

	const moodService = NewMoodService.getInstance();

	const handleTagToggle = (tag: EmotionTag) => {
		setSelectedTags((prev) => {
			const exists = prev.find((t) => t._id === tag._id);
			return exists ? prev.filter((t) => t._id !== tag._id) : [...prev, tag];
		});
	};

	const handleRemoveTag = (tagId: string) => {
		setSelectedTags((prev) => prev.filter((t) => t._id !== tagId));
	};

	const handleSubmit = async () => {
		if (selectedTags.length === 0) {
			Swal.fire({
				icon: 'warning',
				title: 'Chưa chọn cảm xúc',
				text: 'Vui lòng chọn ít nhất một cảm xúc trước khi lưu',
			});
			return;
		}

		setSaveStatus('loading');

		const [error, success] = await moodService.saveSelectedEmotions(selectedTags, diary);

		setSaveStatus('normal');

		if (error) {
			Swal.fire({
				icon: 'error',
				title: 'Có lỗi xảy ra',
				text: 'Không thể lưu cảm xúc của bạn. Vui lòng thử lại sau.',
			});
			return;
		}

		Swal.fire({
			icon: 'success',
			title: 'Đã lưu thành công!',
			text: `Đã lưu ${selectedTags.length} cảm xúc của bạn`,
			timer: 2000,
		});

		setSelectedTags([]);
		setSelectedEmotion(null);
	};

	return (
		<>
			<PageHeader title='Bạn đang cảm thấy thế nào?' description='Chọn cảm xúc chính để khám phá chi tiết' disableAppearAnimation />

			{selectedEmotion && <EmotionDetail selectedEmotion={selectedEmotion} selectedTags={selectedTags} onTagToggle={handleTagToggle} />}

			<AppSection disableAppearAnimation>
				<EmotionWheel selectedEmotion={selectedEmotion} onEmotionSelect={setSelectedEmotion} />
			</AppSection>

			{selectedTags.length > 0 && (
				<>
					<AppSection>
						<SelectedEmotionTags selectedTags={selectedTags} onRemoveTag={handleRemoveTag} />
					</AppSection>

					<AppSection>
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
						</div>
					</AppSection>
				</>
			)}

			{selectedTags.length > 0 && (
				<AppSection>
					<div className='flex justify-center'>
						<ButtonCTA variant='primary' status={saveStatus} onClick={handleSubmit} Icon={Save} className='px-8 py-3 text-lg'>
							Lưu cảm xúc ({selectedTags.length})
						</ButtonCTA>
					</div>
				</AppSection>
			)}

			{!selectedEmotion && selectedTags.length === 0 && (
				<AppSection>
					<div className='bg-white rounded-3xl shadow-lg p-8 text-center'>
						<div className='text-4xl mb-3'>👆</div>
						<p className='text-lg text-[var(--color-text-secondary)]'>Chọn một cảm xúc ở trên để xem chi tiết</p>
					</div>
				</AppSection>
			)}
		</>
	);
}

export default NewChamPage;
