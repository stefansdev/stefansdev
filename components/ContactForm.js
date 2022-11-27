/* eslint-disable no-unused-vars */
import { useState, Fragment } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
	const [open, setOpen] = useState(false);
	const [submitState, setSubmitState] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data, e) => {
		await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...data }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status === 'success') {
					setSubmitState(true);
					setOpen(true);
					reset();
				} else {
					setSubmitState(false);
				}
			});
	};
	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 max-w-2xl "
			>
				<div>
					<label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
						First name
					</label>
					<div className="mt-1">
						<input
							type="text"
							name="first-name"
							id="first-name"
							{...register('first_name', { required: true })}
							autoComplete="given-name"
							className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-indigo-500 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md"
						/>
					</div>
				</div>
				<div>
					<label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
						Last name
					</label>
					<div className="mt-1">
						<input
							type="text"
							name="last-name"
							id="last-name"
							{...register('last_name')}
							autoComplete="family-name"
							className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-indigo-500 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md"
						/>
					</div>
				</div>
				<div className="sm:col-span-2">
					<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
						Email
					</label>
					<div className="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							{...register('email', { required: true })}
							autoComplete="email"
							className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-indigo-500 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md"
						/>
					</div>
				</div>
				<div className="sm:col-span-2">
					<label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
						Company
					</label>
					<div className="mt-1">
						<input
							type="text"
							name="company"
							id="company"
							{...register('company')}
							autoComplete="organization"
							className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-indigo-500 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md"
						/>
					</div>
				</div>
				<div className="sm:col-span-2">
					<div className="flex justify-between">
						<label
							htmlFor="how-can-we-help"
							className="block text-sm font-medium text-gray-700 dark:text-gray-200"
						>
							How can I help you?
						</label>
						<span id="how-can-we-help-description" className="text-sm text-gray-500">
							Max. 500 characters
						</span>
					</div>
					<div className="mt-1">
						<textarea
							id="how-can-we-help"
							name="how-can-we-help"
							{...register('message', { required: true })}
							aria-describedby="how-can-we-help-description"
							rows={4}
							className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-indigo-500 border bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md "
							defaultValue=""
						/>
					</div>
				</div>
				<div className="text-right sm:col-span-2">
					<button
						type="submit"
						className="bg-gray-800 border border-gray-100 dark:border-gray-600 rounded-md py-3 text-center px-4 items-center gap-4 transition-gpu transition-all duration-300 hover:bg-blue-500 text-white hover:text-white dark:bg-gray-600 dark:hover:bg-blue-500 hover:-translate-y-1 font-bold"
					>
						Submit
					</button>
				</div>
			</form>
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
					<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<div className="inline-block align-bottom bg-white dark:bg-gray-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6">
								<div>
									<div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-500 mb-12">
										<CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
									</div>
									<div className="mt-3 text-center sm:mt-5">
										<Dialog.Title as="h3" className="text-2xl leading-6 font-bold mb-8">
											Thanks
										</Dialog.Title>
										<div className="mt-2">
											<p className="">
												I'm looking forward to talking with you and will be in touch within 1
												business day.
											</p>
										</div>
									</div>
								</div>
								<div className="mt-5 sm:mt-6">
									<Link href="/">
										<button
											type="button"
											className="bg-gray-800 border border-gray-100 dark:border-gray-600 rounded-md py-3 text-center px-4 items-center gap-4 transition-gpu transition-all duration-300 hover:bg-blue-500 text-white hover:text-white dark:bg-gray-600 dark:hover:bg-blue-500 hover:-translate-y-1 font-bold block w-full"
											onClick={() => setOpen(false)}
										>
											Go back to homepage
										</button>
									</Link>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
};

export default ContactForm;
