<script>
	import Carousel from '$lib/components/carousel.svelte';
	import CourseCard from '$lib/components/courseCard.svelte';
	import CoursesHero from '$lib/components/coursesHero.svelte';
</script>

<svelte:head>
	<title>İnteraktif Öğrenme Platformu - Kuurs</title>
</svelte:head>

<CoursesHero />
<div class="section">
	<h1>Popüler <strong>Kurslar</strong></h1>
	<Carousel>
		<CourseCard image="angular-banner.png" title="Angular" />
		<CourseCard image="react-banner.png" title="React" />
		<CourseCard image="svelte-banner.png" title="Svelte" />
		<CourseCard image="vuejs-banner.png" title="Vue.js" />
		<CourseCard image="angular-banner.png" title="Angular" />
		<CourseCard image="react-banner.png" title="React" />
		<CourseCard image="svelte-banner.png" title="Svelte" />
		<CourseCard image="vuejs-banner.png" title="Vue.js" />
	</Carousel>
	<h1>Frontend <strong>Framework'lar</strong></h1>
	<Carousel>
		<CourseCard image="angular-banner.png" title="Angular" />
		<CourseCard image="react-banner.png" title="React" />
		<CourseCard image="svelte-banner.png" title="Svelte" />
		<CourseCard image="vuejs-banner.png" title="Vue.js" />
		<CourseCard image="angular-banner.png" title="Angular" />
		<CourseCard image="react-banner.png" title="React" />
		<CourseCard image="svelte-banner.png" title="Svelte" />
		<CourseCard image="vuejs-banner.png" title="Vue.js" />
	</Carousel>
</div>

<style>
	.section {
		display: flex;
		background: #f3f4f6;
		flex-direction: column;
		border-radius: 1rem 1rem 0 0;
		height: 100%;
	}

	h1 {
		margin: 0;
		font-size: 32px;
		margin-left: 40px;
		line-height: 16px;
		margin-top: 40px;
		margin-bottom: 40px;
	}

	strong {
		font-weight: bolder;
		color: #6200ea;
	}
</style>
