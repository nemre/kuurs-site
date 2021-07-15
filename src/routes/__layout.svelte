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
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		position: fixed;
		display: flex;
		bottom: 0;
		margin: 0;
		right: 0;
		left: 0;
		top: 0;
	}

	.content {
		border-radius: 1rem 0 0 1rem;
		flex-direction: column;
		background: #6200ea;
		display: flex;
		flex-grow: 1;
	}

	.main {
		border-bottom-left-radius: 1rem;
		border-top-right-radius: 1rem;
		border-top-left-radius: 1rem;
		overflow-y: auto;
	}
</style>
