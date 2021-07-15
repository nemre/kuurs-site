<script>
	let courses = [
		{ name: 'Angular', color: 'dd0031' },
		{ name: 'Svelte', color: 'ff3e00' },
		{ name: 'React', color: '61dafb' },
		{ name: 'Sass', color: 'cc6699' },
		{ name: 'Git', color: 'f05032' },
		{ name: 'Framer', color: '0055ff' },
		{ name: 'MongoDB', color: '47a248' }
	];
</script>

<div class="sidebar">
	<a class="sidebar-logo" href="/" aria-label="Anasayfa Linki">
		<svg class="sidebar-logo-svg">
			<use xlink:href="icons.svg#kuurs" />
		</svg>
	</a>
	<div class="sidebar-courses">
		{#each courses as course}
			<a sveltekit:prefetch class="sidebar-courses-a" href={course.name.toLowerCase()}>
				<svg class="sidebar-courses-a-svg" style="background:#{course.color}20">
					<use xlink:href="icons.svg#{course.name.toLowerCase()}" />
				</svg>
				<span class="sidebar-courses-a-span">{course.name}</span>
			</a>
		{/each}
	</div>
	<a class="sidebar-settings" href="/ayarlar" aria-label="Ayarlar Linki">
		<svg class="sidebar-settings-svg">
			<use xlink:href="icons.svg#settings" />
		</svg>
	</a>
</div>
<div class="content">
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
	<slot />
</div>

<style>
	::-webkit-scrollbar {
		width: 0;
	}

	:global(body) {
		display: flex;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		margin: 0;
	}

	.sidebar {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.sidebar-logo {
		display: flex;
		padding: 0.5rem;
		border-radius: 1rem;
		margin: 1rem 1.5rem;
		flex-shrink: 0;
	}

	.sidebar-logo:hover {
		background: #00000020;
	}

	.sidebar-logo-svg {
		width: 1.5rem;
		height: 1.5rem;
	}

	.sidebar-courses {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		overflow-y: auto;
	}

	.sidebar-courses-a {
		display: flex;
		flex-direction: column;
		padding: 0.5rem;
		border-radius: 1rem;
		align-items: center;
		text-decoration: none;
		flex-shrink: 0;
	}

	.sidebar-courses-a:hover {
		background: #00000020;
	}

	.sidebar-courses-a-svg {
		border-radius: 1rem;
		width: 1.5rem;
		height: 1.5rem;
		padding: 0.5rem;
	}

	.sidebar-courses-a-span {
		color: #000;
		font-weight: 700;
		line-height: 1.5rem;
		width: 56px;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.sidebar-settings {
		display: flex;
		padding: 0.5rem;
		border-radius: 1rem;
		margin: 1rem 1.5rem;
		flex-shrink: 0;
	}

	.sidebar-settings:hover {
		background: #00000020;
	}

	.sidebar-settings-svg {
		width: 1.5rem;
		height: 1.5rem;
	}

	.content {
		flex-grow: 1;
		background: #6200ea;
		border-radius: 1rem 0 0 1rem;
		display: flex;
		flex-direction: column;
	}

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
