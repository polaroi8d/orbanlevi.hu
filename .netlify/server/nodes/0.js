

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.c73c08eb.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.c26a6efa.js"];
export const stylesheets = ["_app/immutable/assets/0.722e6c00.css"];
export const fonts = [];
