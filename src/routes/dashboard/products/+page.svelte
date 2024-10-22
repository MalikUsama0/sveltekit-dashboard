<!-- src/routes/dashboard/overview.svelte -->
<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	// Logic for the overview page
	export let data;

	if (data.title) {
	}

	console.log($page, 'here is page');
</script>

<div class="products">
	<h1>{data.title}</h1>
	{#each data.products as product}
		<div class="product-list">
			<h2>
				{product.title}
			</h2>
			<p>
				{product.body}
			</p>
		</div>
		<hr />
	{:else}
		<h2>Something went wrong!</h2>
	{/each}
</div>

<style>
	/* .products {
		padding: 2rem;
	} */
	.product-list {
		margin-top: 1rem;
		line-height: 2rem;
	}
</style>
