import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroAnimation from './elements/HeroAnimation';

export const Hero = () => (
	<>
		<section className="relative">
			<div className="container mx-auto max-w-7xl grid grid-cols-2 items-end gap-8 relative overflow-hidden">
				<HeroAnimation />
				<div className="">
					<Image
						src="/stefans_image.png"
						alt="Stefan Stankovic - Stefans Dev"
						width="620"
						height="755"
						blur="true"
					/>
				</div>
				<div className="">
					<h2 className="text-4xl leading-10 font-light mb-6">
						Hi, I&apos;m <span className="font-semibold"> Stefan S.</span>
					</h2>
					<h1 className="text-6xl font-extrabold leading-26 mb-6">
						<span className="text-stroke dark:text-stroke-white text-white dark:text-gray-800">
							I&apos;m{' '}
						</span>
						Full Stack Javascript Developer{' '}
						<span className="text-stroke block dark:text-stroke-white text-white dark:text-gray-800">
							from Serbia
						</span>
					</h1>
					<div className="max-w-[420px] pb-8 text-base font-light">
						<p className=" mb-4">
							I am mostly focuses on Headless / Jamstack tech stack, but I have experience in other web
							dev areas too. Love good UI/UX.
						</p>
						<p className=" mb-4">
							Feel free to{' '}
							<a href="mailto:s@stefans.dev" className="font-bold hover:underline">
								say hi 👋{' '}
							</a>
						</p>
						<p className=" ">
							You can{' '}
							<Link href="/contact">
								<a className="font-bold hover:underline">read more about me here.</a>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	</>
);
export default Hero;
