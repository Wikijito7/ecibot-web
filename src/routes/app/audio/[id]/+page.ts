import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const sound = fetchSound(params.id);
	if (params.id === '123') throw error(404, 'Not found');
	return {
		id: params.id
	};
}

const fetchSound = (id: String) => {};
