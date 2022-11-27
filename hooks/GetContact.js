import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

export default async function GetContact() {
	const { data } = await client.query({
		query: gql`
			query Contact {
				contact {
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

	return data.contact;
}
