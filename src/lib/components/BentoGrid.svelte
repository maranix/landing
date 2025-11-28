<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className = '', children, ...restProps } = $props();
</script>

<div class={cn('grid grid-cols-12 grid-rows-6 gap-6', className)} {...restProps}>
	{@render children()}
</div>
