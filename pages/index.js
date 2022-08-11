import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialBar from '@/components/SocialBar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import GetHomepage from '@/hooks/GetHomepage';

const Home = ({ homepage }) => (
	<>
		<Seo seo={homepage.seo} />
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
