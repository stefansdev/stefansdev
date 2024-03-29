'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import MobileMenu from '@/components/shared/MobileMenu';

const menuItems = [
	{
		title: 'Home',
		link: '/',
	},
	{
		title: 'Blog',
		link: '/blog',
	},
	{
		title: 'About',
		link: '/about',
	},
	{
		title: 'Work',
		link: '/work',
	},
	{
		title: 'Uses',
		link: '/uses',
	},
	{
		title: 'Contact',
		link: '/contact',
	},
];

const Header = () => {
	const pathname = usePathname();

	return (
		<header className="absolute top-4 lg:top-12 z-40 w-full text-white">
			<div className="container flex items-center justify-between">
				<Link href="/" className="flex items-center space-x-3">
					<div>
						<Image
							src="/images/avatar.png"
							alt="Stefan S. | stefans.dev"
							width={53}
							height={53}
							priority
							quality={100}
							className="aspect-auto w-[50px] rounded-full border-2 border-transparent hover:border-brand-red transition-all"
						/>
					</div>
					<div className="grid">
						<span className="font-headings text-lg font-semibold leading-none mb-1">Stefan S.</span>
						<span className="text-sm font-light leading-none text-neutral-300">Full Stack JS Dev</span>
					</div>
				</Link>
				<ul className="font-headings hidden lg:flex space-x-5 text-xs font-medium uppercase leading-none">
					{menuItems.map((item) => (
						<li key={item.link}>
							<Link
								href={item.link}
								className={`rounded-sm border  px-5 py-2 transition-all hover:border-brand-black-lighter hover:bg-neutral-950 ${
									pathname === item.link
										? 'border-brand-black-lighter bg-neutral-950 text-red-500'
										: 'border-transparent bg-transparent'
								}`}
							>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
				<MobileMenu menu={menuItems} />
			</div>
		</header>
	);
};
export default Header;
