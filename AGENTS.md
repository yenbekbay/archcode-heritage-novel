# Archcode heritage novel

Interactive visual novel and editorial website about Almaty architectural heritage.

## Workflow

1. Read the document listed in `Structure` before changing the files or behavior it covers. Update it in the same change when its maintenance trigger applies.
2. Format touched code and config with `pnpm exec oxlint --fix <file...>` and `pnpm exec prettier --write <file...>`.
3. Format touched Markdown and prose with `pnpm exec prettier --write <file>`.
4. Update `README.md` in the same change when the project identity, framework summary, or license statement changes.
5. After adding, removing, or renaming a barrel-exported module, run `pnpm run generate:barrels`, then stage the updated index files.
6. After related source or config changes, run `pnpm run lint:oxlint`.
7. Launch a browser only when the user explicitly asks for rendered evidence.
8. Verify changes with the lowest-cost sufficient check. Start with direct source inspection or a targeted check, and escalate only when it cannot establish the required result. Skip routine or speculative verification.
9. Treat full builds, development servers, broad test or lint suites, dependency installs, and benchmarks as expensive commands. Run one only when the user explicitly asks or no cheaper targeted signal can settle the claim.
10. Stop verification work when the user declines it.

## Boundaries

- Ask first before regenerating the Supabase schema, submitting game content to Supabase or Imgflip, deploying, or mutating another provider.
- Always treat `src/__generated__/supabase.ts` as durable generated output owned by `pnpm run supabase-generate`; do not hand-edit it.
- Always preserve the Russian-only route contract unless the task explicitly changes localization.
- Always keep route files under `src/app/`. Keep editorial pages as Server Components and mark browser-dependent component boundaries with `'use client'`.

## Stack

- Next.js App Router with React, TypeScript, Tailwind CSS 4, Framer Motion, and React Visual Novel.
- Supabase for submitted game content and Imgflip for meme generation.

## Structure

The documentation map accounts for each living owner and dynamic family. Read the named owner before the governed change. Update it in the same change when its owned contract changes.

| Path | Family | Read before changing | Update in the same change when changing |
| --- | --- | --- | --- |
| `README.md` | Repository entry | First local start or common document retrieval | Project identity, first local start, common document retrieval, or license statement |
| `docs/product.md` | Product | Purpose, audience, vocabulary, product surfaces, participation outcomes, states, or acceptance | Those product decisions or the specification boundary |
| `docs/architecture.md` | Architecture | Routes, state ownership, generated artifacts, provider interfaces, trust, compatibility, failure, or delivery topology | Those system relationships or implementation owners |
| `docs/ui-design.md` | UI design | Shared editorial or game layout, typography, material, navigation, motion, sound, responsive, or accessibility grammar | That recurring visual or interaction grammar or an approved exception |
| `docs/specs/*.md` | Specification family | The named product capability's behavior, states, failure, or acceptance | That capability contract or its source-owner boundary |
| `docs/runbooks/local-setup.md` | Local setup runbook | Toolchain bootstrap, dependency installation, environment recovery, or smoke checks | The procedure's target, preconditions, commands, recovery, or verification |

- Let `pnpm-workspace.yaml` own allowed dependency builds.
- Keep user-facing routes under `src/app/`, shared website components under `src/components/`, and visual-novel state and branches under `src/game/`.
- Keep imported images and audio under `src/assets/`, global Tailwind source in `src/main.css`, and generated artifacts under `src/__generated__/`.
- Treat `src/api/index.ts`, `src/components/index.ts`, `src/game/branches/index.ts`, `src/game/commands/index.ts`, and `src/game/commands/internal/index.ts` as durable generated outputs owned by `pnpm run generate:barrels`.

## Commands

- `(umask 077; mise exec -- fnox export --if-missing error --output .env.local) && chmod 600 .env.local`: restore the canonical ignored local environment.
- `pnpm run dev`: generate local artifacts and start Next.js with PostCSS stylesheet compilation.
- `pnpm run build`: generate local artifacts and create a production build.
- `pnpm run check` / `pnpm run lint`: generate local artifacts, then run the Oxlint and Prettier leaves concurrently. Oxlint includes the TypeScript check.
- `pnpm run fix`: apply Oxlint and Prettier formatting.
- `pnpm run supabase-generate`: refresh the committed Supabase API types after explicit approval.

Use `package.json` as the complete executable catalog.
