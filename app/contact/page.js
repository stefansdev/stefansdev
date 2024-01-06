import HeroSingle from '@/components/HeroSingle';
import ContactForm from '@/components/ContactForm';
import Content from '@/components/Content';
// data
import GetContact from '$queries/getContact';

const page = async () => {
	const contact = await GetContact();
	return (
		<>
			<HeroSingle title={contact.title} />
			<div className="py-20">
				<div className="prose mx-auto">
					<Content content={contact.content} />
					<h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Send me a message</h2>
					<ContactForm />
				</div>
			</div>
		</>
	);
};
export default page;
