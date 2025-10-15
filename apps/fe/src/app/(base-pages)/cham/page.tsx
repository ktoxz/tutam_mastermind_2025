'use client';
import React, { useState } from 'react';
import AppSection from '@/components/shared/app-section/AppSection';
import PageHeader from '@/components/shared/page-header/PageHeader';
import EmotionWheel from '@/components/newcham/EmotionWheel';
import EmotionDetail from '@/components/newcham/EmotionDetail';
import SelectedEmotionTags from '@/components/newcham/SelectedEmotionTags';
import ButtonCTA from '@/components/shared/cta/ButtonCTA';
import { NewMoodService } from '@/services/api/newmood/mood.service';
import { Save } from 'lucide-react';
import Swal from 'sweetalert2';

function NewChamPage() {
	const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
	const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);
	const [saveStatus, setSaveStatus] = useState<'normal' | 'loading' | 'disabled'>('normal');

	const moodService = NewMoodService.getInstance();

	const handleTagToggle = (tagId: string) => {
		setSelectedTagIds((prev) => (prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]));
	};

	const handleRemoveTag = (tagId: string) => {
		setSelectedTagIds((prev) => prev.filter((id) => id !== tagId));
	};

	const handleSubmit = async () => {
		if (selectedTagIds.length === 0) {
			Swal.fire({
				icon: 'warning',
				title: 'Chưa chọn cảm xúc',
				text: 'Vui lòng chọn ít nhất một cảm xúc trước khi lưu',
			});
			return;
		}

		setSaveStatus('loading');

		const [error, success] = await moodService.saveSelectedEmotions(selectedTagIds);

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
			text: `Đã lưu ${selectedTagIds.length} cảm xúc của bạn`,
			timer: 2000,
		});

		setSelectedTagIds([]);
		setSelectedEmotion(null);
	};

	return (
		<>
			<PageHeader title='Bạn đang cảm thấy thế nào?' description='Chọn cảm xúc chính để khám phá chi tiết' disableAppearAnimation />

			{selectedEmotion && <EmotionDetail selectedEmotion={selectedEmotion} selectedTagIds={selectedTagIds} onTagToggle={handleTagToggle} />}

			<AppSection disableAppearAnimation>
				<EmotionWheel selectedEmotion={selectedEmotion} onEmotionSelect={setSelectedEmotion} />
			</AppSection>

			{selectedTagIds.length > 0 && (
				<AppSection>
					<SelectedEmotionTags selectedTagIds={selectedTagIds} onRemoveTag={handleRemoveTag} />
				</AppSection>
			)}

			{selectedTagIds.length > 0 && (
				<AppSection>
					<div className='flex justify-center'>
						<ButtonCTA variant='primary' status={saveStatus} onClick={handleSubmit} Icon={Save} className='px-8 py-3 text-lg'>
							Lưu cảm xúc ({selectedTagIds.length})
						</ButtonCTA>
					</div>
				</AppSection>
			)}

			{!selectedEmotion && selectedTagIds.length === 0 && (
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
