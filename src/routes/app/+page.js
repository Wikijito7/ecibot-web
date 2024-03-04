/** @type {import('./$types').PageLoad} */

export async function load({ data }) {
	// let pendingAudios = await fetch(`${baseUri}/audios`)
	return {
		statsBlocks: data.statsBlocks
	};
}
