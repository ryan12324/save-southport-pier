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

<form on:submit={handleSubmit} class="max-w-xl mx-auto">
    <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex-1">
            <input 
                type="email"
                bind:value={email}
                class="w-full px-6 py-4 text-lg bg-white/10 border-2 border-white/20 text-white placeholder-blue-200/70 rounded-full focus:ring-4 focus:ring-white/30 focus:border-white/40 focus:outline-none backdrop-blur-sm transition-all" 
                placeholder="Enter your email address" 
                required 
            />
        </div>
        <button 
            type="submit" 
            class="px-8 py-4 text-lg font-semibold text-[#160D51] bg-white rounded-full hover:bg-blue-50 focus:ring-4 focus:ring-white/50 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
            Subscribe
        </button>
    </div>
</form>
