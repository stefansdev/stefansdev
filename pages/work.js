import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import Project from '../components/Project';
import Seo from '../components/Seo';

const projectsList = [
	{
		title: 'Saim se',
		categories: ['design', 'development'],
		image: '/placeholder_project.jpg',
		link: 'https://dribbble.com/shots/11986498-Saim-se-Shopify-theme-design',
		description: 'Custom design and custom shopify theme development for biggest youtuber on Balkan.',
	},
	{
		title: 'Anomys',
		categories: ['design', 'development'],
		image: '/projects/anomys.jpg',
		link: 'https://anomys.com',
		description: 'Custom Design & Development. Developed in GatsbyJS',
	},
	{
		title: 'Creativ Depot - Gulp & Tailwindcss starter',
		categories: ['design', 'development'],
		image: '/projects/creativdepot.jpg',
		link: 'https://github.com/stefansdev/creativdepot',
		description:
			"I've been using similar gulp setup for years, for my custom wordpress development. It's now extended to support tailwindcss.",
	},
];

const clientList = [
	{
		title: 'singularminds.eu',
		image: '/clients/singularminds.svg',
	},
	{
		title: 'anomys.com',
		image: '/clients/anomys.svg',
	},
	{
		title: 'mediaperformance.no',
		image: '/clients/mediaperformance.png',
	},
	{
		title: 'saimse.com',
		image: '/clients/saimse.svg',
	},
	{
		title: 'Blue Ocean',
		image: '/clients/blueocean.svg',
	},
	{
		title: 'Project By It',
		image: '/clients/projectbyit.png',
	},
	{
		title: 'wellingtonrevive.com',
		image: '/clients/revive.png',
	},
	{
		title: 'Makonda',
		image: '/clients/makonda.png',
	},
];

const Work = () => (
	<>
		<Seo
			title="Work | Stefan Stankovic - Full Stack Javascript Developer"
			description="Full Stack Javascript Developer"
		/>
		<Header />
		<div className="container mx-auto max-w-4xl py-12 md:py-28">
			<div className="relative">
				<PageTitle titleStroke="Work" />
			</div>
			<div className="py-16 pt-4 border-b border-gray-200 dark:border-gray-700">
				<div className="py-4 ">
					{/* <h3 className="font-bold text-2xl mb-4">Projects</h3> */}
					<div className="prose dark:text-gray-200 max-w-full">
						Most of my projects are under NDA, company projects, but here is the short list of clients,
						partners, white-label projects, some side projects, tools I’ve created ...
					</div>
				</div>
				<ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-12 mb-8">
					{clientList.map((client, i) => (
						<li key={i}>
							<div className="bg-gray-100 relative h-20 rounded-sm grid items-center justify-center">
								<Image
									src={client.image}
									height="40"
									width="114"
									objectPosition="middle"
									objectFit="contain"
									alt={client.tiltle}
								/>
							</div>
							<span className="block text-center text-sm py-2">{client.title}</span>
						</li>
					))}
				</ul>
				{projectsList.map((project, i) => (
					<Project
						title={project.title}
						categories={project.categories}
						image={project.image}
						description={project.description}
						link={project.link}
						key={`project_${i}`}
					/>
				))}
			</div>
		</div>
		<Footer />
	</>
);

export default Work;
