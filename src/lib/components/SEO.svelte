<script lang="ts">
    export let title = "Save Southport Pier";
    export let description = "Join our campaign to save and restore Southport's historic pier - the second longest pleasure pier in Britain.";
    export let image = "/images/pier-social.jpg";
    export let url = "https://savesouthportpier.org";
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />

    <!-- Additional Meta Tags -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#160D51" />
    <link rel="canonical" href={url} />
</svelte:head>
