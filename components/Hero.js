import Image from 'next/image';
import Link from 'next/link';
import HeroAnimation from './elements/HeroAnimation';

const Hero = () => (
	<section className="md:pt-12 relative pt-6">
		{/* <Image src="/background-gradient.jpg" layout="fill" objectFit="cover" alt="background-gradient" quality={90} /> */}
		<div className="max-w-7xl md:grid md:grid-cols-2 container relative items-end gap-8 mx-auto overflow-hidden">
			<HeroAnimation />
			<div className="md:mb-0 mb-0">
				<Image
					src="/stefans_image.png"
					alt="Stefan Stankovic - Stefans Dev"
					width="620"
					height="751"
					priority
					layout="responsive"
				/>
			</div>
			<div className="">
				<h2 className="md:text-4xl mb-6 text-2xl font-light leading-10 font-display">
					Hi, I&apos;m <span className="font-semibold">Stefan S.</span>
				</h2>
				<div className="md:text-6xl leading-26 mb-6 text-4xl font-extrabold font-display">
					<span className="">I&apos;m a </span>
					<h1 className="text-blue-500">Jamstack Web Developer</h1>
				</div>
				<div className="max-w-[420px] pb-8 text-base font-light font-display">
					<p className=" mb-4">Full Stack JS Web Developer specialised in Jamstack and Headless.</p>
					<div className="flex space-x-3">
						<Link href="/contact">
							<a className="bg-gray-800 border border-gray-100 dark:border-gray-600 rounded-md py-3 text-center px-4 items-center gap-4 transition-gpu transition-all duration-300 hover:bg-brand-twitter text-white hover:text-white dark:bg-gray-800 dark:hover:bg-brand-twitter hover:-translate-y-1 font-bold">
								👋 <span className="pl-2">Say Hi!</span>
							</a>
						</Link>
						<a
							className="bg-white border border-gray-100 dark:border-gray-600 rounded-md py-3 text-center px-4 items-center gap-4 transition-gpu transition-all duration-300 hover:bg-brand-twitter hover:text-white dark:bg-gray-800 dark:hover:bg-brand-twitter hover:-translate-y-1 font-bold"
							href="https://calendly.com/stefansdev/meet-me"
							target="_blank"
							rel="noreferrer"
						>
							🗓 <span className="pl-2">Schedule a call</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Hero;
