import Image from 'next/image';
import Link from 'next/link';

const capabilities = [
	{
		number: '01',
		title: 'Products',
		text: 'Useful digital products, customer portals and tools shaped around the problem, not a template.',
	},
	{
		number: '02',
		title: 'Systems',
		text: 'Connected ecommerce, operations and internal systems that remove friction from everyday work.',
	},
	{
		number: '03',
		title: 'Practical AI',
		text: 'Automation and AI where they create a real advantage, with the boring details handled properly.',
	},
];

const principles = [
	['Start with the real problem', 'The right solution is often smaller than the first brief.'],
	['Stay close to the work', 'Strategy, design and implementation inform each other.'],
	['Build for after launch', 'Fast is useful. Fragile is not.'],
];

const Hero = () => (
	<>
		<section className="flex min-h-[calc(100svh-6rem)] items-center py-16 sm:min-h-[calc(100svh-7rem)] sm:py-24">
			<div className="container grid gap-16 lg:grid-cols-[3fr_9fr] lg:items-end">
				<div className="grid gap-3 text-base text-neutral-500 sm:text-sm">
					<p>Independent product builder.</p>
					<p>Serbia → Dubai → everywhere.</p>
				</div>
				<div>
					<h1 className="max-w-[13ch] text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
						I make complicated things useful.
					</h1>
					<div className="grid gap-8 pt-10 sm:pt-14 lg:grid-cols-[1fr_auto] lg:items-end">
						<p className="max-w-[56ch] text-lg text-pretty text-neutral-500 sm:text-base">
							I build products, systems and practical AI that solve real business problems, simplify daily work and create room to grow.
						</p>
						<Link href="/contact" className="w-fit border-b border-neutral-950 pb-1 text-base text-neutral-950 hover:border-neutral-400">
							Tell me what you are working on
						</Link>
					</div>
				</div>
			</div>
		</section>

		<section className="py-20 sm:py-28 lg:py-36">
			<div className="container">
				<div className="grid gap-12 border-t border-neutral-950/10 pt-8 lg:grid-cols-[3fr_9fr]">
					<p className="text-base font-medium text-neutral-950 sm:text-sm">Intro</p>
					<div className="grid gap-10">
						<p className="max-w-[45ch] text-3xl font-normal tracking-tight text-balance text-neutral-700 sm:text-4xl lg:text-5xl">
							I work across strategy, design and code to turn unclear ideas and disconnected systems into something people can actually use.
						</p>
						<div className="grid gap-6 text-lg text-pretty text-neutral-500 sm:text-base md:grid-cols-2 md:gap-8">
							<p className="max-w-[48ch]">
								Most days that means AI products, automation, online stores, customer portals, dashboards and internal tools.
							</p>
							<p className="max-w-[48ch]">
								I run Anomys, co-own KASTM and work directly with businesses and teams that need someone who can see the whole system.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="py-20 sm:py-28 lg:py-36">
			<div className="container">
				<div className="grid gap-12 border-t border-neutral-950/10 pt-8 lg:grid-cols-[3fr_9fr]">
					<div className="grid content-start gap-3">
						<p className="text-base font-medium text-neutral-950 sm:text-sm">What I do</p>
						<p className="max-w-[28ch] text-base text-pretty text-neutral-500 sm:text-sm">
							From the first useful question to the working thing.
						</p>
					</div>
					<ul role="list" className="grid">
						{capabilities.map((item) => (
							<li key={item.number} className="grid gap-6 border-t border-neutral-950/10 py-8 first:border-t-0 first:pt-0 sm:grid-cols-[4rem_1fr_2fr] sm:gap-8">
								<p className="tabular-nums text-base text-neutral-400 sm:text-sm">{item.number}</p>
								<h2 className="text-2xl font-medium tracking-tight text-balance text-neutral-950">{item.title}</h2>
								<p className="max-w-[52ch] text-lg text-pretty text-neutral-500 sm:text-base">{item.text}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>

		<section className="py-20 sm:py-28 lg:py-36">
			<div className="container">
				<div className="grid gap-12 border-t border-neutral-950/10 pt-8 lg:grid-cols-[3fr_9fr]">
					<div className="grid content-start gap-3">
						<p className="text-base font-medium text-neutral-950 sm:text-sm">Away from the browser</p>
						<p className="max-w-[30ch] text-base text-pretty text-neutral-500 sm:text-sm">
							A growing archive of the setup, the car and everything in between.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-12">
						<figure className="grid gap-3 sm:col-span-5">
							<div className="relative aspect-[4/5] overflow-hidden bg-neutral-950 outline-1 -outline-offset-1 outline-neutral-950/5">
								<Image src="/images/hero_image.png" fill sizes="(min-width: 640px) 38vw, 100vw" alt="Portrait of Stefan Stankovic" className="object-cover object-bottom" />
							</div>
							<figcaption className="text-base text-neutral-500 sm:text-sm">Portrait, Dubai</figcaption>
						</figure>
						<figure className="grid content-start gap-3 sm:col-span-7 sm:pt-24">
							<div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 outline-1 -outline-offset-1 outline-neutral-950/5">
								<Image src="/desk_setup.jpg" fill sizes="(min-width: 640px) 54vw, 100vw" alt="Stefan's desk setup" className="object-cover" />
							</div>
							<figcaption className="text-base text-neutral-500 sm:text-sm">The desk, one of many versions</figcaption>
						</figure>
						<figure className="grid gap-3 sm:col-span-8 sm:col-start-3">
							<div className="relative aspect-[3/2] overflow-hidden bg-neutral-100 outline-1 -outline-offset-1 outline-neutral-950/5">
								<Image src="/stefans_image_with_bg.jpg" fill sizes="(min-width: 640px) 62vw, 100vw" alt="Stefan having coffee outdoors" className="object-cover" />
							</div>
							<figcaption className="text-base text-neutral-500 sm:text-sm">Coffee, before Dubai</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</section>

		<section className="py-20 sm:py-28 lg:py-36">
			<div className="container">
				<div className="grid gap-12 border-t border-neutral-950/10 pt-8 lg:grid-cols-[3fr_9fr]">
					<p className="text-base font-medium text-neutral-950 sm:text-sm">How I work</p>
					<ul role="list" className="grid gap-10 md:grid-cols-3 md:gap-8">
						{principles.map(([title, text], index) => (
							<li key={title} className="grid content-start gap-5 border-t border-neutral-950/10 pt-6 md:border-t-0 md:pt-0">
								<p className="tabular-nums text-base text-neutral-400 sm:text-sm">0{index + 1}</p>
								<h2 className="max-w-[22ch] text-xl font-medium tracking-tight text-balance text-neutral-950">{title}</h2>
								<p className="max-w-[36ch] text-lg text-pretty text-neutral-500 sm:text-base">{text}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>

		<section className="py-20 sm:py-28 lg:py-36">
			<div className="container">
				<div className="grid gap-12 border-t border-neutral-950/10 pt-8 lg:grid-cols-[3fr_9fr]">
					<p className="text-base font-medium text-neutral-950 sm:text-sm">Next</p>
					<div className="grid gap-10">
						<h2 className="max-w-[18ch] text-4xl font-medium tracking-tight text-balance text-neutral-950 sm:text-5xl lg:text-6xl">
							Have a difficult problem worth solving?
						</h2>
						<div className="flex flex-wrap items-center gap-x-8 gap-y-5">
							<Link href="/contact" className="border-b border-neutral-950 pb-1 text-lg text-neutral-950 hover:border-neutral-400">
								Let’s talk
							</Link>
							<a href="https://calendly.com/stefansdev/jamtime" target="_blank" rel="noopener noreferrer" className="border-b border-neutral-300 pb-1 text-lg text-neutral-500 hover:border-neutral-950 hover:text-neutral-950">
								Schedule a call
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
);

export default Hero;
