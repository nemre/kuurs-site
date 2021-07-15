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
		display: flex;
		flex-shrink: 0;
		margin: 1rem 2.5rem 2.5rem;
	}

	.hero-left {
		display: flex;
		flex-direction: column;
	}

	.hero-left-h1 {
		color: #fff;
		font-size: 32px;
		line-height: 40px;
		margin: 0 0 1.5rem;
	}

	.hero-left-h1-strong {
		color: #e7b9ff;
		font-weight: bolder;
	}

	.hero-left-search {
		fill: #fff;
		display: flex;
		flex-shrink: 0;
		padding: 0.5rem;
		background: #9d46ff;
		border-radius: 1rem;
		align-items: center;
	}

	.hero-left-search-left {
		border: none;
		display: flex;
		padding: 0.5rem;
		cursor: pointer;
		background: none;
		border-radius: 1rem;
	}

	.hero-left-search-left-svg {
		width: 1.5rem;
		height: 1.5rem;
	}

	.hero-left-search-input {
		padding: 0;
		color: #fff;
		flex-grow: 1;
		border: none;
		outline: none;
		font-size: 16px;
		background: none;
		font-weight: 700;
		margin: 0 0.5rem;
		line-height: 40px;
		font-family: inherit;
	}

	.hero-left-search-input::placeholder {
		color: #fff;
	}

	.hero-left-search-right {
		border: none;
		display: flex;
		padding: 0.5rem;
		cursor: pointer;
		background: none;
		border-radius: 1rem;
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
