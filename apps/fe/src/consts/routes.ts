import { unauthorized } from 'next/navigation';

interface Route {
	label: string;
	href: string;
	children?: Record<string, SegmentRoute>;
}

interface SegmentRoute extends Route {
	full: (slug: string) => string;
}

export const BASIC_ROUTES: Record<string, Route> = {
	home: {
		label: 'nhà chung',
		href: '/nha_chung',
	},
	cham: {
		label: 'chạm',
		href: '/cham',
	},
	dieu_ky: {
		label: 'diệu ký',
		href: '/dieu_ky',
		children: {
			sach: {
				label: 'sách',
				href: '/sach',
				full: (slug: string) => {
					return `${BASIC_ROUTES.dieu_ky.href}/sach${slug ? `/${slug}` : ''}`;
				},
			},
			blog: {
				label: 'blog',
				href: '/blog',
				full: (slug: string) => {
					return `${BASIC_ROUTES.dieu_ky.href}/blog${slug ? `/${slug}` : ''}`;
				},
			},
			music: {
				label: 'nhạc',
				href: '/nhac',
				full: (slug: string) => {
					return `${BASIC_ROUTES.dieu_ky.href}/nhac${slug ? `/${slug}` : ''}`;
				},
			},
		},
	},
	tam_buoc: {
		label: 'tâm bước',
		href: '/tam_buoc',
		children: {
			su_kien: {
				label: 'sự kiện',
				href: '/su_kien',
				full: (slug: string) => {
					return `${BASIC_ROUTES.tam_buoc.href}/su_kien${slug ? `/${slug}` : ''}`;
				},
			},
		},
	},
	profile: {
		label: 'profile',
		href: '/profile',
	},
	ve_chung_toi: {
		label: 'về chúng tôi',
		href: '/ve_chung_toi',
	},
	unauthorized: {
		label: 'unauthorized',
		href: '/unauthorized',
	},
};

export const AUTH_ROUTES = {
	login: {
		label: 'Đăng nhập',
		href: '/login',
	},
	register: {
		label: 'Đăng ký',
		href: '/register',
	},
	email_validate: {
		label: 'Xác thực email',
		href: '/email-validate',
	},
	resend_otp: {
		label: 'Gửi lại OTP',
		href: '/resend-otp',
	},
	forgot_password: {
		label: 'Quên mật khẩu',
		href: '/forgot-password',
	},
	reset_password: {
		label: 'Đặt lại mật khẩu',
		href: '/reset-password',
	},
};

export const NAVBAR_ROUTES: Route[] = [
	BASIC_ROUTES.home,
	BASIC_ROUTES.cham,
	BASIC_ROUTES.dieu_ky,
	BASIC_ROUTES.tam_buoc,
];
