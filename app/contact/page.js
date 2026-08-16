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
			<section className="py-16 sm:py-24 lg:py-32">
				<div className="container grid gap-12 border-t border-neutral-950/10 pt-8 lg:grid-cols-[3fr_9fr]">
					<div className="grid content-start gap-3">
						<p className="text-base font-medium text-neutral-950 sm:text-sm">Start here</p>
						<p className="max-w-[30ch] text-base text-pretty text-neutral-500 sm:text-sm">A little context is enough. We can work out the rest together.</p>
					</div>
					<div className="grid max-w-3xl gap-12">
						<Content content={contact.content} />
						<ContactForm />
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactPage;
