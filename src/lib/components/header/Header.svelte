<script lang="ts">
	import { page, url } from '$app/stores';
	import { onDestroy, onMount } from 'svelte';
	import './Header.scss';
	import logo from './svelte-logo.svg';
	import { isMobile } from '../../../Stores';
	import { fade, fly } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';

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

	onDestroy(isMobileUnsub);
</script>

{#if showNav}
	<header
		class="top-nav-cls glass"
		transition:fly={{ delay: 0, y: -100, duration: 600, easing: sineInOut }}
	>
		<div class="left">
			<img src={logo} class="header-icon" alt="Logo" />
		</div>

		<div class="middle">
			{#if !mobile || showMenu}
				<nav class="nav" class:glass transition:fly={{ x: 100, duration: 400 }}>
					{#if mobile}
						<aside class="menu-top-nav">
							<img src={logo} class="header-icon" alt="Logo" />
							<div class="close-button-container">
								<button
									type="button"
									aria-label="Close Menu"
									on:click={(event) => {
										showMenu = false;
										showMenuButton = true;
									}}
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
						<li><a sveltekit:prefetch href="#about me">About Me</a></li>
						<li><a sveltekit:prefetch href="#education">Education</a></li>
						<li><a sveltekit:prefetch href="#skills">Skills</a></li>
					</menu>
				</nav>
			{/if}
		</div>

		{#if showMenuButton}
			<div class="right">
				<button
					type="button"
					aria-label="Menu"
					on:click={(event) => {
						showMenu = true;
						showMenuButton = false;
					}}
					transition:fade={{ delay: 0, duration: 600 }}
					disabled={showMenu}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path
							d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
						/>
					</svg>
				</button>
			</div>
		{/if}
	</header>

	<!-- <aside class="mobile-menu glass">
			<menu class="menu">
				<li><a href="/#aboutme">About Me</a></li>
				<li><a href="/#education">Education</a></li>
				<li><a href="/#skills">Skills</a></li>
			</menu>
		</aside> -->
	<!-- </header> -->
{/if}
