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
		},
	};
}

const Home = async () => {
	const homepage = await getHomepage();
	return <Hero />;
};
export default Home;
