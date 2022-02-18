export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","heart.png","menu.svg","socials/github_badge.svg","svelte-kit.svg","svelte-logo.png"]),
	_: {
		mime: {".png":"image/png",".svg":"image/svg+xml"},
		entry: {"file":"start-3283073d.js","js":["start-3283073d.js","chunks/vendor-145fb38c.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			}
		]
	}
};
