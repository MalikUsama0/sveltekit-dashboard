<!-- src/routes/contact.svelte -->
<script>
	// let name = '';
	// let email = '';
	// let message = '';

	// const handleSubmit = async (event) => {
	// 	event.preventDefault();
	// 	// Handle form submission logic here
	// 	console.log('Form submitted:', { name, email, message });
	// };

	export let form;
	console.log(form, 'here is form response');
</script>

<div class="contact-page">
	<h1>Contact Us</h1>

	<form method="post">
		<div class="form-group">
			<label for="name">Name</label>
			<input type="text" id="name" name="username" />
		</div>

		<div class="form-group">
			<label for="email">Email</label>
			<input type="email" name="email" id="email" />
		</div>

		<div class="form-group">
			<label for="message">Message</label>
			<textarea id="message" rows="4"></textarea>
		</div>

		<button type="submit">Send Message</button>
	</form>

	<div class="contact-info">
		<h2>Our Contact Information</h2>
		<p>Email: support@example.com</p>
		<p>Phone: +123 456 7890</p>
		<p>Address: 123 Example St, City, Country</p>
	</div>
</div>

<style>
	.contact-page {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		font-family: Arial, sans-serif;
	}

	h1 {
		text-align: center;
		color: #333;
	}

	.form-group {
		margin-bottom: 1rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: bold;
	}

	input,
	textarea {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		box-sizing: border-box;
	}

	button {
		display: block;
		width: 100%;
		padding: 0.75rem;
		border: none;
		border-radius: 4px;
		background-color: #007bff;
		color: #fff;
		font-size: 1rem;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}

	.contact-info {
		text-align: center;
		margin-top: 2rem;
	}

	.contact-info p {
		margin: 0.5rem 0;
	}
</style>
