<script lang="ts">
	import UONLogo from './uon-logo-square.svg';
	import './Education.scss';
	import { fade } from 'svelte/transition';

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

					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path
							d="M16.01 11H5c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V11z"
						/>
					</svg>

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
