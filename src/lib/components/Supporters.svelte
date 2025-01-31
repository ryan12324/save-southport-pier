<script lang="ts">
  const supporters = [
    {
      name: "Eye on Southport",
      logo: "/images/supporters/eyeonsouthport.svg",
      url: "https://eyeonsouthport.co.uk"
    }
  ];
</script>

<div class="py-16 bg-white/80">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center text-[#160D51] mb-12">Supported By</h2>
    <div class="flex justify-between gap-8 items-center justify-items-center max-w-4xl mx-auto">
      {#each supporters as supporter}
        <a 
          href={supporter.url}
          target="_blank"
          rel="noopener noreferrer"
          class="block w-full max-w-[200px] transition-opacity hover:opacity-80"
        >
          <img 
            src={supporter.logo} 
            alt={supporter.name}
            class="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
          />
        </a>
      {/each}
    </div>
  </div>
</div>
