import { init } from '../handler.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","heart.png","menu.svg","socials/github_badge.svg","svelte-kit.svg","svelte-logo.png"]),
	_: {
		mime: {".png":"image/png",".svg":"image/svg+xml"},
		entry: {"file":"start-3283073d.js","js":["start-3283073d.js","chunks/vendor-145fb38c.js"],"css":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js')
		],
		routes: [
			
		]
	}
});
