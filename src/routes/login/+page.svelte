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
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2560' height='1440' preserveAspectRatio='none' viewBox='0 0 2560 1440'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1083%26quot%3b)' fill='none'%3e%3cpath d='M1215.74 353.31 a258.2 258.2 0 1 0 516.4 0 a258.2 258.2 0 1 0 -516.4 0z' fill='rgba(1%2c 176%2c 91%2c 0.33)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M760.6766591559765 231.8162114578568L716.779948311726 508.9691360399958 993.932872893865 552.8658468842464 1037.8295837381156 275.7129223021073z' fill='rgba(1%2c 176%2c 91%2c 0.33)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1959.151%2c440.554C2056.119%2c445.546%2c2154.968%2c402.563%2c2201.35%2c317.261C2246.132%2c234.902%2c2212.218%2c139.525%2c2167.688%2c57.029C2119.988%2c-31.338%2c2059.523%2c-128.357%2c1959.151%2c-131.429C1855.416%2c-134.604%2c1771.846%2c-50.173%2c1727.264%2c43.548C1688.509%2c125.02%2c1711.104%2c216.462%2c1756.607%2c294.367C1801.616%2c371.426%2c1870.028%2c435.966%2c1959.151%2c440.554' fill='rgba(1%2c 176%2c 91%2c 0.33)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M-371.76 236.8 a391.18 391.18 0 1 0 782.36 0 a391.18 391.18 0 1 0 -782.36 0z' fill='rgba(1%2c 176%2c 91%2c 0.33)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1420.145%2c1248.615C1485.149%2c1246.082%2c1527.344%2c1188.251%2c1559.958%2c1131.964C1592.693%2c1075.467%2c1621.795%2c1010.125%2c1591.994%2c952.026C1560.161%2c889.966%2c1489.867%2c857.499%2c1420.145%2c859.391C1353.544%2c861.199%2c1296.416%2c902.879%2c1263.728%2c960.935C1231.695%2c1017.827%2c1228.908%2c1086.287%2c1260.096%2c1143.647C1292.76%2c1203.722%2c1351.816%2c1251.277%2c1420.145%2c1248.615' fill='rgba(1%2c 176%2c 91%2c 0.33)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M2334.389%2c852.539C2455.679%2c849.546%2c2578.645%2c810.138%2c2640.684%2c705.872C2703.961%2c599.525%2c2693.382%2c464.562%2c2627.605%2c359.744C2565.74%2c261.16%2c2450.681%2c222.497%2c2334.389%2c217.781C2206.942%2c212.612%2c2067.288%2c227.814%2c1996.868%2c334.165C1920.434%2c449.599%2c1925.204%2c605.641%2c2000.746%2c721.661C2070.611%2c828.962%2c2206.386%2c855.697%2c2334.389%2c852.539' fill='rgba(1%2c 176%2c 91%2c 0.33)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1356.8701336653062 1168.465706966098L1295.4320598767183 1382.7257328981827 1509.692085808803 1444.1638066867704 1571.130159597391 1229.9037807546858z' fill='rgba(1%2c 176%2c 91%2c 0.33)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1870.658%2c341.767C1929.961%2c342.565%2c1986.695%2c311.332%2c2014.538%2c258.966C2040.942%2c209.307%2c2026.849%2c150.653%2c1997.919%2c102.422C1969.965%2c55.818%2c1925.003%2c19.027%2c1870.658%2c19.098C1816.419%2c19.169%2c1771.241%2c55.869%2c1743.969%2c102.753C1716.521%2c149.941%2c1707.766%2c206.948%2c1733.332%2c255.181C1760.495%2c306.427%2c1812.663%2c340.987%2c1870.658%2c341.767' fill='rgba(1%2c 176%2c 91%2c 0.33)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M2411.051%2c1206.708C2546.736%2c1205.971%2c2672.664%2c1127.192%2c2733.382%2c1005.848C2788.846%2c895.003%2c2749.611%2c767.286%2c2683.339%2c662.544C2622.408%2c566.244%2c2524.821%2c502.941%2c2411.051%2c496.408C2283.552%2c489.087%2c2147.483%2c520.269%2c2078.619%2c627.82C2005.108%2c742.628%2c2014.71%2c891.162%2c2082.599%2c1009.382C2150.77%2c1128.093%2c2274.16%2c1207.451%2c2411.051%2c1206.708' fill='rgba(1%2c 176%2c 91%2c 0.33)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M781.5843472909202 1471.364541042665L797.3421998270018 1170.6868028966253 496.66446168096206 1154.9289503605437 480.9066091448804 1455.6066885065834z' fill='rgba(1%2c 176%2c 91%2c 0.33)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1083'%3e%3crect width='2560' height='1440' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");

		#background {
			position: absolute;
			width: 100vw;
			height: 100vh;
			z-index: 1;
		}

		section {
			width: 25vw;
			min-width: 20em;
			margin: auto;
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
		}
	}
</style>
