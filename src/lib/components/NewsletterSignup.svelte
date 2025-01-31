<script lang="ts">
    let email = '';
    
    async function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        // TODO: Implement newsletter signup functionality
        // For now, just clear the form
        email = '';
        alert('Thanks for signing up! We\'ll keep you updated.');
    }
</script>

<section class="bg-blue-100 p-8 rounded-lg">
    <h2 class="text-2xl font-bold text-blue-900 mb-4">Stay Updated</h2>
    <p class="text-gray-700 mb-4">
        Sign up for our newsletter to receive updates about the pier's restoration progress and how you can help.
    </p>
    
    <form on:submit={handleSubmit} class="max-w-md">
        <div class="flex gap-2">
            <input
                type="email"
                bind:value={email}
                placeholder="Enter your email"
                required
                class="flex-1 p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
                Subscribe
            </button>
        </div>
    </form>
</section>
