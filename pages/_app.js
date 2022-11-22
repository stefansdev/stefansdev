import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { AppContextProvider } from '@/utils/AppContext';

import '@/styles/app.scss';

function MyApp({ Component, pageProps }) {
	return (
		<AppContextProvider>
			<ThemeProvider attribute="class">
				<Component {...pageProps} />
				<Analytics />
			</ThemeProvider>
		</AppContextProvider>
	);
}
export default MyApp;
