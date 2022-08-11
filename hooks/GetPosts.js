import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

export default async function GetPosts() {
	const { data } = await client.query({
		query: gql`
			query POSTS {
				posts {
					nodes {
						title
						date
						slug
						id
						excerpt
						categories {
							nodes {
								name
								slug
								id
							}
						}
						featuredImage {
							node {
								id
								mediaItemUrl
								mediaDetails {
									width
									height
								}
							}
						}
					}
				}
			}
		`,
	});

	return data.posts.nodes;
}
