<script lang="ts">
    // Pier closed on December 8, 2023
    export let textColor = "text-white"; // Default color
    export let compact = false; // New prop to control display style
    
    const closureDate = new Date('2022-12-21');
    
    // Calculate days since closure
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - closureDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
</script>

{#if compact}
    <div class={textColor}>
        <span class="font-bold">{diffDays} days</span> since Southport Pier closed
    </div>
{:else}
    <div class="p-8 rounded-lg text-center">
        <div class="text-6xl font-bold text-white mb-2">
            {diffDays}
        </div>
        <p class="text-white">Days since Southport Pier closed</p>
    </div>
{/if}
