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
		align-items: center;
		flex-direction: column;
	}

	.sidebar-logo {
		display: flex;
		flex-shrink: 0;
		padding: 0.5rem;
		border-radius: 1rem;
		margin: 1rem 1.5rem;
	}

	.sidebar-logo:hover {
		background: #00000020;
	}

	.sidebar-logo-svg {
		width: 1.5rem;
		height: 1.5rem;
	}

	.sidebar-courses {
		flex-grow: 1;
		display: flex;
		overflow-y: auto;
		border-radius: 1rem;
		flex-direction: column;
	}

	.sidebar-courses-a {
		display: flex;
		flex-shrink: 0;
		padding: 0.5rem;
		border-radius: 1rem;
		align-items: center;
		text-decoration: none;
		flex-direction: column;
	}

	.sidebar-courses-a:hover {
		background: #00000020;
	}

	.sidebar-courses-a-svg {
		width: 1.5rem;
		height: 1.5rem;
		padding: 0.5rem;
		border-radius: 1rem;
	}

	.sidebar-courses-a-span {
		color: #000;
		width: 56px;
		font-weight: 700;
		overflow: hidden;
		text-align: center;
		line-height: 1.5rem;
		text-overflow: ellipsis;
	}

	.sidebar-settings {
		display: flex;
		flex-shrink: 0;
		padding: 0.5rem;
		border-radius: 1rem;
		margin: 1rem 1.5rem;
	}

	.sidebar-settings:hover {
		background: #00000020;
	}

	.sidebar-settings-svg {
		width: 1.5rem;
		height: 1.5rem;
	}
</style>
