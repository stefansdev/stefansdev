import React from 'react';
import SectionTitle from './elements/SectionTitle';
import Article from './elements/Article';

const articlesList = [
	{
		id: 1,
		title: 'Boost your conversion rate',
		slug: 'boost-your-conversion-rate',
		image: '/blog_placeholder.jpg',
		excerpt:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
		categories: ['javascript'],
	},
	{
		id: 2,
		title: 'Boost your conversion rate',
		slug: 'boost-your-conversion-rate',
		image: '/blog_placeholder.jpg',
		excerpt:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
		categories: ['javascript'],
	},
	{
		id: 3,
		title: 'Boost your conversion rate',
		slug: 'boost-your-conversion-rate',
		image: '/blog_placeholder.jpg',
		excerpt:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
		categories: ['javascript'],
	},
];

const Articles = () => (
	<section className="py-16">
		<div className="container mx-auto max-w-7xl">
			<SectionTitle
				titleStroke="Latest."
				titleNormal="Articles"
				subtitle="Sometimes, when I learn something new and interesting I like to write about it. Mostly dev stuff."
			/>
			<div className="grid grid-cols-3 gap-4">
				{articlesList.map((article) => (
					<Article
						slug={article.slug}
						title={article.title}
						key={article.id}
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
