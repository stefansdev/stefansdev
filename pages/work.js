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
		description: 'Custom design and custom shopify theme development for biggest youtuber on Balkan.',
	},
	{
		title: 'Saim se',
		categories: ['design', 'development'],
		image: '/placeholder_project.jpg',
		description: 'Custom design and custom shopify theme development for biggest youtuber on Balkan.',
	},
	{
		title: 'Saim se',
		categories: ['design', 'development'],
		image: '/placeholder_project.jpg',
		description: 'Custom design and custom shopify theme development for biggest youtuber on Balkan.',
	},
];

const Work = () => (
	<>
		<Seo
			title="Work | Stefan Stankovic - Full Stack Javascript Developer"
			description="Full Stack Javascript Developer"
		/>
		<Header />
		<div className="container mx-auto max-w-4xl py-28">
			<div className="relative">
				<PageTitle titleStroke="PROJECTS" subtitle="My Work" />
			</div>
			<div className="py-16 border-b border-gray-200 dark:border-gray-700">
				<div className="py-5 ">
					<h3 className="font-bold text-2xl mb-4">Projects</h3>
					<div className="prose dark:text-gray-200 max-w-full">
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
						key={`project_${i}`}
					/>
				))}
			</div>
		</div>
		<Footer />
	</>
);

export default Work;
