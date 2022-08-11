import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import Seo from '@/components/Seo';
import GetContact from '@/hooks/GetContact';
import ContactForm from '@/components/ContactForm';

const Contact = ({ contact }) => (
	<>
		<Seo seo={contact.seo} />
		<Header />
		<div className="container mx-auto max-w-4xl py-12 md:py-28">
			<div className="relative">
				<PageTitle title="CONTACT" subtitle="REACH OUT" />
				<div
					className="prose dark:prose-dark mb-20"
					dangerouslySetInnerHTML={{
						__html: contact.content,
					}}
				/>
				<h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Send me a message</h2>
				<ContactForm />
			</div>
		</div>
		<Footer />
	</>
);

export default Contact;

export async function getStaticProps() {
	const contact = await GetContact();
	return {
		props: {
			contact,
		},
	};
}
