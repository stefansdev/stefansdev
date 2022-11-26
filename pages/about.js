import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import Seo from '@/components/Seo';
import TechIcons from '@/components/TechIcons';
import GetAbout from '@/hooks/GetAbout';
import Content from '@/components/Content';

const About = ({ about }) => (
	<>
		<Seo title={about.meta_title} description={about.meta_description} image={about.meta_image} />
		<Header />
		<div className=" relative">
			<div className="md:py-28 container relative z-20 max-w-4xl py-12 mx-auto">
				<div className="relative">
					<PageTitle title={about.title} subtitle={about.subtitle} />
				</div>
				<div className="relative rounded-lg overflow-hidden mb-16">
					<Image
						src={`/assets/${about.image.id}`}
						alt={about.image.title}
						layout="responsive"
						width={about.image.width}
						height={about.image.height}
					/>
				</div>
				<div className="dark:prose-dark mx-auto prose">
					<div className="dark:prose-dark prose ">
						<Content content={about.content} />
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
	const about = await GetAbout();
	return {
		props: {
			about,
		},
	};
}
