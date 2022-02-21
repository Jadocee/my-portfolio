<script lang="ts" context="module">
	import 'modern-normalize/modern-normalize.css';
</script>

<script lang="ts">
	import '../app.scss';
	import Header from '$components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import { onMount } from 'svelte';
	import { theme } from '$lib/shared/Stores';

	onMount(() => {
		theme.set(
			document.documentElement.classList.toggle(
				'dark',
				window.matchMedia('(prefers-color-scheme: dark)').matches
			)
		);
	});
</script>

<!-- <div class="backdrop"> -->
<Header />

<main>
	<slot />
</main>

<Footer />
<!-- </div> -->
