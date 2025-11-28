<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import LetsConnect from '$lib/components/LetsConnect.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div
	class="relative min-h-screen w-full overflow-x-hidden bg-background p-4 font-body text-text selection:bg-accent/20 sm:p-6 lg:p-8"
>
	<div class="mx-auto max-w-7xl">
		<Navbar />
		<main class="flex min-h-[calc(100vh-4rem)] flex-col">
			<Hero />
			<LetsConnect />
		</main>
		<Footer />
	</div>
</div>
