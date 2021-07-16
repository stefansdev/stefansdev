import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';

const Contact = () => (
	<>
		<Header />
		<div className="container mx-auto max-w-4xl py-28">
			<div className="relative">
				<PageTitle titleStroke="CONTACT" subtitle="REACH OUT TO ME" />
			</div>
		</div>
		<Footer />
	</>
);

export default Contact;

export async function getStaticProps(context) {
	return {
		props: {}, // will be passed to the page component as props
	};
}
