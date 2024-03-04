<script>
	/** @type {import('./$types').PageData} */
	export let data;

	/**
	 * @type {string[]}
	 */
	let audios = [];

	const onDropFiles = (event) => {
		event.preventDefault();
		let input = document.getElementById('upload-audio');
		let files = event.dataTransfer.files;
		input.files = files;
		audios = [...audios, ...files];
		console.log(files);
	};

	const populateAudios = (event) => {
		audios = [...audios, ...event.target.files];
	};

	const removeAudio = (audio) => {
		audios = audios.filter((currentAudio) => currentAudio != audio);
	};

	// ty, https://stackoverflow.com/a/18650828
	const formatBytes = (bytes, decimals = 2) => {
		if (!+bytes) return '0 Bytes';

		const k = 1024;
		const dm = decimals < 0 ? 0 : decimals;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

		const i = Math.floor(Math.log(bytes) / Math.log(k));

		return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
	};
</script>

<main>
	<article>
		<div id="header">
			<h2>Añadir audios</h2>
			<button on:click={() => {}}>Añadir audios</button>
		</div>
		<label
			id="upload"
			for="upload-audio"
			class="roundedbackground"
			on:dragover={(e) => e.preventDefault()}
			on:drop={(event) => onDropFiles(event)}
		>
			<p>Haz click o suelta los audios aquí</p>
		</label>
		<div id="audios">
			{#each audios as audio}
				<div id="audio">
					<i class="fas fa-music" />
					<div id="trash" on:click={() => removeAudio(audio)}>
						<i class="fas fa-trash" />
					</div>
					<p>{audio.name}</p>
					<span>{formatBytes(audio.size)}</span>
				</div>
			{/each}
		</div>
		<input
			hidden
			type="file"
			multiple
			id="upload-audio"
			accept=".mp3,audio/*"
			on:change={populateAudios}
		/>
	</article>
</main>

<style lang="scss">
	@use '/src/scss/dimens';
	@use '/src/scss/colors';
	main {
		display: flex;
		flex-flow: column;
		margin: 1em auto;
		width: 100%;
		max-width: dimens.$max-width;

		article {
			padding: dimens.$document-padding;
		}

		#header {
			display: flex;
			flex-flow: row wrap;
			gap: 1em;

			h2,
			button {
				flex: 1 0 10em;
			}

			button {
				max-width: 10em;
			}

			h2 {
				margin: 0;
				align-self: center;
			}
		}

		#upload {
			display: flex;
			border: 1px dashed #ccc;
			margin: 1em 0;
			min-height: 5em;
			border-radius: 0.5em;
			padding: 0;
			cursor: pointer;
			text-align: center;

			p {
				margin: auto;
				padding: 1em;
			}
		}

		#audios {
			display: flex;
			flex-flow: row wrap;
			gap: 1em;
			margin-top: 1.5em;

			#audio {
				min-width: 6em;
				padding: 1em;
				position: relative;
				display: flex;
				flex-flow: column;
				align-items: center;
				border: 1px solid rgba(220, 220, 220, 0.42);
				border-radius: 0.5em;
				animation: left-to-right ease 0.5s;
				z-index: 1;

				.fa-music {
					color: colors.$secondary-color;
					font-size: 1.5em;
				}

				p {
					width: 100%;
				}

				#trash {
					position: absolute;
					top: 0;
					right: 0;
					color: red;
					padding: 0.5em;
					cursor: pointer;
				}

				span {
					font-size: 0.8em;
				}
			}
		}

		@keyframes left-to-right {
			from {
				opacity: 0;
				transform: translateX(-6em);
			}

			to {
				opacity: 1;
				transform: translateX(0px);
			}
		}
	}
</style>
