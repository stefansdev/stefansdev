import directus from '@/utils/directus';

const gql = String.raw;

export default async function getHome() {
	const data = await directus(
		gql`
			query {
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
		{
			cache: 'force-cache',
		}
	);

	return data.homepage;
}
