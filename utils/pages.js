import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const pagesDirectory = join(process.cwd(), 'content/pages');

export function getPageBySlug(slug) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(pagesDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	return { slug: realSlug, meta: data, content };
}

export function getAllPages() {
	const slugs = fs.readdirSync(pagesDirectory);
	const posts = slugs.map((slug) => getPageBySlug(slug));

	return posts;
}
