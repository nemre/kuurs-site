<div class="carousel">
	<slot />
</div>

<style>
	.carousel {
		display: flex;
		overflow-x: auto;
		flex-shrink: 0;
		gap: 40px;
		padding-top: 8px;
		padding-bottom: 8px;
		padding-left: 8px;
	}
</style>
