<script lang="ts">
	import '../app.css';
	import DayCounter from '$lib/components/DayCounter.svelte';
	import SEO from '$lib/components/SEO.svelte';
	let { children } = $props();
	import { page } from '$app/stores';
	let isMenuOpen = $state(false);

	let currentPath = $derived($page.url.pathname);
	let currentTitle = $derived(() => {
		switch (currentPath) {
			case '/':
				return 'Save Southport Pier';
			case '/history':
				return 'History - Save Southport Pier';
			case '/news':
				return 'News - Save Southport Pier';
			case '/closure':
				return 'Closure Information - Save Southport Pier';
			default:
				return 'Save Southport Pier';
		}
	});

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
	let isHomePage = $derived($page.url.pathname === '/');
</script>

<SEO title={currentTitle} />

<div class="min-h-screen">
	<div class="fixed w-full  z-50">
	<nav class="w-full z-50 bg-[#160D51]/90 backdrop-blur-md shadow-lg px-4 lg:px-6 py-5">
		<div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
			<a href="/" class="flex items-center group">
				<span class="self-center text-2xl font-bold whitespace-nowrap text-white group-hover:text-blue-200 transition-colors">
					Save Southport Pier
				</span>
			</a>
			<button onclick={toggleMenu} type="button" class="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300" aria-controls="mobile-menu" aria-expanded={isMenuOpen}>
				<span class="sr-only">Open main menu</span>
				<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					{#if isMenuOpen}
						<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
					{:else}
						<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
					{/if}
				</svg>
			</button>
			<div class="{isMenuOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto transition-all duration-300" id="mobile-menu">
				<ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
					<li>
						<a href="/" class="block py-2 pr-4 pl-3 text-white/90 hover:text-white transition-colors relative group">
							Home
							<span class="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
						</a>
					</li>
					<li>
						<a href="/history" class="block py-2 pr-4 pl-3 text-white/90 hover:text-white transition-colors relative group">
							History
							<span class="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
						</a>
					</li>
					<li>
						<a href="/news" class="block py-2 pr-4 pl-3 text-white/90 hover:text-white transition-colors relative group">
							News
							<span class="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
						</a>
					</li>
					<li>
						<a href="/closure" class="block py-2 pr-4 pl-3 text-white/90 hover:text-white transition-colors relative group">
							Closure Info
							<span class="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	{#if !isHomePage}
	<div class="bg-[#160D51] text-white text-center py-2 px-4 w-full">
		<DayCounter textColor="text-white" compact={true} />
	</div>
	{/if}
</div>
	<main class="py-12">
		{@render children()}
	</main>

	<footer class="bg-blue-900 text-white py-8">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 class="text-lg font-semibold mb-4">About Us</h3>
					<p class="text-blue-100">Working to save and restore Southport's historic pier for future generations.</p>
				</div>
				<div>
					<h3 class="text-lg font-semibold mb-4">Quick Links</h3>
					<ul class="space-y-2">
						<li><a href="/" class="text-blue-100 hover:text-white">Home</a></li>
						<li><a href="/history" class="text-blue-100 hover:text-white">History</a></li>
						<li><a href="/news" class="text-blue-100 hover:text-white">News</a></li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-semibold mb-4">Contact</h3>
					<p class="text-blue-100">Get in touch to support our campaign</p>
				</div>
			</div>
			<div class="border-t border-blue-800 mt-8 pt-8 text-center">
				<p class="text-blue-100">© 2024 Save Southport Pier Campaign</p>
			</div>
		</div>
	</footer>
</div>
