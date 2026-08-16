'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from '@/components/shared/MobileMenu';

export const menuItems = [
	{ title: 'Work', link: '/work' },
	{ title: 'About', link: '/about' },
	{ title: 'Notes', link: '/blog' },
	{ title: 'Uses', link: '/uses' },
];

const Header = () => {
	const pathname = usePathname();

	return (
		<header className="relative z-40 bg-white">
			<div className="container flex h-24 items-center justify-between sm:h-28">
				<Link
					href="/"
					aria-label="Homepage"
					className="group flex items-center gap-3 text-base font-medium tracking-tight text-neutral-950"
				>
					<span className="size-2 shrink-0 rounded-full bg-neutral-950" aria-hidden="true" />
					<span className="group-hover:text-neutral-500">Stefan Stankovic</span>
				</Link>

				<nav aria-label="Primary navigation" className="hidden lg:flex lg:items-center lg:gap-8">
					<ul role="list" className="flex items-center gap-8">
						{menuItems.map((item) => {
							const active = pathname === item.link || pathname.startsWith(`${item.link}/`);
							return (
								<li key={item.link}>
									<Link
										href={item.link}
										aria-current={active ? 'page' : undefined}
										className={active ? 'text-neutral-950' : 'text-neutral-500 hover:text-neutral-950'}
									>
										{item.title}
									</Link>
								</li>
							);
						})}
					</ul>
					<Link href="/contact" className="border-b border-neutral-950 pb-1 text-neutral-950 hover:border-neutral-400">
						Start a conversation
					</Link>
				</nav>

				<MobileMenu menu={menuItems} />
			</div>
		</header>
	);
};

export default Header;
