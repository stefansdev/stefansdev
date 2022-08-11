import { gql } from '@apollo/client';
import client from '@/utils/apollo-client';

export default async function GetPost(slug) {
	const { data } = await client.query({
		query: gql`
			query ($slug: String) {
				postBy(slug: $slug) {
					id
					date
					slug
					title
					content
					date
					dateGmt
					featuredImage {
						node {
							mediaItemUrl
							mediaDetails {
								height
								width
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
		variables: {
			slug,
		},
	});

	return data.postBy;
}
