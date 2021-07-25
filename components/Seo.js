import React from 'react';
import Head from 'next/head';

const meta = ({ title, description, image }) => {
	const siteName = 'Stefan Stankovic - Full Stack Javascript Developer';
	const defaultDescription = 'Full Stack Developer and Web Designer';

	const permalink = `https://stefans.dev`;

	const desc = `${description.substring(0, 156)}...`;

	return (
		<Head>
			{/* main */}
			<title>{`${title || ''} | ${siteName}`}</title>
			<meta name="description" content={description ? desc : defaultDescription} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			{/* Manifest */}
			<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
			<link rel="alternate icon" href="/favicon/favicon.ico" />

			<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
			<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
			<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
			<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
			<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
			<link rel="manifest" href="/favicon/manifest.json" />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
			<meta name="theme-color" content="#ffffff" />
			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title || siteName} />
			<meta property="og:description" content={description ? desc : defaultDescription} />
			<meta property="og:image" content={image || '/meta_placeholder.jpg'} />
			<meta property="og:url" content={permalink} />
			<meta property="og:site_name" content={siteName} />
			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={permalink} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description ? desc : defaultDescription} />
			{/* Robots */}
			<meta property="twitter:image" content={image || '/meta_placeholder.jpg'} />
			{/* <meta property="google-site-verification" content="D47LBXjUmD9IfEnImjz2Nl7Or3fiMOMiSNtIxOSkDjo" /> */}
			{/* analytics scripts */}
			<script async src="https://www.googletagmanager.com/gtag/js?id=G-DNKG44DRX6" />

			<script
				dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-DNKG44DRX6');`,
				}}
			/>
		</Head>
	);
};

export default meta;
