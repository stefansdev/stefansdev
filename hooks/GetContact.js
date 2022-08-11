import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

export default async function GetContact() {
	const { data } = await client.query({
		query: gql`
			query Contact {
				pageBy(uri: "/contact") {
					content
					seo {
						title
						twitterTitle
						twitterDescription
						opengraphType
						opengraphTitle
						opengraphSiteName
						opengraphPublisher
						opengraphPublishedTime
						opengraphModifiedTime
						opengraphImage {
							mediaItemUrl
						}
						opengraphDescription
						opengraphAuthor
						metaRobotsNoindex
						metaRobotsNofollow
						metaKeywords
						metaDesc
						focuskw
						cornerstone
					}
				}
			}
		`,
	});

	return data.pageBy;
}
