import { Github, Linkedin, Instagram } from 'lucide-react';
import XIcon from '$svg/XIcon';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="border-t border-gray-100  overflow-hidden relative">
			<div className="absolute inset-x-0 bottom-0 top-0 text-slate-900/10 [mask-image:linear-gradient(transparent,white)] pointer-events-none">
				<svg aria-hidden="true" className="absolute inset-0 h-full w-full ">
					<defs>
						<pattern id=":Rem:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="100%">
							<path d="M0 128V.5H128" fill="none" stroke="currentColor" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#:Rem:)" />
				</svg>
			</div>
			<div className="container mx-auto grid gap-4 justify-center lg:flex lg:justify-between lg:space-x-10 py-10 ">
				<div>
					<ul className="text-neutral-600 flex space-x-4 items-center justify-center lg:justify-normal">
						<li>
							<a href="https://twitter.com/stefansdev" className="" target="_blank" rel="noreferrer">
								<XIcon />
							</a>
						</li>
						<li>
							<a href="https://github.com/stefansdev" className="" target="_blank" rel="noreferrer">
								<Github />
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/stefans.dev/"
								className=""
								target="_blank"
								rel="noreferrer"
							>
								<Instagram />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/stefansdev/"
								className=""
								target="_blank"
								rel="noreferrer"
							>
								<Linkedin />
							</a>
						</li>
					</ul>
				</div>
				<div className="text-neutral-400">&copy; {year} Stefan S. | All rights reserved.</div>
			</div>
		</footer>
	);
};

export default Footer;
