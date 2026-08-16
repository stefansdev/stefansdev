import Image from 'next/image';
import Link from 'next/link';

const capabilities = [
	['Product direction', 'What to build, why it matters and what can be removed.'],
	['Design and development', 'Products, ecommerce, portals and internal tools.'],
	['Systems and AI', 'Useful automation for complicated operations.'],
];

const currentWork = [
	['Anomys', 'CEO, digital products and AI systems.'],
	['KASTM', 'Merchandise, ecommerce and operations.'],
	['Consulting', 'Long-term product partnerships.'],
];

const IndexRow = ({ label, children }) => (
	<section className="grid gap-4 border-t border-white/10 py-8 sm:grid-cols-[8rem_1fr] sm:gap-8 sm:py-10">
		<h2 className="text-sm font-medium text-neutral-100">{label}</h2>
		<div>{children}</div>
	</section>
);

const Hero = () => (
	<div className="container py-12 sm:py-16">
		<header className="grid gap-7 pb-12 sm:grid-cols-[1fr_8rem] sm:items-start sm:gap-10 sm:pb-16">
			<div className="grid gap-5">
				<div className="grid gap-1">
					<p className="text-sm text-neutral-500">Founder &amp; CEO at Anomys · Dubai</p>
					<h1 className="text-4xl font-medium tracking-tight text-neutral-100 sm:text-5xl">Stefan Stankovic</h1>
				</div>
				<p className="max-w-[34ch] text-2xl tracking-tight text-pretty text-neutral-300 sm:text-3xl">
					I turn unclear ideas and complicated systems into useful digital products.
				</p>
				<div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
					<Link href="/work" className="border-b border-neutral-100 pb-1 text-neutral-100 hover:border-neutral-500">View work</Link>
					<Link href="/contact" className="border-b border-white/20 pb-1 text-neutral-400 hover:border-neutral-100 hover:text-neutral-100">Get in touch</Link>
				</div>
			</div>
			<div className="relative row-start-1 aspect-[4/5] w-24 overflow-hidden sm:col-start-2 sm:w-32">
				<Image src="/images/hero_image.png" fill sizes="128px" alt="Stefan Stankovic" className="object-cover object-bottom" priority />
			</div>
		</header>

		<IndexRow label="Focus">
			<ul role="list" className="grid">
				{capabilities.map(([title, text]) => (
					<li key={title} className="grid gap-1 border-t border-white/10 py-4 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-5">
						<h3 className="text-base font-medium text-neutral-100">{title}</h3>
						<p className="max-w-[38ch] text-base text-pretty text-neutral-400">{text}</p>
					</li>
				))}
			</ul>
		</IndexRow>

		<IndexRow label="Current">
			<dl className="grid">
				{currentWork.map(([name, description]) => (
					<div key={name} className="grid gap-1 border-t border-white/10 py-4 first:border-t-0 first:pt-0 sm:grid-cols-[8rem_1fr] sm:gap-5">
						<dt className="text-base font-medium text-neutral-100">{name}</dt>
						<dd className="text-base text-pretty text-neutral-400">{description}</dd>
					</div>
				))}
			</dl>
		</IndexRow>

		<section aria-label="Personal photographs" className="grid gap-3 border-t border-white/10 py-8 sm:grid-cols-2 sm:py-10">
			<figure className="relative aspect-[4/3] overflow-hidden bg-neutral-900 outline-1 -outline-offset-1 outline-white/10">
				<Image src="/home-car.png" fill sizes="(min-width: 640px) 300px, 100vw" alt="Grey Dodge Challenger parked beside a lake" className="object-cover" />
			</figure>
			<figure className="relative aspect-[4/3] overflow-hidden bg-neutral-900 outline-1 -outline-offset-1 outline-white/10">
				<Image src="/home-dubai-sunset.png" fill sizes="(min-width: 640px) 300px, 100vw" alt="Sunset over the Dubai skyline" className="object-cover" />
			</figure>
		</section>

		<IndexRow label="Contact">
			<div className="grid gap-4">
				<p className="max-w-[38ch] text-xl tracking-tight text-pretty text-neutral-300">
					Have a difficult problem worth solving? Tell me about it.
				</p>
				<div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
					<Link href="/contact" className="border-b border-neutral-100 pb-1 text-neutral-100 hover:border-neutral-500">Send a message</Link>
					<a href="https://stefans.dev/call" target="_blank" rel="noopener noreferrer" className="border-b border-white/20 pb-1 text-neutral-400 hover:border-neutral-100 hover:text-neutral-100">Schedule a call</a>
				</div>
			</div>
		</IndexRow>
	</div>
);

export default Hero;
