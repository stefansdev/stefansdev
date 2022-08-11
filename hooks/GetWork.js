import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

export default async function GetWork() {
	const { data } = await client.query({
		query: gql`
			query WORK {
				pageBy(uri: "/work") {
					content
					work {
						companies {
							website
							name
							logo {
								altText
								mediaItemUrl
								mediaDetails {
									height
									width
								}
							}
						}
						projects {
							categories
							description
							name
							url
							image {
								altText
								mediaItemUrl
								mediaDetails {
									height
									width
								}
							}
						}
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
