import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

export default async function GetHomepage() {
	const { data } = await client.query({
		query: gql`
			query HOMEPAGE {
				homepage {
					meta_description
					meta_image {
						id
						width
						height
					}
					meta_title
				}
			}
		`,
	});

	return data.homepage;
}
