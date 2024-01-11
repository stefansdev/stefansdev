import HeroSingle from '@/components/HeroSingle';

// data
import getAbout from '@/utils/queries/getAbout';

export async function generateMetadata() {
	const data = await getAbout();
	return {
		title: data.meta_title,
		description: data.meta_description,
		openGraph: {
			title: data.meta_title,
			description: data.meta_description,
		},
	};
}

const AboutPage = async () => {
	const about = await getAbout();
	return (
		<>
			<HeroSingle title={about.subtitle} />
			<section className="px-3 py-16 lg:py-20">
				<div className="mx-auto prose">
					<div
						className="prose "
						dangerouslySetInnerHTML={{
							__html: about.content,
						}}
					/>
				</div>
			</section>
		</>
	);
};
export default AboutPage;
