import React from 'react';
import Image from 'next/image';
import readingTime from 'reading-time';
import { ClockIcon, CalendarIcon } from '@heroicons/react/outline';
import markdownToHtml from '../utils/markdown';
import GithubIcon from '../components/svg/GithubIcon';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import { monthNames } from '../utils/monthNames';

export default function Post({ meta, content }) {
	const readTime = readingTime(content);
	const date = new Date(meta.date);
	return (
		<>
			<Seo title={meta.title} description={meta.excerpt} image={meta.image} />
			<Header />
			<div className="h-[300px] relative after:content-[' '] after:absolute after:inset-0 after:w-full after:h-full after:block after:bg-black after:z-20 after:opacity-40">
				<Image src={meta.image} alt={meta.title} layout="fill" objectFit="cover" />
				<div className="container mx-auto max-w-4xl absolute bottom-5 left-1/2 -translate-x-1/2 z-30">
					<h1 className="font-semibold text-4xl text-white mb-4">{meta.title}</h1>
					<div className="flex text-white text-sm">
						<p className="grid grid-cols-[auto,1fr] gap-2 items-center mr-4">
							<CalendarIcon className="w-4 h-4" />
							{date.getDay()}. {monthNames[date.getMonth()]}, {date.getFullYear()}
						</p>
						<p className="grid grid-cols-[auto,1fr] gap-2 items-center mr-4">
							<ClockIcon className="w-4 h-4" />
							{readTime.text}
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
				className="prose dark:prose-dark mx-auto py-12"
				dangerouslySetInnerHTML={{
					__html: content,
				}}
			/>
			<Footer />
		</>
	);
}

export async function getStaticProps({ params }) {
	const res = await fetch(`${process.env.VERCEL_URL}/post/${params.slug}`);
	const post = await res.json();
	const content = await markdownToHtml(post.content || '');
	return {
		props: {
			...post,
			content,
		},
	};
}

export async function getStaticPaths() {
	const res = await fetch(`${process.env.VERCEL_URL}/api/posts`);
	const posts = await res.json();

	return {
		paths: posts.allPosts.map((post) => ({
			params: {
				slug: post.slug,
			},
		})),
		fallback: false,
	};
}
