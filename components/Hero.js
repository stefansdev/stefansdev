import Image from 'next/image';
import Link from 'next/link';
import ExternalLink from '$svg/ExternalLink';

const Hero = () => (
	<section className="relative grid h-screen min-h-[720px] justify-end overflow-hidden bg-black">
		<Image
			src="/images/hero_image.png"
			width={1076}
			height={1076}
			alt="Stefan S. | stefans.dev"
			className="block h-full w-auto"
		/>
		<div className="container absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-[40%] text-white">
			<div className="max-w-[680px]">
				<h1 className="font-headings mb-12 text-6xl font-bold">Jamstack & Headless web developer</h1>
				<div className="mb-16 text-lg font-light text-neutral-400">
					<p className="mb-2">Full Stack Javascript developer specialised in Jamstack & Headless.</p>
					<p>
						With a team of talented creatives by my side, we are building blazingly fast web sites and
						applications.
					</p>
				</div>
				<div className="font-headings flex items-center space-x-10">
					<Link
						href="/contact"
						class="rounded-sm bg-white px-14 py-4 text-xs font-medium tracking-[14%] text-black transition-all hover:bg-slate-100"
					>
						CONTACT
					</Link>
					<a
						href="https://calendly.com/stefansdev/meet-me"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-3 border-b border-neutral-700 py-1 text-xs font-medium uppercase tracking-[14%] transition-all hover:border-neutral-300"
					>
						<span> Or schedule a call</span>
						<ExternalLink />
					</a>
				</div>
			</div>
		</div>
	</section>
);

export default Hero;
