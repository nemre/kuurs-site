<script>
	import Content from '$lib/components/content.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';

	import '../app.css';

	let courses = [
		{ name: 'Angular', color: 'dd0031' },
		{ name: 'Svelte', color: 'ff3e00' },
		{ name: 'React', color: '61dafb' },
		{ name: 'Sass', color: 'cc6699' },
		{ name: 'JavaScript', color: 'f7df1e' },
		{ name: 'Git', color: 'f05032' },
		{ name: 'Framer', color: '0055ff' },
		{ name: 'MongoDB', color: '47a248' }
	];
</script>

<Sidebar {courses} />
<Content><slot /></Content>
