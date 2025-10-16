'use client';
import AppSection from '@/components/shared/app-section/AppSection';
import React, { useState, useEffect } from 'react';
import { useAuthContext } from '@/contexts/user/useAuthContext';
import { EmotionHistory } from '@models';
import { NewMoodService } from '@/services/api/newmood/mood.service';
import InfoCard from '@/components/pages/profile/card/info-card/InfoCard';

type Props = {};

export default function ProfilePage({}: Props) {
	const { user, loading } = useAuthContext();
	const [emotionHistory, setEmotionHistory] = useState<EmotionHistory[]>([]);
	const [loadingHistory, setLoadingHistory] = useState(true);
	const [deletingId, setDeletingId] = useState<string | null>(null);

	useEffect(() => {
		const fetchEmotionHistory = async () => {
			setLoadingHistory(true);
			const moodService = NewMoodService.getInstance();
			const [error, data] = await moodService.getUserEmotionHistory();

			if (!error && data) {
				setEmotionHistory(data);
			} else {
				console.error('Error fetching emotion history:', error);
			}
			setLoadingHistory(false);
		};

		if (user) {
			fetchEmotionHistory();
		}
	}, [user]);

	const handleDeleteEmotion = async (emotionId: string) => {
		if (!confirm('Bạn có chắc chắn muốn xóa cảm xúc này?')) {
			return;
		}

		setDeletingId(emotionId);
		const moodService = NewMoodService.getInstance();
		const [error, success] = await moodService.deleteEmotionHistoryItem(emotionId);

		if (!error && success) {
			// Remove the deleted emotion from state
			setEmotionHistory((prev) =>
				prev
					.map((dayHistory) => ({
						...dayHistory,
						list: dayHistory.list.filter((item) => item._id !== emotionId),
					}))
					.filter((dayHistory) => dayHistory.list.length > 0),
			);
		} else {
			console.error('Error deleting emotion:', error);
			alert('Không thể xóa cảm xúc. Vui lòng thử lại.');
		}

		setDeletingId(null);
	};

	if (loading) {
		return (
			<AppSection className='min-h-screen flex items-center justify-center'>
				<div className='text-center'>
					<div className='animate-spin rounded-full h-12 w-12 border-4 border-[var(--color-primary)] border-t-transparent mx-auto mb-4'></div>
					<p className='text-lg text-[var(--color-text-secondary)]'>Đang tải thông tin...</p>
				</div>
			</AppSection>
		);
	}

	if (!user) {
		return (
			<AppSection className='min-h-screen flex items-center justify-center'>
				<div className='text-center bg-white p-8 rounded-2xl shadow-lg'>
					<div className='text-[var(--color-error)] text-6xl mb-4'>⚠️</div>
					<h2 className='text-xl font-bold text-[var(--color-text-body)] mb-2'>Có lỗi xảy ra</h2>
					<p className='text-[var(--color-text-secondary)]'>Không thể tải thông tin người dùng.</p>
				</div>
			</AppSection>
		);
	}

	return (
		<AppSection className='min-h-screen bg-[var(--color-background)]'>
			<div className='max-w-6xl mx-auto px-4 py-6'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:items-start'>
					{/* Info Card */}
					<div className='lg:col-span-1 h-max'>
						<InfoCard user={user} />
					</div>

					{/* Emotion History */}
					<div className='lg:col-span-2'>
						<div className='bg-white rounded-2xl shadow-sm p-6'>
							<h2 className='text-xl font-semibold text-[var(--color-text-body)] mb-5'>Lịch sử cảm xúc</h2>

							{loadingHistory ? (
								<div className='flex justify-center items-center py-12'>
									<div className='animate-spin rounded-full h-10 w-10 border-4 border-[var(--color-primary)] border-t-transparent'></div>
								</div>
							) : emotionHistory.length === 0 ? (
								<div className='text-center py-12'>
									<p className='text-[var(--color-text-tertiary)] text-lg'>Chưa có dữ liệu cảm xúc</p>
								</div>
							) : (
								<div className='space-y-5 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent'>
									{emotionHistory.map((dayHistory) => (
										<div key={dayHistory._id} className='border-l-2 border-[var(--color-primary)]/30 pl-4 pb-1'>
											<h3 className='text-sm font-medium text-[var(--color-text-secondary)] mb-3'>
												{new Date(dayHistory._id).toLocaleDateString('vi-VN', {
													weekday: 'long',
													year: 'numeric',
													month: 'long',
													day: 'numeric',
												})}
											</h3>

											<div className='space-y-3'>
												{dayHistory.list.map((item) => (
													<div
														key={item._id}
														className='bg-gray-50/80 rounded-lg p-3.5 hover:bg-gray-100/80 transition-all duration-200 border border-gray-100 relative group'
													>
														{/* Delete Button */}
														<button
															onClick={() => handleDeleteEmotion(item._id)}
															disabled={deletingId === item._id}
															className='absolute top-2 right-2 p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed'
															title='Xóa cảm xúc'
														>
															{deletingId === item._id ? (
																<div className='animate-spin h-4 w-4 border-2 border-red-500 border-t-transparent rounded-full'></div>
															) : (
																<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' viewBox='0 0 20 20' fill='currentColor'>
																	<path
																		fillRule='evenodd'
																		d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
																		clipRule='evenodd'
																	/>
																</svg>
															)}
														</button>

														{/* Diary */}
														<p className='text-[var(--color-text-body)] text-base font-medium leading-relaxed mb-3 pr-8'>
															{item.diary || 'Không có nội dung'}
														</p>

														{/* Tags and Time */}
														<div className='flex items-center justify-between gap-3 flex-wrap'>
															<div className='flex flex-wrap gap-1.5'>
																{item.tags.map((tag, index) => (
																	<span
																		key={index}
																		className='inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-normal bg-gray-100/50 text-gray-500 border border-gray-200/50'
																	>
																		{tag}
																	</span>
																))}
															</div>

															<p className='text-xs text-[var(--color-text-tertiary)] font-medium whitespace-nowrap'>
																{new Date(item.createdAt).toLocaleTimeString('vi-VN', {
																	hour: '2-digit',
																	minute: '2-digit',
																})}
															</p>
														</div>
													</div>
												))}
											</div>
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</AppSection>
	);
}
