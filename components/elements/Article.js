import Link from 'next/link';
import Image from 'next/image';

const Article = ({ slug, title, image, categories }) => (
	<article>
		<Link
			href={`/${slug}`}
			className="rounded-md overflow-hidden border border-gray-200 block hover:shadow-md transition-all duration-300 dark:border-gray-700 transform-gpu hover:-translate-y-1 group"
		>
			<div className="relative overflow-hidden after:content-[' '] after:block after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black after:z-10 after:opacity-60 h-60 hover:after:opacity-70 transition-all">
				<Image
					src={`/assets/${image.id}`}
					width={image.width}
					height={image.height}
					alt={image.title}
					className="image_cover"
				/>
				<ul className="flex mb-2 absolute top-4 left-4">
					{categories.map((category, i) => (
						<li
							className="text-[10px] mr-2 font-semibold uppercase rounded-sm bg-gray-700 px-2 py-[2px] text-gray-50"
							key={`cat_${i}`}
						>
							{category}
						</li>
					))}
				</ul>
				<div className="absolute bottom-4 left-5 right-5 z-20">
					<h4 className="text-xl font-semibold text-white">{title}</h4>
				</div>
			</div>
		</Link>
	</article>
);

export default Article;
