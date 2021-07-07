import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Article = ({ slug, title, excerpt, image }) => (
	<article>
		<Link href={`${slug}`}>
			<a>
				<div className="h-48 relative">
					<Image src={image} layout="fill" alt="description" />
				</div>
				<div className="p-4">
					<ul>
						<li>Category name</li>
					</ul>
					<h4>{title}</h4>
					<p>{excerpt}</p>
				</div>
			</a>
		</Link>
	</article>
);

export default Article;
