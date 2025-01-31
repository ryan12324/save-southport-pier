<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-gray-50">
	<header class="bg-blue-900 text-white p-4">
		<nav class="container mx-auto flex justify-between items-center">
			<a href="/" class="text-2xl font-bold">Save Southport Pier</a>
			<div class="space-x-4">
				<a href="/" class="hover:text-blue-200">Home</a>
				<a href="/history" class="hover:text-blue-200">History</a>
				<a href="/news" class="hover:text-blue-200">News</a>
			</div>
		</nav>
	</header>

	<main class="container mx-auto px-4 py-8">
		{@render children()}
	</main>

	<footer class="bg-blue-900 text-white p-4 mt-8">
		<div class="container mx-auto text-center">
			<p>© 2024 Save Southport Pier Campaign</p>
		</div>
	</footer>
</div>
