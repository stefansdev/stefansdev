import Image from 'next/image';
import readingTime from 'reading-time';
import { ClockIcon, CalendarIcon } from '@heroicons/react/outline';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { monthNames } from '@/utils/monthNames';
import GetPost from '@/hooks/GetPost';
import GetPosts from '@/hooks/GetPosts';

export default function Post({ post }) {
	const readTime = readingTime(post.content);
	const date = new Date(post.date);
	return (
		<>
			<Seo seo={post.seo} />
			<Header />
			<div className="h-[300px] relative after:content-[' '] after:absolute after:inset-0 after:w-full after:h-full after:block after:bg-black after:z-20 after:opacity-40">
				<Image
					src={post.featuredImage.node.mediaItemUrl}
					alt={post.featuredImage.node.mediaDetails.meta.title}
					layout="fill"
					objectFit="cover"
				/>
				<div className="bottom-5 left-1/2 container absolute z-30 max-w-4xl mx-auto -translate-x-1/2">
					<h1 className="md:text-4xl mb-4 text-2xl font-semibold text-white">{post.title}</h1>
					<div className="flex text-sm text-white">
						<p className="grid grid-cols-[auto,1fr] gap-2 items-center mr-4">
							<CalendarIcon className="w-4 h-4" />
							{date.getDate()}. {monthNames[date.getMonth()]}, {date.getFullYear()}
						</p>
						<p className="grid grid-cols-[auto,1fr] gap-2 items-center mr-4">
							<ClockIcon className="w-4 h-4" />
							{readTime.text}
						</p>
					</div>
				</div>
			</div>
			<div
				className="dark:prose-dark md:px-0 px-4 py-12 mx-auto prose"
				dangerouslySetInnerHTML={{
					__html: post.content,
				}}
			/>
			<Footer />
		</>
	);
}

export async function getStaticProps({ params }) {
	console.log(params);
	const post = await GetPost(params.slug);
	return {
		props: {
			post,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	const posts = await GetPosts();

	return {
		paths: posts.map((post) => ({
			params: {
				slug: post.slug,
			},
		})),
		fallback: false,
	};
}
