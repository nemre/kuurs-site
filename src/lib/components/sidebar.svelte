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
		border-radius: 1rem;
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
</style>
