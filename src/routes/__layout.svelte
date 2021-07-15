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
	}

	:global(body) {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: 0;
		display: flex;
		position: fixed;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.content {
		flex-grow: 1;
		display: flex;
		background: #6200ea;
		flex-direction: column;
		border-radius: 1rem 0 0 1rem;
	}

	.main {
		overflow-y: auto;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		border-bottom-left-radius: 1rem;
	}
</style>
