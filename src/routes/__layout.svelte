<script>
	import '../app.css';
</script>

<div class="sidebar">
	<a class="sidebar-logo" href="/">
		<svg class="sidebar-logo-svg">
			<use xlink:href="icons.svg#kuurs" />
		</svg>
	</a>
	<div class="sidebar-courses">
		<a class="sidebar-courses-a" href="/angular">
			<svg class="sidebar-courses-a-svg" style="background:#dd003120">
				<use xlink:href="icons.svg#angular" />
			</svg>
			<span class="sidebar-courses-a-span">Angular</span>
		</a>
		<a class="sidebar-courses-a" href="/svelte">
			<svg class="sidebar-courses-a-svg" style="background:#ff3e0020">
				<use xlink:href="icons.svg#svelte" />
			</svg>
			<span class="sidebar-courses-a-span">Svelte</span>
		</a>
	</div>
	<a class="sidebar-settings" href="/ayarlar">
		<svg class="sidebar-settings-svg">
			<use xlink:href="icons.svg#settings" />
		</svg>
	</a>
</div>
<div class="content">
	<div class="content-header" />
	<slot />
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
		margin: 1rem 1.75rem;
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
		width: 64px;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.sidebar-settings {
		display: flex;
		padding: 0.5rem;
		border-radius: 1rem;
		margin: 1rem 1.75rem;
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
	}

	.content-header {
	}
</style>
