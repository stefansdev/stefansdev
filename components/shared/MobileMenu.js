'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogPanel } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MobileMenu = ({ menu }) => {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	return (
		<>
			<button type="button" className="relative text-neutral-950 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>
				{open ? <XMarkIcon className="size-6 shrink-0" aria-hidden="true" /> : <Bars3Icon className="size-6 shrink-0" aria-hidden="true" />}
				<span className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden" aria-hidden="true" />
				<span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
			</button>

			<Dialog open={open} className="relative z-50 lg:hidden" onClose={setOpen}>
				<DialogPanel className="fixed inset-0 top-24 overflow-y-auto bg-white px-5 pb-8 sm:top-28 sm:px-8">
					<nav aria-label="Mobile navigation" className="flex min-h-full flex-col justify-between border-t border-neutral-950/10 pt-10">
						<ul role="list" className="grid gap-4">
							{menu.map((item) => {
								const active = pathname === item.link || pathname.startsWith(`${item.link}/`);
								return (
									<li key={item.link}>
										<Link href={item.link} onClick={() => setOpen(false)} aria-current={active ? 'page' : undefined} className={active ? 'text-4xl font-medium tracking-tight text-neutral-950' : 'text-4xl font-medium tracking-tight text-neutral-400'}>
											{item.title}
										</Link>
									</li>
								);
							})}
						</ul>
						<Link href="/contact" onClick={() => setOpen(false)} className="border-t border-neutral-950/10 pt-6 text-lg text-neutral-950">
							Start a conversation
						</Link>
					</nav>
				</DialogPanel>
			</Dialog>
		</>
	);
};

export default MobileMenu;
