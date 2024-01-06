import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

export default async function getAbout() {
	const { data } = await client.query({
		query: gql`
			query ABOUT {
				about {
					meta_description
					meta_image {
						id
						width
						height
						title
					}
					meta_title
					title
					subtitle
					content
					image {
						id
						width
						height
					}
				}
			}
		`,
	});

	return data.about;
}
