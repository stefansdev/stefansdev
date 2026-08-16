/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.google.com',
				pathname: '/s2/favicons',
			},
		],
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
