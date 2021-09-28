import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllPosts } from '../utils/blog';
import Seo from '../components/Seo';
import PageTitle from '../components/PageTitle';
import Article from '../components/elements/Article';

const Blog = ({ posts }) => (
	<>
		<Seo title="Blog" description="Full Stack Javascript Developer specialised in Jamstack and Headless" />
		<Header />
		<div className="max-w-7xl md:py-28 container relative py-12 mx-auto">
			<div className="relative">
				<PageTitle title="BLOG" subtitle="Posts i wrote" />
			</div>
			<div className="md:grid-cols-3 grid grid-cols-1 gap-4 pt-16">
				{posts.map((article) => (
					<Article
						slug={article.slug}
						title={article.title}
						key={article.slug}
						image={article.image}
						excerpt={article.excerpt}
						categories={article.categories}
					/>
				))}
			</div>
		</div>
		<Footer />
	</>
);

export default Blog;

export async function getStaticProps() {
	const posts = await getAllPosts();
	return {
		props: {
			posts,
		},
	};
}
