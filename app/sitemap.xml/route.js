import getPosts from '$queries/getPosts';

const URL = 'https://stefans.dev';

export const runtime = 'edge';

function generateSiteMap(pages, posts) {
	return `<?xml version="1.0" encoding="UTF-8"?>
                <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
                    ${pages
						.map(
							(page) => `<url>
                                <loc>${URL}${page}</loc>
                                <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
                                 <changefreq>monthly</changefreq>
                            </url>
                            `
						)
						.join('')}
                    ${
						posts &&
						posts
							.map(
								({ slug }) => `
                        <url>
                            <loc>${`${URL}/${slug}`}</loc>
                            <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
                             <changefreq>monthly</changefreq>
                        </url>
                        `
							)
							.join('')
					}
                </urlset>
 `;
}

export async function GET() {
	const pages = ['', '/about', '/contact', '/uses', '/blog', '/work'];

	const posts = await getPosts();

	const body = generateSiteMap(pages, posts);

	return new Response(body, {
		status: 200,
		headers: {
			'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
			'content-type': 'application/xml',
		},
	});
}
