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
			<section className="pb-12 sm:pb-16">
				<div className="container border-t border-white/10 pt-8">
					<Content content={uses.content} />
				</div>
			</section>
		</>
	);
};

export default UsesPage;
