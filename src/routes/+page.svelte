<script>
	document.title = 'ECIBot - Home';
</script>

<main>
	<header>
		<svg
			id="headerbg"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xmlns:svgjs="http://svgjs.com/svgjs"
			width="2560"
			height="1440"
			preserveAspectRatio="none"
			viewBox="0 0 2560 1440"
		>
			<g mask="url(&quot;#SvgjsMask1000&quot;)" fill="none">
				<rect width="2560" height="1440" x="0" y="0" fill="rgba(1, 176, 91, 1)" />
				<path
					d="M0,954.556C191.083,973,399.463,976.468,557.488,867.469C714.195,759.379,753.074,553.198,832.623,380.246C912.41,206.775,1029.287,43.613,1024.209,-147.259C1018.853,-348.562,949.568,-557.53,803.973,-696.647C662.4,-831.921,447.324,-828.626,258.162,-879.218C74.233,-928.41,-105.764,-1035.419,-290.504,-989.364C-477.409,-942.769,-627.592,-795.764,-730.289,-632.799C-825.249,-482.111,-828.833,-298.368,-838.047,-120.493C-846.508,42.85,-840.972,204.536,-781.557,356.925C-719.629,515.76,-627.788,662.577,-492.363,766.132C-349.883,875.081,-178.531,937.323,0,954.556"
					fill="#018d49"
				/>
				<path
					d="M2560 2463.4719999999998C2750.694 2482.6099999999997 2929.321 2368.221 3082.563 2253.124 3228.327 2143.643 3323.156 1988.661 3407.41 1826.999 3495.813 1657.377 3598.184 1483.588 3583.003 1292.914 3567.44 1097.442 3475.927 901.927 3323.895 778.081 3179.587 660.527 2974.319 687.768 2792.313 648.814 2626.289 613.28 2462.079 504.429 2301.384 559.235 2141.556 613.745 2091.622 811.541 1970.4189999999999 929.126 1833.399 1062.055 1579.5929999999998 1106.3600000000001 1544.078 1293.932 1508.876 1479.85 1705.961 1624.212 1808.7269999999999 1783.095 1896.0410000000002 1918.087 1981.595 2046.674 2100.759 2154.593 2240.328 2280.992 2372.643 2444.669 2560 2463.4719999999998"
					fill="#01d36d"
				/>
			</g>
			<defs>
				<mask id="SvgjsMask1000">
					<rect width="2560" height="1440" fill="#ffffff" />
				</mask>
			</defs>
		</svg>
		<div id="headercontent">
			<h1><i class="fas fa-robot" /> ECIBot</h1>
			<p>Un bot de Discord personalizado hecho en Python para el servidor de ECI</p>
			<p id="botquote">~bip-bop</p>
			<button>Acceder</button>
		</div>
	</header>
	<section>
		<h2>¿Qué es ECIBot?</h2>
		<p>
			ECIBot es un bot de Discord para el servidor de ECI. El bot tiene varias funcionalidades
			relacionadas con el chat de voz, como reproducción de sonidos, reproducción del texto
			escrito a voz usando un módulo TTS de Google e integración con GPT-3. ECIBot también
			tiene integración con DALL-E mini, dando la posibilidad de generar 9 imágenes con la
			entrada que le envíes.
		</p>
		<p>Puedes encontrar más información sobre los comandos <a href="comandos">aquí</a>.</p>
		<p>
			Puedes encontrar más información sobre el bot en su <a
				href="https://github.com/Wikijito7/ECIBot">repositorio de Github</a
			>.
		</p>
	</section>
	<section>
		<h2>Top of Commands usage</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt blanditiis assumenda
			tempora maxime asperiores molestias at earum pariatur soluta deleniti, reprehenderit
			incidunt ex omnis, veniam ea libero consequuntur repellat? Commodi!
		</p>
	</section>
	<section>
		<h2>Top of Sounds</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt blanditiis assumenda
			tempora maxime asperiores molestias at earum pariatur soluta deleniti, reprehenderit
			incidunt ex omnis, veniam ea libero consequuntur repellat? Commodi!
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt blanditiis assumenda
			tempora maxime asperiores molestias at earum pariatur soluta deleniti, reprehenderit
			incidunt ex omnis, veniam ea libero consequuntur repellat? Commodi!
		</p>
	</section>
</main>

<style lang="scss">
	@use '../scss/dimens';
	@use '../scss/colors';

	p {
		font-size: dimens.$body1;
	}

	header {
		overflow: hidden;
		display: flex;
		flex-flow: column;
		height: 30em;

		#headercontent {
			display: flex;
			flex-flow: column;
			margin: auto;
			z-index: 2;
			text-align: center;
			color: colors.$white;

			p {
				font-size: 1.2em;
			}

			#headertitle {
				display: flex;
				flex-flow: row wrap;
				align-items: center;
				font-size: 1.2em;
			}

			.fa-robot {
				margin: 0 0.25rem;
			}

			#botquote {
				margin: 0rem;
				font-size: 1em;
			}

			img {
				width: 6em;
				margin: 1em;
			}

			button {
				margin-top: 1em;
				border: 1px solid colors.$white;
			}
		}

		#headerbg {
			height: 30em;
			width: 100%;
			overflow: hidden;
			position: absolute;
			z-index: 1;
			left: 0%;
		}
	}

	main {
		display: flex;
		flex-flow: column;
	}

	section {
		margin: 1em 0;

		p {
			font-size: 1.1em;
		}
	}
</style>
