/** @type {import('./$types').PageServerLoad} */

import { baseUri } from '../../constants/AppConstants';

export async function load() {
	return {
		statsBlocks: await getStats()
	};
}

const getStats = async () => {
	const remoteStats = await fetch(`${baseUri}/stats`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization:
				'Bearer '
		}
	})
		.then((response) => response.json())
		.catch((reason) => console.error(reason));
	return remoteStats ?? [];
};
