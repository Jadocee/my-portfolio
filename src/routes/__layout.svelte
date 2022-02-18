<script lang="ts" context="module">
	import 'modern-normalize/modern-normalize.css';
</script>

<script lang="ts">
	import '../app.scss';
	import Header from '$components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import { onMount } from 'svelte';
	import { isMobile } from '../Stores';

	/* Patch for SvelteKit/Sapper treating anchor tags as route changes 
	https://github.com/sveltejs/sapper/issues/904#issuecomment-532975259 */
	// onMount(() => {
	// 	document.querySelectorAll('a').forEach((a) => {
	// 		if (!a.hash || !document.querySelectorAll(`a[href=${a.hash}]`).length) return;
	// 		a.href = window.location.origin + window.location.pathname + a.hash;
	// 	});

		
	// });
</script>

<!-- <svelte:head>
	<link rel="stylesheet" href="node_modules/modern-normalize/modern-normalize.css" />
</svelte:head> -->

<div class="backdrop">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
