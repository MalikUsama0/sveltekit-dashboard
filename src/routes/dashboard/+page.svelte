<!-- src/routes/dashboard/index.svelte -->
<script>
	// Redirect to the overview page or load default content
	export let data;
	console.log(data, 'testing data');
</script>

<!-- <svelte:component this={import('./overview/+page.svelte').then((m) => m.default)} /> -->
<h2>dashboard</h2>
