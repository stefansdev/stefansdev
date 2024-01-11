import directus from '@/utils/directus';

const gql = String.raw;

export default async function getContact() {
	const data = await directus(
		gql`
			query {
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
		{
			cache: 'force-cache',
			variables: {},
		}
	);

	return data.contact;
}
