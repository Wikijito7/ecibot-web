/** @type {import('./$types').PageLoad} */
import { baseUri } from '../../constants/AppConstants';

export async function load() {
    let pendingAudios = await fetch(`${baseUri}/audios`)
    return {};
};