import { CalendarIcon } from '@heroicons/react/24/outline';
import { monthNames } from '@/utils/monthNames';
import Content from '@/components/Content';

import getPost from '$queries/getPost';

export async function generateMetadata({ params }) {
	const data = await getPost(params.slug);
	return {
		title: data.meta_title,
		description: data.meta_description,
		openGraph: {
			title: data.meta_title,
			description: data.meta_description,
			images: [
				{
					url: `https://stefans.dev/assets/${data.meta_image.id}`,
					width: data.meta_image.width,
					height: data.meta_image.height,
					alt: data.meta_image.title,
				},
			],
		},
	};
}

const SinglePost = async ({ params }) => {
	const post = await getPost(params.slug);
	const date = new Date(post.date_created);
	return (
		<div>
			<section className="bg-black pt-[240px] pb-[60px] relative">
				<div className="container text-white">
					<h1 className="font-headings mb-8 text-6xl font-bold">{post.title}</h1>
					<div className="flex text-sm text-white">
						<p className="grid grid-cols-[auto,1fr] gap-2 items-center mr-4">
							<CalendarIcon className="w-4 h-4" />
							{date.getDate()}. {monthNames[date.getMonth()]}, {date.getFullYear()}
						</p>
					</div>
				</div>
			</section>
			<div className="dark:prose-dark md:px-0 px-4 py-12 mx-auto prose">
				<Content content={post.content} />
			</div>
		</div>
	);
};
export default SinglePost;
