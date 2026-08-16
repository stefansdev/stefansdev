const HeroSingle = ({ title, eyebrow }) => (
	<section className="py-20 sm:py-28 lg:py-36">
		<div className="container grid gap-12 lg:grid-cols-[3fr_9fr] lg:items-end">
			<p className="text-base text-neutral-500 sm:text-sm">{eyebrow || 'Stefan Stankovic'}</p>
			<h1 className="max-w-[20ch] text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl lg:text-7xl">
				{title}
			</h1>
		</div>
	</section>
);

export default HeroSingle;
