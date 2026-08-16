import Link from 'next/link';
import Image from 'next/image';

const Article = ({ slug, title, image, categories = [] }) => (
	<article className="border-t border-white/10 py-5 first:border-t-0 first:pt-0" data-reveal>
		<Link href={`/${slug}`} className="group grid grid-cols-[5rem_1fr] gap-4 sm:grid-cols-[7rem_1fr_auto] sm:items-start">
			{image ? (
				<div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 outline-1 -outline-offset-1 outline-white/10" data-motion-image>
					<Image src={`/assets/${image.id}`} fill sizes="112px" alt="" className="object-cover" />
				</div>
			) : (
				<div className="aspect-[4/3] bg-neutral-900" aria-hidden="true" />
			)}
			<h2 className="max-w-[32ch] text-xl font-medium tracking-tight text-balance text-neutral-100 group-hover:text-neutral-400 sm:text-2xl">{title}</h2>
			<p className="col-start-2 text-base text-neutral-500 sm:col-start-3 sm:row-start-1 sm:text-sm">{categories[0] || 'Note'}</p>
		</Link>
	</article>
);

export default Article;
