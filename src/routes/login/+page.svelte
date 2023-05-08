<script>
	/** @type {import('./$types').PageData} */
	export let data;

	let username = '';
	let password = '';

	const setUsername = (value) => {
		username = value;
	};

	const setPassword = (value) => {
		password = value;
	};
</script>

<head>
	<title>Ecibot - Login</title>
</head>

<main>
	<div id="background">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xmlns:svgjs="http://svgjs.com/svgjs"
			width="2560"
			height="1440"
			preserveAspectRatio="none"
			viewBox="0 0 2560 1440"
		>
			<g mask="url(&quot;#SvgjsMask1005&quot;)" fill="none">
				<path
					d="M451.07 154.69 a240.67 240.67 0 1 0 481.34 0 a240.67 240.67 0 1 0 -481.34 0z"
					fill="rgba(1, 176, 91, 0.4)"
					class="triangle-float2"
				/>
				<path
					d="M665.38 508.59 a431 431 0 1 0 862 0 a431 431 0 1 0 -862 0z"
					fill="rgba(1, 176, 91, 0.4)"
					class="triangle-float3"
				/>
				<path
					d="M-154.03 1148.15 a372.93 372.93 0 1 0 745.86 0 a372.93 372.93 0 1 0 -745.86 0z"
					fill="rgba(1, 176, 91, 0.4)"
					class="triangle-float2"
				/>
				<path
					d="M1377.551,1278.676C1480.918,1271.789,1551.758,1185.367,1601.527,1094.509C1648.837,1008.139,1671.919,908.685,1628.684,820.204C1579.847,720.259,1488.744,639.346,1377.551,636.143C1261.547,632.801,1157.806,704.322,1100.041,804.976C1042.547,905.158,1036.746,1028.585,1095.133,1128.25C1152.919,1226.888,1263.486,1286.276,1377.551,1278.676"
					fill="rgba(1, 176, 91, 0.4)"
					class="triangle-float3"
				/>
				<path
					d="M2079.926965166005 1045.936917759593L1721.046016096326 943.0294615771207 1618.138559913854 1301.9104106467998 1977.019508983533 1404.8178668292721z"
					fill="rgba(1, 176, 91, 0.4)"
					class="triangle-float3"
				/>
				<path
					d="M2368.315,1431.152C2421.934,1429.235,2469.771,1398.74,2495.845,1351.849C2521.187,1306.274,2520.336,1250.657,2493.566,1205.906C2467.493,1162.319,2419.103,1138.158,2368.315,1138.658C2318.417,1139.149,2274.386,1166.445,2247.261,1208.329C2217.158,1254.81,2197.514,1312.909,2223.95,1361.569C2251.282,1411.879,2311.097,1433.197,2368.315,1431.152"
					fill="rgba(1, 176, 91, 0.4)"
					class="triangle-float3"
				/>
				<path
					d="M163.09290181976377 1129.6655096404247L224.9122356177889 898.9526150161347-5.800659006501149 837.1332812181096-67.61999280452628 1067.8461758423996z"
					fill="rgba(1, 176, 91, 0.4)"
					class="triangle-float2"
				/>
			</g>
			<defs>
				<mask id="SvgjsMask1005">
					<rect width="2560" height="1440" fill="#ffffff" />
				</mask>
				<style>
					@keyframes float1 {
						0% {
							transform: translate(0, 0);
						}
						50% {
							transform: translate(-10px, 0);
						}
						100% {
							transform: translate(0, 0);
						}
					}

					.triangle-float1 {
						animation: float1 5s infinite;
					}

					@keyframes float2 {
						0% {
							transform: translate(0, 0);
						}
						50% {
							transform: translate(-5px, -5px);
						}
						100% {
							transform: translate(0, 0);
						}
					}

					.triangle-float2 {
						animation: float2 4s infinite;
					}

					@keyframes float3 {
						0% {
							transform: translate(0, 0);
						}
						50% {
							transform: translate(0, -10px);
						}
						100% {
							transform: translate(0, 0);
						}
					}

					.triangle-float3 {
						animation: float3 6s infinite;
					}
				</style>
			</defs>
		</svg>
	</div>
	<section>
		<h1>Iniciar sesión</h1>
		<form>
			<label for="username">Usuario o correo</label>
			<input
				type="text"
				id="username"
				name="username"
				on:change={(e) => setUsername(e.target.value)}
				value={username}
			/>

			<label for="pass">Contraseña</label>
			<input
				type="password"
				id="pass"
				name="pass"
				on:change={(e) => setPassword(e.target.value)}
				value={password}
			/>
			<a href="recover-pass">¿Has olvidado tu contraseña?</a>
			<button>Acceder</button>
		</form>
	</section>
</main>

<style lang="scss">
	@use '../../scss/dimens';
	@use '../../scss/colors';

	main {
		display: flex;
		flex-flow: column;
		justify-content: center;
		width: 100%;
		height: 100vh;

		#background {
			position: absolute;
			width: 100%;
			height: 100vh;
			z-index: 1;
			overflow: hidden;
			left: 0;
		}

		section {
			width: 25vw;
			min-width: 20em;
			margin: auto;
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			z-index: 2;
		}

		form {
			border-radius: 0.5em;
			padding: 1em;
		}
	}
</style>
