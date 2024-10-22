<script>
	import { goto } from '$app/navigation';
	let email = '';
	let password = '';

	function handleLogin() {
		console.log('Login with', email, password);
		goto('/dashboard/overview');
	}
</script>

<div class="auth-container">
	<div class="auth-form">
		<h1>Login</h1>
		<form on:submit|preventDefault={handleLogin}>
			<div class="form-group">
				<label for="email">Email</label>
				<input type="email" id="email" bind:value={email} required />
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input type="password" id="password" bind:value={password} required />
			</div>
			<div class="form-group">
				<button type="submit">Login</button>
			</div>
			<div class="redirect">
				<p>Not a member</p>
				<a href="/auth/register">Signup now</a>
			</div>
		</form>
	</div>
</div>

<style>
	.auth-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #f4f4f4;
	}

	.auth-form {
		background: #fff;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 400px;
	}

	h1 {
		margin-bottom: 1.5rem;
	}

	.form-group {
		margin-bottom: 1rem;
	}

	.form-group label {
		display: block;
		margin-bottom: 0.5rem;
	}

	.form-group input {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid #ddd;
		border-radius: 4px;
	}

	.form-group button {
		width: 100%;
		padding: 0.75rem;
		background-color: #007bff;
		color: #fff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.form-group button:hover {
		background-color: #0056b3;
	}
	.redirect {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
	}

	a {
		margin: 0 1rem;
		text-decoration: none;
		color: #007bff;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
