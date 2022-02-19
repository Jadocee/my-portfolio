import { c as create_ssr_component, e as escape, a as add_attribute, d as compute_slots, f as subscribe, o as onDestroy, v as validate_component, g as set_store_value } from "../../chunks/index-1c2b93d7.js";
import { s as skillCardStates, v as viewport } from "../../chunks/Stores-3c2e2dd0.js";
var index = "";
var Hero_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".hero.svelte-1ih6p27.svelte-1ih6p27{display:flex;align-items:baseline;justify-content:center;flex-direction:column;gap:5rem}.hero.svelte-1ih6p27 h1.svelte-1ih6p27{font-size:5rem;font-weight:600;line-height:normal;margin:0}.hero.svelte-1ih6p27 h1 span.svelte-1ih6p27{transition:background-position 500ms ease-in-out;color:transparent;background-clip:text;-webkit-background-clip:text;-moz-background-clip:text;background-size:cover;background-image:linear-gradient(to right, #ec4699, #8b55f6)}.hero.svelte-1ih6p27 h1 span.svelte-1ih6p27:hover{animation:svelte-1ih6p27-gradient-flow 2500ms infinite;-moz-animation:svelte-1ih6p27-gradient-flow 2500ms infinite;-webkit-animation:svelte-1ih6p27-gradient-flow 2500ms infinite}@keyframes svelte-1ih6p27-gradient-flow{from{background-position:0}to{background-position:16rem}}.hero.svelte-1ih6p27 p.svelte-1ih6p27{margin:0;font-weight:500;font-size:3rem;line-height:normal}@media(max-width: 768px){.hero.svelte-1ih6p27 h1.svelte-1ih6p27{font-size:5rem;text-align:left}.hero.svelte-1ih6p27 p.svelte-1ih6p27{font-size:1.75rem;text-align:left}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { myName } = $$props;
  if ($$props.myName === void 0 && $$bindings.myName && myName !== void 0)
    $$bindings.myName(myName);
  $$result.css.add(css$3);
  return `<div class="${"hero svelte-1ih6p27"}"><h1 class="${"svelte-1ih6p27"}">Hi, my name is <span class="${"svelte-1ih6p27"}">${escape(myName)}</span></h1>
	<p class="${"svelte-1ih6p27"}">${slots.default ? slots.default({}) : ``}</p>
</div>`;
});
var AboutMe$1 = "";
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><div class="${"glass"}"><div class="${"aboutme-desc-cls"}"><p>I&#39;m a student studying a Bachelor of Software Engineering at the University of Newcastle,
				starting my second year in February, 2022. My goal is to pursue a career in software
				development by pursuing new learning opportunities and forming relationships with the
				individuals I meet on my journey. Developing cross-platform applications is at the top of my
				list of skills to learn. However, I am open to take on other development opportunities or
				change my path as I explore other options. I hope to soon gain leadership and development
				experience through a work experience related program such as an internship
			</p></div></div></div>`;
});
var UONLogo = "/_app/assets/uon-logo-square-bf66487e.svg";
var Education$1 = "";
const Education = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { study } = $$props;
  let { dateStart } = $$props;
  let { dateFinish = null } = $$props;
  let { abbr = null } = $$props;
  let { link } = $$props;
  const abbreviate = (text) => {
    const words = text.split(" ");
    let abbreviation = "";
    words.forEach((word) => {
      abbreviation = abbreviation.concat(word[0].toUpperCase());
    });
    return abbreviation;
  };
  function formattedDate(date) {
    const toFormat = new Date(date);
    let formattedDate2;
    if (dateStart.split("/").length < 3) {
      formattedDate2 = toFormat.toLocaleString("default", { year: "numeric", month: "long" });
    } else {
      formattedDate2 = toFormat.toLocaleString("default", { dateStyle: "long" });
    }
    return formattedDate2;
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.study === void 0 && $$bindings.study && study !== void 0)
    $$bindings.study(study);
  if ($$props.dateStart === void 0 && $$bindings.dateStart && dateStart !== void 0)
    $$bindings.dateStart(dateStart);
  if ($$props.dateFinish === void 0 && $$bindings.dateFinish && dateFinish !== void 0)
    $$bindings.dateFinish(dateFinish);
  if ($$props.abbr === void 0 && $$bindings.abbr && abbr !== void 0)
    $$bindings.abbr(abbr);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<section class="${"education"}"><div class="${"flex-container"}"><div${add_attribute("id", abbr || abbreviate(name), 0)} class="${"main-content glass"}"><div class="${"img-cls"}"><img${add_attribute("src", UONLogo, 0)} alt="${"Logo of " + escape(name)}" aria-label="${"Logo of " + escape(name)}"></div>

			<div class="${"desc-cls"}"><h1 class="${"education-heading"}">${escape(name)}</h1>
				<div class="${"education-type"}">${escape(study)}</div>
				<div class="${"education-time"}"><time${add_attribute("datetime", dateStart, 0)}>${escape(formattedDate(dateStart))}</time>

					<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}"><path d="${"M0 0h24v24H0V0z"}" fill="${"none"}"></path><path d="${"M16.01 11H5c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V11z"}"></path></svg>

					${dateFinish ? `<time${add_attribute("datetime", dateFinish, 0)}>${escape(formattedDate(dateFinish))}</time>` : `<div>Current</div>`}</div></div></div></div></section>`;
});
var SkillCard$1 = "";
const SkillCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  compute_slots(slots);
  let $$unsubscribe_skillCardStates;
  $$unsubscribe_skillCardStates = subscribe(skillCardStates, (value) => value);
  let { icon } = $$props;
  let { title } = $$props;
  let { link = null } = $$props;
  let parent;
  const _unsubscribe = skillCardStates.subscribe(async (value) => {
    return;
  });
  onDestroy(_unsubscribe);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$unsubscribe_skillCardStates();
  return `<div id="${"skill-" + escape(title)}" class="${"skill-card glass"}"${add_attribute("this", parent, 0)}>${``}</div>`;
});
var csharp = "/_app/assets/csharp-1ce8d6e9.svg";
var css$2 = "/_app/assets/CSS3-6d0ce725.svg";
var html = "/_app/assets/HTML5-c62bf88b.svg";
var java = "/_app/assets/java-a7fd0182.svg";
var python = "/_app/assets/python-fbc3b698.svg";
var sass = "/_app/assets/sass-0e8e39c3.svg";
var svelte = "/_app/assets/svelte-logo-87df40b8.svg";
var tailwind = "/_app/assets/tailwind-7c29d970.svg";
var typescript = "/_app/assets/typescript-b487cbba.svg";
var vanillaExtract = "/_app/assets/vanillaextract-e7f92c4c.svg";
var javascript = "/_app/assets/javascript-9a935d73.svg";
var cpp = "/_app/assets/cpp-7a16311b.svg";
var Skills_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".grid-container.svelte-mav6z1{position:relative;overflow:visible}.container.svelte-mav6z1{width:100%}.skills-grid.svelte-mav6z1{position:static;top:0;right:0;left:0;bottom:0;--grid-rows:4;max-width:100rem;display:grid;grid-template-columns:minmax(0, 1fr);gap:1.25rem;align-items:start;width:100%}@media(min-width: 768px){.skills-grid.svelte-mav6z1{grid-template-columns:repeat(2, minmax(0, 1fr));grid-template-rows:repeat(7, minmax(auto, 100%));grid-auto-rows:minmax(auto, 100%);grid-auto-columns:minmax(0, 1fr);grid-auto-flow:row dense}}@media(min-width: 1280px){.skills-grid.svelte-mav6z1{grid-template-columns:repeat(4, minmax(0, 1fr));grid-template-rows:repeat(5, minmax(auto, 100%));grid-auto-flow:row dense}}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let skillsGrid;
  const _unsubscribe = skillCardStates.subscribe(async () => {
    return;
  });
  onDestroy(_unsubscribe);
  $$result.css.add(css$1);
  return `<div class="${"container svelte-mav6z1"}"><div class="${"grid-container svelte-mav6z1"}"><div class="${"skills-grid svelte-mav6z1"}"${add_attribute("this", skillsGrid, 0)}>${validate_component(SkillCard, "SkillCard").$$render($$result, {
    icon: svelte,
    title: "Svelte",
    link: "https://svelte.dev/"
  }, {}, {
    desc: () => {
      return `<div slot="${"desc"}">I am have only been using Svelte for a few months now but I have a good understanding of
					the basics. I am also familiar with using SvelteKit but have less experience compared to
					Svelte.
				</div>`;
    }
  })}
			${validate_component(SkillCard, "SkillCard").$$render($$result, {
    icon: typescript,
    title: "TypeScript",
    link: "https://www.typescriptlang.org/"
  }, {}, {
    desc: () => {
      return `<div slot="${"desc"}">Proficient with using TypeScript to develop web applications. I started using it for my
					portfolio and I am not going back.<br></div>`;
    }
  })}
			${validate_component(SkillCard, "SkillCard").$$render($$result, {
    icon: html,
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  }, {}, {
    desc: () => {
      return `<div slot="${"desc"}">I am proficient with using HTML. I understand the importance of using semantic elements to
					create a site that is accessible for both humans and computers (e.g. screen readers and
					search engine exposure).
				</div>`;
    }
  })}
			${validate_component(SkillCard, "SkillCard").$$render($$result, { icon: css$2, title: "CSS" }, {}, {
    desc: () => {
      return `<div slot="${"desc"}">Proficient with CSS in the development of web applications.</div>`;
    }
  })}
			${validate_component(SkillCard, "SkillCard").$$render($$result, {
    icon: sass,
    title: "Sass",
    link: "https://sass-lang.com/"
  }, {}, {
    desc: () => {
      return `<div slot="${"desc"}">A CSS preprocessor I use in favour of vanilla CSS for its ability to nest CSS rules. I
					plan to move back to using vanilla CSS after the implementation of the <a href="${"https://www.w3.org/TR/css-nesting-1/"}" target="${"__blank"}">Nesting Module</a>.
				</div>`;
    }
  })}
			${validate_component(SkillCard, "SkillCard").$$render($$result, {
    icon: tailwind,
    title: "TailwindCSS",
    link: "https://tailwindcss.com"
  }, {}, {
    desc: () => {
      return `<div slot="${"desc"}">A CSS framework that acts as a much quicker way to create great looking websites. It
					allows me to spend more time in other areas.
				</div>`;
    }
  })}
			${validate_component(SkillCard, "SkillCard").$$render($$result, {
    icon: vanillaExtract,
    title: "vanilla-extract",
    link: "https://vanilla-extract.style/"
  }, {}, {
    desc: () => {
      return `<div slot="${"desc"}">Allows me to write CSS stylesheets in TypeScript. I have only used this in a project once
					as a trial before switching back to SASS.
				</div>`;
    }
  })}
			${validate_component(SkillCard, "SkillCard").$$render($$result, {
    icon: python,
    title: "Python",
    link: "https://www.python.org/"
  }, {}, {})}
			${validate_component(SkillCard, "SkillCard").$$render($$result, {
    icon: csharp,
    title: "C#",
    link: "https://dotnet.microsoft.com/en-us/languages/csharp"
  }, {}, {
    desc: () => {
      return `<div slot="${"desc"}">I only have some experience with C# but I am confident I can quickly become proficient
					with it. I started using it after the release of Dotnet 6, and I plan to use it more in
					the future.
				</div>`;
    }
  })}
			${validate_component(SkillCard, "SkillCard").$$render($$result, {
    icon: java,
    title: "Java",
    link: "https://www.oracle.com/java/"
  }, {}, {
    desc: () => {
      return `<div slot="${"desc"}">Java is the first <abbr title="${"Object Oriented Programming"}">OOP</abbr> language I learnt and
					used in projects. It is a big part of why I can quickly pick up languages like TypeScript,
					C#, and Dart.
				</div>`;
    }
  })}
			${validate_component(SkillCard, "SkillCard").$$render($$result, {
    icon: cpp,
    title: "C++",
    link: "https://www.cplusplus.com/info/description/#features"
  }, {}, {
    desc: () => {
      return `<div slot="${"desc"}">I have some experience using C++ after using C++98 in a <a href="${"https://www.newcastle.edu.au/course/SENG1120"}" alt="${"Data Structures"}" target="${"__blank"}">course</a> at University.
				</div>`;
    }
  })}
			${validate_component(SkillCard, "SkillCard").$$render($$result, {
    icon: javascript,
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  }, {}, {
    desc: () => {
      return `<div slot="${"desc"}">I am familiar with JavaScript. I have much less experience using JavaScript in comparison
					to TypeScript as I have only used it when required to for my degree. I should have no
					problem using JavaScript since TypeScript is a superset of the language.
				</div>`;
    }
  })}</div></div>
</div>`;
});
var PortfolioSection_svelte_svelte_type_style_lang = "";
const css = {
  code: ".portfolio-section.svelte-1jwvk1z{position:relative;justify-content:center;display:flex;flex-direction:column;align-items:center;padding-top:4rem;min-height:50vh;height:fit-content}@media(min-width: 768px){.portfolio-section.svelte-1jwvk1z{padding-left:2rem;padding-right:2rem;width:90%;margin-left:auto;margin-right:auto;max-height:100vh;padding-top:0}}.portfolio-section#hero.svelte-1jwvk1z{padding-top:0;height:100vh;display:flex;flex-direction:column;width:100%}.section-heading.svelte-1jwvk1z{width:100%;text-transform:uppercase;letter-spacing:0.05em;text-align:left;font-size:2rem;line-height:1.25rem;font-weight:300;margin-bottom:2rem;margin-top:2rem}@media(min-width: 768px){.section-heading.svelte-1jwvk1z{font-size:2.75rem;line-height:2.25rem}}",
  map: null
};
const PortfolioSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { section } = $$props;
  let { options = {
    rootMargin: "-30%",
    unobserveOnEnter: true
  } } = $$props;
  let { handler } = $$props;
  const unsubViewport = viewport.subscribe((values) => {
    return;
  });
  onDestroy(unsubViewport);
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.handler === void 0 && $$bindings.handler && handler !== void 0)
    $$bindings.handler(handler);
  $$result.css.add(css);
  return `<section${add_attribute("id", section, 0)} class="${"portfolio-section svelte-1jwvk1z"}">${``}
</section>`;
});
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $viewport, $$unsubscribe_viewport;
  $$unsubscribe_viewport = subscribe(viewport, (value) => $viewport = value);
  let innerHeight = null;
  async function handleViewportChange({ detail }) {
    set_store_value(viewport, $viewport[detail.entry.target.id] = detail.inView, $viewport);
    console.log($viewport);
  }
  {
    console.log(innerHeight);
  }
  $$unsubscribe_viewport();
  return `

${$$result.head += `${$$result.title = `<title>Portfolio</title>`, ""}`, ""}

${validate_component(PortfolioSection, "PortfolioSection").$$render($$result, {
    section: "hero",
    handler: handleViewportChange
  }, {}, {
    default: () => {
      return `${validate_component(Hero, "Hero").$$render($$result, { myName: "Jaydon" }, {}, {
        default: () => {
          return `I&#39;m a Software Engineering student and aspiring software developer \u{1F680}`;
        }
      })}`;
    }
  })}

${validate_component(PortfolioSection, "PortfolioSection").$$render($$result, {
    section: "about me",
    handler: handleViewportChange
  }, {}, {
    default: () => {
      return `${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})}`;
    }
  })}

${validate_component(PortfolioSection, "PortfolioSection").$$render($$result, {
    section: "education",
    handler: handleViewportChange
  }, {}, {
    default: () => {
      return `${validate_component(Education, "Education").$$render($$result, {
        name: "University of Newcastle",
        study: "Bachelor of Software Engineering",
        link: "https://www.newcastle.edu.au/degrees/bachelor-of-software-engineering-honours",
        dateStart: "2021/02"
      }, {}, {})}`;
    }
  })}

${validate_component(PortfolioSection, "PortfolioSection").$$render($$result, {
    section: "skills",
    handler: handleViewportChange
  }, {}, {
    default: () => {
      return `${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
export { Routes as default, prerender };
