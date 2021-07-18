import React from 'react';
import SectionTitle from './elements/SectionTitle';
import Tip from './elements/Tip';

const tipsList = [
	{
		id: 1,
		title: 'Boost your conversion rate',
		slug: 'boost-your-conversion-rate',
		image: '/blog_placeholder.jpg',
		categories: ['javascript'],
	},
	{
		id: 2,
		title: 'Boost your conversion rate',
		slug: 'boost-your-conversion-rate',
		image: '/blog_placeholder.jpg',
		categories: ['javascript'],
	},
	{
		id: 3,
		title: 'Boost your conversion rate',
		slug: 'boost-your-conversion-rate',
		image: '/blog_placeholder.jpg',
		categories: ['javascript'],
	},
];

const Tips = () => (
	<section className="py-16 bg-gray-50 dark:bg-gray-900">
		<div className="container mx-auto max-w-7xl">
			<SectionTitle titleStroke="Dev." titleNormal="Tips" subtitle="I also make short clips for fellow devs" />
			<div className="grid grid-cols-3 gap-4">
				{tipsList.map((article) => (
					<Tip
						slug={article.slug}
						title={article.title}
						key={article.id}
						image={article.image}
						categories={article.categories}
					/>
				))}
			</div>
		</div>
	</section>
);

export default Tips;
