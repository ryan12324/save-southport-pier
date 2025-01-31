<script lang="ts">
	import DayCounter from '$lib/components/DayCounter.svelte';
	import Supporters from '$lib/components/Supporters.svelte';
</script>

<div class="space-y-32">
	<section class="hero-section min-h-screen flex items-center justify-center relative">
		<div class="py-16 px-4 mx-auto max-w-screen-xl text-center relative z-10 mt-20">
			<h1 class="mb-6 text-5xl font-black tracking-tight leading-none text-white md:text-6xl lg:text-7xl animate-fade-in drop-shadow-lg">
				Save Southport Pier
			</h1>
			<p class="mb-12 text-xl font-medium text-white lg:text-2xl sm:px-16 lg:px-48 animate-fade-in drop-shadow-md" style="animation-delay: 0.2s">
				Help us restore and reopen Southport's historic pier - the second longest pleasure pier in Britain.
			</p>
			<div class="backdrop-blur-lg rounded-2xl p-6 shadow-2xl inline-block mb-12">
				<DayCounter />
			</div>
			
			<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
				<a href="#newsletter" class="inline-flex justify-center items-center py-4 px-8 text-lg font-semibold text-center text-white rounded-full bg-[#180AA1] hover:bg-[#3B28C0] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
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

	<section class="container mx-auto px-4 my-32">
		<div class="bg-[#160D51]/5 backdrop-blur-sm rounded-3xl overflow-hidden">
			<div class="p-12">
				<div class="flex flex-col md:flex-row gap-12">
					<div class="md:w-2/3">
						<h2 class="text-4xl font-bold text-[#160D51] mb-8">The Emergency</h2>
						<div class="prose prose-lg max-w-none">
							<p class="text-gray-600 mb-6 text-lg leading-relaxed">
								Our beloved Southport Pier has been closed due to structural concerns. This iconic Victorian structure,
								a vital part of our town's heritage and tourism, needs our support now more than ever.
							</p>
							<p class="text-gray-600 text-lg leading-relaxed">
								Join our campaign to ensure the pier's restoration and reopening. Together, we can save this historic
								landmark for future generations.
							</p>
						</div>
						<div class="mt-8">
							<a href="#newsletter" 
								class="inline-flex items-center py-4 px-8 text-lg font-semibold text-center text-white rounded-full bg-[#180AA1] hover:bg-[#3B28C0] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
								Support Now
								<svg class="w-5 h-5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
								</svg>
							</a>
						</div>
					</div>
					<div class="md:w-1/3">
						<div class="bg-white/80 p-8 rounded-2xl shadow-lg border border-[#160D51]/10">
							<h3 class="text-2xl font-bold text-[#160D51] mb-6">Key Facts</h3>
							<ul class="grid grid-cols-1 md:grid-cols-2 gap-6">
								<li class="flex items-center">
									<div class="bg-[#160D51]/10 rounded-full p-2 mr-4">
										<svg class="w-6 h-6 text-[#160D51]" fill="currentColor" viewBox="0 0 20 20">
											<path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
										</svg>
									</div>
									<span class="text-lg text-gray-700">Built in 1860</span>
								</li>
								<li class="flex items-center">
									<div class="bg-[#160D51]/10 rounded-full p-2 mr-4">
										<svg class="w-6 h-6 text-[#160D51]" fill="currentColor" viewBox="0 0 20 20">
											<path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
										</svg>
									</div>
									<span class="text-lg text-gray-700">1,108 meters long</span>
								</li>
								<li class="flex items-center">
									<div class="bg-[#160D51]/10 rounded-full p-2 mr-4">
										<svg class="w-6 h-6 text-[#160D51]" fill="currentColor" viewBox="0 0 20 20">
											<path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
										</svg>
									</div>
									<span class="text-lg text-gray-700">Grade II listed</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-gray-50">
		<Supporters />
	</section>
</div>
