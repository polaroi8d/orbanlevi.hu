

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3ab6deb0.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.c26a6efa.js","_app/immutable/chunks/singletons.b0c33a64.js"];
export const stylesheets = [];
export const fonts = [];
