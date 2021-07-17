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
				<div className="prose dark:text-gray-200">
					<p>
						If you would like to contact me for any reason, please email me at{' '}
						<a className="dark:text-gray-100" href="mailto:s@stefans.dev">
							s@stefans.dev
						</a>
						.<br />
						You can also use my social networks to do so:
						<ul className="dark:text-gray-200">
							<li>
								<a className="dark:text-gray-100" href="https://twitter.com/st3f4ns">
									Twitter
								</a>
							</li>
							<li>
								<a className="dark:text-gray-100" href="https://instagram.com/stefans.dev">
									Instagram
								</a>
							</li>
						</ul>
					</p>
					<p>
						I&apos;m not always available for client work, but I&apos;m always open to discuss it with you,
						I can recommend someone fit for it. <br />
						If its headless / jamstack project, I encourage you to do so, I&apos;m realy interested in
						those.
					</p>
					<hr />
					<p>
						If you want to send me free stuff, btw, I&apos;m open to offers, but I won&apos;t give you my
						promise that it will be advertised on social networks. Although, I love stickers! Send me an
						email and I&apos;ll you the mailing address.
					</p>
				</div>
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
