<script lang="ts">
    import { formatPostcode } from '$lib/utils/postcode';
    
    let name = $state('');
    let email = $state('');
    let postcode = $state('');
    
    function handlePostcodeInput(event: Event) {
        const input = event.target as HTMLInputElement;
        postcode = formatPostcode(input.value);
    }
    let isSubmitting = $state(false);
    let submitStatus = $state<'idle' | 'success' | 'error'>('idle');
    
    async function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        isSubmitting = true;
        submitStatus = 'idle';
        
        try {
            const response = await fetch('https://automation.thebackend.uk/webhook/d5f156be-58de-4f60-beae-22b4f83b480e', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, postcode })
            });
            
            if (!response.ok) throw new Error('Submission failed');
            
            name = '';
            email = '';
            postcode = '';
            submitStatus = 'success';
        } catch (error) {
            console.error('Support form submission error:', error);
            submitStatus = 'error';
        } finally {
            isSubmitting = false;
        }
    }
</script>

<form onsubmit={handleSubmit} class="max-w-xl mx-auto space-y-4">
    <div class="flex flex-col gap-4">
        <input 
            type="text"
            bind:value={name} 
            name="name"
            disabled={isSubmitting}
            class="w-full px-6 py-4 text-lg bg-white/10 border-2 border-white/20 text-white placeholder-blue-200/70 rounded-xl focus:ring-4 focus:ring-white/30 focus:border-white/40 focus:outline-none backdrop-blur-sm transition-all disabled:opacity-50" 
            placeholder="Your name" 
            required 
        />
        <input 
            type="email"
            bind:value={email}
            name="email"
            disabled={isSubmitting}
            class="w-full px-6 py-4 text-lg bg-white/10 border-2 border-white/20 text-white placeholder-blue-200/70 rounded-xl focus:ring-4 focus:ring-white/30 focus:border-white/40 focus:outline-none backdrop-blur-sm transition-all disabled:opacity-50" 
            placeholder="Your email address" 
            required 
        />
        <input 
            type="text"
            bind:value={postcode}
            name="postcode"
            disabled={isSubmitting}
            oninput={handlePostcodeInput}
            class="w-full px-6 py-4 text-lg bg-white/10 border-2 border-white/20 text-white placeholder-blue-200/70 rounded-xl focus:ring-4 focus:ring-white/30 focus:border-white/40 focus:outline-none backdrop-blur-sm transition-all disabled:opacity-50" 
            placeholder="Your postcode" 
            required 
        />
    </div>
    <button 
        type="submit" 
        disabled={isSubmitting}
        class="w-full px-8 py-4 text-lg font-semibold text-[#160D51] bg-white rounded-xl hover:bg-blue-50 focus:ring-4 focus:ring-white/50 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
    >
        {#if isSubmitting}
            Submitting...
        {:else}
            Sign the Petition
        {/if}
    </button>
    {#if submitStatus === 'success'}
        <p class="mt-4 text-green-300 text-center">Thank you for your support! We'll keep you updated on the campaign.</p>
    {/if}
    {#if submitStatus === 'error'}
        <p class="mt-4 text-red-300 text-center">Sorry, there was an error. Please try again.</p>
    {/if}
</form>

<div class="mt-8 text-center text-blue-200/80 text-sm">
    <p>By signing, you agree to receive campaign updates via email. We'll never share your details.</p>
</div>
