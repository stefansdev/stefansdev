import directus from '@/utils/directus';

const gql = String.raw;

export default async function getPost(slug) {
	const data = await directus(
		gql`
			query ($slug: String) {
				posts(filter: { slug: { _eq: $slug } }, limit: 1) {
					title
					meta_title
					date_created
					meta_image {
						id
						width
						height
						title
					}
					meta_description
					slug
					id
					content
					featured_image {
						id
						width
						height
						title
					}
				}
			}
		`,
		{
			cache: 'force-cache',
			variables: {
				slug,
			},
		}
	);

	return data.posts[0];
}
