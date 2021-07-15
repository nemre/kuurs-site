<script>
	function timeOfDay() {
		let hour = new Date().getHours();
		if (hour >= 4 && hour <= 11) return 'sabah';
		if (hour >= 12 && hour <= 16) return 'öğlen';
		if (hour >= 17 && hour <= 20) return 'akşam';
		if (hour >= 21 || hour <= 3) return 'gece';
	}
</script>

<div class="hero">
	<div class="hero-left">
		<h1 class="hero-left-h1">
			Tamamen <strong class="hero-left-h1-strong">Ücretsiz</strong> Kursların<br />Deneyimini Burada
			Yaşayın!
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

<style>
	.hero {
		margin: 1rem 2.5rem 2.5rem;
		flex-shrink: 0;
		display: flex;
	}

	.hero-left {
		flex-direction: column;
		display: flex;
	}

	.hero-left-h1 {
		margin-bottom: 1.5rem;
		line-height: 40px;
		font-size: 32px;
		color: #fff;
		margin: 0;
	}

	.hero-left-h1-strong {
		font-weight: bolder;
		color: #e7b9ff;
	}

	.hero-left-search {
		background: #9d46ff;
		border-radius: 1rem;
		align-items: center;
		padding: 0.5rem;
		flex-shrink: 0;
		display: flex;
		fill: #fff;
	}

	.hero-left-search-left {
		border-radius: 1rem;
		background: none;
		padding: 0.5rem;
		cursor: pointer;
		display: flex;
		border: none;
	}

	.hero-left-search-left-svg {
		height: 1.5rem;
		width: 1.5rem;
	}

	.hero-left-search-input {
		font-family: inherit;
		line-height: 40px;
		background: none;
		font-weight: 700;
		margin: 0 0.5rem;
		font-size: 16px;
		outline: none;
		flex-grow: 1;
		border: none;
		color: #fff;
		padding: 0;
	}

	.hero-left-search-input::placeholder {
		color: #fff;
	}

	.hero-left-search-right {
		border-radius: 1rem;
		background: none;
		padding: 0.5rem;
		cursor: pointer;
		display: flex;
		border: none;
	}

	.hero-left-search-right-svg {
		height: 1.5rem;
		width: 1.5rem;
	}

	.hero-left-search-left:hover,
	.hero-left-search-right:hover {
		background: #00000020;
	}

	.hero-right {
	}
</style>
