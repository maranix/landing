<!-- Javascript -->
<script lang="ts">
    import type { Component } from "svelte";

    export let href: string;
    export let ariaLabel: string;
    export let icon: Component;
    export let height = "48px";
    export let width = "48px";
</script>

<!-- HTML -->
<a {href} aria-label={ariaLabel} rel="norefer" target="_blank">
    <div class="icon" style="--height: {height}; --width: {width}">
        <svelte:component this={icon} />
    </div>
</a>

<!-- Style -->
<style>
    a {
        text-decoration: none;
        color: var(--accent);
        transition: color 500ms ease;
    }

    a:hover {
        color: var(--accent-alt);
    }

    .icon {
        height: var(--height);
        width: var(--width);
    }
</style>
