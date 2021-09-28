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

export default function Post({ meta, content, slug }) {
	const readTime = readingTime(content);
	const date = new Date(meta.date);
	return (
		<>
			<Seo title={meta.title} description={meta.excerpt} image={meta.image} />
			<Header />
			<div className="h-[300px] relative after:content-[' '] after:absolute after:inset-0 after:w-full after:h-full after:block after:bg-black after:z-20 after:opacity-40">
				<Image src={meta.image} alt={meta.title} layout="fill" objectFit="cover" />
				<div className="bottom-5 left-1/2 container absolute z-30 max-w-4xl mx-auto -translate-x-1/2">
					<h1 className="md:text-4xl mb-4 text-2xl font-semibold text-white">{meta.title}</h1>
					<div className="flex text-sm text-white">
						<p className="grid grid-cols-[auto,1fr] gap-2 items-center mr-4">
							<CalendarIcon className="w-4 h-4" />
							{date.getDate()}. {monthNames[date.getMonth()]}, {date.getFullYear()}
						</p>
						<p className="grid grid-cols-[auto,1fr] gap-2 items-center mr-4">
							<ClockIcon className="w-4 h-4" />
							{readTime.text}
						</p>
						<a
							href={`https://github.com/stefansdev/stefansdev/blob/master/content/posts/${slug}.md`}
							className="grid grid-cols-[auto,1fr] gap-2 items-center"
						>
							<GithubIcon variant="small" />
							Edit post
						</a>
					</div>
				</div>
			</div>
			<div
				className="dark:prose-dark md:px-0 px-4 py-12 mx-auto prose"
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
			slug: params.slug,
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
