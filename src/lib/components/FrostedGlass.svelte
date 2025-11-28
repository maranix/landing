<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLElement> {
		children: Snippet;
		class?: string;
		opacity?: number;
		blurStrength?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
		as?: string;
	}

	let {
		children,
		class: className = '',
		opacity = 50,
		blurStrength = 'md',
		as = 'div',
		...restProps
	}: Props = $props();

	const blurClasses = {
		sm: 'backdrop-blur-sm',
		md: 'backdrop-blur-md',
		lg: 'backdrop-blur-lg',
		xl: 'backdrop-blur-xl',
		'2xl': 'backdrop-blur-2xl',
		'3xl': 'backdrop-blur-3xl'
	};

	const blurClass = blurClasses[blurStrength];
</script>

<svelte:element this={as} class="bg-surface/{opacity} {blurClass} {className}" {...restProps}>
	{@render children()}
</svelte:element>
