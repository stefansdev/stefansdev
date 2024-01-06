import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

export default async function GetWork() {
	const { data } = await client.query({
		query: gql`
			query WORK {
				portfolio {
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
					partners {
						partners_id {
							name
							url
							id
							image {
								type
								id
								width
								height
							}
						}
					}
					projects {
						projects_id {
							id
							description
							title
							categories
							url
							image {
								width
								height
								id
							}
						}
					}
				}
			}
		`,
	});

	return data.portfolio;
}
