import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["scripts/*.ts"],
  project: ["src/**/*.{css,ts,tsx}", "scripts/**/*.ts"],
  // openapi-typescript writes this file, so its exports follow the Supabase
  // schema instead of local consumers.
  ignore: ["src/__generated__/supabase.ts"],
  ignoreDependencies: [
    // scripts/generate-supabase.ts spawns this CLI by name.
    "openapi-typescript",
  ],
};

export default config;
