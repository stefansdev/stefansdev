import Image from 'next/image';
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
			<section className="py-16 sm:py-24 lg:py-32">
				<div className="container grid gap-12 border-t border-neutral-950/10 pt-8 lg:grid-cols-[3fr_9fr]">
					<p className="text-base font-medium text-neutral-950 sm:text-sm">Overview</p>
					<Content content={work.content} />
				</div>
			</section>
			{work.partners?.length ? (
				<section className="py-16 sm:py-24 lg:py-32">
					<div className="container grid gap-12 border-t border-neutral-950/10 pt-8 lg:grid-cols-[3fr_9fr]">
						<div className="grid content-start gap-3">
							<p className="text-base font-medium text-neutral-950 sm:text-sm">Partners and clients</p>
							<p className="max-w-[30ch] text-base text-pretty text-neutral-500 sm:text-sm">A few of the teams I have worked alongside.</p>
						</div>
						<ul role="list" className="grid grid-cols-2 border-t border-neutral-950/10 sm:grid-cols-3 lg:grid-cols-4">
							{work.partners.map((partner) => {
								const item = partner.partners_id;
								return (
									<li key={item.id} className="border-b border-neutral-950/10 p-6 sm:p-8">
										<a href={item.url} target="_blank" rel="noopener noreferrer" className="flex aspect-[3/2] items-center justify-center opacity-55 hover:opacity-100">
											{item.image.type === 'image/svg+xml' ? (
												<img src={`/assets/${item.image.id}`} alt={item.name} className="max-h-12 max-w-full" />
											) : (
												<Image src={`/assets/${item.image.id}`} height={item.image.height} width={item.image.width} alt={item.name} className="max-h-12 w-auto" />
											)}
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
