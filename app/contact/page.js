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
			<div className="py-16 lg:py-20">
				<Content content={contact.content} />
				<ContactForm />
			</div>
		</>
	);
};
export default page;
