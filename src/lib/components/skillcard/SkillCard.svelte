<script lang="ts">
	import './SkillCard.scss';
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';
	import { onDestroy, onMount } from 'svelte';
	import { skillCardStates } from '../../../Stores';

	export let icon: string;
	export let title: string;
	export let link: string = null;

	let inView: boolean;
	let expanded = false;
	let parent: HTMLElement;
	let expandIcon: SVGElement;
	let mounted = false;

	onMount(async () => {
		mounted = true;
	});

	const _unsubscribe = skillCardStates.subscribe(async (value) => {
		if (!mounted) return;
		expanded = value.expanded == title;
		// expandIcon.getAnimations().forEach(async animation => await animation.finished);
		if (expanded) {
			let animation = expandIcon.animate([{ transform: 'rotate(180deg)' }], {
				duration: 600,
				iterations: 1
			});
			parent.classList.add('expanded');
			await animation.finished;
			expandIcon.setAttribute('transform', 'rotate(180)');
		} else {
			if (parent.classList.contains('expanded')) {
				let animation = expandIcon.animate([{ transform: 'rotate(360deg)' }], {
					duration: 600,
					iterations: 1
				});
				parent.classList.remove('expanded');
				await animation.finished;
				expandIcon.removeAttribute('transform');
			}
		}
	});

	onDestroy(_unsubscribe);
</script>

<div
	bind:this={parent}
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
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" bind:this={expandIcon}>
						<path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
						<path
							d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"
						/>
					</svg>
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
