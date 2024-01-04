import Link from 'next/link';
import { useRouter } from 'next/router';
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
	const router = useRouter();

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
					<li>
						<a
							href="/"
							className={`rounded-sm border border-transparent px-5 py-2 transition-all hover:border-brand-black-lighter hover:bg-[#070707] ${
								router.pathname === '/' ? 'border-brand-black-lighter bg-[#070707]' : ''
							}`}
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="/about"
							className={`rounded-sm border border-transparent px-5 py-2 transition-all hover:border-brand-black-lighter hover:bg-[#070707] ${
								router.pathname === '/about' ? 'border-brand-black-lighter bg-[#070707]' : ''
							}`}
						>
							About
						</a>
					</li>
					<li>
						<a
							href="/blog"
							className={`rounded-sm border border-transparent px-5 py-2 transition-all hover:border-brand-black-lighter hover:bg-[#070707] ${
								router.pathname === '/blog' ? 'border-brand-black-lighter bg-[#070707]' : ''
							}`}
						>
							Blog
						</a>
					</li>
					<li>
						<a
							href="/work"
							className={`rounded-sm border border-transparent px-5 py-2 transition-all hover:border-brand-black-lighter hover:bg-[#070707] ${
								router.pathname === '/work' ? 'border-brand-black-lighter bg-[#070707]' : ''
							}`}
						>
							Work
						</a>
					</li>
					<li>
						<a
							href="/uses"
							className={`rounded-sm border border-transparent px-5 py-2 transition-all hover:border-brand-black-lighter hover:bg-[#070707] ${
								router.pathname === '/uses' ? 'border-brand-black-lighter bg-[#070707]' : ''
							}`}
						>
							Uses
						</a>
					</li>
					<li>
						<a
							href="/contact"
							className={`rounded-sm border border-transparent px-5 py-2 transition-all hover:border-brand-black-lighter hover:bg-[#070707] ${
								router.pathname === '/contact' ? 'border-brand-black-lighter bg-[#070707]' : ''
							}`}
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};
export default Header;
