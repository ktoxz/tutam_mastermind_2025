import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.youtube.com',
				port: '',
				pathname: '/**',
			},
		],
	},
	eslint: {
		// 🚫 Bỏ qua kiểm tra eslint khi build
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
