# Product

«Снести нельзя оставить» is a Russian-language editorial website and interactive visual novel for people exploring Almaty architectural heritage and collective memory. This document owns the whole-product purpose, shared vocabulary, capabilities, states, and accepted outcomes.

## Purpose and audience

The product explains Archcode Almaty's heritage advocacy and lets visitors explore how residents, activists, developers, and public officials can affect the fate of city buildings. It is intended for Russian-speaking visitors who need an accessible introduction to architectural identity, preservation, and public participation.

The fictional city **Аталма** provides the novel's setting. The playable roles are **Активист**, **АрхКот**, **Девелопер**, and **Аким**. Their unequal influence and choices expose competing relationships to preservation, demolition, public process, and memory.

## Product surfaces

- The home page introduces the project and publishes its architectural-heritage manifesto.
- The visual-novel overview explains the format, characters, source experience, and educational purpose.
- The play route runs the branching story described in [Visual novel](specs/visual-novel.md).
- The Telegram-bot page explains and links to the separately operated bot.
- The team page identifies project participants and supporting organizations.
- The links page exposes reading saved during the game.
- The feedback page embeds the project discussion surface.

The shared header connects these surfaces, the Archcode website, and the primary play action. The product remains Russian-only unless an accepted localization change expands the audience contract.

## Editorial and participation outcomes

The editorial experience must connect the game's fictional choices to the project's stated concern: public access to heritage knowledge and participation in decisions about the built environment. Project acknowledgements, responsibility statements, credits, and source links remain attached to the content they qualify.

The novel may invite a player to save a reading link, submit a monument nomination, compose a simulated social post, or create and submit a meme. Submission actions are optional parts of a branch. A failed submission must expose an error state without presenting the write as successful.

## States and failure

The website supports editorial reading, game asset loading, active branching play, saved-link review, external-link confirmation, optional submission, game completion, route-not-found, and render-error states. The visual novel must expose asset-loading progress and an explicit loading failure. The outer website error boundary must contain unexpected render failures.

## Acceptance

The product is acceptable when a visitor can understand the project's heritage position, learn how the visual novel relates to that work, choose a playable role, progress through branch decisions, distinguish optional external or submission actions, revisit saved reading, reach project and team context, and recover from missing routes or visible loading failures without a false success claim.

## Specification map

- [Visual novel](specs/visual-novel.md) owns the playable story's roles, branching behavior, link retention, optional submissions, and game states.

## Maintenance

Update this document in the same commit when the product purpose, audience, Russian-only boundary, shared vocabulary, top-level surfaces, cross-capability behavior, participation outcome, whole-product states, acceptance, or specification boundary changes. Keep non-visual system design in [Architecture](architecture.md), recurring presentation grammar in [UI design](ui-design.md), and exact copy and branch content in source.
