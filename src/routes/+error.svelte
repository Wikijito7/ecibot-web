<script>
	import { page } from '$app/stores';
	document.title = `ECIBot - ${$page.status}`;
</script>

<div>
	<div id="errorbody">
		<h1>Parece que te has perdido</h1>
		<p id="desc">
			La página que estabas buscando no se encuentra por aquí. Toma, aquí tienes un café para
			que encuentres tu camino de vuelta.
		</p>
		<p><a href="/">¿Volver al inicio?</a></p>
		<p id="errorcode">Error HTTP {$page.status}, {$page.error.message}.</p>
	</div>
	<div id="erroriconcont">
		<p id="erroricon"><i class="fas fa-mug-hot" /></p>
	</div>
</div>

<style lang="scss">
	@use '../scss/colors';

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

		#erroricon {
			color: colors.$secondary-color;
			font-size: 12em;
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
