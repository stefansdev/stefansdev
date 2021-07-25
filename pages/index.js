import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialBar from '../components/SocialBar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const Home = () => (
	<div>
		<Seo title="Stefan Stankovic - Full Stack Javascript Developer" description="Full Stack Javascript Developer" />
		{/* <Header /> */}
		<Hero />
		<SocialBar />
		<Footer />
	</div>
);

export default Home;

export async function getStaticProps() {
	return {
		props: {},
	};
}
