const socialLinks = [
	{ label: 'GitHub', href: 'https://github.com/stefansdev' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/stefansdev/' },
	{ label: 'Instagram', href: 'https://www.instagram.com/stefans.dev/' },
];

const Footer = () => (
	<footer className="bg-neutral-950">
		<div className="container flex flex-col gap-6 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
			<p className="text-base text-neutral-500 sm:text-sm">© {new Date().getFullYear()} Stefan Stankovic</p>
			<ul role="list" className="flex gap-5 text-base text-neutral-400 sm:text-sm">
				{socialLinks.map((link) => (
					<li key={link.label}>
						<a href={link.href} target="_blank" rel="noreferrer" className="font-normal hover:text-neutral-100">{link.label}</a>
					</li>
				))}
			</ul>
		</div>
	</footer>
);

export default Footer;
