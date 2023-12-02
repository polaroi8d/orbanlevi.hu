import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#111827 var(--tw-gradient-from-position);--tw-gradient-to:rgb(17 24 39 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:#1f2937 var(--tw-gradient-to-position);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}a{--tw-text-opacity:1;color:rgb(96 165 250 / var(--tw-text-opacity))\n}a:hover{--tw-text-opacity:1;color:rgb(30 64 175 / var(--tw-text-opacity))\n}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
