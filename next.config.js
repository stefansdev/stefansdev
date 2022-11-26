/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['localhost', 'stefansdev.loc', process.env.NEXT_IMAGE_URL],
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
		localeDetection: false,
	},
	serverRuntimeConfig: {
		CMS_URL: process.env.CMS_URL,
	},
	async rewrites() {
		return [
			{
				source: '/assets/:path*',
				destination: `${process.env.DIRECTUS_URL}/assets/:path*`,
			},
		];
	},
};

module.exports = nextConfig;
