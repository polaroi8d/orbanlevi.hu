export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","companies/bishop.png","companies/dyo.png","companies/sunilium.png","companies/szte.png","favicon.png","life/lifeImages01.png","life/lifeImages02.png","life/lifeImages03.png","life/lifeImages04.png","life/lifeImages05.png","life/lifeImages06.png","life/lifeImages07.png","life/lifeImages08.png","profile.png","social/.DS_Store","social/logo-discord.svg","social/logo-dribbble.svg","social/logo-github.svg","social/logo-linkedin.svg","social/logo-twitter.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.9f9f5519.js","app":"_app/immutable/entry/app.955322ed.js","imports":["_app/immutable/entry/start.9f9f5519.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.b0c33a64.js","_app/immutable/entry/app.955322ed.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.c26a6efa.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
