import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

export default async function getPost(slug) {
	const { data } = await client.query({
		query: gql`
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
		variables: {
			slug,
		},
	});

	return data.posts[0];
}
