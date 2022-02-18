import { c as create_ssr_component, o as onDestroy, a as add_attribute, v as validate_component } from "../../chunks/index-1c2b93d7.js";
import { i as isMobile } from "../../chunks/Stores-3c2e2dd0.js";
var modernNormalize = "";
var app = "";
var Header$1 = "";
var logo = "/_app/assets/svelte-logo-87df40b8.svg";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mobile;
  let showMenu = false;
  let showMenuButton = false;
  let glass = false;
  const isMobileUnsub = isMobile.subscribe((value) => {
    mobile = value;
    showMenuButton = mobile;
  });
  onDestroy(isMobileUnsub);
  glass = showMenu;
  return `${`<header class="${"top-nav-cls glass"}"><div class="${"left"}"><img${add_attribute("src", logo, 0)} class="${"header-icon"}" alt="${"Logo"}"></div>

		<div class="${"middle"}">${!mobile || showMenu ? `<nav class="${["nav", glass ? "glass" : ""].join(" ").trim()}">${mobile ? `<aside class="${"menu-top-nav"}"><img${add_attribute("src", logo, 0)} class="${"header-icon"}" alt="${"Logo"}">
							<div class="${"close-button-container"}"><button type="${"button"}" aria-label="${"Close Menu"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}"><path d="${"M0 0h24v24H0V0z"}" fill="${"none"}"></path><path d="${"M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"}"></path></svg></button></div></aside>` : ``}
					<menu class="${"nav__menu"}"><li><a sveltekit:prefetch href="${"#about me"}">About Me</a></li>
						<li><a sveltekit:prefetch href="${"#education"}">Education</a></li>
						<li><a sveltekit:prefetch href="${"#skills"}">Skills</a></li></menu></nav>` : ``}</div>

		${showMenuButton ? `<div class="${"right"}"><button type="${"button"}" aria-label="${"Menu"}" ${""}><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}"><path d="${"M0 0h24v24H0V0z"}" fill="${"none"}"></path><path d="${"M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"}"></path></svg></button></div>` : ``}</header>

	
	`}`;
});
var Footer$1 = "";
var FooterSection = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"main-footer"}">${``}</footer>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<div class="${"backdrop"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main>${slots.default ? slots.default({}) : ``}</main>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export { _layout as default };
