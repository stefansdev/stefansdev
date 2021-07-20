import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import markdownToHtml from '../utils/markdown';
import Seo from '../components/Seo';
import { getPageBySlug } from '../utils/pages';

const Uses = ({ meta, content }) => (
	<>
		<Seo title={meta.title} description={meta.excerpt} image={meta.image} />
		<Header />
		<div className="container mx-auto max-w-4xl py-12 md:py-28">
			<div className="relative">
				<PageTitle title="USES" subtitle="What I use" />
			</div>
			<div
				className="prose dark:prose-dark"
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
	const post = getPageBySlug('uses');
	const content = await markdownToHtml(post.content || '');
	return {
		props: {
			meta: post.meta,
			content,
		},
	};
}
