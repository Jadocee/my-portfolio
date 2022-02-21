<script lang="ts">
	import './SkillCard.scss';
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';
	import { onDestroy, onMount, SvelteComponent } from 'svelte';
	import { skillCardStates } from '$lib/shared/Stores';
	import ExpandArrow from '../icons/ExpandArrow.svelte';

	export let icon: string;
	export let title: string;
	export let link: string = null;

	let inView: boolean;
	let expanded = false;
	let expandIcon: SvelteComponent;
	let mounted = false;

	onMount(async () => {
		mounted = true;
	});

	const _unsubscribe = skillCardStates.subscribe(async (value) => {
		if (!mounted) return;
		expanded = value.expanded == title;
		if (expanded) {
			let animation = document.getElementById(`${title}-expand-icon`).animate([{ transform: 'rotate(180deg)' }], {
				duration: 600,
				iterations: 1
			});
			document.getElementById(`skill-${title}`).classList.add('expanded');
			await animation.finished;
			document.getElementById(`${title}-expand-icon`).setAttribute('transform', 'rotate(180)');
		} else {
			if (document.getElementById(`skill-${title}`).classList.contains('expanded')) {
				let animation = document.getElementById(`${title}-expand-icon`).animate([{ transform: 'rotate(360deg)' }], {
					duration: 600,
					iterations: 1
				});
				document.getElementById(`skill-${title}`).classList.remove('expanded');
				await animation.finished;
				document.getElementById(`${title}-expand-icon`).removeAttribute('transform');
			}
		}
	});

	onDestroy(_unsubscribe);
</script>

<div
	id="skill-{title}"
	class="skill-card glass"
	use:inview={{ unobserveOnEnter: true }}
	on:change={async ({ detail }) => {
		inView = detail.inView;
	}}
>
	{#if inView}
		<div class="heading-cls">
			<div class="skill-icon-container">
				<img src={icon} alt={title} loading="lazy" in:fade={{ delay: 100, duration: 1200 }} />
			</div>

			<div class="skill-title">
				<header>{title}</header>
			</div>

			<div class="expand-button-cls">
				<button
					type="button"
					title="expand"
					aria-expanded={expanded}
					aria-controls="skill-{title}"
					on:click={async (event) => {
						if ($skillCardStates.expanded == title) {
							$skillCardStates.expanded = null;
						} else {
							$skillCardStates.expanded = title;
						}
					}}
				>
					<ExpandArrow id="{title}-expand-icon" />
				</button>
			</div>
		</div>

		{#if expanded}
			<div class="desc-container" in:fade={{ delay: 500 }} out:fade={{ delay: 0 }}>
				{#if $$slots.desc}
					<div class="skill-desc"><slot name="desc" /></div>
				{/if}

				{#if link != null}
					<div class="desc-nav">
						<a
							type="button"
							href={link}
							target="__blank"
							class="redirect-button"
							aria-label="More About {title}"
						>
							<div>More About {title}</div>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path
									class="icon-path"
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</a>
					</div>
				{/if}
			</div>
		{/if}
	{/if}
</div>
