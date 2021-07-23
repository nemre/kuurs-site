<script>
	let leftButton, carousel, rightButton;
	let xScroll = 0;
	let yScroll = 0;
	function parseScroll() {
		xScroll = carousel.scrollLeft;
		yScroll = carousel.scrollTop;

		if (xScroll == 0) {
			leftButton.style.visibility = 'hidden';
		} else {
			leftButton.style.visibility = 'visible';
		}

		if (xScroll == 826) {
			rightButton.style.visibility = 'hidden';
		} else {
			rightButton.style.visibility = 'visible';
		}
	}

	function scrollToLeft() {
		carousel.scrollLeft = carousel.scrollLeft - 160;
	}

	function scrollToRight() {
		carousel.scrollLeft = carousel.scrollLeft + 160;
	}
</script>

<div class="carousel">
	<button class="carousel-left" bind:this={leftButton} on:click={scrollToLeft}>
		<svg class="carousel-left-svg">
			<use xlink:href="icons.svg#chevron-left" />
		</svg>
	</button>
	<div class="carousel-items" bind:this={carousel} on:scroll={parseScroll}>
		<slot />
	</div>
	<button class="carousel-right" bind:this={rightButton} on:click={scrollToRight}>
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
		visibility: hidden;
	}

	.carousel-left-svg {
		width: 24px;
		height: 24px;
	}

	.carousel-items {
		display: flex;
		overflow-x: auto;
		background: #fff;
		gap: 40px;
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
