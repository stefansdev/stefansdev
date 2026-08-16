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
			<section className="py-16 sm:py-24 lg:py-32">
				<div className="container grid gap-12 border-t border-neutral-950/10 pt-8 lg:grid-cols-[3fr_9fr]">
					<p className="text-base font-medium text-neutral-950 sm:text-sm">Writing</p>
					<div>
						{posts.map((article) => (
							<Article key={article.slug} slug={article.slug} title={article.title} image={article.featured_image} categories={article.categories} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Blog;
