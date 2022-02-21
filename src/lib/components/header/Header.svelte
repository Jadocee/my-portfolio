<script lang="ts">
	import './Header.scss';
	import { onDestroy, onMount } from 'svelte';
	import logo from './svelte-logo.svg';
	import { isMobile } from '$lib/shared/Stores';
	import { fly, FlyParams } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';
	import Toggletheme from '../toggletheme/toggletheme.svelte';
	import ChevronRight from '../icons/ChevronRight.svelte';

	let mobile: boolean;
	let showMenu = false;
	let showMenuButton = false;
	let lastScrollYPos: number;
	let showNav = true;
	let glass = false;

	$: glass = showMenu;

	const isMobileUnsub = isMobile.subscribe((value) => {
		mobile = value;
		showMenuButton = mobile;
	});

	const conditionalFly = (node: Element, args: FlyParams) => {
		if (mobile) {
			return fly(node, args);
		}
	};

	onMount(async () => {
		window.addEventListener('scroll', (event) => {
			const currScroll = window.scrollY;
			showNav = currScroll > lastScrollYPos;
			if (!lastScrollYPos || currScroll < lastScrollYPos || showMenu) {
				showNav = true;
			} else if (currScroll > lastScrollYPos) {
				showNav = false;
			}
			lastScrollYPos = currScroll;
		});
	});

	function changeMenuState(newState: boolean): void {
		showMenu = newState;
		showMenuButton = !newState;
	}

	onDestroy(isMobileUnsub);
</script>

{#if showNav}
	<header
		class="top-nav-cls glass"
		transition:fly={{ delay: 0, y: -100, duration: 400, easing: sineIn }}
	>
		<div class="left">
			<img src={logo} class="header-icon" alt="Logo" />
		</div>

		<div class="middle">
			{#if !mobile || showMenu}
				<nav class="nav" class:glass transition:conditionalFly={{ x: 100, duration: 400 }}>
					{#if mobile}
						<aside class="menu-top-nav">
							<img src={logo} class="header-icon" alt="Logo" />
							<div class="close-button-container">
								<button
									type="button"
									aria-label="Close Menu"
									on:click={() => changeMenuState(false)}
								>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path d="M0 0h24v24H0V0z" fill="none" />
										<path
											d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
										/>
									</svg>
								</button>
							</div>
						</aside>
					{/if}
					<menu class="nav__menu">
						<li>
							<a on:click={() => changeMenuState(false)} sveltekit:prefetch href="#about me"
								>About Me</a
							>
						</li>
						<li>
							<a on:click={() => changeMenuState(false)} sveltekit:prefetch href="#education"
								>Education</a
							>
						</li>
						<li>
							<a on:click={() => changeMenuState(false)} sveltekit:prefetch href="#skills">Skills</a
							>
						</li>
					</menu>
				</nav>
				<!-- <Toggletheme/> -->
			{/if}
		</div>

		<div class="right">
			{#if mobile}
				<button
					type="button"
					aria-label="Menu"
					on:click={() => changeMenuState(true)}
					class:hidden={showMenu}
					disabled={showMenu}
				>
					<ChevronRight />
				</button>
			{:else}
				<Toggletheme />
			{/if}
		</div>
	</header>
{/if}
