import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

export default async function GetHomepage() {
	const { data } = await client.query({
		query: gql`
			query HOMEPAGE {
				pageBy(uri: "/") {
					title
					homepage {
						profession
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
