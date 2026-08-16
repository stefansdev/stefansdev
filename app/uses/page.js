import HeroSingle from '@/components/HeroSingle';
import Content from '@/components/Content';
import getUses from '$queries/getUses';

export async function generateMetadata() {
	const data = await getUses();
	return { title: data.meta_title, description: data.meta_description };
}

const UsesPage = async () => {
	const uses = await getUses();

	return (
		<>
			<HeroSingle title={uses.title} eyebrow="Tools and setup" />
			<section className="py-16 sm:py-24 lg:py-32">
				<div className="container grid gap-12 border-t border-neutral-950/10 pt-8 lg:grid-cols-[3fr_9fr]">
					<p className="text-base font-medium text-neutral-950 sm:text-sm">Current stack</p>
					<Content content={uses.content} />
				</div>
			</section>
		</>
	);
};

export default UsesPage;
