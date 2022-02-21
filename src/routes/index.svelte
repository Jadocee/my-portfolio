<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import '$styles/index.scss';
	import Hero from '$components/hero/Hero.svelte';
	import { onMount } from 'svelte';
	import AboutMe from '$lib/components/aboutme/AboutMe.svelte';
	import Education from '$lib/components/education/Education.svelte';
	import Skills from '$lib/components/skills/Skills.svelte';
	import { isMobile, viewport } from '$lib/shared/Stores';
	import PortfolioSection from '$lib/components/portfoliosection/PortfolioSection.svelte';

	async function handleViewportChange({ detail }) {
		$viewport[detail.entry.target.id] = detail.inView;
	}

	onMount(async () => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');
		isMobile.set(mediaQuery.matches);
		mediaQuery.addEventListener('change', async (ev) => {
			isMobile.set(ev.matches);
		});
	});
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<PortfolioSection section="hero" handler={handleViewportChange}>
	<Hero myName="Jaydon">I'm a Software Engineering student and aspiring software developer 🚀</Hero>
</PortfolioSection>

<PortfolioSection section="about me" handler={handleViewportChange}>
	<AboutMe>
		I'm a student studying a Bachelor of Software Engineering at the University of Newcastle,
		starting my second year in February, 2022. My goal is to pursue a career in software development
		by pursuing new learning opportunities and forming relationships with the individuals I meet on
		my journey. Developing cross-platform applications is at the top of my list of skills to learn.
		However, I am open to take on other development opportunities or change my path as I explore
		other options. I hope to soon gain leadership and development experience through a work
		experience related program such as an internship
	</AboutMe>
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
