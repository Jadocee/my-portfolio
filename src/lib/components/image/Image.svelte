<script lang="ts">
	export let image: { src: string; alt: string; width?: string; height?: string } = null;
	export let sources: { srcset: string; width: string; height: string; media?: string }[] = null;
</script>

{#if sources != null}
	<picture>
		{#each sources as source}
			<source srcset={source.srcset} media={source.media} />
		{/each}
		<img
			src={image.src}
			alt={image.alt}
			width={image.width || 'auto'}
			height={image.height || 'auto'}
		/>
		<!-- <img {image.src} {image.alt} /> -->
	</picture>
{:else}
	<img
		src={image.src}
		alt={image.alt}
		width={image.width || 'auto'}
		height={image.height || 'auto'}
	/>
	<!-- <img {image.src} {image.alt} /> -->
{/if}
