'use client';
import React, { useState, useEffect, useTransition } from 'react';
import { useAuthContext } from '@/contexts/user/useAuthContext';
import { EmotionHistory } from '@models';
import { EmotionService } from '@/services/api/emotion/emotion.service';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { BASIC_ROUTES } from '@/consts/routes';
import Swal from 'sweetalert2';

const EmotionHistoryCard = () => {
	const { user } = useAuthContext();
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [emotionHistory, setEmotionHistory] = useState<EmotionHistory[]>([]);
	const [loadingHistory, setLoadingHistory] = useState(true);
	const [deletingId, setDeletingId] = useState<string | null>(null);

	useEffect(() => {
		const fetchEmotionHistory = async () => {
			setLoadingHistory(true);
			const moodService = EmotionService.getInstance();
			const [error, data] = await moodService.getUserEmotionHistory();

			if (!error && data) {
				setEmotionHistory(data);
			} else {
				console.error('Error fetching emotion history:', error);
				Swal.fire({
					icon: 'error',
					title: 'Lỗi',
					text: 'Không thể tải lịch sử cảm xúc',
					confirmButtonColor: 'var(--color-primary)',
				});
			}
			setLoadingHistory(false);
		};

		if (user) {
			fetchEmotionHistory();
		}
	}, [user]);

	const handleDeleteEmotion = async (emotionId: string, e: React.MouseEvent) => {
		e.stopPropagation();

		const result = await Swal.fire({
			title: 'Xác nhận xóa',
			text: 'Bạn có chắc chắn muốn xóa cảm xúc này?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#ef4444',
			cancelButtonColor: '#6b7280',
			confirmButtonText: 'Xóa',
			cancelButtonText: 'Hủy',
		});

		if (!result.isConfirmed) return;

		setDeletingId(emotionId);
		const moodService = EmotionService.getInstance();
		const [error, success] = await moodService.deleteEmotionHistoryItem(emotionId);

		if (!error && success) {
			setEmotionHistory((prev) =>
				prev
					.map((dayHistory) => ({
						...dayHistory,
						list: dayHistory.list.filter((item) => item._id !== emotionId),
					}))
					.filter((dayHistory) => dayHistory.list.length > 0),
			);

			Swal.fire({
				icon: 'success',
				title: 'Đã xóa!',
				text: 'Cảm xúc đã được xóa thành công',
				timer: 1500,
				showConfirmButton: false,
			});
		} else {
			console.error('Error deleting emotion:', error);
			Swal.fire({
				icon: 'error',
				title: 'Lỗi',
				text: 'Không thể xóa cảm xúc. Vui lòng thử lại.',
				confirmButtonColor: 'var(--color-primary)',
			});
		}

		setDeletingId(null);
	};

	const handleEmotionClick = (emotionId: string) => {
		startTransition(() => {
			router.push(BASIC_ROUTES.cham.children!.detail.full(emotionId));
		});
	};

	if (loadingHistory) {
		return (
			<div className='flex justify-center items-center py-12'>
				<div className='animate-spin rounded-full h-10 w-10 border-4 border-[var(--color-primary)] border-t-transparent'></div>
			</div>
		);
	}

	if (emotionHistory.length === 0) {
		return (
			<div className='text-center py-12'>
				<p className='text-[var(--color-text-tertiary)] text-lg'>Chưa có dữ liệu cảm xúc</p>
			</div>
		);
	}

	return (
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
								onClick={() => handleEmotionClick(item._id)}
								className={`bg-gray-50/80 rounded-lg p-3.5 hover:bg-gray-100/80 transition-all duration-200 border border-gray-100 relative group cursor-pointer ${
									isPending ? 'opacity-60 pointer-events-none' : ''
								}`}
							>
								<button
									onClick={(e) => handleDeleteEmotion(item._id, e)}
									disabled={deletingId === item._id}
									className='absolute top-2 right-2 p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed z-10 hover:cursor-pointer'
									title='Xóa cảm xúc'
								>
									{deletingId === item._id ? (
										<div className='animate-spin h-4 w-4 border-2 border-red-500 border-t-transparent rounded-full'></div>
									) : (
										<Trash2 className='h-4 w-4 text-red-500' />
									)}
								</button>
								<p className='text-[var(--color-text-secondary)] text-sm font-medium leading-relaxed mb-3 pr-8 line-clamp-2'>{item.diary || 'Không có nội dung'}</p>
								<div className='flex items-center justify-between gap-3 flex-wrap'>
									<div className='flex flex-wrap gap-1.5'>
										{item.tags.length > 0 && (
											<>
												{item.tags.slice(0, 2).map((tag, i) => (
													<span
														key={i}
														className='inline-flex items-center px-2.5 py-0.5 rounded-md text-xs bg-gray-100/50 text-gray-500 border border-gray-200/50'
													>
														{tag}
													</span>
												))}
												{item.tags.length > 2 && (
													<span className='flex items-center justify-center text-xs text-gray-500' title={item.tags.slice(2).join(', ')}>
														+{item.tags.length - 2}
													</span>
												)}
											</>
										)}
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
	);
};

export default EmotionHistoryCard;
