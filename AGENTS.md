# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## User correction — 26 October 2026

The four-section visual reference is an art-direction opening, not the complete homepage IA. Restore the full buyer narrative and all homepage content from the Website Blueprint. Preserve the opening sequence, then add the missing workflow/platform, responsibilities, use cases, evaluation/scorecard, boundaries, price entry, resources/FAQ, final pilot CTA and complete grouped footer. Use an explicit shared content grid, generous section spacing, aligned headings, and visibly separated cards. Do not claim completeness based only on visual resemblance to the four-panel reference. Do not mark missing content as out of scope without user agreement.

## Inner-page phase — 26 October 2026
User approved building Field Review and all separate pages in the Seasonal Collage direction. Preserve oversized left serif, angled aerial photo, paper source/sample/weather notes, botanical cutout, blue source chapter, blush exception, cream suite and dark olive packet ending. Use actual routes throughout navigation/footer. Add gently moving original cloud imagery behind homepage evidence, with pause/offscreen/reduced-motion behavior. Keep simulated records, pricing hypotheses and no-control boundaries.

## Scroll and alignment correction — 26 October 2026
Straighten the paper cards/notes and quote cards across the site. Keep the navbar visible while scrolling down and back up, outside the clipped hero. Homepage motion must respond to both scroll directions, with staggered card/text arrivals and restrained field-layer movement. Preserve native navigation, working controls, readable resting states and the reduced-motion option.

## Cloud-backdrop extension — 26 October 2026
The user likes the evidence-section clouds and requested the same treatment across blue and pink sections. Use the approved original cloud-bank asset behind homepage evidence, human review, evaluation and resources, and the separate-page source, conflict and working-method chapters. Keep it behind content, with section-specific pause controls, offscreen suspension and reduced-motion still states.

## Offer grid correction — 26 October 2026
Arrange the five homepage offers as two spacious cards followed by three on desktop. Do not return to five cramped columns. Use two columns on tablet and one readable column on mobile, preserving all five modules, illustrations and interactions.

## Intro direction — 26 October 2026
User selected the first displayed intro storyboard, Through the Clouds (exec-452873a2-29b8-48b6-aa08-b349498d552d.png). Add a cinematic full-viewport cloud/field introduction above the existing hero; show no navigation during the intro, then smoothly scroll into the hero and reveal the navbar. Keep Pause/Skip, manual-scroll interruption and a gentle reduced-motion sequence. Preserve the existing homepage and all routes.
