import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroAnimation from './elements/HeroAnimation';

const Hero = () => (
	<>
		<section className="relative pt-6 md:pt-12">
			<div className="container mx-auto max-w-7xl md:grid md:grid-cols-2 items-end gap-8 relative overflow-hidden">
				<HeroAnimation />
				<div className="mb-8 md:mb-0">
					<Image
						src="/stefans_image.png"
						alt="Stefan Stankovic - Stefans Dev"
						width="620"
						height="755"
						blur="true"
					/>
				</div>
				<div className="">
					<h2 className="text-2xl md:text-4xl leading-10 font-light mb-6">
						Hi, I&apos;m <span className="font-semibold"> Stefan S.</span>
					</h2>
					<h1 className="text-4xl md:text-6xl font-extrabold leading-26 mb-6">
						<span className="text-stroke dark:text-stroke-white text-white dark:text-gray-800">
							I&apos;m{' '}
						</span>
						not a web developer.
					</h1>
					<div className="max-w-[420px] pb-8 text-base font-light">
						<p className="">- Not just a web developer, anyway.</p>
						<p className="mb-4">
							<br />
							Besides being a fullstack Javascript developer, I’m here to help you with your web business,
							product, ecommerce, idea and so on.
						</p>
						<p className=" mb-4">
							Feel free to{' '}
							<a href="mailto:s@stefans.dev" className="font-bold hover:underline">
								say hi 👋{' '}
							</a>{' '}
							or{' '}
							<a
								href="https://calendly.com/stefansdev/meet-me?month=2021-08"
								target="_blank"
								rel="noopener noreferrer"
								className="font-bold hover:underline"
							>
								schedule a call with me 📆.
							</a>
						</p>
						{/* <p className=" ">
							You can{' '}
							<Link href="/contact">
								<a className="font-bold hover:underline">read more about me here.</a>
							</Link>
						</p> */}
					</div>
				</div>
			</div>
		</section>
	</>
);

export default Hero;
