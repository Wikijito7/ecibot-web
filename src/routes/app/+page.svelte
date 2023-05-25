<script>
	/** @type {import('./$types').PageData} */
	export let data;

	const newSounds = ['cat', 'cat', 'cat', 'cat', 'cat', 'cat', 'cat', 'cat'];
	const soundsTop = ['cat', 'cat', 'cat', 'cat', 'cat'];
	const commandsTop = ['cat', 'cat', 'cat', 'cat', 'cat'];
	const usersTop = ['cat', 'cat', 'cat', 'cat', 'cat'];

	const onAddSoundClicked = () => {

	}
</script>

<main>
	<section>
		<article>
			<div id="sounds-header">
				<h2>Audios pendientes ({newSounds.length})</h2>
				<button on:click={() => onAddSoundClicked()}>Nuevo audio</button>
			</div>
			{#if newSounds.length > 0}
				{#each newSounds as cat, i}
					<div class="sound">
						<p>Lorem ipsum titulo sonido</p>
						<audio controls src="audio.asd">
							Your browser does not support the <code>audio</code> element.
						</audio>
						<div class="soundinfo">
							<span>#{i}</span>
							<span><i class="fas fa-user" /> Lorem User</span>
						</div>
						<div class="soundreactions">
							<span><i class="fas fa-thumbs-up" /> 2</span>
							<span class="selected"><i class="fas fa-thumbs-down" /> 1</span>
						</div>
					</div>
				{/each}
			{:else}
				<div>
					<p>No hay elementos disponibles</p>
				</div>
			{/if}
		</article>

		<article>
			<h2>Estadísticas de uso</h2>
			<div>
				<h3>Top de Sonidos</h3>
				<ul>
					{#if usersTop.length > 0}
						{#each usersTop as cat, i}
							<li class="top">
								<p>Nombre audio</p>
								<div class="topinfo">
									<span>5 usos</span>
								</div>
							</li>
						{/each}
					{:else}
						<li>
							<p>No hay información disponible</p>
						</li>
					{/if}
				</ul>
			</div>

			<div>
				<h3>Top de Comandos</h3>
				<ul>
					{#if usersTop.length > 0}
						{#each usersTop as cat, i}
							<li class="top">
								<p>Nombre comando</p>
								<div class="topinfo">
									<span>6 usos</span>
								</div>
							</li>
						{/each}
					{:else}
						<li>
							<p>No hay información disponible</p>
						</li>
					{/if}
				</ul>
			</div>

			<div>
				<h3>Top de Sonidos</h3>
				<ul>
					{#if usersTop.length > 0}
						{#each usersTop as cat, i}
							<li class="top">
								<p>Nombre usuario</p>
								<div class="topinfo">
									<span>5 usos</span>
								</div>
							</li>
						{/each}
					{:else}
						<li>
							<p>No hay información disponible</p>
						</li>
					{/if}
				</ul>
			</div>
		</article>
	</section>
</main>

<style lang="scss">
	@use '/src/scss/dimens';
	@use '/src/scss/colors';

	@function getWidth($percentage, $padding) {
		@return calc(dimens.$max-width * $percentage - $padding);
	}

	main {
		display: flex;
		flex-flow: column;
		max-width: dimens.$max-width;
		margin: 0 auto;
		width: 100%;

		section {
			display: flex;
			flex-flow: row wrap;
			width: fit-content;
			margin-bottom: 2em;
			border-bottom-left-radius: 0.5em;
			border-bottom-right-radius: 0.5em;
			width: 100%;
			justify-content: space-between;

			article {
				display: flex;
				flex-flow: column;

				#sounds-header {
						display: flex;
						flex-flow: row wrap;
						justify-content: space-between;
						justify-items: center;
						margin: 1.25em 0;

						h2, button {
							margin: 0;
							align-self: center;
						}


						button {
							width: fit-content;
							height: fit-content;
							padding: .85em 1em;
						}
					}

				.sound {
					&:last-child {
						border-bottom: 1px solid #00000000;
					}

					p {
						font-weight: 800;
					}

					span {
						margin-right: 0.5em;
					}

					audio {
						margin-top: 1em;
						margin-right: 1em;
						width: 100%;
					}

					.soundinfo,
					.soundreactions {
						display: flex;
						flex-flow: row wrap;
						width: fit-content;
						margin: 1em 0;
					}

					.soundreactions {
						span {
							background: rgba(220, 220, 220, 0.42);
							border: 1px solid #00000000;
							padding: 0.25em 0.5em;
							border-radius: 0.5em;
							cursor: pointer;

							&:hover {
								border: 1px solid rgba(220, 220, 220);
							}
						}

						.selected {
							background: rgb(1, 176, 91, 0.5);
							border: 1px solid colors.$secondary-color;
							color: colors.$primary-color;
						}
					}
				}
			}

			article:first-child {
				width: getWidth(0.65, 4em);
			}

			article:last-child {
				width: getWidth(0.35, 2em);
				background-color: #00000010;
				height: fit-content;
				padding: 1em;
				padding-top: 0;

				h2 {
					margin-bottom: 0;
				}
			}

			ul {
				padding: 0;

				li {
					list-style: none;
					margin-bottom: 1em;

					p {
						font-weight: 600;
						margin: 0.5em 0;
					}

					.topinfo {
						font-size: 0.8em;
					}
				}
			}
		}
	}

	@media only screen and (max-width: 1380px) {
		main {
			margin: 0;

			section {
				flex-flow: column;

				article:first-child {
					width: unset;
					padding: 0 dimens.$document-padding;
				}

				article:last-child {
					width: unset;
					padding: 0 1em;
					margin-top: 1em;

					div {
						width: 100%;
					}
				}

				article {
					.sound {
						audio {
							margin: 1em 0;
							width: 100%;
						}
					}
				}
			}
		}
	}
</style>
