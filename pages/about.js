import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import Seo from '../components/Seo';
import TechIcons from '../components/TechIcons';

const About = () => (
	<>
		<Seo
			title="About | Stefan Stankovic - Full Stack Javascript Developer"
			description="Full Stack Javascript Developer"
		/>
		<Header />
		<div className="relative ">
			<div className="container mx-auto max-w-4xl py-12 md:py-28 relative z-20">
				<div className="relative">
					<PageTitle titleStroke="Stefan" title="Stankovic" subtitle="About" />
				</div>
				<div className="relative rounded-lg overflow-hidden h-[480px] mb-16">
					<Image src="/stefans_image_with_bg.jpg" layout="fill" objectFit="cover" alt="stefans.dev" />
				</div>
				<div className="prose dark:prose-dark mx-auto">
					<div className="prose dark:prose-dark">
						<p>My name is Stefan Stankovic. I’m from Belgrade, Serbia.</p>
						<p>
							I’m 27 years old and I’ve been making websites since I was 18 years old. Proffesionaly from
							2013.
						</p>
						<p>
							I’m primarily working with Javascript and Headless / Jamstack stack nowadays, but also have
							a lot of experience with custom theme development for Wordress , Shopify, etc...
						</p>
						<p>Frontend development, UI/UX , CSS/JS is what I’m strongest with and love the most.</p>
						<h3>Some of the tools, tech stacks, SaaS I work with daily:</h3>
					</div>
				</div>
				<TechIcons />
			</div>
		</div>
		<Footer />
	</>
);

export default About;

export async function getStaticProps() {
	return {
		props: {},
	};
}
