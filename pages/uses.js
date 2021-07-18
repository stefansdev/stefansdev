import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import markdownToHtml from '../utils/markdown';
import Seo from '../components/Seo';

const Uses = ({ meta, content }) => (
	<>
		<Seo title={meta.title} description={meta.excerpt} image={meta.image} />
		<Header />
		<div className="container mx-auto max-w-4xl py-28">
			<div className="relative">
				<PageTitle titleStroke="USES" subtitle="What I use" />
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

export async function getStaticProps({ params }) {
	const res = await fetch(`${process.env.VERCEL_URL}/api/page/uses`);
	const page = await res.json();
	const content = await markdownToHtml(page.content || '');
	return {
		props: {
			...page,
			content,
		},
	};
}
