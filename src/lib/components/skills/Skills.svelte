<script lang="ts">
	import { fly } from 'svelte/transition';
	import SkillCard from '../skillcard/SkillCard.svelte';
	import csharp from './csharp.svg';
	import css from './CSS3.svg';
	import html from './HTML5.svg';
	import java from './java.svg';
	import python from './python.svg';
	import sass from './sass.svg';
	import svelte from './svelte.svg';
	import tailwind from './tailwind.svg';
	import typescript from './typescript.svg';
	import vanillaExtract from './vanillaextract.svg';
	import javascript from './javascript.svg';
	import cpp from './cpp.svg';
	import { skillCardStates } from '../../../Stores';
	import { onDestroy, onMount } from 'svelte';

	let skillsGrid: HTMLElement;
	let mounted = false;

	onMount(async () => {
		mounted = true;
	});

	const _unsubscribe = skillCardStates.subscribe(async () => {
		if (!mounted) return;
		// $skillCardStates.expanded != null
		// ? skillsGrid.style.setProperty('--grid-rows', '5')
		// : skillsGrid.style.removeProperty('--grid-rows');
	});

	onDestroy(_unsubscribe);
</script>

<div class="container">
	<div class="grid-container">
		<div class="skills-grid" bind:this={skillsGrid}>
			<SkillCard icon={svelte} title="Svelte" link="https://svelte.dev/">
				<div slot="desc">
					I am have only been using Svelte for a few months now but I have a good understanding of
					the basics. I am also familiar with using SvelteKit but have less experience compared to
					Svelte.
				</div>
			</SkillCard>
			<SkillCard icon={typescript} title="TypeScript" link="https://www.typescriptlang.org/">
				<div slot="desc">
					Proficient with using TypeScript to develop web applications. I started using it for my
					portfolio and I am not going back.<br />
				</div>
			</SkillCard>
			<SkillCard icon={html} title="HTML" link="https://developer.mozilla.org/en-US/docs/Web/HTML">
				<div slot="desc">
					I am proficient with using HTML. I understand the importance of using semantic elements to
					create a site that is accessible for both humans and computers (e.g. screen readers and
					search engine exposure).
				</div>
			</SkillCard>
			<SkillCard icon={css} title="CSS">
				<div slot="desc">Proficient with CSS in the development of web applications.</div>
			</SkillCard>
			<SkillCard icon={sass} title="Sass" link="https://sass-lang.com/">
				<div slot="desc">
					A CSS preprocessor I use in favour of vanilla CSS for its ability to nest CSS rules. I
					plan to move back to using vanilla CSS after the implementation of the <a
						href="https://www.w3.org/TR/css-nesting-1/"
						target="__blank">Nesting Module</a
					>.
				</div>
			</SkillCard>
			<SkillCard icon={tailwind} title="TailwindCSS" link="https://tailwindcss.com">
				<div slot="desc">
					A CSS framework that acts as a much quicker way to create great looking websites. It
					allows me to spend more time in other areas.
				</div>
			</SkillCard>
			<SkillCard
				icon={vanillaExtract}
				title="vanilla-extract"
				link="https://vanilla-extract.style/"
			>
				<div slot="desc">
					Allows me to write CSS stylesheets in TypeScript. I have only used this in a project once
					as a trial before switching back to SASS.
				</div>
			</SkillCard>
			<SkillCard icon={python} title="Python" link="https://www.python.org/" />
			<SkillCard
				icon={csharp}
				title="C#"
				link="https://dotnet.microsoft.com/en-us/languages/csharp"
			>
				<div slot="desc">
					I only have some experience with C# but I am confident I can quickly become proficient
					with it. I started using it after the release of Dotnet 6, and I plan to use it more in
					the future.
				</div>
			</SkillCard>
			<SkillCard icon={java} title="Java" link="https://www.oracle.com/java/">
				<div slot="desc">
					Java is the first <abbr title="Object Oriented Programming">OOP</abbr> language I learnt and
					used in projects. It is a big part of why I can quickly pick up languages like TypeScript,
					C#, and Dart.
				</div>
			</SkillCard>
			<SkillCard icon={cpp} title="C++" link="https://www.cplusplus.com/info/description/#features">
				<div slot="desc">
					I have some experience using C++ after using C++98 in a <a
						href="https://www.newcastle.edu.au/course/SENG1120"
						alt="Data Structures"
						target="__blank">course</a
					> at University.
				</div>
			</SkillCard>
			<SkillCard
				icon={javascript}
				title="JavaScript"
				link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
			>
				<div slot="desc">
					I am familiar with JavaScript. I have much less experience using JavaScript in comparison
					to TypeScript as I have only used it when required to for my degree. I should have no
					problem using JavaScript since TypeScript is a superset of the language.
				</div>
			</SkillCard>
		</div>
	</div>
</div>

<style lang="scss">
	.grid-container {
		position: relative;
		overflow: visible;
	}

	.container {
		width: 100%;
		// min-height: 100vh;
	}

	.skills-grid {
		position: static;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		--grid-rows: 4;
		max-width: 100rem;
		@media (min-width: 768px) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			grid-template-rows: repeat(7, minmax(auto, 100%));
			grid-auto-rows: minmax(auto, 100%);
			grid-auto-columns: minmax(0, 1fr);
			grid-auto-flow: row dense;
		}
		@media (min-width: 1280px) {
			grid-template-columns: repeat(4, minmax(0, 1fr));
			grid-template-rows: repeat(5, minmax(auto, 100%));
			grid-auto-flow: row dense;
		}
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 1.25rem;
		align-items: start;
		width: 100%;
	}
</style>
