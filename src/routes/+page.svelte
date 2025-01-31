<script lang="ts">
	import DayCounter from '$lib/components/DayCounter.svelte';
	import NewsletterSignup from '$lib/components/NewsletterSignup.svelte';
</script>

<div class="space-y-0">
	<section class="hero-section min-h-screen flex items-center justify-center relative">
		<div class="py-16 px-4 mx-auto max-w-screen-xl text-center relative z-10 mt-20">
			<h1 class="mb-6 text-5xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 md:text-6xl lg:text-7xl animate-fade-in">
				Save Southport Pier
			</h1>
			<p class="mb-12 text-xl font-medium text-blue-100 lg:text-2xl sm:px-16 lg:px-48 animate-fade-in opacity-90" style="animation-delay: 0.2s">
				Help us restore and reopen Southport's historic pier - the second longest pleasure pier in Britain.
			</p>
			<div class="backdrop-blur-lg rounded-2xl p-6  shadow-2xl inline-block mb-8">
				<DayCounter />
			</div>
			
			<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
				<a href="#newsletter" class="inline-flex justify-center items-center py-4 px-8 text-lg font-semibold text-center text-white rounded-full bg-gradient-to-r from-[#180AA1] to-[#3B28C0] hover:from-[#3B28C0] hover:to-[#180AA1] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
					Join the Campaign
					<svg class="w-5 h-5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
					</svg>
				</a>
				<a href="/history" class="inline-flex justify-center items-center py-4 px-8 text-lg font-semibold text-center text-white/90 rounded-full border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
					Learn more
				</a>
			</div>
		</div>
	</section>

	<div class="wave-divider"></div>

	<section class="container mx-auto px-4 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 mt-16 mb-16">
		<div class="p-12">
			<div class="flex flex-col md:flex-row gap-8">
				<div class="md:w-2/3">
					<h2 class="text-3xl font-bold text-blue-900 mb-6">The Emergency</h2>
					<div class="prose prose-lg">
						<p class="text-gray-700 mb-4">
							Our beloved Southport Pier has been closed due to structural concerns. This iconic Victorian structure,
							a vital part of our town's heritage and tourism, needs our support now more than ever.
						</p>
						<p class="text-gray-700">
							Join our campaign to ensure the pier's restoration and reopening. Together, we can save this historic
							landmark for future generations.
						</p>
					</div>
					<div class="mt-6">
						<a href="#newsletter" class="inline-flex items-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
							Support Now
						</a>
					</div>
				</div>
				<div class="md:w-1/3 bg-blue-50 p-6 rounded-lg">
					<h3 class="text-xl font-semibold text-blue-900 mb-4">Key Facts</h3>
					<ul class="space-y-3">
						<li class="flex items-center">
							<svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
							</svg>
							Built in 1860
						</li>
						<li class="flex items-center">
							<svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
							</svg>
							1,108 meters long
						</li>
						<li class="flex items-center">
							<svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
							</svg>
							Grade II listed
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section id="newsletter" class="bg-gradient-to-br from-[#160D51] to-[#3B28C0] py-24 relative overflow-hidden">
		<div class="absolute inset-0 opacity-10">
			<div class="absolute inset-0 bg-[url('/images/pier.webp')] bg-cover bg-center"></div>
		</div>
		<div class="container mx-auto px-4 relative z-10">
			<div class="max-w-3xl mx-auto text-center">
				<h2 class="text-4xl font-bold text-white mb-6">Stay Updated</h2>
				<p class="text-xl text-blue-100 mb-12">Join our campaign to save Southport Pier. Get updates on our progress and learn how you can help.</p>
				<NewsletterSignup />
			</div>
		</div>
	</section>
</div>
