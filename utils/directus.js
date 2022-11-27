import { Directus } from '@directus/sdk';

import invariant from 'tiny-invariant';

invariant(process.env.DIRECTUS_URL, 'DIRECTUS_URL must be set');
invariant(process.env.DIRECTUS_TOKEN, 'DIRECTUS_TOKEN must be set');

const directus = new Directus(process.env.DIRECTUS_URL);

export async function getDirectusClient() {
	// if (directus.auth.token) return directus;

	if (process.env.DIRECTUS_EMAIL && process.env.DIRECTUS_PASSWORD) {
		await directus.auth.login({
			email: process.env.DIRECTUS_EMAIL,
			password: process.env.DIRECTUS_PASSWORD,
		});
	} else if (process.env.DIRECTUS_TOKEN) {
		await directus.auth.static(process.env.DIRECTUS_TOKEN);
	}

	return directus;
}
