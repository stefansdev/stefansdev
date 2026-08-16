import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
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

			<Dialog open={open} className="relative z-10" onClose={setOpen}>
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-black/80 transition-opacity duration-300 ease-out data-closed:opacity-0 data-leave:duration-200 data-leave:ease-in"
				/>

				<div className="fixed inset-0 top-20 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full relative">
						<DialogPanel
							transition
							className="bg-white text-neutral-800 absolute inset-x-4 bottom-4 p-4 py-10 text-center rounded-md transition duration-300 ease-out data-closed:translate-y-4 data-closed:opacity-0 data-leave:duration-200 data-leave:ease-in sm:data-closed:translate-y-0 sm:data-closed:scale-95"
						>
							<ul className="grid gap-3">
								{menu.map((item) => (
									<li key={item.link}>
										<Link
											href={item.link}
											onClick={() => {
												setOpen(false);
											}}
											className="outline-hidden font-headings uppercase text-sm"
										>
											{item.title}
										</Link>
									</li>
								))}
							</ul>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</>
	);
};
export default MobileMenu;
