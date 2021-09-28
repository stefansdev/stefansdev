import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import Seo from '../components/Seo';
import { getPageBySlug } from '../utils/pages';
import markdownToHtml from '../utils/markdown';

const Uses = ({ meta, content }) => (
	<>
		<Seo title={meta.title} description={meta.excerpt} image={meta.image} />
		<Header />
		<div className="md:py-28 container max-w-4xl py-12 mx-auto">
			<div className="relative">
				<PageTitle title="USES" subtitle="What I use" />
			</div>
			<div
				className="dark:prose-dark prose"
				dangerouslySetInnerHTML={{
					__html: content,
				}}
			/>
		</div>
		<Footer />
	</>
);
export default Uses;

export async function getStaticProps() {
	const page = getPageBySlug('uses');
	const content = await markdownToHtml(page.content || '');
	return {
		props: {
			meta: page.meta,
			content,
		},
	};
}
