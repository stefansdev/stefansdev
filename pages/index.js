import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialBar from '../components/SocialBar';
import Articles from '../components/Articles';
import Footer from '../components/Footer';
import Tips from '../components/Tips';
import Contact from '../components/Contact';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<SocialBar />
			<Articles />
			<Tips />
			<Contact />
			<Footer />
		</>
	);
}
