import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		domains: ['img.youtube.com'],
	},
	eslint: {
		// 🚫 Bỏ qua kiểm tra eslint khi build
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
