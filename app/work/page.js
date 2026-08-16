import HeroSingle from '@/components/HeroSingle';
import Content from '@/components/Content';
import getWork from '$queries/getWork';

export async function generateMetadata() {
	const data = await getWork();
	return { title: data.meta_title, description: data.meta_description };
}

const WorkPage = async () => {
	const work = await getWork();

	return (
		<>
			<HeroSingle title={work.title} eyebrow="Selected work" />
			<section className="pb-12 sm:pb-16">
				<div className="container border-t border-white/10 pt-8">
					<Content content={work.content} />
				</div>
			</section>
			{work.partners?.length ? (
				<section className="pb-12 sm:pb-16">
					<div className="container grid gap-6 border-t border-white/10 pt-8">
						<div className="grid content-start gap-3">
							<p className="text-base font-medium text-neutral-100 sm:text-sm">Partners and clients</p>
							<p className="max-w-[30ch] text-base text-pretty text-neutral-400 sm:text-sm">A few of the teams I have worked alongside.</p>
						</div>
						<ul role="list" className="grid grid-cols-2 border-t border-white/10 sm:grid-cols-3">
							{work.partners.map((partner) => {
								const item = partner.partners_id;
								return (
									<li key={item.id} className="border-b border-white/10 py-4">
										<a href={item.url} target="_blank" rel="noopener noreferrer" className="text-base text-neutral-400 hover:text-neutral-100 sm:text-sm">
											{item.name}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</section>
			) : null}
		</>
	);
};

export default WorkPage;
