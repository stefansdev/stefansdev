import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialBar from '../components/SocialBar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const Home = () => (
	<div>
		<Seo
			title="Stefan Stankovic"
			description="Full Stack Javascript Developer specialised in Jamstack and Headless"
		/>
		<Header />
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
