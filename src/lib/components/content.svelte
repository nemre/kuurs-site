<script>
	import Header from '$lib/components/header.svelte';
</script>

<div class="content">
	<Header />
	<div class="main">
		<slot />
	</div>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		background: #6200ea;
		border-radius: 1rem 0 0 1rem;
		min-width: 0;
		flex-grow: 1;
		height: 100%;
	}

	.main {
		overflow-y: auto;
		border-radius: 1rem 1rem 0;
		height: 100%;
	}
</style>
