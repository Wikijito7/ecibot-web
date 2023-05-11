<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import '../scss/app.scss';

	let lightMode = true;

	const onThemeClick = () => {
		lightMode = !lightMode;
		console.log('Theme changed to ' + (lightMode ? 'light' : 'dark'));
	};
</script>

<div class="main {lightMode ? 'light' : 'dark'}">
	<Header onClick={onThemeClick} {lightMode} />

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
		// max-width: 1920px;
		margin: auto;
		// padding: 0 1em;
	}
</style>
