import { ThemeProvider } from 'next-themes';
import { AppContextProvider } from '../utils/AppContext'; // import based on where you put it

import '@/styles/app.scss';

function MyApp({ Component, pageProps }) {
	return (
		<AppContextProvider>
			<ThemeProvider attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		</AppContextProvider>
	);
}
export default MyApp;
