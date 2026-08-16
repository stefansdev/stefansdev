import Link from 'next/link';
import Image from 'next/image';

const Article = ({ slug, title, image, categories = [] }) => (
	<article className="border-t border-neutral-950/10 py-8 first:border-t-0 first:pt-0">
		<Link href={`/${slug}`} className="group grid gap-6 sm:grid-cols-[2fr_5fr_1fr] sm:items-start sm:gap-8">
			{image ? (
				<div className="relative aspect-[3/2] overflow-hidden bg-neutral-100 outline-1 -outline-offset-1 outline-neutral-950/5">
					<Image src={`/assets/${image.id}`} fill sizes="(min-width: 640px) 24vw, 100vw" alt="" className="object-cover" />
				</div>
			) : (
				<div className="aspect-[3/2] bg-neutral-100" aria-hidden="true" />
			)}
			<h2 className="max-w-[32ch] text-2xl font-medium tracking-tight text-balance text-neutral-950 group-hover:text-neutral-500 sm:text-3xl">
				{title}
			</h2>
			<p className="text-base text-neutral-400 sm:text-sm">{categories[0] || 'Note'}</p>
		</Link>
	</article>
);

export default Article;
