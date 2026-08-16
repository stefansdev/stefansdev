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
			<header className="container grid gap-3 py-12 sm:py-16" data-reveal-group>
				<p className="tabular-nums text-base text-neutral-500 sm:text-sm" data-reveal-item>{formattedDate}</p>
				<h1 className="max-w-[22ch] text-4xl font-medium tracking-tight text-pretty text-neutral-100 sm:text-5xl" data-reveal-item>{post.title}</h1>
			</header>
			<section className="pb-12 sm:pb-16">
				<div className="container border-t border-white/10 pt-8" data-reveal>
					<Content content={post.content} />
				</div>
			</section>
		</article>
	);
};

export default SinglePost;
