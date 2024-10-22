<!-- src/routes/dashboard/+layout.svelte -->
<script>
	import { page } from '$app/stores';
	let isLoggedIn = false; // Replace this with real authentication state
	let userName = 'User'; // Replace with real user data
	// console.log($page);
	function handleLogin() {
		// Handle login logic here
		isLoggedIn = true;
	}

	function handleLogout() {
		// Handle logout logic here
		isLoggedIn = false;
	}

	const routes = [
		{ href: '/dashboard/products', name: 'Products', tooltip: 'Products' },
		{ href: '/dashboard/reports', name: 'Reports', tooltip: 'Reports' },
		{ href: '/dashboard/contact', name: 'Contacts', tooltip: 'Contacts' }
	];

	export let data;
	// console.log(data, 'here is layout data');
</script>

<div class="dashboard-container">
	<div class="sidebar">
		<h2>Dashboard</h2>

		{#each routes as route}
			<a href={route.href} class:active={$page.url.pathname === route.href}>
				{route.name}
			</a>
		{:else}
			<h2>loading.....</h2>
		{/each}

		<div class="auth-buttons">
			{#if isLoggedIn}
				<span>Welcome, {userName}</span>
				<button on:click={handleLogout}>Logout</button>
			{:else}
				<button on:click={handleLogin}>Login</button>
			{/if}
		</div>
	</div>
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.dashboard-container {
		display: flex;
		height: 100vh;
	}

	.sidebar {
		width: 250px;
		background-color: #343a40;
		color: #fff;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		position: fixed;
		top: 0;
		bottom: 0;
		height: 100%;
		overflow-y: auto;
	}

	.sidebar h2 {
		margin-bottom: 2rem;
		font-size: 1.5rem;
	}

	.sidebar a {
		color: #fff;
		text-decoration: none;
		margin: 0.5rem 0;
		padding: 0.5rem;
		border-radius: 4px;
		display: block;
	}
	.sidebar a.active {
		background-color: #495057;
	}

	.sidebar a:hover {
		background-color: #495057;
	}

	.sidebar .auth-buttons {
		margin-top: auto;
		text-align: center;
	}

	.sidebar .auth-buttons button {
		background: none;
		border: none;
		color: #fff;
		cursor: pointer;
		font-size: 1rem;
		margin: 0.5rem 0;
	}

	.sidebar .auth-buttons button:hover {
		text-decoration: underline;
	}

	.content {
		margin-left: 250px;
		padding: 1rem 2rem;
		flex: 1;
		background-color: #f8f9fa;
	}
</style>
