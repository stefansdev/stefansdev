import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import markdownToHtml from '../utils/markdown';

const Uses = ({ meta, content }) => {
	console.log(meta);
	return (
		<>
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
};
export default Uses;

export async function getStaticProps({ params }) {
	const res = await fetch(`${process.env.API}/page/uses`);
	const page = await res.json();
	const content = await markdownToHtml(page.content || '');
	return {
		props: {
			...page,
			content,
		},
	};
}
