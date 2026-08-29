# Archcode heritage novel

Interactive visual novel and editorial website about Almaty architectural heritage.

## Workflow

1. Update `docs/setup.md` in the same change when local toolchain, dependency installation, environment recovery, or smoke-test behavior changes.
2. Format touched code and config with `pnpm exec eslint --fix <file>` plus `pnpm exec prettier --write <file>`.
3. Format touched Markdown and prose with `pnpm exec prettier --write <file>`.
4. Update `README.md` in the same change when the project identity, framework summary, or license statement changes.
5. After adding, removing, or renaming a barrel-exported module, run `pnpm run barrels-generate`, then stage the updated index files.
6. After related source or config changes, run `pnpm run lint:typecheck`.
7. Use a browser only when the user explicitly asks for rendered evidence.

## Test retention

- Treat every repository test as a deletion candidate. Retain it only when its failure uniquely identifies a settled harmful behavior loss that types, schemas, static analysis, direct source inspection, and existing tests do not already expose.
- Keep the smallest test set that protects user-visible behavior, public or persisted boundaries, destructive or external-write safeguards, known regressions, concurrency or lifecycle hazards, difficult algorithms, and security or privacy controls.
- Delete tests that restate implementation, types, schemas, constants, trivial transformations, library behavior, generated structure, unreviewed snapshots, or another test's signal. Fast execution and existing coverage do not justify retention.
- Do not add a test by default when changing implementation. Add one only when its distinct failure signal is worth its review burden, fixture upkeep, refactor resistance, and change amplification.

## Boundaries

- Ask first before regenerating the Supabase schema, submitting game content to Supabase or Imgflip, deploying, or mutating another provider.
- Always treat `__generated__/supabase.ts` as durable generated output owned by `pnpm run supabase-generate`; do not hand-edit it.
- Always preserve the Russian-only route contract unless the task explicitly changes localization.
- Never add an `app/` directory, React Server Components, `'use client'` directives, or `layout.tsx` files because this project uses the Next.js Pages Router.

## Stack

- Next.js Pages Router with React, TypeScript, Tailwind CSS, DaisyUI, Framer Motion, and React Visual Novel.
- Supabase for submitted game content and Imgflip for meme generation.

## Structure

- Use `docs/setup.md` for workspace bootstrap and local environment recovery.
- Let `pnpm-workspace.yaml` own allowed dependency builds.
- Keep user-facing routes under `pages/`, shared website components under `components/`, and visual-novel state and branches under `game/`.
- Keep imported images and audio under `assets/`, global Tailwind source in `main.css`, and generated artifacts under `__generated__/`.
- Treat `api/index.ts`, `components/index.ts`, `game/branches/index.ts`, `game/commands/index.ts`, and `game/commands/internal/index.ts` as durable generated outputs owned by `pnpm run barrels-generate`.

## Commands

- Run `mise exec -- fnox export > .env.local` to restore the canonical ignored local environment.
- Run `pnpm run dev` to generate local artifacts and start the CSS and Next.js watchers.
- Run `pnpm run build` to generate local artifacts and create a production build.
- Run `pnpm run lint` to generate local artifacts, then run ESLint, Prettier, and TypeScript.
- Run `pnpm run fix` to apply ESLint and Prettier formatting.
- Run `pnpm run supabase-generate` after explicit approval to refresh the committed Supabase API types.
