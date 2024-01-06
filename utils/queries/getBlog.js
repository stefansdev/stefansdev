import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

export default async function getBlog() {
	const { data } = await client.query({
		query: gql`
			query BLOG {
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
	});

	return data.blog_page;
}
