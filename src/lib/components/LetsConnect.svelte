<script>
	import FrostedGlass from './FrostedGlass.svelte';
</script>

<section id="contact" class="w-full py-16 md:py-24">
	<FrostedGlass class="rounded-2xl p-16 text-center">
		<h2 class="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
			Turn Bold Ideas Into Reality
		</h2>
		<p class="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
			Every ambitious project begins with a conversation. I collaborate with visionaries,
			innovators, and creators to craft solutions that are not only functional but unforgettable. If
			you&apos;re ready to explore new possibilities.
		</p>

		<!-- CTA button -->
		<div class="group relative mt-10 inline-flex flex-col items-center justify-center">
			<p
				class="mx-auto mb-4 max-w-xl text-base leading-relaxed
text-text-secondary md:text-lg"
			>
				I&apos;m here to make it happen.
			</p>
			<a
				href="mailto:ramanverma4183@gmail.com"
				class="relative flex items-center justify-center font-display text-lg font-bold text-background"
			>
				<!-- Text Part -->
				<div
					class="relative z-10 flex items-center justify-center rounded-full bg-primary px-8 py-4 transition-transform duration-500 ease-out group-hover:-translate-x-2"
				>
					<span>Start the Conversation</span>
				</div>

				<!-- Icon Part -->
				<div
					class="absolute top-1/2 left-0 z-0 flex h-full w-full -translate-y-1/2 items-center justify-center rounded-full bg-primary transition-all duration-500 ease-in-out group-hover:left-[calc(100%+1rem)] group-hover:h-[60px] group-hover:w-[60px] group-hover:px-0"
				>
					<span
						class="material-symbols-outlined -rotate-45 transition-transform duration-500 ease-in-out group-hover:rotate-0"
					>
						arrow_forward
					</span>
				</div>
			</a>
		</div>
	</FrostedGlass>
</section>
