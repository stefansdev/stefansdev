import Image from 'next/image';
import HeroSingle from '@/components/HeroSingle';
import Content from '@/components/Content';
// data
import getWork from '$queries/getWork';

export async function generateMetadata() {
	const data = await getWork();
	return {
		title: data.meta_title,
		description: data.meta_description,
		openGraph: {
			title: data.meta_title,
			description: data.meta_description,
			images: [
				{
					url: `https://stefans.dev/assets/${data.meta_image.id}`,
					width: data.meta_image.width,
					height: data.meta_image.height,
					alt: data.meta_image.title,
				},
			],
		},
	};
}

const page = async () => {
	const work = await getWork();
	return (
		<>
			<HeroSingle title={work.title} />
			<div className="py-16 lg:py-20 max-w-5xl mx-auto">
				<div className="mb-4">
					<Content content={work.content} fullWidth />
				</div>
				<ul className="grid grid-cols-2 lg:grid-cols-5 gap-4 py-12 mb-8 ">
					{work.partners.map((partner, i) => (
						<li key={i}>
							<a href={partner.partners_id.url} target="_blank" rel="noopener noreferrer">
								{partner.partners_id.image.type === 'image/svg+xml' ? (
									<img
										src={`/assets/${partner.partners_id.image.id}`}
										alt={partner.partners_id.name}
										className="w-full block"
									/>
								) : (
									<Image
										src={`/assets/${partner.partners_id.image.id}`}
										height={partner.partners_id.image.height}
										width={partner.partners_id.image.width}
										alt={partner.partners_id.title}
										className="w-full block"
									/>
								)}
								{/* <span className="block text-center text-sm py-2">{partner.partners_id.name}</span> */}
							</a>
						</li>
					))}
				</ul>
				{/* {work.projects.map((project, i) => (
						<Project project={project} key={`project_${i}`} />
					))} */}
			</div>
		</>
	);
};
export default page;
