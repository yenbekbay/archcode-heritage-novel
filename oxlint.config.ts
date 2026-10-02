import { oxlintBaseConfig } from "@utilfirst/eslint-plugin/oxlint";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [oxlintBaseConfig],
  ignorePatterns: [
    ".env",
    ".env*.local",
    ".local/**",
    ".next/**",
    ".pnpm-store/**",
    ".swc/**",
    ".tmp/**",
    ".vercel/**",
    "next-env.d.ts",
    "node_modules/**",
    "pnpm-lock.yaml",
    "public/**",
    "src/__generated__/**",
  ],
  plugins: ["nextjs", "node"],
});
