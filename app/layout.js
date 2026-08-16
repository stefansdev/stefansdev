import '@/styles/app.css';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import Script from 'next/script';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const monaSans = localFont({
	variable: '--font-mona-sans',
	display: 'swap',
	src: [
		{
			path: './fonts/MonaSans-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/MonaSans-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './fonts/MonaSans-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
	],
});

export const metadata = {
	metadataBase: new URL('https://stefans.dev/'),
	title: {
		default: 'Stefan Stankovic | Products, Systems & AI',
		template: '%s | Stefan Stankovic',
	},
	description:
		'I build AI products, automation and digital systems that solve real business problems.',
	openGraph: {
		images: '/meta_placeholder.jpg',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${monaSans.variable} scheme-only-dark antialiased`}>
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/manifest.json" />
				<meta name="theme-color" content="#0a0a0a" />
				<script
					defer
					src="https://umami.anomys.dev/script.js"
					data-website-id="6bc763e6-26dd-4ba8-ab64-0dd6b86ff051"
				/>
			</head>
			<body>
				<div className="isolate flex min-h-svh flex-col">
					<Header />
					<main className="min-w-0 flex-1">{children}</main>
					<Footer />
				</div>
				<Analytics />
				<Script
					async
					src="https://c.analytics.anomys.dev/oa.js"
					data-key="oa_pk_dDx4TDH5NWAMw3O88X38XzdSXOocTDJl"
					data-collector="https://c.analytics.anomys.dev"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}
