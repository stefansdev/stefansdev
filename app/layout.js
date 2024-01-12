import '@/styles/app.scss';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const nohemi = localFont({
	src: './fonts/Nohemi-VF.ttf',
	display: 'swap',
	variable: '--font-nohemi',
});

const monaSans = localFont({
	variable: '--font-mona-sans',
	src: [
		{
			path: './fonts/MonaSans-ExtraLightItalic.woff2',
			weight: '200',
			style: 'italic',
			display: 'swap',
		},
		{
			path: './fonts/MonaSans-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
			display: 'swap',
		},
		{
			path: './fonts/MonaSans-Black.woff2',
			weight: '900',
			style: 'normal',
			display: 'swap',
		},
		{
			path: './fonts/MonaSans-Bold.woff2',
			weight: '700',
			style: 'normal',
			display: 'swap',
		},
		{
			path: './fonts/MonaSans-ExtraBold.woff2',
			weight: '800',
			style: 'normal',
			display: 'swap',
		},
		{
			path: './fonts/MonaSans-ExtraLight.woff2',
			weight: '200',
			style: 'normal',
			display: 'swap',
		},
		{
			path: './fonts/MonaSans-Italic.woff2',
			weight: '400',
			style: 'italic',
			display: 'swap',
		},
		{
			path: './fonts/MonaSans-ExtraBoldItalic.woff2',
			weight: '800',
			style: 'italic',
			display: 'swap',
		},
		{
			path: './fonts/MonaSans-BlackItalic.woff2',
			weight: '900',
			style: 'italic',
			display: 'swap',
		},
		{
			path: './fonts/MonaSans-SemiBoldItalic.woff2',
			weight: '600',
			style: 'italic',
			display: 'swap',
		},
		{
			path: './fonts/MonaSans-LightItalic.woff2',
			weight: '300',
			style: 'italic',
			display: 'swap',
		},
		{
			path: './fonts/MonaSans-SemiBold.woff2',
			weight: '600',
			style: 'normal',
			display: 'swap',
		},
		{
			path: './fonts/MonaSans-Regular.woff2',
			weight: '400',
			style: 'normal',
			display: 'swap',
		},
		{
			path: './fonts/MonaSans-Light.woff2',
			weight: '300',
			style: 'normal',
			display: 'swap',
		},
		{
			path: './fonts/MonaSans-MediumItalic.woff2',
			weight: '500',
			style: 'italic',
			display: 'swap',
		},
	],
});

export const metadata = {
	metadataBase: new URL('https://stefans.dev/'),
	openGraph: {
		images: '/meta_placeholder.jpg',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${nohemi.variable} ${monaSans.variable}`}>
			<head>
				<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
				<link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff" />
			</head>
			<body className="">
				<Header />
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
