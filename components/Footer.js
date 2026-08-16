import Link from 'next/link';

const socialLinks = [
	{ label: 'GitHub', href: 'https://github.com/stefansdev' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/stefansdev/' },
	{ label: 'Instagram', href: 'https://www.instagram.com/stefans.dev/' },
];

const Footer = () => (
	<footer className="bg-neutral-950">
		<div className="container flex flex-col gap-6 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between" data-reveal-group>
			<p className="text-base text-neutral-500 sm:text-sm" data-reveal-item>© {new Date().getFullYear()} Stefan Stankovic</p>
			<div className="flex flex-wrap gap-x-5 gap-y-3 text-base text-neutral-400 sm:text-sm" data-reveal-item>
				<Link href="/blog" className="font-normal hover:text-neutral-100">Notes</Link>
				<ul role="list" className="flex gap-5">
					{socialLinks.map((link) => (
						<li key={link.label}>
							<a href={link.href} target="_blank" rel="noreferrer" className="font-normal hover:text-neutral-100">{link.label}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	</footer>
);

export default Footer;
