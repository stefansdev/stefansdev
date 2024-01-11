import Image from 'next/image';
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
				<div className="mx-auto prose mb-20">
					<div
						className="prose "
						dangerouslySetInnerHTML={{
							__html: about.content,
						}}
					/>
				</div>
				<div className="container grid grid-cols-2 lg:grid-cols-4 gap-5">
					{about.gallery.map((image) => (
						<Image
							src={`/assets/${image.directus_files_id.id}`}
							width={image.directus_files_id.width}
							height={image.directus_files_id.height}
							alt={image.directus_files_id.title}
							key={image.directus_files_id.id}
							className="block"
						/>
					))}
				</div>
			</section>
		</>
	);
};
export default AboutPage;
