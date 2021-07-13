import React from 'react';
import { getAllPosts, getPostBySlug } from '../../utils/blog';
import markdownToHtml from '../../utils/markdown';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Post({ meta, content }) {
	console.log(meta);
	return (
		<>
			<Header />
			<div
				className="prose dark:prose-dark mx-auto"
				dangerouslySetInnerHTML={{
					__html: content,
				}}
			/>
			<Footer />
		</>
	);
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug);
	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			...post,
			content,
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts();

	return {
		paths: posts.map((post) => ({
			params: {
				slug: post.slug,
			},
		})),
		fallback: false,
	};
}
