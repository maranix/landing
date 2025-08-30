<script lang="ts">
    import type { HeadingSemantic, HeadingSize } from "$lib/types";

    // Semantic level (defaults to h1)
    export let semantic: HeadingSemantic = 1;

    // Visual size (can be different from semantic level)
    export let size: HeadingSize = "xl"; // options: xl, lg, md, sm...

    // Optional extra classes
    export let className = "";
</script>

<svelte:element
    this={"h" + semantic}
    class={"font-anton-regular heading-" + size + " " + className}
>
    <slot />
</svelte:element>

<style>
    .heading-xl {
        font-size: 7rem;
    }

    .heading-lg {
        font-size: 5rem;
    }

    .heading-md {
        font-size: 3rem;
    }

    .heading-sm {
        font-size: 1.5rem;
    }
</style>
