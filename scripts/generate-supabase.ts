import { spawnSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { parseEnv } from "node:util";
import { z } from "zod";

// NOTE: The canonical exported snapshot overrides inherited provider values.
const environment = {
  ...process.env,
  ...parseEnv(await readFile(".env.local", "utf8")),
};

const supabase = z
  .object({
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  })
  .parse(environment);

const schemaUrl = new URL("/rest/v1/", supabase.NEXT_PUBLIC_SUPABASE_URL);
schemaUrl.searchParams.set("apikey", supabase.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const result = spawnSync(
  "openapi-typescript",
  [schemaUrl.href, "--output", "src/__generated__/supabase.ts"],
  { env: environment, stdio: "inherit" },
);

if (result.error !== undefined) {
  throw result.error;
}

process.exitCode = result.status ?? 1;
