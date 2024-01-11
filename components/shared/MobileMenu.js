import { useState, Fragment } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';

const MobileMenu = ({ menu }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			{open ? (
				<button
					type="button"
					className="relative lg:hidden"
					onClick={() => {
						setOpen(!open);
					}}
				>
					<XMarkIcon className="h-6 w-6" aria-hidden="true" />
					<span className="sr-only">Close menu</span>
				</button>
			) : (
				<button
					type="button"
					className="relative lg:hidden"
					onClick={() => {
						setOpen(!open);
					}}
				>
					<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					<span className="sr-only">Open menu</span>
				</button>
			)}

			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/80 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 top-20 z-10 w-screen overflow-y-auto">
						<div className="flex min-h-full relative">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="bg-white text-neutral-800 absolute inset-x-4 bottom-4 p-4 py-10 text-center rounded-md">
									<ul className="grid gap-3">
										{menu.map((item) => (
											<li key={item.link}>
												<Link
													href={item.link}
													onClick={() => {
														setOpen(false);
													}}
													className="outline-none font-headings uppercase text-sm"
												>
													{item.title}
												</Link>
											</li>
										))}
									</ul>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
};
export default MobileMenu;
