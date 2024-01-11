export default async function fetcher(query, { variables, cache = 'force-cache' } = {}) {
	const res = await fetch(`${process.env.DIRECTUS_URL}/graphql`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
		},
		cache,
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const json = await res.json();
	if (json.errors) {
		console.error(json.errors);
		throw new Error('Failed to fetch API');
	}

	return json.data;
}
