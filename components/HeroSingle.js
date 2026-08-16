const HeroSingle = ({ title, eyebrow }) => (
	<header className="container grid gap-3 py-12 sm:py-16" data-reveal-group>
		<p className="text-base text-neutral-500 sm:text-sm" data-reveal-item>{eyebrow || 'Stefan Stankovic'}</p>
		<h1 className="max-w-[20ch] text-4xl font-medium tracking-tight text-balance text-neutral-100 sm:text-5xl" data-reveal-item>{title}</h1>
	</header>
);

export default HeroSingle;
