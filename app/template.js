import { ViewTransition } from 'react';

// Templates remount on every navigation, so each route change plays a page exit/enter view transition.
export default function Template({ children }) {
	return (
		<ViewTransition enter="page-enter" exit="page-exit" default="none">
			<div className="page">{children}</div>
		</ViewTransition>
	);
}
