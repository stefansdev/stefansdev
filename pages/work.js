import React from 'react';
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

const Work = () => (
	<>
		<Seo title="Work" description="Full Stack Javascript Developer specialised in Jamstack and Headless" />
		<Header />
		<div className="md:py-28 container max-w-4xl py-12 mx-auto">
			<div className="relative">
				<PageTitle titleStroke="PROJECTS" subtitle="My Work" />
			</div>
			<div className="dark:border-gray-700 py-16 border-b border-gray-200">
				<div className=" py-5">
					<h3 className="mb-4 text-2xl font-bold">Projects</h3>
					<div className="dark:text-gray-200 max-w-full prose">
						Most of my projects are under NDA, company projects, but here is the short list of some
						white-label projects, some side projects, tools I have fully created or worked on.
					</div>
				</div>
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
