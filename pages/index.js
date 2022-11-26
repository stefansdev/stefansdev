import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialBar from '@/components/SocialBar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import GetHomepage from '@/hooks/GetHomepage';

const Home = ({ homepage }) => (
	<>
		<Seo title={homepage.meta_title} description={homepage.meta_description} image={homepage.meta_image} />
		<Header />
		<Hero />
		<SocialBar />
		<Footer />
	</>
);

export default Home;

export async function getStaticProps() {
	const homepage = await GetHomepage();

	return {
		props: {
			homepage,
		},
	};
}
