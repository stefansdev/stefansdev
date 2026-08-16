'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from '@/components/shared/MobileMenu';

export const menuItems = [
	{ title: 'Work', link: '/work' },
	{ title: 'About', link: '/about' },
	{ title: 'Uses', link: '/uses' },
];

const Header = () => {
	const pathname = usePathname();

	return (
		<header className="bg-neutral-950">
			<div className="container flex h-16 items-center justify-between sm:h-20">
				<Link href="/" aria-label="Homepage" className="shrink-0">
					<Image src="/images/avatar.png" width={28} height={28} alt="" className="size-7 rounded-full object-cover outline-1 -outline-offset-1 outline-white/10" priority />
				</Link>
				<nav aria-label="Primary navigation" className="hidden items-center gap-5 md:flex">
					<ul role="list" className="flex items-center gap-5 text-sm">
						{menuItems.map((item) => {
							const active = pathname === item.link || pathname.startsWith(`${item.link}/`);
							return (
								<li key={item.link}>
									<Link href={item.link} aria-current={active ? 'page' : undefined} className={active ? 'text-neutral-100' : 'text-neutral-500 hover:text-neutral-100'}>
										{item.title}
									</Link>
								</li>
							);
						})}
					</ul>
					<Link href="/contact" className="text-sm text-neutral-100 hover:text-neutral-400">Contact</Link>
				</nav>
				<MobileMenu menu={menuItems} />
			</div>
		</header>
	);
};

export default Header;
