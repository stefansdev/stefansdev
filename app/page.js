import Hero from '@/components/Hero';
// data
import getHomepage from '$queries/getHomepage';

export async function generateMetadata() {
	const data = await getHomepage();
	return {
		title: data.meta_title,
		description: data.meta_description,
		openGraph: {
			title: data.meta_title,
			description: data.meta_description,
			images: [
				{
					url: `https://stefans.dev/assets/${data.meta_image.id}`,
					width: data.meta_image.width,
					height: data.meta_image.height,
					alt: data.meta_image.title,
				},
			],
		},
	};
}

const Home = async () => {
	const homepage = await getHomepage();
	return <Hero />;
};
export default Home;
