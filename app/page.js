import Hero from '@/components/Hero';

import GetHomepage from '@/hooks/GetHomepage';

export async function generateMetadata() {
	const data = await GetHomepage();
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
	const homepage = await GetHomepage();
	return <Hero />;
};
export default Home;
