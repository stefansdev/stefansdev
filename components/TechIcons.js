import React, { useEffect } from 'react';

const iconList = [
	{
		name: 'affinity-designer',
		src: '/tech-icons/affinity-designer.svg',
	},
	{
		name: 'affinity-photo',
		src: '/tech-icons/affinity-photo.svg',
	},
	{
		name: 'aws',
		src: '/tech-icons/aws.svg',
	},
	{
		name: 'css',
		src: '/tech-icons/css.svg',
	},
	{
		name: 'express',
		src: '/tech-icons/express.svg',
	},
	{
		name: 'figma',
		src: '/tech-icons/figma.svg',
	},
	{
		name: 'firebase',
		src: '/tech-icons/firebase.svg',
	},
	{
		name: 'gatsby',
		src: '/tech-icons/gatsby.svg',
	},
	{
		name: 'git',
		src: '/tech-icons/git.svg',
	},
	{
		name: 'graphql',
		src: '/tech-icons/graphql.svg',
	},
	{
		name: 'gulp',
		src: '/tech-icons/gulp.svg',
	},
	{
		name: 'html',
		src: '/tech-icons/html.svg',
	},
	{
		name: 'jquery',
		src: '/tech-icons/jquery.svg',
	},
	{
		name: 'js',
		src: '/tech-icons/js.svg',
	},
	{
		name: 'mongo',
		src: '/tech-icons/mongo.svg',
	},
	{
		name: 'nextjs',
		src: '/tech-icons/nextjs.svg',
	},
	{
		name: 'nginx',
		src: '/tech-icons/nginx.svg',
	},
	{
		name: 'nodejs',
		src: '/tech-icons/nodejs.svg',
	},
	{
		name: 'php',
		src: '/tech-icons/php.svg',
	},
	{
		name: 'postgreql',
		src: '/tech-icons/postgreql.svg',
	},
	{
		name: 'ps',
		src: '/tech-icons/ps.svg',
	},
	{
		name: 'react',
		src: '/tech-icons/react.svg',
	},
	{
		name: 'redux',
		src: '/tech-icons/redux.svg',
	},
	{
		name: 'sass',
		src: '/tech-icons/sass.svg',
	},
	{
		name: 'shopify',
		src: '/tech-icons/shopify.svg',
	},
	{
		name: 'sketch',
		src: '/tech-icons/sketch.svg',
	},
	{
		name: 'strapi',
		src: '/tech-icons/strapi.svg',
	},
	{
		name: 'tailwind',
		src: '/tech-icons/tailwind.svg',
	},
	{
		name: 'typescript',
		src: '/tech-icons/typescript.svg',
	},
	{
		name: 'vscode',
		src: '/tech-icons/vscode.svg',
	},
	{
		name: 'webpack',
		src: '/tech-icons/webpack.svg',
	},
	{
		name: 'wp',
		src: '/tech-icons/wp.svg',
	},
	{
		name: 'woo',
		src: '/tech-icons/woo.svg',
	},
	{
		name: 'xd',
		src: '/tech-icons/xd.svg',
	},
];

const TechIcons = () => {
	useEffect(() => {
		// add class to random element with class icon_wrap

		const interval = setInterval(() => {
			const icon = iconList[Math.floor(Math.random() * iconList.length)];
			const iconName = `tech_icon_${icon.name}`;
			const elementName = document.getElementsByClassName(iconName);
			elementName[0].classList.add('is_active');

			setTimeout(() => {
				elementName[0].classList.remove('is_active');
			}, 1000);
		}, 2000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(65px,1fr))] gap-4 items-center place-content-center px-6 py-12 fixed top-16 right-0 left-0 h-[146px]">
			{iconList.map((icon, i) => (
				<div className={`icon_wrap p-2 transition-gpu transition-all tech_icon_${icon.name}`} key={icon.name}>
					<img src={icon.src} alt={icon.name} className="block " />
				</div>
			))}
		</div>
	);
};

export default TechIcons;
