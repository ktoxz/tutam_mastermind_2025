'use client';
import AppSection from '@/components/shared/app-section/AppSection';
import React, { useState, useEffect } from 'react';
import { useAuthContext } from '@/contexts/user/useAuthContext';
import { LOCAL_STORAGE_KEYS, LocalStorageService } from '@/services/storage/local-storage.service';
import { Mood } from '@packages/models';
import Swal from 'sweetalert2';
import InfoCard from '@/components/pages/profile/card/info-card/InfoCard';
import MoodCard from '@/components/pages/profile/card/mood-card/MoodCard';

type Props = {};

export default function ProfilePage({}: Props) {
	const { user, loading } = useAuthContext();
	const [mood, setMood] = useState<Mood | null>(null);

	useEffect(() => {
		const storedMoodEntry = LocalStorageService.getItem(LOCAL_STORAGE_KEYS.MOOD_ENTRY);
		if (storedMoodEntry) {
			try {
				const { mood: storedMood, exp } = JSON.parse(storedMoodEntry);
				if (new Date(exp) > new Date()) {
					setMood(storedMood);
				} else {
					LocalStorageService.removeItem(LOCAL_STORAGE_KEYS.MOOD_ENTRY);
				}
			} catch (error) {
				console.error('Error parsing mood entry:', error);
			}
		}
	}, []);

	const handleDeleteMood = () => {
		Swal.fire({
			title: 'Xác nhận xóa',
			text: 'Bạn có chắc muốn xóa tâm trạng hiện tại?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Xóa',
			cancelButtonText: 'Hủy',
			confirmButtonColor: '#ef4444',
			cancelButtonColor: '#6b7280',
		}).then((result) => {
			if (result.isConfirmed) {
				LocalStorageService.removeItem(LOCAL_STORAGE_KEYS.MOOD_ENTRY);
				setMood(null);
				Swal.fire('Đã xóa!', 'Tâm trạng đã được xóa.', 'success');
			}
		});
	};

	if (loading) {
		return (
			<AppSection className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100'>
				<div className='text-center'>
					<div className='animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4'></div>
					<p className='text-lg text-gray-600'>Đang tải thông tin...</p>
				</div>
			</AppSection>
		);
	}

	if (!user) {
		return (
			<AppSection className='min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100'>
				<div className='text-center bg-white p-8 rounded-2xl shadow-lg'>
					<div className='text-red-500 text-6xl mb-4'>⚠️</div>
					<h2 className='text-xl font-bold text-gray-900 mb-2'>Có lỗi xảy ra</h2>
					<p className='text-gray-600'>Không thể tải thông tin người dùng.</p>
				</div>
			</AppSection>
		);
	}

	return (
		<AppSection className='min-h-screen'>
			<div className='max-w-6xl mx-auto px-4'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
					<div className='lg:col-span-1'>
						<InfoCard user={user} />
					</div>
					<div className='lg:col-span-1'>
						<MoodCard mood={mood} onDelete={handleDeleteMood} />
					</div>
				</div>
			</div>
		</AppSection>
	);
}
