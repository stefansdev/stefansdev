import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import Project from '@/components/Project';
import Seo from '@/components/Seo';
import GetWork from '@/hooks/GetWork';

const Work = ({ work }) => (
	<>
		<Seo seo={work.seo} />
		<Header />
		<div className="container mx-auto max-w-4xl py-12 md:py-28">
			<div className="relative">
				<PageTitle titleStroke="Work" />
			</div>
			<div className="py-16 pt-4 border-b border-gray-200 dark:border-gray-700">
				<div className="py-4 ">
					{/* <h3 className="font-bold text-2xl mb-4">Projects</h3> */}
					<div
						className="prose dark:text-gray-200 max-w-full"
						dangerouslySetInnerHTML={{
							__html: work.content,
						}}
					/>
				</div>
				<ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-12 mb-8">
					{work.work.companies.map((client, i) => (
						<li key={i}>
							<a href={client.website} target="_blank" rel="noopener noreferrer">
								<div className="bg-gray-100 relative h-20 rounded-sm grid items-center justify-center">
									<Image
										src={client.logo.mediaItemUrl}
										height={client.logo.mediaDetails.height}
										width={client.logo.mediaDetails.width}
										objectPosition="middle"
										objectFit="contain"
										alt={client.altText}
									/>
								</div>
								<span className="block text-center text-sm py-2">{client.name}</span>
							</a>
						</li>
					))}
				</ul>
				{work.work.projects.map((project, i) => (
					<Project
						title={project.name}
						categories={project.categories}
						image={project.image}
						description={project.description}
						link={project.url}
						key={`project_${i}`}
					/>
				))}
			</div>
		</div>
		<Footer />
	</>
);

export default Work;

export async function getStaticProps() {
	const work = await GetWork();
	return {
		props: {
			work,
		},
	};
}
