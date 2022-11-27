export default async function SubmitForm(req, res) {
	// post to directus
	await fetch(`${process.env.DIRECTUS_URL}/items/inquiry`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
		},
		body: JSON.stringify({
			...req.body,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data) {
				res.status(200).json({
					status: 'success',
				});
			} else {
				res.status(400).json({
					status: 'error',
				});
			}
		});
}
