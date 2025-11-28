<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import LetsConnect from '$lib/components/LetsConnect.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BentoGrid from '$lib/components/BentoGrid.svelte';
	import BentoCard from '$lib/components/BentoCard.svelte';
</script>

<div
	class="relative min-h-screen w-full overflow-x-hidden bg-background p-4 font-body text-text selection:bg-accent/20 sm:p-6 lg:p-8"
>
	<div class="mx-auto max-w-7xl">
		<Navbar />
		<main class="flex min-h-[calc(100vh-4rem)] flex-col">
			<Hero />
			<section class="w-full py-16 md:py-24" id="projects">
				<div class="mb-12 text-center">
					<h2
						class="font-display text-5xl font-bold tracking-tight text-primary uppercase sm:text-6xl"
					>
						Selected Works
					</h2>
					<p class="text-text-secondary-light dark:text-text-secondary-dark mx-auto mt-4 max-w-2xl">
						A collection of projects showcasing my passion for creating thoughtful and effective
						digital solutions.
					</p>
				</div>
				<BentoGrid style="height: 900px;">
					<BentoCard
						href="#"
						subtitle="React, Node.js, PostgreSQL"
						title="Project Alpha"
						image="https://lh3.googleusercontent.com/aida-public/AB6AXuD8OS7GrmsPr0_7DTu6cHd5E88Qic0EWkTaTGM-aOtY9pHAmy25lVC7qwWsSEwBG5JWPuFAAOQ6bnGOOmUcYhLbeFsBKTr49mGMijBR7X-JoLDDMeK4B5npRxLYh4g5KNKwNuGrZ6nJQzbaM47qaQnegstPhmK0fPA8tztvihWTsRv0CRhVeWhrzVHyqEQflCvzsTRpM-oAB2xkY3iMFvzkbj3b5XZ_ZSrRRY3bCLw7bi2wpP_MuKG-4O7yCHMbQ4wbgPKO7uydhzTM"
						colSpan={7}
						rowSpan={2}
						class="col-span-12 md:col-span-7"
					/>
					<BentoCard
						href="#"
						subtitle="Vue, Firebase, TailwindCSS"
						title="Project Beta"
						class="col-span-12 flex flex-col justify-between md:col-span-5"
						colSpan={5}
						rowSpan={2}
					>
						<div
							class="relative z-10 flex items-center justify-end gap-2 text-primary transition-transform duration-300 group-hover:-translate-x-1"
						>
							<p class="font-display text-sm font-bold uppercase">View Project</p>
							<span class="material-symbols-outlined">arrow_back</span>
						</div>
					</BentoCard>
					<BentoCard
						href="#"
						subtitle="Python, Django, Docker"
						title="Project Gamma"
						description="A short description of a larger project, perhaps an open-source contribution or a major feature."
						image="https://lh3.googleusercontent.com/aida-public/AB6AXuDE6LcJOCYVVZYAzEufkA37FfdPwwPG-PBfuLhmxfOUY6fbWWWr_25ZNyiRB3P8CON9vHZs6eDWq41ZcUiZXPCA-BNRXPQzC60RtHwPm-hR3JHylVCF1C6jGk_Yc7ql2DD5TmvNkf_soSOXCqEfs6yZxJXURafyZNBint5fVqMP7VZlsqR_Awmya-A9l6wqS-GxRlq4kkQk-1B5QnX-NMJDealwjakJ9gFhc1bl92S_vrEcvU4okJwPjPzNG3IjmOQ-IIcb97esrGZg"
						colSpan={5}
						rowSpan={4}
						class="col-span-12 md:col-span-5 md:row-span-4"
					/>
					<BentoCard
						href="#"
						title="Project Delta"
						description="An upcoming project description will be here."
						colSpan={7}
						rowSpan={2}
						isComingSoon={true}
						class="col-span-12 bg-primary/80 md:col-span-7"
					/>
				</BentoGrid>
			</section>
			<LetsConnect />
		</main>
		<Footer />
	</div>
</div>
