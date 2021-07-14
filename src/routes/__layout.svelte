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
		<a class="sidebar-courses-a" href="/react">
			<svg class="sidebar-courses-a-svg" style="background:#61dafb20">
				<use xlink:href="icons.svg#react" />
			</svg>
			<span class="sidebar-courses-a-span">React</span>
		</a>
		<a class="sidebar-courses-a" href="/sass">
			<svg class="sidebar-courses-a-svg" style="background:#cc669920">
				<use xlink:href="icons.svg#sass" />
			</svg>
			<span class="sidebar-courses-a-span">Sass</span>
		</a>
		<a class="sidebar-courses-a" href="/git">
			<svg class="sidebar-courses-a-svg" style="background:#f0503220">
				<use xlink:href="icons.svg#git" />
			</svg>
			<span class="sidebar-courses-a-span">Git</span>
		</a>
		<a class="sidebar-courses-a" href="/framer">
			<svg class="sidebar-courses-a-svg" style="background:#0055ff20">
				<use xlink:href="icons.svg#framer" />
			</svg>
			<span class="sidebar-courses-a-span">Framer</span>
		</a>
		<a class="sidebar-courses-a" href="/mongodb">
			<svg class="sidebar-courses-a-svg" style="background:#47a24820">
				<use xlink:href="icons.svg#mongodb" />
			</svg>
			<span class="sidebar-courses-a-span">MongoDB</span>
		</a>
	</div>
	<a class="sidebar-settings" href="/ayarlar">
		<svg class="sidebar-settings-svg">
			<use xlink:href="icons.svg#settings" />
		</svg>
	</a>
</div>
<div class="content">
	<div class="content-header">
		<a class="content-header-a" href="/">
			<svg class="content-header-a-svg">
				<use xlink:href="icons.svg#video" />
			</svg>
			<span class="content-header-a-span">Kurslar</span>
		</a>
		<a class="content-header-a" href="/sorular">
			<svg class="content-header-a-svg">
				<use xlink:href="icons.svg#help-circle" />
			</svg>
			<span class="content-header-a-span">Sorular</span>
		</a>
		<a class="content-header-a" href="/araclar">
			<svg class="content-header-a-svg">
				<use xlink:href="icons.svg#briefcase" />
			</svg>
			<span class="content-header-a-span">Araçlar</span>
		</a>
		<a class="content-header-a" href="/makaleler">
			<svg class="content-header-a-svg">
				<use xlink:href="icons.svg#file-text" />
			</svg>
			<span class="content-header-a-span">Makaleler</span>
		</a>
		<a class="content-header-a" href="/magaza">
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

	:global(html) {
		height: 100%;
	}

	:global(body) {
		display: flex;
		height: 100%;
		font-family: Segoe UI;
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
		display: flex;
		margin: 1rem;
		align-items: center;
	}

	.content-header-a {
		display: flex;
		padding: 0.5rem 1rem;
		text-decoration: none;
		border-radius: 1rem;
		margin: 0 0.75rem;
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
		font-weight: 700;
	}
</style>
