<script lang="ts" context="module">
	import 'modern-normalize/modern-normalize.css';
</script>

<script lang="ts">
	import '../app.scss';
	import Header from '$components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
</script>

<div class="backdrop">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
