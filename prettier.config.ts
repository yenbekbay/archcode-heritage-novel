import type { Config } from "prettier";
import type { PluginOptions } from "prettier-plugin-tailwindcss";

const config: Config & PluginOptions = {
  proseWrap: "never",
  quoteProps: "consistent",
  tailwindAttributes: ["className"],
  tailwindFunctions: ["twMerge", "tv"],
  tailwindStylesheet: "./src/styles/globals.css",
  plugins: [
    "@utilfirst/prettier-plugin",
    "prettier-plugin-organize-imports",
    "prettier-plugin-packagejson",
    "prettier-plugin-sh",
    "prettier-plugin-sort-json",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [{ files: [".env", ".env.*"], options: { parser: "sh" } }],
};

export default config;
