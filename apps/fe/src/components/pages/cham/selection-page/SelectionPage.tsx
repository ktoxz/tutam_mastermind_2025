import React from 'react';
import AppSection from '@/components/shared/app-section/AppSection';
import PageHeader from '@/components/shared/page-header/PageHeader';
import EmotionWheel from '@/components/pages/cham/emotion-wheel/EmotionWheel';
import EmotionDetail from '@/components/pages/cham/emotion-detail/EmotionDetail';
import ButtonCTA from '@/components/shared/cta/ButtonCTA';
import Textarea from '@/components/shared/textarea/Textarea';
import { Sparkles, Save } from 'lucide-react';
import { EmotionTag } from '@/models/Emotion';

type Props = {
	selectedEmotion: string | null;
	setSelectedEmotion: (e: string | null) => void;
	selectedTags: EmotionTag[];
	setSelectedTags: (tags: EmotionTag[]) => void;
	diary: string;
	setDiary: (d: string) => void;
	saveStatus: 'normal' | 'loading' | 'disabled';
	handleTagToggle: (tag: EmotionTag) => void;
	handleSubmit: () => void;
	MIN_TAGS_REQUIRED: number;
	MAX_DIARY_LENGTH: number;
};

const SelectionPage: React.FC<Props> = ({ selectedEmotion, setSelectedEmotion, selectedTags, diary, setDiary, saveStatus, handleTagToggle, handleSubmit, MAX_DIARY_LENGTH }) => {
	const hasSelectedEmotions = selectedEmotion || selectedTags.length > 0;

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
							<div className='bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center border-2 border-dashed border-gray-200 h-full flex items-center justify-center'>
								<div className='max-w-md mx-auto space-y-4'>
									<div className='w-16 h-16 mx-auto bg-gradient-to-br from-(--color-primary) to-(--color-primary-light) rounded-full flex items-center justify-center'>
										<Sparkles className='w-8 h-8 text-(--color-text-inverse)' strokeWidth={1.5} />
									</div>
									<h3 className='text-xl md:text-2xl font-bold text-[var(--color-text-body)]'>Bắt đầu chọn cảm xúc</h3>
									<p className='text-base text-[var(--color-text-secondary)] leading-relaxed'>
										Chọn một cảm xúc ở bên trái để khám phá các mức độ cảm xúc cụ thể và ghi lại trải nghiệm của bạn
									</p>
								</div>
							</div>
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
};

export default SelectionPage;
