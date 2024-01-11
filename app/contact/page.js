import HeroSingle from '@/components/HeroSingle';
import ContactForm from '@/components/ContactForm';
import Content from '@/components/Content';
// data
import getContact from '$queries/getContact';

export async function generateMetadata() {
	const data = await getContact();
	return {
		title: data.meta_title,
		description: data.meta_description,
		openGraph: {
			title: data.meta_title,
			description: data.meta_description,
			images: [
				{
					url: `https://stefans.dev/assets/${data.meta_image.id}`,
					width: data.meta_image.width,
					height: data.meta_image.height,
					alt: data.meta_image.title,
				},
			],
		},
	};
}

const page = async () => {
	const contact = await getContact();
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
