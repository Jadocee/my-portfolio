<script lang="ts">
	import UONLogo from './uon-logo-square.svg';
	import './Education.scss';
	import { fade } from 'svelte/transition';
import ArrowRight from '../icons/ArrowRight.svelte';

	export let name: string;
	export let study: string;
	export let dateStart: string;
	export let dateFinish: string = null;
	export let abbr: string = null;
	export let link: string;

	const abbreviate = (text: string): string => {
		const words = text.split(' ');
		let abbreviation = '';
		words.forEach((word) => {
			abbreviation = abbreviation.concat(word[0].toUpperCase());
		});
		return abbreviation;
	};

	function formattedDate(date: string): string {
		const toFormat = new Date(date);
		let formattedDate: string;
		if (dateStart.split('/').length < 3) {
			formattedDate = toFormat.toLocaleString('default', { year: 'numeric', month: 'long' });
		} else {
			formattedDate = toFormat.toLocaleString('default', { dateStyle: 'long' });
		}
		return formattedDate;
	}
</script>

<section class="education">
	<div class="flex-container">
		<div
			on:mousemove={async (event) => {}}
			id={abbr || abbreviate(name)}
			class="main-content glass"
		>
			<div class="img-cls">
				<img
					src={UONLogo}
					alt="Logo of {name}"
					aria-label="Logo of {name}"
					in:fade={{ delay: 0, duration: 600 }}
				/>
			</div>

			<div class="desc-cls">
				<h1 class="education-heading">{name}</h1>
				<div class="education-type">{study}</div>
				<div class="education-time">
					<time datetime={dateStart}>{formattedDate(dateStart)}</time>

					<ArrowRight/>

					{#if dateFinish}
						<time datetime={dateFinish}>{formattedDate(dateFinish)}</time>
					{:else}
						<div>Current</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
