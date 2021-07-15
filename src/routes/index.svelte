<script>
	import CoursesHero from '$lib/components/coursesHero.svelte';
</script>

<svelte:head>
	<title>İnteraktif Öğrenme Platformu - Kuurs</title>
</svelte:head>

<CoursesHero />
<div class="section">
	<img src="/demo1.png" />
	<img src="/demo2.png" />
</div>

<style>
	.section {
		border-radius: 1rem 1rem 0 0;
		flex-direction: column;
		background: #efefef;
		text-align: center;
		display: flex;
	}
</style>
