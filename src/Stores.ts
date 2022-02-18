import { writable } from "svelte/store";

export const skillCardStates = writable({
    updating: false,
    expanded: null
}, () => {
    console.log("Subscriber added.");
});

export const isMobile = writable(false)

export const viewport = writable<Record<string, boolean>>({});


