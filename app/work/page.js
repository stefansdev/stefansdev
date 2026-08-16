import Image from 'next/image';
import HeroSingle from '@/components/HeroSingle';
import { buildPageMetadata } from '@/utils/pageMetadata';
import getWork from '$queries/getWork';

export async function generateMetadata() {
	const data = await getWork();
	return buildPageMetadata({
		title: data.meta_title,
		description: data.meta_description,
		image: '/meta/work.jpg',
		imageAlt: 'Selected work by Stefan Stankovic',
	});
}

const additionalPartners = [
	{ id: 'atomik-labz', name: 'Atomik Labz', url: 'https://atomiklabz.com/' },
	{ id: 'kastm', name: 'KASTM', url: 'https://kastm.com/' },
	{ id: 'anti-aging-solution', name: 'Anti-Aging Solution', url: 'https://antiagingsolution.co/' },
	{ id: 'atlas-x', name: 'Atlas X', url: 'https://atlasx.co/' },
	{ id: 'bakers-secret', name: "Baker's Secret", url: 'https://bakerssecret.com.au/' },
	{ id: 'casa-domani', name: 'Casa Domani', url: 'https://casadomani.com.au/' },
	{ id: 'modofera', name: 'Modofera', url: 'https://modofera.com/' },
	{ id: 'peace-post', name: 'Peace Post', url: 'https://www.peace-post.com/' },
	{ id: 'newsx365', name: 'NewsX365', url: 'https://newsx365.com/' },
];

const partnerOverrides = {
	Elevated: { url: 'https://elevateverobeach.com/' },
};

const missingFavicons = new Set(['BigPixelPony', 'H2K', 'Monot', 'Red Bulls LoL']);
const darkFavicons = new Set([
	'FAM',
	'GuardianFall',
	'Krosno',
	'Makonda',
	'Singular Minds',
	'Super Cluster Studio',
]);
const localFavicons = {
	Elevated: '/clients/elevated.png',
};

const getPartnerKey = ({ name, url }) => {
	try {
		return new URL(url).hostname.replace(/^www\./, '').toLowerCase();
	} catch {
		return name.toLowerCase();
	}
};

const getPartners = (partners = []) => {
	const mergedPartners = new Map();
	const cmsPartners = partners.map(({ partners_id: partner }) => ({
		...partner,
		...partnerOverrides[partner.name],
	}));

	for (const partner of [...cmsPartners, ...additionalPartners]) {
		const key = getPartnerKey(partner);
		if (!mergedPartners.has(key)) mergedPartners.set(key, partner);
	}

	return [...mergedPartners.values()].sort((partnerA, partnerB) => {
		if (partnerA.name === 'GuardianFall') return -1;
		if (partnerB.name === 'GuardianFall') return 1;
		return 0;
	});
};

const getFaviconUrl = (name, url) => {
	if (!url || missingFavicons.has(name)) return null;

	try {
		const hostname = new URL(url).hostname;
		return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=128`;
	} catch {
		return null;
	}
};

const PartnerMark = ({ name, url }) => {
	const faviconUrl = localFavicons[name] ?? getFaviconUrl(name, url);

	if (!faviconUrl) {
		return (
			<span aria-hidden="true" className="flex size-5 shrink-0 items-center justify-center">
				<span className="size-2 rounded-full bg-neutral-700" />
			</span>
		);
	}

	return (
		<Image
			src={faviconUrl}
			width={20}
			height={20}
			alt=""
			className={`size-5 shrink-0 rounded-sm object-contain ${darkFavicons.has(name) ? 'bg-white p-0.5' : ''}`}
			unoptimized
		/>
	);
};

const WorkPage = async () => {
	const work = await getWork();
	const partners = getPartners(work.partners);

	return (
		<>
			<HeroSingle title={work.title} eyebrow="Selected work" />
			<section className="pb-12 sm:pb-16">
				<div className="container grid gap-5 border-t border-white/10 pt-8">
					<div className="grid gap-3">
						<p className="text-base font-medium text-neutral-500 sm:text-sm">Current work</p>
						<h2 className="text-2xl font-medium tracking-tight text-pretty text-neutral-100 sm:text-xl">
							Most of my work now lives at Anomys.
						</h2>
					</div>
					<p className="text-base/7 text-pretty text-neutral-400 sm:text-sm/6">
						That is where I lead product, design and development across AI, automation, ecommerce and digital systems. This page is a record of the teams and businesses I have worked with directly or alongside.
					</p>
					<a
						href="https://anomys.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="w-fit border-b border-neutral-100 pb-1 text-base text-neutral-100 hover:border-neutral-500 sm:text-sm"
					>
						Visit anomys.com
					</a>
				</div>
			</section>
			{partners.length ? (
				<section className="pb-12 sm:pb-16">
					<div className="container grid gap-6 border-t border-white/10 pt-8">
						<div className="grid content-start gap-3">
							<p className="text-base font-medium text-neutral-100 sm:text-sm">Partners and clients</p>
							<p className="text-base/7 text-pretty text-neutral-400 sm:text-sm/6">A selection of teams and businesses I have worked with directly or alongside.</p>
						</div>
						<ul role="list" className="grid border-t border-white/10 sm:grid-cols-2 md:grid-cols-3">
							{partners.map((item) => {
								const content = (
									<>
										<PartnerMark name={item.name} url={item.url} />
										<span>{item.name}</span>
									</>
								);

								return (
									<li key={item.id} className="border-b border-white/10">
										{item.url ? (
											<a
												href={item.url}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-3 py-4 text-base text-neutral-400 hover:text-neutral-100 sm:text-sm"
											>
												{content}
											</a>
										) : (
											<div className="flex items-center gap-3 py-4 text-base text-neutral-500 sm:text-sm">{content}</div>
										)}
									</li>
								);
							})}
						</ul>
					</div>
				</section>
			) : null}
		</>
	);
};

export default WorkPage;
