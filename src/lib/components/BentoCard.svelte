<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		class: className = '',
		href,
		title,
		subtitle = '',
		description = '',
		image = '',
		colSpan = 12,
		rowSpan = 2,
		isComingSoon = false,
		...restProps
	} = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	{href}
	class={cn(
		'group bg-surface-light dark:bg-surface-dark relative overflow-hidden rounded-2xl border border-transparent p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg',
		className
	)}
	style="grid-column: span {colSpan} / span {colSpan}; grid-row: span {rowSpan} / span {rowSpan};"
	{...restProps}
>
	<div class="relative z-10 flex h-full flex-col justify-between">
		{#if isComingSoon}
			<div class="flex justify-end">
				<div
					class="bg-background-dark/20 text-background-dark rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase"
				>
					<p>Coming Soon</p>
				</div>
			</div>
		{/if}

		<div class={isComingSoon ? '' : 'mt-auto'}>
			{#if subtitle}
				<p class="font-display text-xs font-medium tracking-widest text-accent uppercase">
					{subtitle}
				</p>
			{/if}
			<h3
				class="text-text-light dark:text-text-dark mt-2 font-display text-4xl font-bold uppercase lg:text-5xl"
			>
				{title}
			</h3>
			{#if description}
				<p class="text-text-secondary-light dark:text-text-secondary-dark mt-4 max-w-md">
					{description}
				</p>
			{/if}
		</div>

		{#if !isComingSoon}
			<div
				class="mt-4 flex items-center gap-2 text-primary transition-transform duration-300 group-hover:translate-x-1"
			>
				<p class="font-display text-sm font-bold uppercase">View Project</p>
				<span class="material-symbols-outlined">arrow_forward</span>
			</div>
		{/if}
	</div>

	{#if image}
		<div
			class="absolute inset-0 z-0 bg-cover bg-center opacity-20 transition-transform duration-500 group-hover:scale-105"
			style="background-image: url('{image}');"
		></div>
	{/if}
</a>
