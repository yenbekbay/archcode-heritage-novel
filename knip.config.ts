import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["scripts/*.ts"],
  project: ["src/**/*.{css,ts,tsx}", "scripts/**/*.ts"],
  // openapi-typescript writes this file, so its exports follow the Supabase
  // schema instead of local consumers.
  ignore: ["src/__generated__/supabase.ts"],
  ignoreDependencies: [
    // patches/react-visual-novel@0.2.2.patch imports its types.
    "csstype",
    // The supabase-generate script runs it inside an env-cmd shell string.
    "openapi-typescript",
  ],
};

export default config;
