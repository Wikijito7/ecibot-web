<script>
	export let lightMode = true;
	export let onClick = () => {
		// no-op
	};
</script>

<div class="toolbar">
	<div id="toolbarcontent">
		<a id="icon" href="/"><i class="fas fa-robot" /> ECIBot</a>

		<nav>
			<a href="/">Inicio</a>
			<a href="/login">Acceder</a>
			<button
				id="sun"
				aria-label="change website color mode"
				style="display: {lightMode ? 'none' : 'block'}"
				on:click={onClick}><i class="far fa-sun" /></button
			>
			<button
				aria-label="change website color mode"
				id="moon"
				style="display: {lightMode ? 'block' : 'none'}"
				on:click={onClick}><i class="far fa-moon" /></button
			>
		</nav>
	</div>
</div>

<style lang="scss">
	@use '/src/scss/dimens';
	@use '/src/scss/colors';

	.toolbar {
		display: flex;
		flex-flow: row;
		justify-content: space-between;
		align-items: center;
		background: colors.$black;

		#toolbarcontent {
			max-width: dimens.$max-width;
			width: 100%;
			margin: auto;
			display: flex;
			flex-flow: row;
			justify-content: space-between;
			align-items: center;
			padding: 0 dimens.$document-padding;

			#icon {
				font-size: dimens.$body1;
				font-weight: bold;
				color: colors.$white;
				margin: 0;

				.fa-robot {
					margin-right: 0.5em;
				}

				&:hover {
					cursor: pointer;
					text-decoration: none;
				}
			}
		}

		nav {
			display: flex;
			flex-flow: row;
			align-items: center;

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
				padding: dimens.$document-padding;
				margin: 0;

				&:hover {
					background: colors.$black-hover;
				}
			}
		}
	}
</style>
