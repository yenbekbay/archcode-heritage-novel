# UI design

This document owns the product's recurring visual and interaction grammar across the editorial website and visual novel. Exact classes, CSS theme variables, component APIs, assets, and motion values remain in `src/main.css`, `src/components/`, and `src/game/`.

| Decision | Read |
| --- | --- |
| Product purpose, participation, or shared behavior | [Product](product.md) |
| Runtime ownership, providers, or generated artifacts | [Architecture](architecture.md) |
| Visual-novel behavior, progression, or states | [Visual novel](specs/visual-novel.md) |
| Recurring editorial and game presentation | This document |

## Direction and vocabulary

The editorial website combines civic-poster directness with hand-made archival material. Dark photographic fields, torn-paper dividers, rough paper cards, annotated prose, documentary images, and large calls to action make the heritage argument feel assembled and contested rather than institutional.

The visual novel uses illustrated scenes, character sprites, calligraphic story text, sound, and choice controls. Its chrome resembles a self-contained mobile game while retaining the project's paper, ink, red-accent, and shadow vocabulary.

## Editorial composition

`Layout` provides the header, page content, and footer. Editorial routes place a large hero over an image field, followed by paper-like content surfaces. `FenceSection` and rough-rendered cards separate long arguments and supporting material. Reveal and parallax behavior add depth without changing reading order.

The wide header exposes the full navigation. Narrow layouts collapse it into a labeled React Aria navigation popover that closes on selection, outside interaction, or Escape. Primary play actions use the inverted button treatment. Current navigation uses a stronger filled state than ordinary links. Editorial actions and story controls share keyboard focus, pressed, and disabled treatments through the stylesheet's control utilities.

## Type, color, and material

IBM Plex Mono carries editorial body text and interface labels. The calligraphic face carries story dialogue, game labels, and title moments. `ProseView` owns editorial heading hierarchy, paragraph and list rhythm, compact disclosures, quotations, and inverted reading colors. Near-black fields and warm paper surfaces form the main contrast. Red marks titles and high-attention moments. Rough borders, physical shadows, torn edges, stamps, and drawn annotations establish the hand-made material system.

Photography and illustrations remain attached to their narrative context. Screenshot carousels preserve a visible continuation cue and direct dragging. Credits, disclosures, and source context use smaller prose without losing their relationship to the qualified content.

## Game interaction

The game occupies a viewport-bound surface that scales its scenes and controls together. Story statements sequence text, character images, backgrounds, and audio. Choice buttons must remain distinct from passive dialogue. Loading exposes both a label and progress control. Asset failure replaces the game with a readable error state.

External story links open a named React Aria confirmation dialog. The dialog shows the destination preview and separates immediate reading from saving for later. Escape, the backdrop, and the close action dismiss it. Focus remains inside the open dialog and returns after dismissal. React Aria buttons expose disabled, keyboard focus, and press states. Optional forms expose labels, submission progress, failure feedback, and the branch action that continues play.

Text inputs and textareas use explicit white surfaces, borders, padding, and keyboard focus outlines. Zorm errors set the invalid state and link each field to its visible error message. Validation and submission continue through the native form.

## Motion and sound

Motion supports reveals, scene progression, dialog presence, and game-state transitions. It must preserve the current reading or choice state during interruption. Pointer hover and selection can trigger short interface sounds. Scene audio belongs to the active story context and must stop or transition with that context.

## Responsive and accessibility behavior

Preserve the existing card proportions, portrait sizing, reveal timing, annotation treatment, parallax backgrounds, dialog transitions, and game controls during framework changes. The shared image component keeps retained dimensions and the existing empty-placeholder presentation. Responsive widths are declared when the layout fixes them. Editorial content keeps a coherent source order as the hero, cards, and navigation change layout. Controls require accessible names and keyboard-operable semantics. Dialog focus and dismissal remain within the shared dialog primitive. Text cannot rely on an image or sound alone to communicate the next required action. The Russian-only product keeps its interface language consistent across website and game surfaces.

## Exceptions

The visual novel may use denser, scene-owned colors and image-positioned text than the editorial website because the game viewport is a distinct interaction surface. Provider-supplied embeds and previews may retain their own internal presentation inside a repository-owned boundary.

## Maintenance

Update this document in the same commit when recurring layout, typography, color, material, navigation, game-control, motion, sound, responsive, accessibility, or approved-exception grammar changes. Keep exact implementation at its source owner and accepted game behavior in [Visual novel](specs/visual-novel.md).
