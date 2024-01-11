import directus from '@/utils/directus';

const gql = String.raw;

export default async function getWork() {
	const data = await directus(
		gql`
			query {
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
		{
			cache: 'force-cache',
			variables: {},
		}
	);

	return data.portfolio;
}
