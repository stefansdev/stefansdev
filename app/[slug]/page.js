import { monthNames } from '@/utils/monthNames';
import Content from '@/components/Content';
import getPost from '$queries/getPost';

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const data = await getPost(slug);
	return { title: data.meta_title, description: data.meta_description };
}

const SinglePost = async ({ params }) => {
	const { slug } = await params;
	const post = await getPost(slug);
	const date = new Date(post.date_created);
	const formattedDate = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;

	return (
		<article>
			<header className="py-20 sm:py-28 lg:py-36">
				<div className="container grid gap-12 lg:grid-cols-[3fr_9fr] lg:items-end">
					<p className="tabular-nums text-base text-neutral-500 sm:text-sm">{formattedDate}</p>
					<h1 className="max-w-[22ch] text-5xl font-medium tracking-tight text-pretty text-neutral-950 sm:text-6xl lg:text-7xl">{post.title}</h1>
				</div>
			</header>
			<section className="py-16 sm:py-24 lg:py-32">
				<div className="container grid gap-12 border-t border-neutral-950/10 pt-8 lg:grid-cols-[3fr_9fr]">
					<p className="text-base font-medium text-neutral-950 sm:text-sm">Article</p>
					<Content content={post.content} />
				</div>
			</section>
		</article>
	);
};

export default SinglePost;
