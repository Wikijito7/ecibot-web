/** @type {import('./$types').LayoutLoad} */
export async function load({ route }) {
	return {
		appRouting: route.id?.includes("app")
	};
}
// export const prerender = false;
export const ssr = false;
