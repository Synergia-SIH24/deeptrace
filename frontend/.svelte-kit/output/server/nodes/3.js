

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.4AicDaCb.js","_app/immutable/chunks/disclose-version.B1zM0Eo-.js","_app/immutable/chunks/runtime.BjDaq2n6.js"];
export const stylesheets = [];
export const fonts = [];
