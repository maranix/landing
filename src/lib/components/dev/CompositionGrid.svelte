<script lang="ts">
    import { dev } from "$app/environment";
    import { onMount } from "svelte";

    export let cellSize = 12;
    export let show = dev;
    export let style = undefined;

    let canvas: HTMLCanvasElement;

    const resizeCanvas = (ctx: CanvasRenderingContext2D) => {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
    };

    const drawGrid = (ctx: CanvasRenderingContext2D) => {
        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);

        const cols = Math.floor(width / cellSize);
        const rows = Math.floor(height / cellSize);

        ctx.strokeStyle = style ?? "#EDAFB82F";

        for (let i = 0; i <= cols; i++) {
            ctx.beginPath();

            const x = i * cellSize;

            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }

        for (let j = 0; j <= rows; j++) {
            ctx.beginPath();

            const y = j * cellSize;

            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
    };

    const updateCanvas = () => {
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        resizeCanvas(ctx);
        drawGrid(ctx);
    };

    onMount(() => {
        updateCanvas();
        window.addEventListener("resize", updateCanvas);
        return () => window.removeEventListener("resize", updateCanvas);
    });
</script>

{#if show}
    <div class="container">
        <canvas bind:this={canvas}></canvas>
        <div class="content"><slot /></div>
    </div>
{:else}
    <slot />
{/if}

<style>
    canvas {
        display: block;
        width: 100%;
        height: 100%;
    }

    .container {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .content {
        position: absolute;
        top: 0;
        left: 0;

        height: 100%;
        width: 100%;
    }
</style>
