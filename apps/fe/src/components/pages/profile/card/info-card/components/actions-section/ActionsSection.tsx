'use client';
import React from 'react';
import { Settings, KeyRound, Undo2 } from 'lucide-react';
import ToolTip from '@/components/shared/tool-tip/ToolTip';
import Link from 'next/link';
import { AUTH_ROUTES, BASIC_ROUTES } from '@/consts/routes';

export default function ActionsSection({
	onSettings,
	onEdit,
	onChangePassword,
}: {
	onSettings?: () => void;
	onEdit?: () => void;
	onChangePassword?: () => void;
}) {
	return (
		<div className='flex flex-col items-end w-full gap-2'>
			<ToolTip title='Về trang chủ' description='Quay lại trang chính'>
				<Link
					href={BASIC_ROUTES.home.href}
					className='cursor-pointer aspect-square flex items-center gap-2 p-2 rounded-md bg-orange-400 text-white hover:bg-orange-500 transition-colors duration-200'
					aria-label='Về trang chủ'
					onClick={onEdit}
				>
					<Undo2 size={16} />
				</Link>
			</ToolTip>
			<ToolTip title='Đổi mật khẩu' description='Thay đổi mật khẩu đăng nhập của bạn'>
				<Link
					href={AUTH_ROUTES.forgot_password.href}
					className='cursor-pointer aspect-square flex items-center gap-2 p-2 rounded-md bg-green-400 text-white hover:bg-green-500 transition-colors duration-200'
					aria-label='Đổi mật khẩu'
					onClick={onChangePassword}
				>
					<KeyRound size={16} />
				</Link>
			</ToolTip>
			<ToolTip title='Cài đặt' description='Thay đổi các tùy chọn bảo mật và quyền riêng tư'>
				<button
					type='button'
					className='cursor-pointer aspect-square flex items-center gap-2 p-2 rounded-md bg-blue-400 text-white hover:bg-blue-500 transition-colors duration-200'
					aria-label='Cài đặt'
					onClick={onSettings}
				>
					<Settings size={16} />
				</button>
			</ToolTip>
		</div>
	);
}
