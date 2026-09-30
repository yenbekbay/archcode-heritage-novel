import { oxlintBaseConfig } from "@utilfirst/eslint-plugin/oxlint";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [oxlintBaseConfig],
  ignorePatterns: [
    ".local/**",
    ".next/**",
    ".pnpm-store/**",
    ".tmp/**",
    "src/__generated__/**",
    "next-env.d.ts",
    "node_modules/**",
    "pnpm-lock.yaml",
    "public/**",
  ],
  plugins: ["nextjs", "node"],
});
