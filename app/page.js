import Hero from '@/components/Hero';

export const metadata = {
	title: 'Stefan Stankovic | Products, Systems & AI',
	description:
		'I build AI products, automation and digital systems that solve real business problems, simplify daily work and create room to grow.',
	openGraph: {
		title: 'Stefan Stankovic | Products, Systems & AI',
		description:
			'I build AI products, automation and digital systems that solve real business problems, simplify daily work and create room to grow.',
		images: [
			{
				url: 'https://stefans.dev/assets/4fc782b2-4aee-4f9f-8c63-11568203d4d5',
				width: 1200,
				height: 627,
				alt: 'Stefan Stankovic',
			},
		],
	},
};

const Home = () => <Hero />;
export default Home;
