import React from 'react';
import Image from 'next/image';

const Project = ({ title, description, categories, image }) => (
	<div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 py-4 items-center mb-4 mb:mb-0 border-b border-gray-200 dark:border-gray-700 md:border-0">
		<div className="relative overflow-hidden h-[230px] w-full md:w-[353px] rounded-lg">
			<Image src={image} layout="fill" objectFit="cover" alt={title} />
		</div>
		<article>
			<h3 className="text-2xl leading-8 font-bold text-gray-700 dark:text-gray-200 mb-2">{title}</h3>
			<ul className="flex mb-8">
				{categories.map((category, i) => (
					<li
						key={`cat_${i}`}
						className="mr-2 rounded text-[10px] uppercase bg-gray-200 dark:bg-gray-700 px-2 py-[2px] font-medium"
					>
						{category}
					</li>
				))}
			</ul>
			<div className="prose max-w-full font-light dark:text-gray-300">{description}</div>
		</article>
	</div>
);

export default Project;
