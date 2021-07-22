<script>
	export let image, title;
</script>

<a class="coursecard" href="/">
	<img class="coursecard-img" src="/{image}" alt="alt" />
	<span class="coursecard-title">{title}</span>
	<span class="coursecard-desc"
		>Kullanıcı arayüzü oluşturmaya yarayan açık kaynak kodlu bir hızlı ve performanslı javascript
		kütüphanesidir.</span
	>
	<div class="coursecard-footer">
		<svg class="coursecard-footer-svg-1">
			<use xlink:href="icons.svg#users" />
		</svg>
		<span class="coursecard-footer-users">4.6b</span>
		<svg class="coursecard-footer-svg-2">
			<use xlink:href="icons.svg#star" />
		</svg>
		<span class="coursecard-footer-reviews">5.6 (32 Review)</span>
	</div>
</a>

<style>
	.coursecard {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		width: 216px;
		border-radius: 1rem;
		background: #fff;
		border: 1px solid #00000030;
		padding-bottom: 16px;
		flex-shrink: 0;
	}
	.coursecard:hover {
		background: #00000010;
	}

	.coursecard-img {
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		height: 64px;
	}
	.coursecard-title {
		margin-left: 16px;
		margin-right: 16px;
		font-size: 24px;
		color: #000;
		font-weight: bold;
		margin-top: 16px;
		line-height: 16px;
	}
	.coursecard-desc {
		margin-left: 16px;
		margin-right: 16px;
		font-size: 12px;
		color: #000;
		font-weight: 500;
		color: #000;
		line-height: 16px;
		margin-top: 8px;
		flex-grow: 1;
	}
	.coursecard-footer {
		margin-left: 16px;
		margin-right: 16px;
		display: flex;
		align-items: center;
		margin-top: 8px;
	}
	.coursecard-footer-svg-1 {
		width: 16px;
		fill: #6200ea;
		height: 16px;
	}
	.coursecard-footer-users {
		color: #00000099;
		line-height: 16px;
		font-weight: bold;
		font-size: 12px;
		margin-left: 4px;
	}
	.coursecard-footer-svg-2 {
		width: 16px;
		height: 16px;
		fill: #6200ea;
		margin-left: 16px;
	}
	.coursecard-footer-reviews {
		color: #00000099;
		font-size: 12px;
		line-height: 16px;
		font-weight: bold;
		margin-left: 4px;
	}
</style>
