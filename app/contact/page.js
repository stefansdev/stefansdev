import HeroSingle from '@/components/HeroSingle';
import ContactForm from '@/components/ContactForm';
import { buildPageMetadata } from '@/utils/pageMetadata';

export const metadata = buildPageMetadata({
	title: 'Contact',
	description: 'Get in touch with Stefan Stankovic about product, ecommerce, systems and AI work.',
	image: '/meta/contact.jpg',
	imageAlt: 'Contact Stefan Stankovic',
});

const ContactPage = () => (
	<>
		<HeroSingle title="CONTACT" eyebrow="Contact" />
		<section className="pb-12 sm:pb-16">
			<div className="container grid gap-8 border-t border-white/10 pt-8" data-reveal-group>
				<div className="grid content-start gap-3" data-reveal-item>
					<p className="text-base font-medium text-neutral-100 sm:text-sm">Start here</p>
					<p className="text-base text-pretty text-neutral-400 sm:text-sm">A little context is enough. We can work out the rest together.</p>
				</div>
				<div className="grid gap-10" data-reveal-item data-reveal-group>
					<div className="prose max-w-none" data-reveal-item>
						<p>
							Email me at <a href="mailto:s@stefans.dev">s@stefans.dev</a>, use the form below, or find me on:
						</p>
						<ul>
							<li><a href="https://twitter.com/stefansdev" target="_blank" rel="noopener noreferrer">X</a></li>
							<li><a href="https://www.instagram.com/stefans.dev/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
						</ul>
						<p>I’m open to conversations about product, ecommerce, systems and AI work. If you think there might be a fit, send me a note and I’ll get back to you.</p>
					</div>
					<div data-reveal-item>
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	</>
);

export default ContactPage;
