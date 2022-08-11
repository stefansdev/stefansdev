import React from 'react';
import { MailIcon } from '@heroicons/react/outline';
import ContactForm from './elements/ContactForm';

const Contact = () => (
	<section className="py-4">
		<div className="container mx-auto max-w-7xl">
			<div className="relative ">
				<div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
					<div className="lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
						<div className="max-w-lg mx-auto">
							<h3 className="uppercase text-4xl leading-10 font-extrabold mb-4">
								<span className="text-stroke text-white dark:text-stroke-white dark:text-gray-800">
									GET IN.
								</span>{' '}
								TOUCH
							</h3>
							<h4 className="leading-5 font-medium text-gray-500 dark:text-gray-400">
								If you would like to contact me directly, feel free to do it directly on email or by
								filling the contact form, and I’ll get back to you.
							</h4>
							<dl className="mt-8 text-base text-gray-500">
								<div className="mb-12">
									<p>Time Zone: CET</p>
									<dd>
										<p>Belgrade, Serbia</p>
									</dd>
								</div>

								<div className="mt-3">
									<h3 className="mb-4 text-xl text-gray-700">Say hi:</h3>
									<dt className="sr-only">Email</dt>
									<dd className="">
										<a href="mailto:s@stefans.dev" className="flex">
											<MailIcon
												className="flex-shrink-0 h-6 w-6 text-gray-400"
												aria-hidden="true"
											/>
											<span className="ml-3">s@stefans.dev</span>
										</a>
									</dd>
								</div>
							</dl>
						</div>
					</div>
					<div className="py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
						<div className="max-w-lg mx-auto lg:max-w-none">
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Contact;
