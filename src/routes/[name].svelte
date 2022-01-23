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

<div class="hero">
	<div class="hero-div">
		<span class="hero-div-span-1">#WEBDEVELOPMENT</span>
		<span class="hero-div-span-2">{name.charAt(0).toUpperCase() + name.slice(1)} Course</span>
		<span class="hero-div-span-3"
			>Master {name} with the most complete course! Projects Excellent course. we explain the core concepts
			in {name} that are usually glossed over in other courses</span
		>
		<div class="hero-div-footer-1">
			<span class="rate">4.9</span>
			<svg class="star">
				<use xlink:href="icons.svg#star-filled" />
			</svg><svg class="star">
				<use xlink:href="icons.svg#star-filled" />
			</svg>
			<svg class="star">
				<use xlink:href="icons.svg#star-filled" />
			</svg>
			<svg class="star">
				<use xlink:href="icons.svg#star-filled" />
			</svg>
			<svg class="star">
				<use xlink:href="icons.svg#star-filled" />
			</svg><span>1200 Enerolled</span>
		</div>
		<div class="hero-div-footer-2">
			Oluşturan<a href="/">Stella Johnson</a> - Son güncelleme: 10/2019
		</div>
	</div>
	<img class="hero-banner" src="/angular-banner.png" alt="Angular Banner" />
</div>

<div class="section">
	<h1><h1>{name.charAt(0).toUpperCase() + name.slice(1)} kursu yapım aşamasındadır.</h1></h1>
</div>

<style>
	.section {
		display: flex;
		background: #f3f4f6;
		flex-direction: column;
		border-radius: 1rem 1rem 0 0;
		flex-shrink: 0;
	}

	.hero {
		display: flex;
		padding-left: 40px;
		padding-right: 40px;
		padding-bottom: 80px;
		padding-top: 40px;
	}

	.hero-banner {
		width: 400px;
		height: 200px;
		border-radius: 1rem;
		margin-right: 40px;
		margin-left: 40px;
	}

	.hero-div {
		display: flex;
		flex-direction: column;
		color: #fff;
	}

	.hero-div-footer-1 {
		display: flex;
		align-items: center;
	}

	.hero-div-footer-2 {
		display: flex;
	}

	.hero-div-span-1 {
		font-size: 16px;
		font-weight: 700;
	}

	.hero-div-span-2 {
		font-size: 48px;
		font-weight: 700;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.hero-div-span-3 {
		font-size: 16px;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.rate {
		display: flex;
		background: #f6ad55;
		font-weight: 700;
		border-radius: 1rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		line-height: 24px;
	}

	.star {
		width: 16px;
		height: 16px;
	}
</style>
