import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import Seo from '../components/Seo';
import TechIcons from '../components/TechIcons';

const About = () => (
	<>
		<Seo title="About" description="Full Stack Javascript Developer specialised in Jamstack and Headless" />
		<Header />
		<div className=" relative">
			<div className="md:py-28 container relative z-20 max-w-4xl py-12 mx-auto">
				<div className="relative">
					<PageTitle titleStroke="Stefan" title="Stankovic" subtitle="About" />
				</div>
				<div className="relative rounded-lg overflow-hidden h-[480px] mb-16">
					<Image src="/stefans_image_with_bg.jpg" layout="fill" objectFit="cover" alt="stefans.dev" />
				</div>
				<div className="dark:prose-dark mx-auto prose">
					<div className="dark:prose-dark prose">
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
