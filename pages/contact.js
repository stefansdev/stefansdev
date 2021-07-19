import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import Seo from '../components/Seo';
import { getPageBySlug } from '../utils/pages';
import markdownToHtml from '../utils/markdown';

const Contact = ({ meta, content }) => (
	<>
		<Seo title={meta.title} description={meta.excerpt} image={meta.image} />
		<Header />
		<div className="container mx-auto max-w-4xl py-28">
			<div className="relative">
				<PageTitle titleStroke="CONTACT" subtitle="REACH OUT TO ME" />
				<div
					className="prose dark:prose-dark"
					dangerouslySetInnerHTML={{
						__html: content,
					}}
				/>
			</div>
		</div>
		<Footer />
	</>
);

export default Contact;

export async function getStaticProps(context) {
	const post = getPageBySlug('contact');
	const content = await markdownToHtml(post.content || '');
	return {
		props: {
			meta: post.meta,
			content,
		},
	};
}
