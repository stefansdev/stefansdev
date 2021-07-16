import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialBar from '../components/SocialBar';
import Articles from '../components/Articles';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Home = ({ recentPosts }) => {
	console.table(recentPosts);
	return (
		<>
			<Header />
			<Hero />
			<SocialBar />
			<Articles posts={recentPosts} />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;

export async function getStaticProps() {
	const res = await fetch('http://localhost:3000/api/recent-posts');
	const { recentPosts } = await res.json();
	return {
		props: {
			recentPosts,
		},
	};
}
