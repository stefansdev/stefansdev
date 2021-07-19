import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllPosts } from '../utils/blog';
import Seo from '../components/Seo';
import PageTitle from '../components/PageTitle';
import Article from '../components/elements/Article';

const Blog = ({ posts }) => {
	console.log(posts);
	return (
		<div>
			<Seo
				title="Blog | Stefan Stankovic - Full Stack Javascript Developer"
				description="Full Stack Javascript Developer"
			/>
			<Header />
			<div className="container mx-auto max-w-7xl py-28 relative">
				<div className="relative">
					<PageTitle title="BLOG" subtitle="Posts i wrote" />
				</div>
				<div className="grid grid-cols-3 gap-4 pt-16">
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
		</div>
	);
};

export default Blog;

export async function getStaticProps() {
	const posts = await getAllPosts();
	return {
		props: {
			posts,
		},
	};
}
