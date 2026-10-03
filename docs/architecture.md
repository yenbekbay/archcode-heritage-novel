# Architecture

This document owns the accepted non-visual system design for the Archcode heritage website and visual novel. Source code, configuration, generated artifacts, and schemas own exact implementation behavior. [Product](product.md) owns accepted outcomes, [UI design](ui-design.md) owns presentation, and [Visual novel](specs/visual-novel.md) owns game behavior.

| Decision | Read |
| --- | --- |
| Routing, client boundaries, or providers | System context and routes |
| Browser state or generated files | State ownership and generation |
| Query state or optional submissions | Interfaces and data flow |
| Errors, privacy, or compatibility | Trust, privacy, and failure boundaries; Compatibility and delivery |
| Source owners or maintenance | Implementation owners; Work routing |

## System context and routes

The repository builds a Next.js App Router product with statically defined editorial routes and a browser-run visual novel. `src/app/` owns the home, project explanation, team, saved links, feedback, play, and error routes. The `(website)` layout owns the shared editorial shell and parallax context. The `(game)` group keeps play full-screen. Editorial copy is server-rendered, with client boundaries for navigation, animation, previews, saved links, the carousel, and Disqus. The root Jotai provider shares saved-link state across both groups. `src/components/` owns the editorial shell. `src/game/` owns the story runtime, branch graph, game commands, sound mapping, and game-specific presentation adapters.

The root layout declares Russian as the HTML language. Canonical routes retain their unprefixed URLs. Former `/ru` URLs redirect to their unprefixed equivalents. The browser loads source-controlled images and generated audio URLs. The root layout initializes local fonts through `next/font`. The metadata helper derives canonical and social URLs from the website identity owner. `src/proxy.ts` adds an indexing prohibition to responses from non-canonical hosts so metadata can remain static. Supabase accepts optional game submissions. Imgflip supplies meme templates and creates captioned meme images. Microlink fetches link-preview metadata for the saved-link interface. Disqus supplies the embedded feedback surface.

## State ownership and generation

The branch modules under `src/game/branches/` define the story graph. `react-visual-novel` owns the active branch, focused statement, asset preload lifecycle, and progression controls. `MyGame` binds the prepared branch set, source-controlled assets, sound callbacks, home navigation, and external-link interception into that runtime.

Jotai's storage-backed `@App/savedLinks` atom owns saved external reading in browser storage. The meme draft atoms retain template selection and preview URLs under their existing browser-storage keys. The active external-link prompt is transient React state. Submission forms own their input and in-flight state. Supabase owns accepted nomination, post, and meme-submission records after a successful insert.

`scripts/generate-barrels.ts` owns the generated export indexes listed in project `AGENTS.md` and retains explicit TypeScript file extensions in their exports. `src/assets/game/index.ts` is a source-maintained asset entry point. The root layout imports `src/styles/globals.css`, which Next.js compiles through the Tailwind 4 PostCSS plugin. The approved Supabase schema command reads the canonical exported `.env.local` snapshot and owns `src/__generated__/supabase.ts`. Generated artifacts remain consumers of their generators rather than independent edit targets.

`scripts/generate-audio.ts` copies retained MP3 sources into ignored, content-hashed public assets and writes the ignored URL exports in `src/__generated__/audio.ts`. The sound index preserves its existing export names. Generation runs before development, builds, and checks. Audio URLs have immutable cache headers because a byte change produces a new URL.

## Interfaces and data flow

The website routes exchange navigation through Next.js links and the router. `react-visual-novel` owns native history updates for the `location` parameter and subscribes to browser Back/Forward navigation. Next.js synchronizes those updates with its search-parameter state. Story progression does not request server route data. The game imports every generated branch export, prepares the graph, and starts at `Intro`. External HTTP links opened inside the story stop at `LinkPrompt`, where the player chooses immediate navigation or local retention.

`src/config/env.ts` validates public Supabase configuration and optional server-only Imgflip credentials. `getSupabase()` creates one browser client from the public Supabase URL and anonymous key. Submission commands validate their form data, write to the matching table, and advance only after a successful insert. Returned Supabase errors follow the form failure path. Meme creation reads public templates from Imgflip, then sends the selected template and captions to `POST /api/meme-captions` before an optional Supabase record write. The handler validates input and decodes the provider response. The browser decodes the returned image URL.

## Trust, privacy, and failure boundaries

All game branches, editorial copy, assets, and built-in destinations are repository-controlled inputs. Saved links remain in the visitor's browser. Imgflip username/password authentication stays on the server through `IMGFLIP_USERNAME` and `IMGFLIP_PASSWORD` until a separately approved credential rotation. Missing server credentials return an unavailable response without preventing editorial reading or play. Previously exposed credentials require rotation at their provider owner. Optional forms can send visitor-entered text, names, selected meme data, and generated image URLs to external services. Source and provider policy own the exact accepted fields, authorization, retention, and access rules.

