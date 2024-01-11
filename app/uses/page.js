import HeroSingle from '@/components/HeroSingle';
import Content from '@/components/Content';
// data
import getUses from '$queries/getUses';

export async function generateMetadata() {
	const data = await getUses();
	return {
		title: data.meta_title,
		description: data.meta_description,
		openGraph: {
			title: data.meta_title,
			description: data.meta_description,
		},
	};
}

const page = async () => {
	const uses = await getUses();
	return (
		<>
			<HeroSingle title={uses.title} />
			<div className="py-16 lg:py-20">
				<Content content={uses.content} />
			</div>
		</>
	);
};
export default page;
