<script lang="ts">
	export let viewBox: string;
	export let paths: string[];
</script>

<svg class={$$props.class} {viewBox}>
	{#each paths as path}
		<path d={path} />
	{/each}
</svg>
