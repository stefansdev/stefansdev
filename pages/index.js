import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialBar from '../components/SocialBar';
import Articles from '../components/Articles';
import Footer from '../components/Footer';
import Tips from '../components/Tips';
import Contact from '../components/Contact';
import { getRecentBlogs } from '../utils/blog';

const Home = ({ recentPosts }) => {
	console.table(recentPosts);
	return (
		<>
			<Header />
			<Hero />
			<SocialBar />
			<Articles posts={recentPosts} />
			<Tips />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;

export async function getStaticProps() {
	const recentPosts = getRecentBlogs();
	return {
		props: {
			recentPosts,
		},
	};
}
