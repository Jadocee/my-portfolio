<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { inview, Options } from 'svelte-inview';
	import { viewport } from '../../../Stores';

	export let section: string;
	export let options: Options = {
		rootMargin: '-30%',
		unobserveOnEnter: true
	};
	export let handler: (Event: CustomEvent<ObserverEventDetails>) => void;
	let inView = false;
	let mounted = false;

	onMount(async () => {
		mounted = true;
	});

	const unsubViewport = viewport.subscribe((values) => {
		if (!mounted) return;
		const state = values[section];
		if (state == undefined) return;
		inView = state;
	});

	onDestroy(unsubViewport);
</script>

<section id={section} class="portfolio-section" use:inview={options} on:change={handler}>
	{#if inView}
		<span style="width: 100%;" transition:fly={{ delay: 0, x: -100, duration: 1000 }}>
			{#if section != 'hero'}<h1 class="section-heading">{section}</h1>{/if}
			<slot />
		</span>
	{/if}
</section>

<style lang="scss">
	.portfolio-section {
		position: relative;
		justify-content: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 4rem;
		@media (min-width: 768px) {
			padding-left: 2rem;
			padding-right: 2rem;
			width: 90%;
			margin-left: auto;
			margin-right: auto;
			max-height: 100vh;
			padding-top: 0;
		}
		min-height: 50vh;
		height: fit-content;
		&#hero {
			padding-top: 0;
			height: 100vh;
			display: flex;
			flex-direction: column;
			width: 100%;
		}
	}

	.section-heading {
		width: 100%;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		text-align: left;
		font-size: 2rem;
		line-height: 1.25rem;
		font-weight: 300;
		margin-bottom: 2rem;
		margin-top: 2rem;
		@media (min-width: 768px) {
			font-size: 2.75rem;
			line-height: 2.25rem;
		}
	}
</style>
