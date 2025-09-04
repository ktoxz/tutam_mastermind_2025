'use client';
import MoodModal from '@/components/pages/cham/mood-modal/MoodModal';
import MoodResult from '@/components/pages/cham/mood-result/MoodResult';
import { MoodService } from '@/services/api/mood/mood.service';
import { LOCAL_STORAGE_KEYS, LocalStorageService } from '@/services/storage/local-storage.service';
import { Mood } from '@packages/models';
import { useState } from 'react';
import Swal from 'sweetalert2';

type Props = {};

function page({}: Props) {
	const [mood, setMood] = useState<Mood | null>(null);

	const handleFinish = async () => {
		const MoodId = LocalStorageService.getItem(LOCAL_STORAGE_KEYS.MOOD_ENTRY);
		try {
			if (MoodId) {
				const [err, mood] = await MoodService.getInstance().getById(MoodId);
				if (!err && mood) setMood(mood);
			}
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Lỗi',
				text: 'Đã có lỗi xảy ra khi tải cảm xúc của bạn. Vui lòng thử lại.',
			});
			return;
		}
	};

	return <>{!mood ? <MoodModal onFinish={handleFinish} /> : <MoodResult mood={mood} />}</>;
}

export default page;
