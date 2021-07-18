import React from 'react';
import Image from 'next/image';
import readingTime from 'reading-time';
import { ClockIcon, CalendarIcon } from '@heroicons/react/outline';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import GithubIcon from '../components/svg/GithubIcon';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import { monthNames } from '../utils/monthNames';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';

const components = {};

export default function Post({ source, frontMatter }) {
	// const readTime = readingTime(.frontMatter.content);
	const date = new Date(frontMatter.date);
	console.log(source);
	console.log(frontMatter);
	return (
		<>
			<Seo title={frontMatter.title} description={frontMatter.excerpt} image={frontMatter.image} />
			<Header />
			<div className="h-[300px] relative after:content-[' '] after:absolute after:inset-0 after:w-full after:h-full after:block after:bg-black after:z-20 after:opacity-40">
				<Image src={frontMatter.image} alt={frontMatter.title} layout="fill" objectFit="cover" />
				<div className="container mx-auto max-w-4xl absolute bottom-5 left-1/2 -translate-x-1/2 z-30">
					<h1 className="font-semibold text-4xl text-white mb-4">{frontMatter.title}</h1>
					<div className="flex text-white text-sm">
						<p className="grid grid-cols-[auto,1fr] gap-2 items-center mr-4">
							<CalendarIcon className="w-4 h-4" />
							{date.getDay()}. {monthNames[date.getMonth()]}, {date.getFullYear()}
						</p>
						<p className="grid grid-cols-[auto,1fr] gap-2 items-center mr-4">
							<ClockIcon className="w-4 h-4" />
							{/* {readTime.text} */}
						</p>
						<a
							href="https://github.com/stefansdev"
							className="grid grid-cols-[auto,1fr] gap-2 items-center"
						>
							<GithubIcon variant="small" />
							Edit post
						</a>
					</div>
				</div>
			</div>
			<div className="prose dark:prose-dark mx-auto py-12">
				<MDXRemote {...source} components={components} />
			</div>
			<Footer />
		</>
	);
}

export const getStaticProps = async ({ params }) => {
	const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
	const source = fs.readFileSync(postFilePath);

	const { content, data } = matter(source);

	const mdxSource = await serialize(content, {
		// Optionally pass remark/rehype plugins
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: data,
	});

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	};
};

export const getStaticPaths = async () => {
	const paths = postFilePaths
		// Remove file extensions for page paths
		.map((path) => path.replace(/\.mdx?$/, ''))
		// Map the path into the static paths object required by Next.js
		.map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};
