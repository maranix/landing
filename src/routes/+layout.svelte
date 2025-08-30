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

        --font-family-default: system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
            "Helvetica Neue", sans-serif;
    }

    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :global(h1, h2, h3, h4, h5, h6, p, span, a, div) {
        line-height: 1em;
    }

    :global(body) {
        height: 100vh;
        background-color: var(--background);

        font-family: var(--font-family-default);
    }

    :global {
        .font-anton-regular {
            font-family: "Anton", var(--font-family-default);
            font-weight: 400;
            font-style: normal;
        }

        .color-eggshell {
            color: var(--accent);
        }

        .color-pale-lavender {
            color: var(--accent-alt);
        }

        .color-light-silver {
            color: var(--foreground);
        }

        .color-jet {
            color: var(--background);
        }

        .bg-color-eggshell {
            background-color: var(--accent);
        }

        .bg-color-pale-lavender {
            background-color: var(--accent-alt);
        }

        .bg-color-light-silver {
            background-color: var(--foreground);
        }

        .bg-color-jet {
            background-color: var(--background);
        }
    }
</style>
