<script lang=ts>
    import { scale } from "svelte/transition";
    import * as styles from './scrolltop.css';

    export let hidden: boolean;
    // export let topElement: HTMLElement
</script>

{#if !hidden}
    <div id="returnToTop" class="absolute bottom-0 right-8 animate-bounce text-center opacity-30 hover:opacity-100 cursor-pointer duration-[0.3s]" on:click={async () => window.document.getElementById("hero").scrollIntoView({behavior: "smooth", block: "start", inline: "center"})} transition:scale={{opacity: 0, delay: 0, duration: 1000, start: 1.5 }}>
        <svg xmlns="http://www.w3.org/2000/svg" class={styles.icon} viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
        </svg>
        <p class="absolute bg-white border border-gray-100 px-1 py-2 hover:block text-sm hidden">Return to top</p>
        
    </div>
{/if}


