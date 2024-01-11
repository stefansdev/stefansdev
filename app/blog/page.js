import Article from '@/components/elements/Article';
import HeroSingle from '@/components/HeroSingle';

import getBlog from '$queries/getBlog';
import getPosts from '$queries/getPosts';

export async function generateMetadata() {
	const data = await getBlog();
	return {
		title: data.meta_title,
		description: data.meta_description,
		openGraph: {
			title: data.meta_title,
			description: data.meta_description,
		},
	};
}

const Blog = async () => {
	const blog = await getBlog();
	const posts = await getPosts();
	return (
		<div>
			<HeroSingle title={blog.title} />
			<div className="container">
				<div className="md:grid-cols-3 grid grid-cols-1 gap-4 py-16">
					{posts.map((article) => (
						<Article
							slug={article.slug}
							title={article.title}
							key={article.slug}
							image={article.featured_image}
							categories={article.categories}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
export default Blog;
