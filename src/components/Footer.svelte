<script>
	let year = new Date().getFullYear();
	import '../scss/app.scss';
</script>

<footer>
	<div id="footercontent">
		<div id="copyright">
			<p id="footertitle"><i class="fas fa-robot" /> Ecibot</p>
			<p>
				Ecibot <i class="fas fa-code" /> con <i class="fas fa-heart" /> por
				<a href="https://wokis.es">Wokis</a>.
			</p>
			<p>Copyright © {year} Wokis</p>
		</div>

		<div>
			<p><b>Enlaces de interés</b></p>
			<ul>
				<li><a href="#">About</a></li>
				<li><a href="#">Commands</a></li>
				<li><a href="#">Repository</a></li>
				<li><a href="#">Lorem</a></li>
				<li><a href="#">Ipsum</a></li>
			</ul>
		</div>

		<div>
			<p><b>Webs de Wokis</b></p>
			<ul>
				<li><a href="https://wokis.es">Wokis</a></li>
				<li><a href="https://ecibot.wokis.es"><b>Ecibot</b></a></li>
				<li><a href="https://finance.wokis.es">Project Finance</a></li>
				<li><a href="https://projectalpha.es">Project Alpha</a></li>
			</ul>
		</div>
	</div>
</footer>

<style lang="scss">
	@use '../scss/dimens';
	@use '../scss/colors';

	footer {
		background-color: colors.$black;
		display: flex;
		width: 100%;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		color: colors.$white;

		#footertitle {
			font-weight: 800;
			font-size: 1.2em;
			margin-bottom: 0.5em;

			.fa-robot {
				margin-right: 0.25rem;
			}
		}

		#footercontent {
			width: 100%;
			max-width: 1920px;
			margin: 0 auto;
			padding: 2em 0;
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
			margin: 0 1em;

			div {
				padding: 1em;
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

		@media only screen and (max-width: 760px) {
			#footercontent {
				display: flex;
				flex-flow: column;
			}
		}
	}
</style>
