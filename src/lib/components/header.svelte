<div class="content-header">
	<a sveltekit:prefetch class="content-header-a" href="/">
		<svg class="content-header-a-svg">
			<use xlink:href="icons.svg#video" />
		</svg>
		<span class="content-header-a-span">Kurslar</span>
	</a>
	<a sveltekit:prefetch class="content-header-a" href="/sorular">
		<svg class="content-header-a-svg">
			<use xlink:href="icons.svg#help-circle" />
		</svg>
		<span class="content-header-a-span">Sorular</span>
	</a>
	<a sveltekit:prefetch class="content-header-a" href="/araclar">
		<svg class="content-header-a-svg">
			<use xlink:href="icons.svg#briefcase" />
		</svg>
		<span class="content-header-a-span">Araçlar</span>
	</a>
	<a sveltekit:prefetch class="content-header-a" href="/makaleler">
		<svg class="content-header-a-svg">
			<use xlink:href="icons.svg#file-text" />
		</svg>
		<span class="content-header-a-span">Makaleler</span>
	</a>
	<a sveltekit:prefetch class="content-header-a" href="/magaza">
		<svg class="content-header-a-svg">
			<use xlink:href="icons.svg#shopping-bag" />
		</svg>
		<span class="content-header-a-span">Mağaza</span>
	</a>
</div>

<style>
	.content-header {
		display: flex;
		margin: 1rem;
		align-items: center;
		flex-shrink: 0;
	}

	.content-header-a {
		display: flex;
		padding: 0.5rem 1rem;
		text-decoration: none;
		border-radius: 1rem;
		margin: 0 0.5rem;
	}

	.content-header-a:hover {
		background: #00000020;
	}

	.content-header-a-svg {
		width: 1.5rem;
		height: 1.5rem;
	}

	.content-header-a-span {
		margin-left: 0.5rem;
		line-height: 1.5rem;
		color: #fff;
		font-weight: bold;
	}
</style>
