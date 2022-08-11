import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import Seo from '@/components/Seo';
import TechIcons from '@/components/TechIcons';
import GetAbout from '@/hooks/GetAbout';

const About = ({ about }) => (
	<>
		<Seo seo={about.seo} />
		<Header />
		<div className=" relative">
			<div className="md:py-28 container relative z-20 max-w-4xl py-12 mx-auto">
				<div className="relative">
					<PageTitle titleStroke="Stefan" title="Stankovic" subtitle="About" />
				</div>
				<div className="relative rounded-lg overflow-hidden mb-16">
					<Image
						src={about.about.mainImage.mediaItemUrl}
						alt="stefans.dev"
						layout="responsive"
						width={about.about.mainImage.mediaDetails.width}
						height={about.about.mainImage.mediaDetails.height}
					/>
				</div>
				<div className="dark:prose-dark mx-auto prose">
					<div
						className="dark:prose-dark prose "
						dangerouslySetInnerHTML={{
							__html: about.content,
						}}
					/>
				</div>
				<TechIcons />
			</div>
		</div>
		<Footer />
	</>
);

export default About;

export async function getStaticProps() {
	const about = await GetAbout();
	return {
		props: {
			about,
		},
	};
}
