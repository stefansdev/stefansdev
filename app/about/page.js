import Image from 'next/image';
import Link from 'next/link';
import HeroSingle from '@/components/HeroSingle';

const gallery = [
	{
		id: '59b1d57c-54db-4b63-9af0-9af51771a24b',
		width: 410,
		height: 456,
		alt: 'Stefan Stankovic',
	},
	{
		id: '948e8857-42fa-4099-a888-486c667a8647',
		width: 410,
		height: 456,
		alt: 'Stefan Stankovic',
	},
	{
		id: '96a3082b-dd80-4c9c-b4dc-6238e268b960',
		width: 410,
		height: 456,
		alt: 'Stefan Stankovic',
	},
	{
		id: '9b4610eb-6c56-4b44-9df8-8bce6f2b3f44',
		width: 410,
		height: 456,
		alt: 'Stefan Stankovic',
	},
];

export const metadata = {
	title: 'About Stefan Stankovic | AI & Digital Products',
	description:
		'About Stefan Stankovic, founder of Anomys, co-owner of KASTM and consultant working across AI, automation, ecommerce and digital products.',
	openGraph: {
		title: 'About Stefan Stankovic | AI & Digital Products',
		description:
			'Founder of Anomys, co-owner of KASTM and consultant working across AI, automation, ecommerce and digital products.',
		images: [
			{
				url: 'https://stefans.dev/assets/4fc782b2-4aee-4f9f-8c63-11568203d4d5',
				width: 1200,
				height: 627,
				alt: 'Stefan Stankovic',
			},
		],
	},
};

const AboutPage = () => {
	return (
		<>
			<HeroSingle title="About, without the long biography" />
			<section className="px-3 py-16 lg:py-20">
				<div className="mx-auto prose mb-20">
					<h2>Who:</h2>
					<p>
						I&apos;m Stefan Stankovic. I design things, build things, and quite often work out what the
						thing should be in the first place.
					</p>

					<h2>What:</h2>
					<p>
						Mostly AI products and automation these days. Also online stores, customer portals,
						internal systems, dashboards, and the occasional idea that does not have a proper name
						yet.
					</p>

					<h2>Where:</h2>
					<p>
						From Serbia, now living in Dubai. Working with clients and teams across borders and time
						zones.
					</p>

					<h2>When:</h2>
					<p>Since 2009. Long enough to watch the web reinvent the same ideas several times.</p>

					<h2>Why:</h2>
					<p>
						Because I like taking something unclear, complicated or badly connected and making it
						make sense.
					</p>

					<h2>How:</h2>
					<p>
						By asking questions early, removing what is not needed, and building solutions that help
						businesses scale without adding more mess. Solutions that remove friction for customers,
						simplify work for teams and stay useful long after launch.
					</p>

					<h2>With whom:</h2>
					<p>
						Businesses, agencies and teams that need someone who can see beyond one part of the
						project.
					</p>

					<h2>Now:</h2>
					<p>
						I run Anomys, consult for multiple partners and co-own KASTM, a merchandising partner. I
						still stay close to the actual work.
					</p>

					<h2>Before:</h2>
					<p>
						Design studios, development teams, gaming communities and esports events. Different work,
						but the same lesson: people matter more than the platform.
					</p>

					<h2>What next:</h2>
					<p>Probably something difficult. Those tend to be the interesting projects.</p>

					<h2>Got one?</h2>
					<p>
						<Link href="/contact">Let&apos;s talk.</Link>
					</p>
				</div>
				<div className="container grid grid-cols-2 lg:grid-cols-4 gap-5">
					{gallery.map((image) => (
						<Image
							src={`/assets/${image.id}`}
							width={image.width}
							height={image.height}
							alt={image.alt}
							key={image.id}
							className="block"
						/>
					))}
				</div>
			</section>
		</>
	);
};
export default AboutPage;
