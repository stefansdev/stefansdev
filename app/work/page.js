import Image from 'next/image';
import HeroSingle from '@/components/HeroSingle';
import Content from '@/components/Content';
import Project from '@/components/Project';
// data
import getWork from '$queries/getWork';

const page = async () => {
	const work = await getWork();
	return (
		<>
			<HeroSingle title={work.title} />
			<div className="container">
				<div className="py-20 border-b border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
					<div className="mb-4">
						<div className="prose dark:text-gray-200 max-w-full ">
							<Content content={work.content} />
						</div>
					</div>
					<ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-12 mb-8 ">
						{work.partners.map((partner, i) => (
							<li key={i}>
								<a href={partner.partners_id.url} target="_blank" rel="noopener noreferrer">
									<div className="bg-gray-50 relative h-20 rounded-sm grid items-center justify-center">
										{partner.partners_id.image.type === 'image/svg+xml' ? (
											<img
												src={`/assets/${partner.partners_id.image.id}`}
												alt={partner.partners_id.name}
												className="max-h-[40px] w-auto block"
											/>
										) : (
											<Image
												src={`/assets/${partner.partners_id.image.id}`}
												height={partner.partners_id.image.height}
												width={partner.partners_id.image.width}
												alt={partner.partners_id.title}
												className="max-h-[40px] w-auto block"
											/>
										)}
									</div>
									<span className="block text-center text-sm py-2">{partner.partners_id.name}</span>
								</a>
							</li>
						))}
					</ul>
					{work.projects.map((project, i) => (
						<Project project={project} key={`project_${i}`} />
					))}
				</div>
			</div>
		</>
	);
};
export default page;
