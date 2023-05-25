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
			<a href="/app">Inicio</a>
			<a id="profile" href="/app/profile"><img src="/img/favicon.ico" alt="user profile"/></a>
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

			#profile {
				padding: 0 1.2em;
				&:hover {
					background: transparent;
					text-decoration: none;
				}

				img {
					justify-self: center;
					max-width: 2em;
					border-radius: 50%;
					border: 1px solid #00000000;
					
					&:hover {
						border: 1px solid colors.$primary-color;
					}
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
