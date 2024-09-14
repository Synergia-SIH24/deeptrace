export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BTVbpg2B.js","app":"_app/immutable/entry/app.Cqhokwkk.js","imports":["_app/immutable/entry/start.BTVbpg2B.js","_app/immutable/chunks/entry.N1xM51Zv.js","_app/immutable/chunks/index-client.C-ZmNHrL.js","_app/immutable/chunks/runtime.BjDaq2n6.js","_app/immutable/chunks/index.pS2hHibR.js","_app/immutable/entry/app.Cqhokwkk.js","_app/immutable/chunks/runtime.BjDaq2n6.js","_app/immutable/chunks/render.CDQK8jBg.js","_app/immutable/chunks/utils.V7FnVb_j.js","_app/immutable/chunks/svelte-head.3umLoJCh.js","_app/immutable/chunks/disclose-version.B1zM0Eo-.js","_app/immutable/chunks/this.DnLKElFk.js","_app/immutable/chunks/svelte-component.BR30ALK1.js","_app/immutable/chunks/props.CJ3lNaL9.js","_app/immutable/chunks/index-client.C-ZmNHrL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(auth)/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/(auth)/logout/_server.ts.js'))
			},
			{
				id: "/(auth)/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base = "";