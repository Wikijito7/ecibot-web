<script>
</script>

<div>
	<div id="errorbody">
		<h1>Parece que te has perdido</h1>
		<p id="desc">
			El sonido que buscabas no existe o parece que te has perdido al navegar por la web. El
			tesoro está en otro lado, toma, usa este mapa.
		</p>
		<p><a href="/app">¿Volver al inicio?</a></p>
	</div>
	<img id="erroriconcont" src="/img/map-treasure.svg" alt="mapa tesoro" />
</div>

<style lang="scss">
	@use '/src/scss/dimens';
	@use '/src/scss/colors';

	p {
		font-size: 1.2em;
	}

	div {
		max-width: 1920px;
		display: flex;
		flex-flow: row wrap-reverse;
		margin: auto;
		align-items: center;
		justify-content: space-around;
		padding: dimens.$document-padding;

		div {
			max-width: 28em;
			display: flex;
			flex-flow: column;
			align-items: center;

			h1,
			p {
				width: 100%;
				text-align: left;
			}
		}

		#erroriconcont {
			color: colors.$secondary-color;
			width: 36em;
			margin: 0;
			margin-left: 1em;
		}

		#errorcode {
			font-size: 1em;
		}

		@media only screen and (max-width: 760px) {
			#erroricon {
				font-size: 10em;
				margin: 0;
			}
		}
	}
</style>
