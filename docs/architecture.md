# Architecture

This document owns the accepted non-visual system design for the Archcode heritage website and visual novel. Source code, configuration, generated artifacts, and schemas own the delivered implementation's exact behavior.

## System context and routes

The repository builds a Next.js Pages Router product with statically defined editorial routes and a browser-run visual novel. `pages/` owns the home, project explanation, team, saved links, feedback, play, and error routes. `components/` owns the editorial shell. `game/` owns the story runtime, branch graph, game commands, sound mapping, and game-specific presentation adapters.

Next.js serves one `ru` locale through the routing configuration. The browser loads source-controlled images, audio, and fonts. Supabase accepts optional game submissions. Imgflip supplies meme templates and creates captioned meme images. Microlink fetches link-preview metadata for the saved-link interface. Disqus supplies the embedded feedback surface.

## State ownership and generation

The branch modules under `game/branches/` define the story graph. `react-visual-novel` owns the active branch, focused statement, asset preload lifecycle, and progression controls. `MyGame` binds the prepared branch set, source-controlled assets, sound callbacks, home navigation, and external-link interception into that runtime.

Jotai's storage-backed `@App/savedLinks` atom owns saved external reading in browser storage. The active external-link prompt is transient React state. Submission forms own their input and in-flight state. Supabase owns accepted nomination, post, and meme-submission records after a successful insert.

`scripts/generate-barrels.mjs` owns the generated export indexes listed in project `AGENTS.md`. `pnpm run css-generate` compiles `main.css` into `__generated__/main.css`. The approved Supabase schema command owns `__generated__/supabase.ts`. Generated artifacts remain consumers of their generators rather than independent edit targets.

## Interfaces and data flow

The website routes exchange navigation through Next.js links and the router. Query-parameter state is adapted through `next-query-params`. The game imports every generated branch export, prepares the graph, and starts at `Intro`. External HTTP links opened inside the story stop at `LinkPrompt`, where the player chooses immediate navigation or local retention.

`getSupabase()` creates one browser client from the public Supabase URL and anonymous key. Submission commands validate their form data, write to the matching table, and advance only after the insert promise resolves. Meme creation first reads available templates from Imgflip, then requests a captioned image before an optional Supabase record write.

## Trust, privacy, and failure boundaries

All game branches, editorial copy, assets, and built-in destinations are repository-controlled inputs. Saved links remain in the visitor's browser. Optional forms can send visitor-entered text, names, selected meme data, and generated image URLs to external services. Source and provider policy own the exact accepted fields, authorization, retention, and access rules.

Supabase and Imgflip are separate failure boundaries. A provider response or thrown request can stop an optional action. Form owners must keep in-flight controls from producing duplicate intent and must show a failure without advancing as though the write succeeded. The visual-novel loader distinguishes progress, success, and asset failure. The shared React error boundary contains other render failures inside the editorial shell.

## Compatibility and delivery

The Pages Router, Russian-only locale configuration, branch export names, generated Supabase types, and provider table names are compatibility boundaries. Changing one requires its callers or generated consumers to move in the same coherent change. A source change that adds, removes, or renames an exported branch or command must regenerate the barrel indexes before verification.

The repository build generates barrels and CSS before invoking Next.js. Deployment and provider mutation remain separate transitions. The exact hosting project and environment values stay with provider configuration and local environment owners.

## Implementation owners

- `next.config.mjs` owns Pages Router and locale configuration.
- `pages/` and `components/` own website routing and editorial composition.
- `game/branches/`, `game/commands/`, and `game/MyGame.tsx` own the playable graph and runtime binding.
- `api/supabase.ts` and `__generated__/supabase.ts` own the Supabase client boundary and generated schema types.
- `main.css`, the Tailwind configuration, and `__generated__/main.css` own compiled style behavior. [UI design](ui-design.md) owns recurring visual and interaction grammar.
- `package.json` and `scripts/generate-barrels.mjs` own generation and verification commands.
- `fnox.toml` owns local environment recovery mappings. [Local setup](runbooks/local-setup.md) owns the procedure.

## Work routing

Update this document when routes, system boundaries, state ownership, generated-consumer relationships, provider interfaces, trust boundaries, compatibility, failure behavior, or delivery topology change. Update [Product](product.md) or [Visual novel](specs/visual-novel.md) for accepted outcomes, and update [UI design](ui-design.md) for recurring visual or interaction grammar.
