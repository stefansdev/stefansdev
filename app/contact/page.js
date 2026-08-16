import HeroSingle from '@/components/HeroSingle';
import ContactForm from '@/components/ContactForm';
import Content from '@/components/Content';
import getContact from '$queries/getContact';

export async function generateMetadata() {
	const data = await getContact();
	return { title: data.meta_title, description: data.meta_description };
}

const ContactPage = async () => {
	const contact = await getContact();

	return (
		<>
			<HeroSingle title={contact.title} eyebrow="Contact" />
			<section className="pb-12 sm:pb-16">
				<div className="container grid gap-8 border-t border-white/10 pt-8">
					<div className="grid content-start gap-3">
						<p className="text-base font-medium text-neutral-100 sm:text-sm">Start here</p>
						<p className="max-w-[30ch] text-base text-pretty text-neutral-400 sm:text-sm">A little context is enough. We can work out the rest together.</p>
					</div>
					<div className="grid gap-10">
						<Content content={contact.content} />
						<ContactForm />
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactPage;
