import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    IMGFLIP_USERNAME: z.string().min(1).optional(),
    IMGFLIP_PASSWORD: z.string().min(1).optional(),
  },
  client: {
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SUPABASE_URL: process.env["NEXT_PUBLIC_SUPABASE_URL"],
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env["NEXT_PUBLIC_SUPABASE_ANON_KEY"],
    IMGFLIP_USERNAME: process.env["IMGFLIP_USERNAME"],
    IMGFLIP_PASSWORD: process.env["IMGFLIP_PASSWORD"],
  },
  emptyStringAsUndefined: true,
});
