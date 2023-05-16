<script>
	let year = new Date().getFullYear();
	import '../scss/app.scss';
</script>

<footer>
	<div id="footercontent">
		<div id="copyright">
			<p id="footertitle"><i class="fas fa-robot" /> ECIBot</p>
			<p>
				ECIBot <i class="fas fa-code" /> con <i class="fas fa-heart" /> por
				<a href="https://wokis.es">Wokis</a>.
			</p>
			<p>Copyright © {year} Wokis</p>
		</div>

		<div>
			<p><b>Enlaces de interés</b></p>
			<ul>
				<li><a href="#">Sobre</a></li>
				<li><a href="#">Comandos</a></li>
				<li><a href="https://github.com/Wikijito7/ECIBot">Repositorio</a></li>
				<li><a href="#">Lorem</a></li>
				<li><a href="#">Ipsum</a></li>
			</ul>
		</div>

		<div>
			<p><b>Webs de Wokis</b></p>
			<ul>
				<li><a href="https://wokis.es">Wokis</a></li>
				<li><a href="https://ecibot.wokis.es"><b>ECIBot</b></a></li>
				<li><a href="https://finance.wokis.es">Project Finance</a></li>
				<li><a href="https://projectalpha.es">Project Alpha</a></li>
			</ul>
		</div>
	</div>
</footer>

<style lang="scss">
	@use '/src/scss/dimens';
	@use '/src/scss/colors';

	footer {
		background-color: colors.$black;
		display: flex;
		width: 100%;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		color: colors.$white;

		#footercontent {
			max-width: dimens.$max-width;
			width: 100%;
			max-width: dimens.$max-width;
			padding: 2em 0;
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
			margin: 0;

			div {
				padding: dimens.$document-padding;
			}

			#footertitle {
				font-weight: 800;
				font-size: 1.2em;
				margin-bottom: 0.5em;

				.fa-robot {
					margin-right: 0.25rem;
				}
			}

			#title {
				margin-top: auto;
				margin-bottom: 1em;
			}

			ul {
				list-style: none;
				padding: 0;

				li {
					margin: 0.25em 0;
				}
			}

			#copyright {
				display: flex;
				flex-flow: column;
			}
		}

		p {
			font-size: dimens.$body1;
			margin: 0;
		}

		.fa-code {
			color: colors.$code;
		}

		.fa-heart {
			color: colors.$heart;
		}

		@media only screen and (max-width: 850px) {
			#footercontent {
				display: flex;
				flex-flow: column;
			}
		}
	}
</style>
