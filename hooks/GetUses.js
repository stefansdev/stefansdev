import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

export default async function GetUses() {
	const { data } = await client.query({
		query: gql`
			query USES {
				pageBy(uri: "/uses") {
					content
					uses {
						subtitle
					}
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
