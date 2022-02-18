<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import '$styles/index.scss';
	import { navigating } from '$app/stores';
	import Hero from '$components/hero/Hero.svelte';

	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';
	import AboutMe from '$lib/components/aboutme/AboutMe.svelte';
	import Education from '$lib/components/education/Education.svelte';
	import Skills from '$lib/components/skills/Skills.svelte';
	import { isMobile, viewport } from '../Stores';
	import PortfolioSection from '$lib/components/portfoliosection/PortfolioSection.svelte';

	let mounted = false;
	let innerHeight: number = null;
	$: console.log(innerHeight);

	async function handleViewportChange({ detail }) {
		$viewport[detail.entry.target.id] = detail.inView;
		console.log($viewport);
	}

	onMount(async () => {
		mounted = true;
		const mediaQuery = window.matchMedia('(max-width: 768px)');
		isMobile.set(mediaQuery.matches);
		mediaQuery.addEventListener('change', async (ev) => {
			isMobile.set(ev.matches);
		});
	});
</script>

<svelte:window bind:innerHeight />

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<PortfolioSection section="hero" handler={handleViewportChange}>
	<Hero myName="Jaydon">I'm a Software Engineering student and aspiring software developer 🚀</Hero>
</PortfolioSection>

<PortfolioSection section="about me" handler={handleViewportChange}>
	<AboutMe />
</PortfolioSection>

<PortfolioSection section="education" handler={handleViewportChange}>
	<Education
		name="University of Newcastle"
		study="Bachelor of Software Engineering"
		link="https://www.newcastle.edu.au/degrees/bachelor-of-software-engineering-honours"
		dateStart="2021/02"
	/>
</PortfolioSection>

<PortfolioSection section="skills" handler={handleViewportChange}>
	<Skills />
</PortfolioSection>
