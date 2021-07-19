import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const blogDirectory = join(process.cwd(), 'content/posts');

export function getPostBySlug(slug) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(blogDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	return { slug: realSlug, meta: data, content };
}

export function getAllPosts() {
	const slugs = fs.readdirSync(blogDirectory);
	const posts = slugs.map((slug) => getPostBySlug(slug));

	return posts;
}
