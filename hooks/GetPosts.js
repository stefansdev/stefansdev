import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

export default async function GetPosts() {
	const { data } = await client.query({
		query: gql`
			query POSTS {
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
	});

	return data.posts;
}
