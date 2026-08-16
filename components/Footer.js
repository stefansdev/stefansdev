import Link from 'next/link';

const socialLinks = [
	{ label: 'GitHub', href: 'https://github.com/stefansdev' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/stefansdev/' },
	{ label: 'Instagram', href: 'https://www.instagram.com/stefans.dev/' },
	{ label: 'X', href: 'https://twitter.com/stefansdev' },
];

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-white pt-16 sm:pt-24">
			<div className="container">
				<div className="grid gap-12 border-t border-neutral-950/10 py-10 lg:grid-cols-[1fr_auto] lg:items-end">
					<div className="grid gap-3">
						<Link href="/" aria-label="Homepage" className="text-lg font-medium tracking-tight text-neutral-950">
							Stefan Stankovic
						</Link>
						<p className="max-w-[44ch] text-base text-pretty text-neutral-500 sm:text-sm">
							Products, systems and practical AI for businesses that need complicated things to work.
						</p>
					</div>
					<div className="grid gap-8 lg:justify-items-end">
						<ul role="list" className="flex flex-wrap gap-x-6 gap-y-3 text-base text-neutral-600 sm:text-sm">
							{socialLinks.map((link) => (
								<li key={link.label}>
									<a href={link.href} target="_blank" rel="noreferrer" className="font-normal hover:text-neutral-950">
										{link.label}
									</a>
								</li>
							))}
						</ul>
						<p className="text-base text-neutral-500 sm:text-sm">© {year} Stefan Stankovic</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
