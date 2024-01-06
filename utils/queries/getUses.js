import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

export default async function GetUses() {
	const { data } = await client.query({
		query: gql`
			query USES {
				uses {
					meta_description
					meta_image {
						id
						width
						height
					}
					meta_title
					title
					subtitle
					content
				}
			}
		`,
	});

	return data.uses;
}
