<script>
	import Header from '$lib/components/header.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';

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

<Sidebar {courses} />
<div class="content">
	<Header />
	<div class="main">
		<slot />
	</div>
</div>

<style>
	:global(::-webkit-scrollbar) {
		width: 0;
		height: 0;
	}

	:global(html) {
		height: 100%;
		width: 100%;
	}
	:global(body) {
		margin: 0;
		height: 100%;
		width: 100%;
		display: flex;

		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.content {
		display: flex;
		background: #6200ea;
		flex-direction: column;
		border-radius: 1rem 0 0 1rem;
		min-width: 0;
		flex-grow: 1;
	}

	.main {
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		border-bottom-left-radius: 1rem;
	}
</style>
