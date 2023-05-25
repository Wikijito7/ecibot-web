<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import AppHeader from '../components/AppHeader.svelte';
	import '../scss/app.scss';
	import { page } from '$app/stores';

	let lightMode = true;

	const onThemeClick = () => {
		lightMode = !lightMode;
		console.log('Theme changed to ' + (lightMode ? 'light' : 'dark'));
	};

	const isUserOnApp = () => {
		let route = $page.route.id 
		return route != null &&
			route.includes("app")
	}
</script>

<div class="main {lightMode ? 'light' : 'dark'}">
	{#if !isUserOnApp()}
		<Header onClick={onThemeClick} {lightMode} />
	{:else}
		<AppHeader onClick={onThemeClick} {lightMode} />
	{/if}

	<div class="content">
		<slot />
	</div>

	<Footer />
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-flow: column;
		min-height: 100vh;
		margin: auto;
	}
</style>
