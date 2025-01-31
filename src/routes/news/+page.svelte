
<script lang="ts">
  import newsData from '$lib/data/news.json';
  
  const sortedNewsData = newsData.posts.sort((a,b) => Date.parse(b.date) - Date.parse(a.date))


  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<div class="max-w-7xl mx-auto px-4 py-24">
  <h1 class="text-4xl font-bold text-[#160D51] mb-12 text-center">Latest News</h1>
  
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
      {#each sortedNewsData as post}
        <article>
          <div class="mb-6">
            <a 
              href={post.externalLink}
              target="_blank" 
              rel="noopener noreferrer"
              class="block hover:opacity-90 transition-opacity"
            >
              <img 
                src={post.image}
                alt={post.imageAlt}
                class="rounded-xl shadow-lg w-full max-w-2xl mx-auto mb-4 h-[300px] object-cover object-center"
              />
            </a>
            <div class="flex justify-between items-center text-sm text-gray-600 italic">
              <p>{formatDate(post.date)}</p>
              <div class="flex items-center gap-4">
                <p>{post.source}</p> &bullet;
                <p>{post.category}</p>
              </div>
            </div>
          </div>
          <a 
            href={post.externalLink}
            target="_blank" 
            rel="noopener noreferrer"
            class="block hover:text-[#3B28C0] transition-colors"
          >
            <h2 class="text-3xl font-bold text-[#160D51] mb-4">{post.title}</h2>
          </a>
          <div class="text-gray-700 leading-relaxed">
            <p>{post.excerpt}</p>
            <a 
              href={post.externalLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-block mt-4 text-[#160D51] font-semibold hover:text-[#3B28C0]"
            >
              Read more →
            </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</div>
