import React from 'react';
import Image from 'next/image';
import readingTime from 'reading-time';
import { ClockIcon, CalendarIcon } from '@heroicons/react/outline';
import GithubIcon from '../components/svg/GithubIcon';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import { monthNames } from '../utils/monthNames';
import { getAllPosts, getPostBySlug } from '../utils/blog';
import markdownToHtml from '../utils/markdown';

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
				<Image src={meta.image} alt={meta.title} layout="fill" objectFit="cover" />
				<div className="container mx-auto max-w-4xl absolute bottom-5 left-1/2 -translate-x-1/2 z-30 ">
					<h1 className="font-semibold text-2xl md:text-4xl text-white mb-4">{meta.title}</h1>
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
			<div
				className="prose dark:prose-dark mx-auto py-12 px-4 md:px-0"
				dangerouslySetInnerHTML={{
					__html: content,
				}}
			/>
			<Footer />
		</>
	);
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug);
	const content = await markdownToHtml(post.content || '');
	return {
		props: {
			meta: post.meta,
			content,
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts();

	return {
		paths: posts.map((post) => ({
			params: {
				slug: post.slug,
			},
		})),
		fallback: false,
	};
}
