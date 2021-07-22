<div class="carousel">
	<button class="carousel-left">
		<svg class="carousel-left-svg">
			<use xlink:href="icons.svg#chevron-left" />
		</svg>
	</button>
	<div class="carousel-items">
		<slot />
	</div>
	<button class="carousel-right">
		<svg class="carousel-right-svg">
			<use xlink:href="icons.svg#chevron-right" />
		</svg>
	</button>
</div>

<style>
	.carousel {
		display: flex;
		align-items: center;
	}

	.carousel-left {
		display: flex;
		border: none;
		cursor: pointer;
		box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
			0 2px 4px -1px rgba(0, 0, 0, 0.4);
		background: #fff;
		border-radius: 100%;
		padding: 0.5rem;
		position: relative;
		left: 20px;
	}

	.carousel-left-svg {
		width: 24px;
		height: 24px;
	}

	.carousel-items {
		display: flex;
		overflow-x: auto;
		background: #fff;
		gap: 24px;
		border-radius: 1rem;
	}

	.carousel-right {
		display: flex;
		border: none;
		cursor: pointer;
		box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
			0 2px 4px -1px rgba(0, 0, 0, 0.4);
		background: #fff;
		border-radius: 100%;
		padding: 0.5rem;
		position: relative;
		right: 20px;
	}

	.carousel-right-svg {
		width: 24px;
		height: 24px;
	}
</style>
