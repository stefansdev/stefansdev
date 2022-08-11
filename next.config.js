module.exports = () => ({
	images: {
		domains: ['localhost', 'stefansdev.loc', process.env.NEXT_IMAGE_URL],
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
		localeDetection: false,
	},
});
