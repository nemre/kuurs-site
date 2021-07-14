<script context="module">
	export async function load({ page }) {
		return {
			props: {
				name: page.params.name
			}
		};
	}
</script>

<script>
	export let name;
</script>

<svelte:head>
	<title>{name.charAt(0).toUpperCase() + name.slice(1)} Kursu - Kuurs</title>
</svelte:head>

<h1>{name.charAt(0).toUpperCase() + name.slice(1)} kursu yapım aşamasındadır.</h1>
