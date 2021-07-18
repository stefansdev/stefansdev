import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Tip = ({ slug, title, image, categories }) => (
	<article>
		<Link href={`/${slug}`}>
			<a className="rounded-md overflow-hidden border border-gray-200 block hover:shadow-md transition-all dark:border-gray-700">
				<div className="relative overflow-hidden after:content-[' '] after:block after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black after:z-10 after:opacity-60 h-60 hover:after:opacity-70 transition-all">
					<Image src={image} layout="fill" alt="description" objectFit="cover" />
					<div className="absolute bottom-4 left-5 z-20">
						<ul className="flex mb-2">
							{categories.map((category, i) => (
								<li
									className="text-[10px] font-semibold uppercase rounded-sm bg-gray-700 px-2 py-[2px] text-gray-50"
									key={`cat_${i}`}
								>
									{category}
								</li>
							))}
						</ul>
						<h4 className="text-xl font-semibold text-white">{title}</h4>
					</div>
				</div>
			</a>
		</Link>
	</article>
);

export default Tip;
