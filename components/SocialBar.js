import React from 'react';
import TwitterIcon from './svg/TwitterIcon';
import InstagramIcon from './svg/InstagramIcon';
import GithubIcon from './svg/GithubIcon';
import UpworkIcon from './svg/UpworkIcon';

const SocialBar = () => (
	<section className="py-12 bg-gray-100 dark:bg-gray-900">
		<div className="container mx-auto max-w-7xl ">
			<ul className="grid grid-cols-4 gap-6">
				<li>
					<a
						href="https://twitter.com/st3f4ns"
						target="_blank"
						rel="noreferrer"
						className="bg-white border border-gray-100 dark:border-gray-600 rounded-md py-2 px-4 grid grid-cols-[auto,1fr] items-center gap-4 transition-gpu transition-all duration-300 hover:bg-brand-twitter hover:text-white dark:bg-gray-800 dark:hover:bg-brand-twitter hover:-translate-y-1"
					>
						<TwitterIcon />
						<div className="text-sm">
							<span className="block">Follow me on Twitter</span>
							<span className="font-semibold">@st3f4ns</span>
						</div>
					</a>
				</li>
				<li>
					<a
						href="https://instagram.com/stefans.dev"
						target="_blank"
						rel="noreferrer"
						className="bg-white border border-gray-100 dark:border-gray-600 rounded-md py-2 px-4 grid grid-cols-[auto,1fr] items-center gap-4 transition-gpu transition-all duration-300 hover:bg-brand-instagram hover:text-white dark:bg-gray-800 dark:hover:bg-brand-instagram hover:-translate-y-1"
					>
						<InstagramIcon />
						<div className="text-sm">
							<span className="block">Follow me on Instagram</span>
							<span className="font-semibold">@stefans.dev</span>
						</div>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/stefansdev"
						target="_blank"
						rel="noreferrer"
						className="bg-white  border border-gray-100 dark:border-gray-600 rounded-md py-2 px-4 grid grid-cols-[auto,1fr] items-center gap-4 transition-gpu transition-all duration-300 hover:bg-brand-github hover:text-white dark:hover:text-gray-800 dark:bg-gray-800 dark:hover:bg-white hover:-translate-y-1"
					>
						<GithubIcon />
						<div className="text-sm">
							<span className="block">Follow me on GitHub</span>
							<span className="font-semibold">@stefans.dev</span>
						</div>
					</a>
				</li>
				<li>
					<a
						href="https://www.upwork.com/freelancers/stefansdev"
						target="_blank"
						rel="noreferrer"
						className="bg-white  border border-gray-100 dark:border-gray-600 rounded-md py-2 px-4 grid grid-cols-[auto,1fr] items-center gap-4 transition-gpu transition-all duration-300 hover:bg-brand-upwork hover:text-white dark:bg-gray-800 dark:hover:bg-brand-upwork hover:-translate-y-1"
					>
						<UpworkIcon />
						<div className="text-sm">
							<span className="block">Hire me on Upwork</span>
							<span className="font-semibold">Stefan S.</span>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</section>
);

export default SocialBar;