Captioning remains an anonymous participation capability with no player account or private resource. The handler rejects cross-origin browser requests, caps and validates JSON bodies, applies a provider timeout, and returns only a validated Imgflip image URL or a fixed error contract. Origin checks do not authenticate arbitrary HTTP clients. A per-instance request and concurrency budget bounds account usage without retaining visitor identifiers. This budget is not a shared limit across server instances. Provider errors and submission diagnostics exclude credentials, caption text, names, and response bodies.

Supabase and Imgflip are separate failure boundaries. A provider response or thrown request can stop an optional action. Meme template-loading failure exposes an error and the authored skip action. Caption and save failures preserve the current form for retry. The meme form owns pending work across captioning, preview, Back, and saving. Disconnecting it aborts the caption request and suppresses stale preview persistence and story advance. Cancellation does not undo an external write that a provider already accepted. Form owners must keep in-flight controls from producing duplicate intent and must show a failure without advancing as though the write succeeded. The visual-novel loader distinguishes progress, success, and asset failure. App Router error boundaries expose retry controls for render failures. The root fallback is independent of the editorial shell and font styles.

## Compatibility and delivery

The Russian-only URLs, game `location` query parameter, browser-storage keys, branch export names, generated Supabase types, and provider table names are compatibility boundaries. Changing one requires its callers or generated consumers to move in the same coherent change. A source change that adds, removes, or renames an exported branch or command must regenerate the barrel indexes before verification.

The repository build generates audio, barrels, and Next.js route declarations before invoking the default Turbopack build. PostCSS compiles styles within the Next.js development and build pipelines. Generated public audio copies are ignored and rebuilt from retained MP3 sources. Deployment and provider mutation remain separate transitions. The exact hosting project and environment values stay with provider configuration and local environment owners.

## Implementation owners

- `next.config.ts` owns Cache Components, partial prefetching, asset caching, and former locale redirects.
- `src/app/` and `src/components/` own website routing and editorial composition. The small shared component family stays flat, and the game has its own source owner.
- `src/components/ui/` owns React Aria action variants, text field styles, navigation disclosure, and render-prop class merging. Native forms and Zorm retain validation and submission ownership. `src/components/Dialog.tsx` owns the React Aria modal, dismissal, focus containment, and Motion transitions. `Reveal`, `Annotate`, and `LinkCard` render their own DOM elements and refs.
- `src/lib/routes.ts` owns internal URL construction, and `src/components/Link.tsx` owns the framework link handoff and keyboard focus outline. `src/components/Image.tsx` owns local-image loading, preserves the empty-placeholder presentation, and accepts rendered widths from callers.
- `src/config/env.ts` owns environment validation.
- `src/config/website.ts` owns website identity. `src/lib/metadata.ts` owns static metadata, and `src/proxy.ts` owns the host indexing boundary.
- `src/game/branches/`, `src/game/commands/`, and `src/game/MyGame.tsx` own the playable graph and runtime binding.
- `src/api/supabase.ts` and `src/__generated__/supabase.ts` own the Supabase client boundary and generated schema types.
- `src/app/api/meme-captions/route.ts` owns anonymous caption requests, server authentication to Imgflip, account-use limits, and response projection. `src/lib/meme-caption.ts` owns its browser/server schemas. `src/game/submission-error.ts` owns safe submission diagnostics.
- `src/components/ProseView.tsx` and its CSS module own shared editorial reading styles and compact and inverted variants. Paper cards retain article semantics through `ProseArticle`. `RoughCard` draws its background directly through Rough.js and removes the drawing when its effect disconnects. `src/lib/use-element-rect.ts` owns effect-scoped, frame-coalesced ResizeObserver subscriptions for paper cards, the game viewport, and the intro image. `src/game/meme-draft.ts` owns the persisted meme draft atoms and validates stored values on reads and storage events.
- `src/styles/globals.css` owns Tailwind theme variables, story-runtime source detection, and shared control states. The React Aria Tailwind plugin supplies control state variants. Components own their layout utilities and field styles. `postcss.config.mjs` connects Tailwind to Next.js. `prettier.config.ts` uses that stylesheet to sort classes. [UI design](ui-design.md) owns recurring visual and interaction grammar.
- `package.json` and the generation scripts own generation and verification commands. `pnpm-workspace.yaml` forces the game and its commands to share Motion controls and supplies Disqus’s missing runtime dependency. The story runtime supplies React 19-compatible declarations, native gap spacing, and effect-scoped measurement subscriptions without local compatibility patches. Application components use native browser subscriptions and Jotai storage. Strict Mode remains enabled, and ResizeObserver subscriptions retain their effect cleanup.
- `fnox.toml` owns local environment recovery mappings. [Local setup](runbooks/local-setup.md) owns the procedure.

## Work routing

Update this document when routes, system boundaries, state ownership, generated-consumer relationships, provider interfaces, trust boundaries, compatibility, failure behavior, or delivery topology change. Update [Product](product.md) or [Visual novel](specs/visual-novel.md) for accepted outcomes, and update [UI design](ui-design.md) for recurring visual or interaction grammar.
