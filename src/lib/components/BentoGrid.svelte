<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className = '', children, ...restProps } = $props();
</script>

<div class={cn('grid auto-rows-auto grid-cols-12 gap-6', className)} {...restProps}>
	{@render children()}
</div>
