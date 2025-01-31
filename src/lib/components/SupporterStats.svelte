<script lang="ts">
    import { onMount } from 'svelte';
    import { supporterCount, fetchSupporterCount } from '$lib/stores/supporters';

    onMount(() => {
        fetchSupporterCount();
    });
</script>

<div class="mt-8 flex justify-center items-center gap-8">
    <div class="text-center">
        <div class="text-4xl font-bold text-white">
            {#if $supporterCount === null}
                <span class="opacity-50">---</span>
            {:else}
                {$supporterCount.toLocaleString()}
            {/if}
        </div>
        <div class="text-blue-200">Supporters</div>
    </div>
</div>
