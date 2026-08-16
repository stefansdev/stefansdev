import Article from '@/components/elements/Article';
import HeroSingle from '@/components/HeroSingle';
import getBlog from '$queries/getBlog';
import getPosts from '$queries/getPosts';

export async function generateMetadata() {
	const data = await getBlog();
	return { title: data.meta_title, description: data.meta_description };
}

const Blog = async () => {
	const [blog, posts] = await Promise.all([getBlog(), getPosts()]);

	return (
		<>
			<HeroSingle title={blog.title} eyebrow="Notes" />
			<section className="pb-12 sm:pb-16">
				<div className="container border-t border-white/10 pt-8">
					{posts.map((article) => (
						<Article key={article.slug} slug={article.slug} title={article.title} image={article.featured_image} categories={article.categories} />
					))}
				</div>
			</section>
		</>
	);
};

export default Blog;
