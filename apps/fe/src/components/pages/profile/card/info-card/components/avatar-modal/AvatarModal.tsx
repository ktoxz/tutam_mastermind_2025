'use client';
import Avatar from '@/components/shared/avatar/Avatar';
import { useAuthContext } from '@/contexts/user/useAuthContext';
import useClickOutside from '@/hooks/ui/useClickoutSide';
import { UserService } from '@/services/api/user/user.service';
import { X, Upload } from 'lucide-react';
import React, { useCallback, useState } from 'react';

type Props = {
	onClose: () => void;
};

const ACCEPTED_FILE_TYPES = 'image/png, image/jpeg, image/webp';
const MAX_FILE_SIZE = '5MB';

function AvatarModal({ onClose }: Props) {
	const [isUploading, setIsUploading] = useState(false);
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);

	const { user } = useAuthContext();

	const { ref } = useClickOutside(
		useCallback(() => {
			if (!isUploading) onClose();
		}, [onClose, isUploading])
	);

	const handleFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		const url = URL.createObjectURL(file);
		setPreviewUrl(url);
		setIsUploading(true);

		try {
			const [err] = await UserService.getInstance().changeAvatar(file);

			if (!err) {
				setTimeout(() => {
					window.location.reload();
				}, 500);
			} else {
				throw new Error('Upload failed');
			}
		} catch (error) {
			alert('Failed to update avatar');
			setPreviewUrl(null);
		} finally {
			setIsUploading(false);
			URL.revokeObjectURL(url);
		}
	}, []);

	const LoadingSpinner = ({ size = 'w-8 h-8' }: { size?: string }) => (
		<div className={`${size} border-2 border-white border-t-transparent rounded-full animate-spin`} />
	);

	return (
		<div className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200'>
			<div
				className='relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl 
                    flex flex-col items-center justify-center
                    w-full max-w-sm sm:max-w-md border border-white/20
                    animate-in zoom-in-95 duration-300
                    p-6 sm:p-8 gap-4 sm:gap-6'
				ref={ref}
			>
				{/* Close Button */}
				<button
					className='absolute top-3 right-3 sm:top-4 sm:right-4 
                        text-gray-400 hover:text-gray-600 hover:bg-gray-100 
                        rounded-full p-2 transition-all duration-200
                        disabled:opacity-50 disabled:cursor-not-allowed'
					onClick={onClose}
					disabled={isUploading}
					aria-label='Close Avatar Modal'
				>
					<X size={20} />
				</button>

				{/* Header */}
				<div className='text-center mb-2'>
					<h2 className='text-lg sm:text-xl font-semibold text-gray-800 mb-1'>Cập nhật hình đại diện</h2>
					<p className='text-xs sm:text-sm text-gray-500 px-2'>
						Chọn hình ảnh mới để cá nhân hóa hồ sơ của bạn
					</p>
				</div>

				{/* Avatar Preview */}
				<div className='relative'>
					<div className={`transition-all duration-300 ${previewUrl ? 'opacity-70' : 'opacity-100'}`}>
						<Avatar
							size={120}
							alt={user?.name || 'User Avatar'}
							avatarUrl={previewUrl || user?.avatarUrl}
						/>
					</div>

					{isUploading && (
						<div className='absolute inset-0 flex items-center justify-center bg-black/20 rounded-full'>
							<LoadingSpinner />
						</div>
					)}
				</div>

				{/* Upload Button */}
				<label
					className='group flex flex-col items-center gap-1 cursor-pointer 
                        bg-blue-600 hover:bg-blue-700 text-white 
                        px-4 py-2.5 sm:px-6 sm:py-3 rounded-md
                        transition-all duration-200 transform hover:scale-105 active:scale-95
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                        shadow-lg hover:shadow-xl w-full sm:w-auto'
				>
					<span className='flex items-center gap-2 text-sm font-medium'>
						{isUploading ? (
							<>
								<LoadingSpinner size='w-4 h-4' />
								Đang cập nhật...
							</>
						) : (
							<>
								<Upload size={18} />
								Chọn hình đại diện
							</>
						)}
					</span>
					<span className='text-xs opacity-80'>PNG, JPEG, WEBP up to {MAX_FILE_SIZE}</span>
					<input
						type='file'
						accept={ACCEPTED_FILE_TYPES}
						className='hidden'
						onChange={handleFileChange}
						disabled={isUploading}
					/>
				</label>

				{/* Footer Text */}
				<div className='text-xs text-gray-400 text-center max-w-xs px-2'>
					Hình ảnh của bạn sẽ được hiển thị cho những người dùng khác và được sử dụng trên toàn nền tảng
				</div>
			</div>
		</div>
	);
}

export default React.memo(AvatarModal);
