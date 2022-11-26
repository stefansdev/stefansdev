import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import PageTitle from '@/components/PageTitle';
import Article from '@/components/elements/Article';
import GetPosts from '@/hooks/GetPosts';
import GetBlog from '@/hooks/GetBlog';

const Blog = ({ posts, blog }) => (
	<>
		<Seo title={blog.meta_title} description={blog.meta_description} image={blog.meta_image} />
		<Header />
		<div className="max-w-7xl md:py-28 container relative py-12 mx-auto">
			<div className="relative">
				<PageTitle title={blog.title} subtitle={blog.subtitle} />
			</div>
			<div className="md:grid-cols-3 grid grid-cols-1 gap-4 pt-16">
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
		<Footer />
	</>
);

export default Blog;

export async function getStaticProps() {
	const posts = await GetPosts();
	const blog = await GetBlog();
	return {
		props: {
			blog,
			posts,
		},
	};
}
