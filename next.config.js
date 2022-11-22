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
};

module.exports = nextConfig;
