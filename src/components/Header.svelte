<script>
	export let lightMode = true;
	export let onClick = () => {
		// no-op
	};
</script>

<div class="toolbar">
	<a id="icon" href="/"><i class="fas fa-robot" /> Ecibot</a>

	<nav>
		<a href="/">Inicio</a>
		<a href="/login">Acceder</a>
		<button id="sun" style="display: {lightMode ? 'none' : 'block'}" on:click={onClick}
			><i class="far fa-sun" /></button
		>
		<button id="moon" style="display: {lightMode ? 'block' : 'none'}" on:click={onClick}
			><i class="far fa-moon" /></button
		>
	</nav>
</div>

<style lang="scss">
	@use '../scss/dimens';
	@use '../scss/colors';

	.toolbar {
		display: flex;
		flex-flow: row;
		justify-content: space-between;
		align-items: center;
		background: colors.$black;

		#icon {
			font-size: dimens.$body1;
			font-weight: bold;
			color: colors.$white;
			margin: 0 1em;

			.fa-robot {
				margin-right: 0.5em;
			}

			&:hover {
				cursor: pointer;
				text-decoration: none;
			}
		}

		nav {
			display: flex;
			flex-flow: row;
			margin: 0 1em;

			a {
				color: colors.$white;
				padding: 1.2em;
				margin: 0;

				&:hover {
					background: colors.$black-hover;
					text-decoration: none;
				}
			}

			button {
				background: none;
				border: none;
				color: colors.$white;
				padding: 1em;
				margin: 0;

				&:hover {
					background: colors.$black-hover;
				}
			}
		}
	}
</style>
