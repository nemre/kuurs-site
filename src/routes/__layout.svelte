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
	<slot />
</div>

<style>
	:global(::-webkit-scrollbar) {
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

	.content {
		flex-grow: 1;
		background: #6200ea;
		border-radius: 1rem 0 0 1rem;
		display: flex;
		flex-direction: column;
	}
</style>
