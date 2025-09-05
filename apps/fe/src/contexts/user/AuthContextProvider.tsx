'use client';
import { useMemo, useState, useEffect, useCallback } from 'react';
import AuthContext from './AuthContext';
import { User } from '@packages/models';
import { UserService } from '@/services/api/user/user.service';
import { LOCAL_STORAGE_KEYS, LocalStorageService } from '@/services/storage/local-storage.service';
import { AuthService } from '@/services/api/auth/auth.service';
import Swal from 'sweetalert2';

interface AuthContextProviderProps {
	children: React.ReactNode;
}

export type AuthContextData = Omit<
	User,
	'password' | 'otp' | 'otpExpires' | 'resetPasswordToken' | 'resetPasswordExpires'
>;

export function AuthContextProvider({ children }: AuthContextProviderProps) {
	const [user, setUser] = useState<AuthContextData | null>(null);
	const [loading, setLoading] = useState(true);

	const logout = useCallback(async () => {
		setLoading(true);
		try {
			await AuthService.getInstance().logout();
			LocalStorageService.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
			setUser(null);

			await Swal.fire({
				icon: 'success',
				title: 'Đăng xuất thành công',
				text: 'Bạn đã đăng xuất thành công.',
			});
		} catch (error) {
			console.error('Error logging out:', error);
			await Swal.fire({
				icon: 'error',
				title: 'Đăng xuất thất bại',
				text: 'Đã có lỗi xảy ra khi đăng xuất. Vui lòng thử lại sau.',
			});
		} finally {
			setLoading(false);
		}
	}, []);

	const fetchUser = useCallback(async () => {
		setLoading(true);
		try {
			const userService = UserService.getInstance();
			const [err, data] = await userService.getMe();
			if (!err && data) {
				setUser(data);
			}
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchUser();
	}, [fetchUser]);

	const values = useMemo(
		() => ({
			user,
			loading,
			getMe: fetchUser,
			logout,
		}),
		[user, loading, fetchUser, logout]
	);

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
