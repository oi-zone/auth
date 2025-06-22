// @ts-check

const eslint = "eslint --flag unstable_config_lookup_from_file --fix";
const prettier = "prettier --write";

/** @type {import("lint-staged").Configuration} */
module.exports = {
  "*.{js,mjs,cjs,jsx,ts,tsx}": [eslint, prettier],
  "*.{md,html,css,json,yml,yaml}": prettier,
};
