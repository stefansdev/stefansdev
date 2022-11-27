import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import Project from '@/components/Project';
import Seo from '@/components/Seo';
import GetWork from '@/hooks/GetWork';
import Content from '@/components/Content';

const Work = ({ work }) => {
	console.log(work);
	return (
		<>
			<Seo title={work.meta_title} description={work.meta_description} image={work.meta_image} />
			<Header />
			<div className="container mx-auto max-w-4xl py-12 md:py-28">
				<div className="relative">
					<PageTitle titleStroke={work.title} />
				</div>
				<div className="py-16 pt-4 border-b border-gray-200 dark:border-gray-700">
					<div className="py-4 ">
						<div className="prose dark:text-gray-200 max-w-full">
							<Content content={work.content} />
						</div>
					</div>
					<ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-12 mb-8">
						{work.partners.map((partner, i) => (
							<li key={i}>
								<a href={partner.partners_id.url} target="_blank" rel="noopener noreferrer">
									<div className="bg-gray-100 relative h-20 rounded-sm grid items-center justify-center">
										{partner.partners_id.image.type === 'image/svg+xml' ? (
											<img
												src={`/assets/${partner.partners_id.image.id}`}
												alt={partner.partners_id.name}
											/>
										) : (
											<Image
												src={`/assets/${partner.partners_id.image.id}`}
												height={70}
												width="100%"
												className=""
												objectFit="contain"
												// alt={client.altText}
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
			<Footer />
		</>
	);
};

export default Work;

export async function getStaticProps() {
	const work = await GetWork();
	return {
		props: {
			work,
		},
	};
}
