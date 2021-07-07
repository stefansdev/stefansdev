import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Article = ({ slug, title, excerpt, image, categories }) => (
	<article>
		<Link href={`/${slug}`}>
			<a className="rounded-md overflow-hidden border border-gray-200 block hover:shadow-md transition-all dark:border-gray-700">
				<div className="h-48 relative overflow-hidden after:content-[' '] after:block after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black after:z-10 after:opacity-50">
					<Image src={image} layout="fill" alt="description" />
					<ul className="absolute bottom-2 left-4 z-20 flex">
						{categories.map((category, i) => (
							<li
								className="text-[10px] font-semibold uppercase rounded-sm bg-gray-700 px-2 py-[2px] text-gray-50"
								key={`cat_${i}`}
							>
								{category}
							</li>
						))}
					</ul>
				</div>
				<div className="p-4">
					<h4 className="text-xl font-semibold mb-4">{title}</h4>
					<p className="text-gray-500 dark:text-gray-300">{excerpt}</p>
				</div>
			</a>
		</Link>
	</article>
);

export default Article;
