<script lang="ts">
    // Pier closed on December 8, 2023
    const closureDate = new Date('2023-12-08');
    
    // Calculate days since closure
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - closureDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
</script>

<div class=" p-8 rounded-lg text-center">
    <h2 class="text-3xl font-bold text-white mb-2">Pier Closure Counter</h2>
    <div class="text-6xl font-bold text-white mb-2">
        {diffDays}
    </div>
    <p class="text-white">Days since Southport Pier closed</p>
</div>
