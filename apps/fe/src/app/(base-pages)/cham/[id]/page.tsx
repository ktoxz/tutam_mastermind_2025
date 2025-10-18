'use client';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AppSection from '@/components/shared/app-section/AppSection';
import PageHeader from '@/components/shared/page-header/PageHeader';
import EmotionResult from '@/components/pages/cham/emotion-result/EmotionResult';
import Loading from '@/app/loading';
import ButtonCTA from '@/components/shared/cta/ButtonCTA';
import { RotateCcw } from 'lucide-react';
import Swal from 'sweetalert2';
import { EmotionService } from '@/services/api/emotion/emotion.service';
import { EmotionHistoryItem } from '@/models/Emotion';
import { Mood } from '@/models/Mood';
import { MoodService } from '@/services/api/mood/mood.service';
import { BASIC_ROUTES } from '@/consts/routes';

function EmotionDetailPage() {
	const params = useParams();
	const router = useRouter();
	const id = Array.isArray(params?.id) ? params.id[0] : params?.id ?? '';

	const [isLoading, setIsLoading] = useState(true);
	const [emotionItem, setEmotionItem] = useState<EmotionHistoryItem | null>(null);
	const [mood, setMood] = useState<Mood | null>(null);

	const emotionService = useMemo(() => EmotionService.getInstance(), []);
	const moodService = useMemo(() => MoodService.getInstance(), []);

	const handleFetchError = useCallback(
		(title: string, text: string) => {
			Swal.fire({
				icon: 'error',
				title,
				text,
			}).then(() => {
				router.replace('/cham');
			});
		},
		[router],
	);

	useEffect(() => {
		if (!id) {
			setIsLoading(false);
			return;
		}

		const fetchData = async () => {
			setIsLoading(true);
			try {
				const [error, item] = await emotionService.getUserEmotionById(id);
				if (error || !item) {
					handleFetchError('Không tìm thấy cảm xúc', error?.message || 'Không thể lấy dữ liệu cảm xúc. Vui lòng thử lại.');
					return;
				}
				const moodMeta = await moodService.getMoodByLabel(item.mood);
				if (!moodMeta) {
					handleFetchError('Không tìm thấy loại cảm xúc', 'Không thể lấy thông tin chi tiết về loại cảm xúc này.');
					return;
				}
				setEmotionItem(item);
				setMood({
					...moodMeta,
					header: item.header,
					validation: item.validation,
					encouragement: item.encouragement,
					actions: item.actions,
					quote: item.quote,
				});
			} catch (error: any) {
				if (error.name !== 'AbortError') {
					handleFetchError('Đã có lỗi xảy ra', 'Không thể hoàn thành yêu cầu. Vui lòng thử lại.');
				}
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
		return () => {};
	}, [id, emotionService, moodService, handleFetchError]);

	const handleBack = () => {
		router.replace(BASIC_ROUTES.cham.href);
	};

	if (isLoading) return <Loading />;
	if (!mood || !emotionItem) return null;

	return (
		<>
			<PageHeader title='Cảm xúc của bạn' description={`Ghi nhận lúc: ${new Date(emotionItem.createdAt).toLocaleString()}`} disableAppearAnimation />
			<EmotionResult mood={mood} />
			<AppSection>
				<div className='flex justify-center'>
					<ButtonCTA variant='primary' onClick={handleBack} Icon={RotateCcw} className='px-6 py-3'>
						Ghi nhận cảm xúc mới
					</ButtonCTA>
				</div>
			</AppSection>
		</>
	);
}

export default EmotionDetailPage;
