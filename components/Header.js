'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

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
		<header className="absolute top-12 z-10 w-full text-white">
			<div className="container flex items-center justify-between">
				<Link href="/" className="flex items-center space-x-3">
					<div>
						<Image
							src="/images/avatar.png"
							alt="Stefan S. | stefans.dev"
							width={53}
							height={53}
							className="aspect-auto w-[50px] rounded-full"
						/>
					</div>
					<div className="grid">
						<span className="font-headings text-lg font-semibold leading-none">Stefan S.</span>
						<span className="text-sm font-light leading-none">JS Dev</span>
					</div>
				</Link>
				<ul className="font-headings flex space-x-5 text-xs font-medium uppercase leading-none">
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
			</div>
		</header>
	);
};
export default Header;
