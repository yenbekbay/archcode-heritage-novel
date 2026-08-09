# Archcode heritage novel

Interactive visual novel and editorial website about Almaty architectural heritage.

## Workflow

1. Format touched code and config with `pnpm exec eslint --fix <file>` plus `pnpm exec prettier --write <file>`.
2. Format touched Markdown and prose with `pnpm exec prettier --write <file>`.
3. Update `README.md` in the same change when the project identity, framework summary, or license statement changes.
4. After adding, removing, or renaming a barrel-exported module, run `pnpm run barrels-generate`, then stage the updated index files.
5. After related source or config changes, run `pnpm run lint:typecheck`.
6. Use a browser only when the user explicitly asks for rendered evidence.

## Boundaries

- Ask first before regenerating the Supabase schema, submitting game content to Supabase or Imgflip, deploying, or mutating another provider.
- Always treat `__generated__/supabase.ts` as durable generated output owned by `pnpm run supabase-generate`; do not hand-edit it.
- Always preserve the Russian-only route contract unless the task explicitly changes localization.
- Never add an `app/` directory, React Server Components, `'use client'` directives, or `layout.tsx` files because this project uses the Next.js Pages Router.

## Stack

- Next.js Pages Router with React, TypeScript, Tailwind CSS, DaisyUI, Framer Motion, and React Visual Novel.
- Supabase for submitted game content and Imgflip for meme generation.

## Structure

- Let `pnpm-workspace.yaml` own allowed dependency builds.
- Keep user-facing routes under `pages/`, shared website components under `components/`, and visual-novel state and branches under `game/`.
- Keep imported images and audio under `assets/`, global Tailwind source in `main.css`, and generated artifacts under `__generated__/`.
- Treat `api/index.ts`, `components/index.ts`, `game/branches/index.ts`, `game/commands/index.ts`, and `game/commands/internal/index.ts` as durable generated outputs owned by `pnpm run barrels-generate`.

## Commands

- Run `pnpm run dev` to generate local artifacts and start the CSS and Next.js watchers.
- Run `pnpm run build` to generate local artifacts and create a production build.
- Run `pnpm run lint` to generate local artifacts, then run ESLint, Prettier, and TypeScript.
- Run `pnpm run fix` to apply ESLint and Prettier formatting.
- Run `pnpm run supabase-generate` after explicit approval to refresh the committed Supabase API types.
