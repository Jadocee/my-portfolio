<script lang="ts">
	import './FooterSection.scss';
	import SvgIcon from '../svgicon/SVGIcon.svelte';
	import type { SectionItem } from './FooterSection';
	export let section: string;
	export let items: SectionItem[];
</script>

<section id={section} class="footer__section">
	<div class="section-heading"><h1>{section}</h1></div>
	<menu class="section-menu">
		{#each items as item}
			<li>
				<a type="button" href={item.link} alt={item.name} target={item.target}>
					{#if item.SVGIcon}
						<SvgIcon
							class="menu__item-icon"
							viewBox={item.SVGIcon.viewBox}
							paths={item.SVGIcon.paths}
						/>
					{/if}
					<div class="menu__item-name">{item.name}</div>
				</a>
			</li>
		{/each}
	</menu>
</section>
