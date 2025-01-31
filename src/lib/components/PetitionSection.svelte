<script lang="ts">
    import SupportForm from './SupportForm.svelte';
    import SupporterStats from './SupporterStats.svelte';
</script>

<section id="petition" class="bg-[#160D51] py-32 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[url('/images/pier.webp')] bg-cover bg-center"></div>
    </div>
    <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-4xl font-bold text-white mb-6">Sign the Petition</h2>
            <p class="text-xl text-blue-100 mb-12">Add your voice to our campaign. Together we can save Southport Pier for future generations.</p>
            <SupportForm />
            <SupporterStats />
        </div>
    </div>
</section>
