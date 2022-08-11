import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import Seo from '@/components/Seo';
import GetUses from '@/hooks/GetUses';

const Uses = ({ uses }) => (
	<>
		<Seo seo={uses.seo} />
		<Header />
		<div className="md:py-28 container max-w-4xl py-12 mx-auto">
			<div className="relative">
				<PageTitle title="USES" subtitle={uses.uses.subtitle} />
			</div>
			<div
				className="dark:prose-dark prose"
				dangerouslySetInnerHTML={{
					__html: uses.content,
				}}
			/>
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
