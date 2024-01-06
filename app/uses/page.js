import HeroSingle from '@/components/HeroSingle';
import Content from '@/components/Content';
// data
import getUses from '$queries/getUses';

const page = async () => {
	const uses = await getUses();
	return (
		<>
			<HeroSingle title={uses.title} />
			<div className="py-20">
				<div className="dark:prose-dark prose mx-auto">
					<Content content={uses.content} />
				</div>
			</div>
		</>
	);
};
export default page;
