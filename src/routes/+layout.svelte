<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";
    import { CompositionGrid, Footer } from "$lib/components";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<CompositionGrid>
    {@render children()}
    <Footer />
</CompositionGrid>

<style>
    :root {
        /* Jet */
        --background: hsl(0, 0%, 21%);
        /* Light Silver */
        --foreground: hsl(0, 0%, 85%);
        /* Eggshell */
        --accent: hsl(60, 49%, 88%);
        /* Pale Lavender */
        --accent-alt: hsl(278, 82%, 87%);
    }

    :global(body) {
        margin: 0;
        padding: 0;

        height: 100vh;
        background-color: var(--background);
    }
</style>
