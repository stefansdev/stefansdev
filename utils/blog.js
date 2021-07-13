import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const docsDirectory = join(process.cwd(), 'content/posts');

export function getPostBySlug(slug) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(docsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	return { slug: realSlug, meta: data, content };
}

export function getAllPosts() {
	const files = fs.readdirSync(`${process.cwd()}/content/posts`);

	const posts = files.map((filename) => {
		const markdownWithMetadata = fs.readFileSync(`content/posts/${filename}`).toString();

		const { data } = matter(markdownWithMetadata);
		const formattedDate = new Date(data.date).toISOString();

		const postList = {
			...data,
			date: formattedDate,
		};

		return {
			slug: filename.replace('.md', ''),
			...postList,
		};
	});

	const postDataSortByDate = posts.sort((a, b) => -a.date.localeCompare(b.date));

	return postDataSortByDate;
}

export function getRecentBlogs() {
	const allPosts = getAllPosts();

	const recentPosts = allPosts.splice(0, 3);

	return recentPosts;
}
