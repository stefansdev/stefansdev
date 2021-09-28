import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroAnimation from './elements/HeroAnimation';

const Hero = () => (
	<>
		<section className="md:pt-12 relative pt-6">
			<div className="max-w-7xl md:grid md:grid-cols-2 container relative items-end gap-8 mx-auto overflow-hidden">
				<HeroAnimation />
				<div className="md:mb-0 mb-8">
					<Image
						src="/stefans_image.png"
						alt="Stefan Stankovic - Stefans Dev"
						width="620"
						height="755"
						blur="true"
					/>
				</div>
				<div className="">
					<h2 className="md:text-4xl mb-6 text-2xl font-light leading-10">
						Hi, I&apos;m <span className="font-semibold"> Stefan S.</span>
					</h2>
					<div className="md:text-6xl leading-26 mb-6 text-4xl font-extrabold">
						<span className="text-stroke dark:text-stroke-white dark:text-gray-800 text-white">
							I&apos;m a{' '}
						</span>
						<h1 className="">Jamstack Web Developer</h1>
					</div>
					<div className="max-w-[420px] pb-8 text-base font-light">
						<p className=" mb-4">Full Stack Web Developer specialised in Jamstack and Headless.</p>
						<p className=" mb-4">Websites deserve to be fast and accessible. Let's give them wings.</p>
						<p className=" mb-4">
							Feel free to{' '}
							<a href="mailto:s@stefans.dev" className="hover:underline font-bold">
								say hi 👋{' '}
							</a>{' '}
							or{' '}
							<a
								href="https://calendly.com/stefansdev/meet-me"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline font-bold"
							>
								schedule a call with me 📆.
							</a>
						</p>
						{/* <p className="">
							You can{' '}
							<Link href="/contact">
								<a className="hover:underline font-bold">read more about me here.</a>
							</Link>
						</p> */}
					</div>
				</div>
			</div>
		</section>
	</>
);

export default Hero;
