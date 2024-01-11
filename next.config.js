/** @type {import('next').NextConfig} */
const nextConfig = {
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
