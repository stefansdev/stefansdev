import Image from 'next/image';
import Link from 'next/link';
import HeroSingle from '@/components/HeroSingle';
import { buildPageMetadata } from '@/utils/pageMetadata';

const gallery = [
	{ id: '59b1d57c-54db-4b63-9af0-9af51771a24b', width: 410, height: 456, alt: 'Stefan Stankovic' },
	{ id: '948e8857-42fa-4099-a888-486c667a8647', width: 410, height: 456, alt: 'Stefan Stankovic' },
	{ id: '96a3082b-dd80-4c9c-b4dc-6238e268b960', width: 410, height: 456, alt: 'Stefan Stankovic' },
	{ id: '9b4610eb-6c56-4b44-9df8-8bce6f2b3f44', width: 410, height: 456, alt: 'Stefan Stankovic' },
];

export const metadata = buildPageMetadata({
	title: 'About',
	description: 'About Stefan Stankovic, founder of Anomys, co-owner of KASTM and consultant working across AI, automation, ecommerce and digital products.',
	image: '/meta/about.jpg',
	imageAlt: 'About Stefan Stankovic',
});

const AboutPage = () => (
	<>
		<HeroSingle title="About, without the long biography" eyebrow="Profile" />
		<section className="pb-12 sm:pb-16">
			<div className="container border-t border-white/10 pt-8">
				<div className="prose max-w-[70ch]">
					<h2>Who</h2>
					<p>I’m Stefan Stankovic. I design things, build things and quite often work out what the thing should be in the first place.</p>
					<h2>What</h2>
					<p>Mostly AI products and automation these days. Also online stores, customer portals, internal systems, dashboards and the occasional idea that does not have a proper name yet.</p>
					<h2>Where</h2>
					<p>From Serbia, now living in Dubai. Working with clients and teams across borders and time zones.</p>
					<h2>When</h2>
					<p>Since 2009. Long enough to watch the web reinvent the same ideas several times.</p>
					<h2>Why</h2>
					<p>Because I like taking something unclear, complicated or badly connected and making it make sense.</p>
					<h2>How</h2>
					<p>By asking questions early, removing what is not needed and building solutions that help businesses scale without adding more mess. Solutions that remove friction for customers, simplify work for teams and stay useful long after launch.</p>
					<h2>With whom</h2>
					<p>Businesses, agencies and teams that need someone who can see beyond one part of the project.</p>
					<h2>Now</h2>
					<p>I run Anomys, consult for multiple partners and co-own KASTM, a merchandising partner. I still stay close to the actual work.</p>
					<h2>Before</h2>
					<p>Design studios, development teams, gaming communities and esports events. Different work, but the same lesson: people matter more than the platform.</p>
					<h2>What next</h2>
					<p>Probably something difficult. Those tend to be the interesting projects.</p>
					<h2>Got one?</h2>
					<p><Link href="/contact">Let’s talk.</Link></p>
				</div>
			</div>
		</section>
		<section className="pb-12 sm:pb-16">
			<div className="container">
				<div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4">
					{gallery.map((image) => (
						<Image src={`/assets/${image.id}`} width={image.width} height={image.height} alt={image.alt} key={image.id} className="w-full outline-1 -outline-offset-1 outline-white/10" />
					))}
				</div>
			</div>
		</section>
	</>
);

export default AboutPage;
