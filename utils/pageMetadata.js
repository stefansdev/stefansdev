export const buildPageMetadata = ({ title, description, image, imageAlt }) => ({
	title,
	description,
	openGraph: {
		title,
		description,
		images: [
			{
				url: image,
				width: 1200,
				height: 630,
				alt: imageAlt,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		images: [image],
	},
});
