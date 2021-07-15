import React from 'react';
import markdownToHtml from '../utils/markdown';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
	const res = await fetch(`http://localhost:3000/api/post/${params.slug}`);
	const post = await res.json();
	const content = await markdownToHtml(post.content || '');
	return {
		props: {
			...post,
			content,
		},
	};
}

export async function getStaticPaths() {
	const res = await fetch('http://localhost:3000/api/posts');
	const posts = await res.json();

	return {
		paths: posts.allPosts.map((post) => ({
			params: {
				slug: post.slug,
			},
		})),
		fallback: false,
	};
}
