import Hero from '@/components/Hero';
import { buildPageMetadata } from '@/utils/pageMetadata';

export const metadata = buildPageMetadata({
	title: 'Stefan Stankovic | Products, Systems & AI',
	description:
		'I build AI products, automation and digital systems that solve real business problems, simplify daily work and create room to grow.',
	image: '/meta/home.jpg',
	imageAlt: 'Stefan Stankovic — Products, Systems & AI',
});

const Home = () => <Hero />;
export default Home;
