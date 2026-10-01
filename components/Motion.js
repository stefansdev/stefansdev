'use client';

import { useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const REVEAL_SELECTOR = '[data-reveal], [data-reveal-group]';
const STAGGER = 40;
const MAX_STAGGER_ITEMS = 6;

// Nested groups continue their parent's stagger instead of restarting at 0.
const assignDelays = (group, offset = 0) => {
	const items = [...group.querySelectorAll(':scope > [data-reveal-item]')];
	for (const [index, item] of items.entries()) {
		const delay = offset + Math.min(index, MAX_STAGGER_ITEMS) * STAGGER;
		item.style.setProperty('--reveal-delay', `${delay}ms`);
		if (item.hasAttribute('data-reveal-group')) assignDelays(item, delay);
	}
};

const Motion = () => {
	const pathname = usePathname();
	const isFirstRun = useRef(true);

	useLayoutEffect(() => {
		const root = document.documentElement;
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const elements = [...document.querySelectorAll(REVEAL_SELECTOR)];

		for (const element of elements) {
			if (!element.matches('[data-reveal-item]')) assignDelays(element);
		}

		if (reducedMotion || !('IntersectionObserver' in window)) {
			root.classList.remove('motion-ready');
			for (const element of elements) element.classList.add('is-revealed');
			return;
		}

		// Anything inside the first viewport is shown immediately: on first load it is already painted,
		// and on navigation the page view transition animates it in as one piece.
		const viewportTop = isFirstRun.current ? window.scrollY : 0;
		const viewportBottom = viewportTop + window.innerHeight;
		isFirstRun.current = false;

		const pending = [];
		for (const element of elements) {
			if (element.classList.contains('is-revealed')) continue;
			const top = element.getBoundingClientRect().top + window.scrollY;
			if (top < viewportBottom) element.classList.add('is-revealed');
			else pending.push(element);
		}

		root.classList.add('motion-instant', 'motion-ready');
		void root.offsetWidth;
		root.classList.remove('motion-instant');

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add('is-revealed');
					observer.unobserve(entry.target);
				}
			},
			// A fixed margin (not a %) so elements at the very end of the page, like the footer, can still trigger.
			{ rootMargin: '0px 0px -48px 0px', threshold: 0 },
		);

		for (const element of pending) observer.observe(element);

		return () => observer.disconnect();
	}, [pathname]);

	return null;
};

export default Motion;
