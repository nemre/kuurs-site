<script>
	export let courses;
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

<style>
	.sidebar {
		flex-direction: column;
		align-items: center;
		display: flex;
	}

	.sidebar-logo {
		border-radius: 1rem;
		margin: 1rem 1.5rem;
		padding: 0.5rem;
		flex-shrink: 0;
		display: flex;
	}

	.sidebar-logo:hover {
		background: #00000020;
	}

	.sidebar-logo-svg {
		height: 1.5rem;
		width: 1.5rem;
	}

	.sidebar-courses {
		flex-direction: column;
		border-radius: 1rem;
		overflow-y: auto;
		display: flex;
		flex-grow: 1;
	}

	.sidebar-courses-a {
		flex-direction: column;
		text-decoration: none;
		border-radius: 1rem;
		align-items: center;
		padding: 0.5rem;
		flex-shrink: 0;
		display: flex;
	}

	.sidebar-courses-a:hover {
		background: #00000020;
	}

	.sidebar-courses-a-svg {
		border-radius: 1rem;
		padding: 0.5rem;
		height: 1.5rem;
		width: 1.5rem;
	}

	.sidebar-courses-a-span {
		text-overflow: ellipsis;
		line-height: 1.5rem;
		text-align: center;
		font-weight: 700;
		overflow: hidden;
		color: #000;
		width: 56px;
	}

	.sidebar-settings {
		border-radius: 1rem;
		margin: 1rem 1.5rem;
		padding: 0.5rem;
		flex-shrink: 0;
		display: flex;
	}

	.sidebar-settings:hover {
		background: #00000020;
	}

	.sidebar-settings-svg {
		height: 1.5rem;
		width: 1.5rem;
	}
</style>
