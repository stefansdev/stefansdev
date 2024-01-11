import directus from '@/utils/directus';

const gql = String.raw;

export default async function getBlogPage() {
	const data = await directus(
		gql`
			query {
				blog_page {
					meta_description
					meta_image {
						id
						width
						height
					}
					meta_title
					title
					subtitle
				}
			}
		`,
		{
			cache: 'force-cache',
			variables: {},
		}
	);

	return data.blog_page;
}
