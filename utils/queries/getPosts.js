import directus from '@/utils/directus';

const gql = String.raw;

export default async function getPosts() {
	const data = await directus(
		gql`
			query {
				posts {
					title
					meta_title
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
					categories
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
			variables: {},
		}
	);

	return data.posts;
}
