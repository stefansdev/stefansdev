import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => (
	<>
		<Header />

		<main className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
			<div className="flex-shrink-0 my-auto py-16 sm:py-32">
				<p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">404 error</p>
				<h1 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-5xl">
					Page not found
				</h1>
				<p className="mt-2 text-base text-gray-500 dark:text-gray-400">
					Sorry, we couldn’t find the page you’re looking for.
				</p>
				<div className="mt-6">
					<Link href="/">
						<a className="text-base font-medium text-blue-600 hover:text-blue-500">
							Go back home<span aria-hidden="true"> &rarr;</span>
						</a>
					</Link>
				</div>
			</div>
		</main>
		<Footer />
	</>
);

export default NotFound;
