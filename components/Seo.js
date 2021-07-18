import React from 'react';
import Head from 'next/head';

const meta = ({ meta, title, description, image }) => {
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
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			<link rel="alternate icon" href="/favicon.ico" />

			<link rel="manifest" href="/favicon/site.webmanifest" />
			<meta name="msapplication-TileColor" content="#ffffff" />
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
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-101482730-2" />
			<script
				dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'UA-101482730-2');`,
				}}
			/>
		</Head>
	);
};

export default meta;
