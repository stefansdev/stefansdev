import Image from 'next/image';
import Link from 'next/link';
import ExternalLink from '$svg/ExternalLink';

const Hero = () => (
	<section className="relative grid h-[calc(100vh-120px)] lg:h-screen min-h-[720px] justify-end overflow-hidden bg-black">
		<Image
			src="/images/hero_image.png"
			width={1076}
			height={1076}
			alt="Stefan S. | stefans.dev"
			priority
			quality={100}
			className="block lg:h-full lg:object-contain lg:object-right-bottom lg:max-w-[1100px] w-auto"
		/>
		<div className="container absolute left-1/2 bottom-10 lg:bottom-auto lg:top-1/2 z-10 -translate-x-1/2 lg:-translate-y-[40%] text-white">
			<div className="max-w-[680px]">
				<h1 className="font-headings mb-4 lg:mb-12 text-4xl lg:text-6xl font-bold bg-[linear-gradient(158deg,rgb(255,255,247)_8.55094%,rgb(152,152,138)_107.012%)] bg-clip-text text-transparent">
					Jamstack & Headless web developer
				</h1>
				<div className="mb-10 lg:mb-16 lg:text-lg font-light text-neutral-400">
					<p className="mb-2">Full Stack Javascript developer specialised in Jamstack & Headless.</p>
					<p>
						With a team of talented creatives by my side, we are building blazingly fast web sites and
						applications.
					</p>
				</div>
				<div className="font-headings flex items-center space-x-6 lg:space-x-10">
					<Link
						href="/contact"
						className="rounded-sm bg-white px-14 py-4 text-xs font-medium tracking-[14%] transition-all text-black hover:text-white hover:bg-red-500"
					>
						CONTACT
					</Link>
					<a
						href="https://calendly.com/stefansdev/jamtime"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-3 border-b border-neutral-700 py-1 text-xs font-medium uppercase tracking-[14%] transition-all hover:border-red-800 hover:text-red-500"
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
