<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { theme } from '$lib/shared/Stores';
	import Moon from '$lib/components/icons/DarkMode.svelte';
	import Sun from '$lib/components/icons/LightMode.svelte';

	let darkMode = $theme;

	const themeUnsub = theme.subscribe(async (value) => {
		darkMode = value;
	});

	function toggle() {
		theme.update((value) => {
			darkMode = document.documentElement.classList.toggle('dark');
			return darkMode;
		});
	}

	onDestroy(themeUnsub);
</script>

<button
	type="button"
	aria-label="Toggle Light and Dark Theme"
	class="toggle-theme-button"
	on:click={() => toggle()}
>
	{#if darkMode}
		<Moon />
	{:else}
		<Sun />
	{/if}
</button>

<style lang="scss">
	.toggle-theme-button {
		display: flex;
		align-items: center;
		justify-items: center;
		background: none;
		width: fit-content;
		flex-direction: column;
	}
</style>
