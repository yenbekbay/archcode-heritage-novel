import { oxlintBaseConfig } from "@utilfirst/eslint-plugin/oxlint";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [oxlintBaseConfig],
  ignorePatterns: [
    ".local/**",
    ".next/**",
    ".tmp/**",
    "next-env.d.ts",
    "node_modules/**",
    "pnpm-lock.yaml",
    "src/__generated__/**",
  ],
  plugins: ["nextjs", "node"],
});
