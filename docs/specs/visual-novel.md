# Visual novel

The visual novel lets a player examine architectural-heritage conflicts through four roles whose decisions change the story outcome. This specification owns the capability outcome, playable states, optional participation actions, and acceptance boundary. [Product](../product.md) owns the whole-product purpose, [Architecture](../architecture.md) owns runtime and provider boundaries, and source owns exact dialogue and branch wiring.

## Entry and roles

The play route loads the complete game asset set before starting the story at the `Intro` branch. The introduction identifies the fictional setting and asks the player to choose Активист, АрхКот, Девелопер, or Аким. Each role must lead to its own authored branch family and preserve the differences in agency that the editorial product explains.

## Story progression

A branch sequences backgrounds, character images, dialogue, sound, timed statements, commands, and player choices. A choice advances within the branch or names another branch destination. The runtime must present one current statement or choice state and must not claim a later outcome before the associated command completes.

Game completion can return the player home, open the saved-links surface, or open feedback when the ending provides those actions. The exact ending and branch text remain in `game/branches/` and `game/commands/`.

## External reading

An HTTP link selected inside the game pauses direct navigation and opens a destination prompt. The prompt identifies the link and offers two distinct outcomes: open it in a new browser context or save it in browser storage for later. Saving the same destination again must not create a duplicate saved-link entry.

The links route reads the stored collection. Saved links remain local to the browser and do not imply provider delivery or account synchronization.

## Optional participation

Authored branches may ask the player to submit a monument nomination, simulated social post, or meme. Text submissions require their main body and may accept a name. Meme creation lets the player choose an Imgflip template, enter caption text, preview the generated result, and optionally attach a name before saving the result.

Submission is an external write. The player action must start the write, keep the interface from accepting a second concurrent submission, and advance the story only after the expected provider operation resolves. A rejected write must expose a failure state and leave the player able to retry or use an explicitly authored skip path where one exists.

## Loading and failure

Before play, the capability exposes asset-loading progress. Asset failure replaces play with an error that identifies the load failure. The outer error boundary contains unexpected rendering failures. A provider failure remains local to the optional command and must not be reported as a successful nomination, post, meme, or story advance.

## Acceptance

The capability is acceptable when the asset set reaches a ready state, each offered role enters its branch family, choices advance to their declared destinations, timed and interactive statements remain operable, external links require the destination decision, saved destinations are deduplicated and retrievable, optional writes advance only after success, and loading or provider failures remain visible without a false outcome.

## Implementation owners

- `game/MyGame.tsx` owns game assembly, initial branch selection, loading states, external-link interception, sound binding, and home navigation.
- `game/branches/` owns exact story content and branch destinations.
- `game/commands/` owns optional participation flows and ending actions.
- `game/LinkPrompt.tsx` owns saved-link persistence and the external destination decision.
- `assets/game/` owns the source-controlled visual and audio set.
- `api/supabase.ts` and provider-facing code in `game/commands/SubmitMeme.tsx` own exact external requests.

## Maintenance

Update this specification in the same commit when playable roles, story-state semantics, branch progression, external-link handling, saved-link behavior, optional participation outcomes, loading, failure, acceptance, or their source owners change. Keep exact branches, fields, provider requests, and visual mechanics in source.
