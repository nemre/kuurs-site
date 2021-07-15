<script>
	function timeOfDay() {
		let hour = new Date().getHours();
		if (hour >= 4 && hour <= 11) return 'sabah';
		if (hour >= 12 && hour <= 16) return 'öğlen';
		if (hour >= 17 && hour <= 20) return 'akşam';
		if (hour >= 21 || hour <= 3) return 'gece';
	}
</script>

<svelte:head>
	<title>İnteraktif Öğrenme Platformu - Kuurs</title>
</svelte:head>

<div class="main">
	<div class="hero">
		<div class="hero-left">
			<h1 class="hero-left-h1">
				Tamamen <strong class="hero-left-h1-strong">Ücretsiz</strong> Kursların<br />Deneyimini
				Burada Yaşayın!
			</h1>
			<div class="hero-left-search">
				<button class="hero-left-search-left" aria-label="Arama Butonu">
					<svg class="hero-left-search-left-svg">
						<use xlink:href="icons.svg#search" />
					</svg>
				</button>
				<input
					type="text"
					class="hero-left-search-input"
					placeholder="Bu {timeOfDay()} ne öğrenmek istersin?"
				/>
				<button class="hero-left-search-right" aria-label="Mikrofon Butonu">
					<svg class="hero-left-search-right-svg">
						<use xlink:href="icons.svg#mic" />
					</svg>
				</button>
			</div>
		</div>
		<div class="hero-right">Right Area</div>
	</div>

	<div class="section">
		<h1>Lorem Ipsum dolor</h1>
		<h1>Lorem Ipsum dolor</h1>
		<h1>Lorem Ipsum dolor</h1>
		<h1>Lorem Ipsum dolor</h1>
		<h1>Lorem Ipsum dolor</h1>
		<h1>Lorem Ipsum dolor</h1>
		<h1>Lorem Ipsum dolor</h1>
		<h1>Lorem Ipsum dolor</h1>
		<h1>Lorem Ipsum dolor</h1>
		<h1>Lorem Ipsum dolor</h1>
		<h1>Lorem Ipsum dolor</h1>
		<h1>Lorem Ipsum dolor</h1>
	</div>
</div>

<style>
	.main {
		border-top-right-radius: 1rem;
		border-top-left-radius: 1rem;
		overflow-y: auto;
	}

	.section {
		display: flex;
		flex-direction: column;
		background: #efefef;
		border-radius: 1rem 1rem 0 0;
		line-height: 80px;
		text-align: center;
	}

	.hero {
		display: flex;
		margin: 1rem 2.5rem 2.5rem;
		flex-shrink: 0;
	}

	.hero-left {
		display: flex;
		flex-direction: column;
	}

	.hero-left-h1 {
		margin: 0;
		color: #fff;
		font-size: 32px;
		line-height: 40px;
		margin-bottom: 1.5rem;
	}

	.hero-left-h1-strong {
		font-weight: bolder;
		color: #e7b9ff;
	}

	.hero-left-search {
		display: flex;
		background: #9d46ff;
		border-radius: 1rem;
		fill: #fff;
		align-items: center;
		padding: 0.5rem;
		flex-shrink: 0;
	}

	.hero-left-search-left {
		border: none;
		padding: 0.5rem;
		display: flex;
		background: none;
		border-radius: 1rem;
		cursor: pointer;
	}

	.hero-left-search-left-svg {
		width: 1.5rem;
		height: 1.5rem;
	}

	.hero-left-search-input {
		background: none;
		flex-grow: 1;
		border: none;
		padding: 0;
		font-size: 16px;
		font-weight: 700;
		color: #fff;
		line-height: 40px;
		font-family: inherit;
		outline: none;
		margin: 0 0.5rem;
	}

	.hero-left-search-input::placeholder {
		color: #fff;
	}

	.hero-left-search-right {
		border: none;
		padding: 0.5rem;
		display: flex;
		background: none;
		border-radius: 1rem;
		cursor: pointer;
	}

	.hero-left-search-right-svg {
		width: 1.5rem;
		height: 1.5rem;
	}

	.hero-left-search-left:hover,
	.hero-left-search-right:hover {
		background: #00000020;
	}

	.hero-right {
	}
</style>
