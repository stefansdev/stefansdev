const HeroSingle = ({ title, eyebrow }) => (
	<header className="container grid gap-3 py-12 sm:py-16">
		<p className="text-base text-neutral-500 sm:text-sm">{eyebrow || 'Stefan Stankovic'}</p>
		<h1 className="max-w-[20ch] text-4xl font-medium tracking-tight text-balance text-neutral-100 sm:text-5xl">{title}</h1>
	</header>
);

export default HeroSingle;
