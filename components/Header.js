import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LightBulbIcon, MoonIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';

const menuItems = [
	{
		title: 'Home',
		link: '/',
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
	const [isMounted, setIsMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const switchTheme = () => {
		if (isMounted) {
			setTheme(theme === 'light' ? 'dark' : 'light');
		}
	};
	return (
		<header className="bg-gray-800 py-4 dark:bg-gray-50">
			<div className="container mx-auto max-w-7xl grid grid-cols-[1fr,auto] items-center">
				<div className="">
					<Link href="/">
						<a className="text-2xl font-extrabold leading-8 text-white dark:text-gray-800">
							<span className="text-stroke-white dark:text-stroke text-gray-800 dark:text-gray-50">
								STEFANS.
							</span>
							DEV
						</a>
					</Link>
				</div>
				<nav className="grid grid-cols-[auto,auto] gap-5 items-center">
					<ul className="flex">
						{menuItems.map((item, i) => (
							<li key={`key_${i}`} className="px-2">
								<Link href={item.link}>
									<a className="leading-6 font-bold text-white dark:text-gray-800 uppercase hover:underline py-1">
										{item.title}
									</a>
								</Link>
							</li>
						))}
					</ul>
					<button type="button" className="bg-gray-50 dark:bg-gray-800 p-2 rounded-md" onClick={switchTheme}>
						{(() => {
							if (isMounted) {
								return theme === 'dark' ? (
									<LightBulbIcon className="text-gray-800 dark:text-gray-50 w-4 h-4" />
								) : (
									<MoonIcon className="text-gray-800 dark:text-gray-50 w-4 h-4" />
								);
							}
						})()}
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Header;
