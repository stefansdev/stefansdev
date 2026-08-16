import {
	CommandLineIcon,
	ComputerDesktopIcon,
	CpuChipIcon,
	CursorArrowRaysIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import HeroSingle from '@/components/HeroSingle';
import { buildPageMetadata } from '@/utils/pageMetadata';

export const metadata = buildPageMetadata({
	title: 'Uses',
	description: 'The computers, desk setup, apps and AI tools Stefan Stankovic uses for design, development and product work.',
	image: '/meta/uses.jpg',
	imageAlt: 'Tools and setup used by Stefan Stankovic',
});

const ExternalLink = ({ href, children }) => (
	<a
		href={href}
		target="_blank"
		rel="noreferrer"
		className="font-medium text-neutral-200 underline decoration-white/20 underline-offset-4 hover:decoration-neutral-100"
	>
		{children}
	</a>
);

const sections = [
	{
		title: 'Computers & desk',
		icon: ComputerDesktopIcon,
		items: [
			{
				name: 'Laptop',
				description: '16-inch MacBook Pro with an M4 Max and 36 GB of memory. My main machine, usually docked.',
			},
			{
				name: 'Displays',
				description: 'Apple Pro Display XDR and Alienware AW3225QF.',
			},
			{
				name: 'Desktop PC',
				description: 'A custom-built PC running a dual-boot setup with Omarchy and Windows.',
			},
			{
				name: 'Dock',
				description: 'CalDigit TS5.',
			},
			{
				name: 'Desk',
				description: 'A custom butcher-block desk.',
			},
			{
				name: 'Chair',
				description: 'Herman Miller Aeron.',
			},
		],
	},
	{
		title: 'Peripherals',
		icon: CursorArrowRaysIcon,
		items: [
			{
				name: 'Mouse',
				description: 'Logitech G PRO X2 SUPERSTRIKE.',
			},
			{
				name: 'Keyboards',
				description: 'Magic Keyboard is the main one, with MX Keys and Lofree Flow 2 also in rotation.',
			},
			{
				name: 'Headphones',
				description: 'Sony WH-1000XM4 for work and music, AirPods Pro outside and Logitech G PRO X 2 for gaming.',
			},
			{
				name: 'Speakers',
				description: 'Harman Kardon SoundSticks II.',
			},
			{
				name: 'Camera',
				description: 'Opal C1.',
			},
			{
				name: 'Desk light',
				description: 'BenQ ScreenBar Halo.',
			},
			{
				name: 'Charging',
				description: 'Belkin 3-in-1 MagSafe Charger.',
			},
			{
				name: 'Mobile',
				description: 'iPhone 14 Pro Max and a 12.9-inch M1 iPad Pro.',
			},
		],
	},
	{
		title: 'Apps & workflow',
		icon: CommandLineIcon,
		items: [
			{
				name: 'Editor',
				description: 'Zed since 2025, with Cursor across 2024 and 2025.',
			},
			{
				name: 'Terminal',
				description: 'Ghostty with Herdr.',
			},
			{
				name: 'Browser',
				description: (
					<ExternalLink href="https://helium.computer/">Helium</ExternalLink>
				),
			},
			{
				name: 'Theme & type',
				description: 'Dracula Theme and Operator Mono.',
			},
			{
				name: 'Planning & notes',
				description: 'ClickUp and Raycast Notes.',
			},
			{
				name: 'Calendar',
				description: 'Notion Calendar.',
			},
			{
				name: 'Launcher',
				description: 'Raycast.',
			},
			{
				name: 'Files',
				description: 'Google Drive.',
			},
			{
				name: 'Design',
				description: 'Figma, Affinity Designer and Affinity Photo.',
			},
			{
				name: 'Email',
				description: 'Spark.',
			},
			{
				name: 'Menu bar',
				description: 'Hidden Bar.',
			},
		],
	},
	{
		title: 'AI',
		icon: CpuChipIcon,
		items: [
			{
				name: 'Agentic coding',
				description: (
					<>
						<ExternalLink href="https://github.com/openai/codex">Codex</ExternalLink>,{' '}
						<ExternalLink href="https://chatgpt.com/download/">ChatGPT</ExternalLink> and{' '}
						<ExternalLink href="https://opencode.ai/">OpenCode</ExternalLink> are my main tools right now.
					</>
				),
			},
			{
				name: 'Agent workspace',
				description: (
					<>
						<ExternalLink href="https://herdr.dev/">Herdr</ExternalLink> keeps agents and their terminal sessions organized.
					</>
				),
			},
			{
				name: 'Hermes',
				description: (
					<ExternalLink href="https://hermes-agent.nousresearch.com/">Hermes Agent</ExternalLink>
				),
			},
			{
				name: 'Local models',
				description: (
					<>
						<ExternalLink href="https://lmstudio.ai/">LM Studio</ExternalLink> and{' '}
						<ExternalLink href="https://ollama.com/">Ollama</ExternalLink> for hosting and testing LLMs locally.
					</>
				),
			},
		],
	},
];

const UsesSection = ({ title, icon: Icon, items }) => (
	<section className="grid gap-6 border-t border-white/10 py-8 sm:grid-cols-[9rem_1fr] sm:gap-10 sm:py-10" data-reveal-group>
		<div className="flex items-start gap-3" data-reveal-item>
			<Icon aria-hidden="true" className="size-6 shrink-0 stroke-neutral-500" />
			<h2 className="text-base font-medium text-neutral-100 sm:text-sm">{title}</h2>
		</div>
		<dl className="grid gap-x-8 sm:grid-cols-2" data-reveal-item data-reveal-group>
			{items.map((item) => (
				<div key={item.name} className="grid content-start gap-1 border-t border-white/10 py-4 first:border-t-0 first:pt-0 sm:nth-2:border-t-0 sm:nth-2:pt-0" data-reveal-item>
					<dt className="text-lg font-medium text-neutral-100 sm:text-base">{item.name}</dt>
					<dd className="text-base/7 text-pretty text-neutral-400 sm:text-sm/6">{item.description}</dd>
				</div>
			))}
		</dl>
	</section>
);

const UsesPage = () => (
	<>
		<HeroSingle title="Uses" eyebrow="Tools and setup" />
		<div className="container pb-12 sm:pb-16">
			<figure className="grid gap-3 border-t border-white/10 pt-8" data-reveal-group>
				<div className="relative aspect-[3/2] overflow-hidden outline-1 -outline-offset-1 outline-white/10" data-reveal-item="image" data-motion-image>
					<Image
						src="/uses-desk-setup.png"
						fill
						sizes="(min-width: 48rem) 44rem, calc(100vw - 2.5rem)"
						alt="Desk setup with an ultrawide monitor, keyboard, speakers and desktop PC"
						className="object-cover object-center"
						priority
					/>
				</div>
				<figcaption className="text-base/7 text-pretty text-neutral-400 sm:text-sm/6" data-reveal-item>
					The hardware, software and AI tools I currently rely on for product, design and development work.
				</figcaption>
			</figure>
			{sections.map((section) => (
				<UsesSection key={section.title} {...section} />
			))}
		</div>
	</>
);

export default UsesPage;
