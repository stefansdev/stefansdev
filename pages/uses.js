import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import Seo from '@/components/Seo';
import GetUses from '@/hooks/GetUses';
import Content from '@/components/Content';

const Uses = ({ uses }) => (
	<>
		<Seo title={uses.meta_title} description={uses.meta_description} image={uses.meta_image} />
		<Header />
		<div className="md:py-28 container max-w-4xl py-12 mx-auto">
			<div className="relative">
				<PageTitle title={uses.title} subtitle={uses.subtitle} />
			</div>
			<div className="dark:prose-dark prose">
				<Content content={uses.content} />
			</div>
		</div>
		<Footer />
	</>
);

export default Uses;

export async function getStaticProps() {
	const uses = await GetUses();
	return {
		props: {
			uses,
		},
	};
}
