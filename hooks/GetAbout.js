import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

export default async function GetAbout() {
	const { data } = await client.query({
		query: gql`
			query ABOUT {
				pageBy(uri: "/about") {
					content
					about {
						mainImage {
							mediaItemUrl
							mediaDetails {
								width
								height
								meta {
									title
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
