import directus from '@/utils/directus';

const gql = String.raw;

export default async function getAbout() {
	const data = await directus(
		gql`
			query {
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
		{
			cache: 'force-cache',
			variables: {},
		}
	);

	return data.about;
}
