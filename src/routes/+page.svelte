<script lang="ts">
	// We'll need to create these components
	import DayCounter from '$lib/components/DayCounter.svelte';
	import NewsletterSignup from '$lib/components/NewsletterSignup.svelte';
</script>

<div class="space-y-12">
	<section class="text-center">
		<h1 class="text-4xl font-bold text-blue-900 mb-4">Save Southport Pier</h1>
		<p class="text-xl text-gray-700 max-w-2xl mx-auto">
			Help us restore and reopen Southport's historic pier - the second longest pleasure pier in Britain.
		</p>
	</section>

	<DayCounter />

	<section class="bg-white p-8 rounded-lg shadow-md">
		<h2 class="text-2xl font-bold text-blue-900 mb-4">The Emergency</h2>
		<p class="text-gray-700 mb-4">
			Our beloved Southport Pier has been closed due to structural concerns. This iconic Victorian structure,
			a vital part of our town's heritage and tourism, needs our support now more than ever.
		</p>
		<p class="text-gray-700">
			Join our campaign to ensure the pier's restoration and reopening. Together, we can save this historic
			landmark for future generations.
		</p>
	</section>

	<NewsletterSignup />
</div>
