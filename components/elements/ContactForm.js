import React from 'react';

const ContactForm = () => (
	<form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
		<div>
			<label htmlFor="full-name" className="sr-only">
				Your name
			</label>
			<input
				type="text"
				name="full-name"
				id="full-name"
				autoComplete="name"
				className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-300 focus:ring-gray-800 dark:focus:ring-gray-500 focus:border-gray-800 border-gray-300 dark:border-gray-500 rounded-md dark:bg-gray-700"
				placeholder="Your name"
			/>
		</div>
		<div>
			<label htmlFor="email" className="sr-only">
				Email
			</label>
			<input
				id="email"
				name="email"
				type="email"
				autoComplete="email"
				className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-300 focus:ring-gray-700 dark:focus:ring-gray-500 focus:border-gray-700 border-gray-300 dark:border-gray-500 rounded-md dark:bg-gray-700"
				placeholder="Email"
			/>
		</div>
		<div>
			<label htmlFor="message" className="sr-only">
				Message
			</label>
			<textarea
				id="message"
				name="message"
				rows={4}
				className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-300 focus:ring-gray-800 dark:focus:ring-gray-500 focus:border-gray-800 border-gray-300 dark:border-gray-500 rounded-md dark:bg-gray-700"
				placeholder="Message"
				defaultValue=""
			/>
		</div>
		<div>
			<button
				type="submit"
				className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-300 dark:text-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
			>
				Submit
			</button>
		</div>
	</form>
);

export default ContactForm;
