'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

const REVEAL_SELECTOR = '[data-reveal], [data-reveal-group]';

const Motion = () => {
	const pathname = usePathname();

	useLayoutEffect(() => {
		const root = document.documentElement;
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const elements = [...document.querySelectorAll(REVEAL_SELECTOR)];

		for (const element of elements) {
			const items = [...element.querySelectorAll(':scope > [data-reveal-item]')];
			for (const [index, item] of items.entries()) {
				item.style.setProperty('--reveal-delay', `${Math.min(index, 7) * 70}ms`);
			}
		}

		if (reducedMotion) {
			root.classList.remove('motion-ready');
			for (const element of elements) element.classList.add('is-revealed');
			return;
		}

		root.classList.add('motion-ready');
		if (!('IntersectionObserver' in window)) {
			for (const element of elements) element.classList.add('is-revealed');
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add('is-revealed');
					observer.unobserve(entry.target);
				}
			},
			{ rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
		);

		for (const element of elements) observer.observe(element);

		return () => observer.disconnect();
	}, [pathname]);

	return null;
};

export default Motion;
