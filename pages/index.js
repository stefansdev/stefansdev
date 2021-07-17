import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialBar from '../components/SocialBar';
import Articles from '../components/Articles';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Home = ({ recentPosts }) => {
	console.log('🏠');
	return (
		<div>
			<Header />
			<Hero />
			<SocialBar />
			{/* <Articles posts={recentPosts} /> */}
			<Footer />
		</div>
	);
};

export default Home;

export async function getStaticProps() {
	const res = await fetch('http://localhost:3000/api/recent-posts');
	const { recentPosts } = await res.json();

	// fetch posts from /api/recent-posts and pass to props
	return {
		props: {
			recentPosts,
		},
	};
}
