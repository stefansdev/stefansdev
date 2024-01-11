import SectionTitle from '@/components/elements/SectionTitle';
import Article from '@/components/elements/Article';

const Articles = ({ posts }) => (
	<section className="py-16">
		<div className="container mx-auto max-w-7xl">
			<SectionTitle
				titleStroke="Latest."
				titleNormal="Articles"
				subtitle="Sometimes, when I learn something new and interesting I like to write about it. Mostly dev stuff."
			/>
			<div className="grid grid-cols-3 gap-4">
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
	</section>
);

export default Articles;
