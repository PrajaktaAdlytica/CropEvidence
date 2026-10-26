# CropEvidence — inner-page and cloud QA

Date: 26 October 2026. Local frontend concept scope.

**Final result: passed** for the implemented route, responsive-layout and interaction checks below. This is not a production-service, accessibility-certification or agronomic-validation claim.

## Visual comparison

Reference: `../design-v2/inner-pages-original-master.png` (approved Seasonal Collage). Actual comparison: `qa/seasonal-collage-comparison.jpg`. Final desktop: `qa/field-review-desktop.png`; opening: `qa/field-review-hero.png`; mobile: `qa/field-review-mobile.png`.

- Preserved oversized left serif, three-line Field Review thesis, angled aerial field, orange handwritten note, pink sample note, blue timing note and botanical foreground. Original fictional zone boundaries restore the field-map reading; these are a rendered data layer over generated aerial artwork, not a fabricated screenshot of a working integration.
- Preserved blue numbered source chapter, pink conflict chapter, cream offer suite and olive evidence-packet ending. Added the actual interactive module, quote scope, FAQs and complete footer required by the broader IA.
- Retained approved logo, local serif/body typography, olive/cream/pastel palette and Phosphor icons. Used Caveat for the handwritten notes, with license retained.
- Increased gutters and chapter spacing to meet the user's explicit spacing/grid correction. The implementation is a responsive interpretation with original assets and live DOM content, not a flattened mock image or a claim of pixel identity.
- Checked image crop, alpha edges, note contrast, heading wrap, card gaps, section alignment, source readability and footer structure. Desktop full-page review showed all sections and loaded assets.

## Findings fixed during QA

1. Field Review headline wrapped differently from the reference: restored intentional three lines.
2. Mobile sample note covered the orange/blue note copy: rearranged into a two-column paper group plus a separate sample note, preserving visible text.
3. Tablet notes clipped against the right edge: narrowed and repositioned the 901–1200 px note composition.
4. Long desktop headlines collided with the note: constrained the text column and adjusted display size.
5. Two 320 px source-card headings clipped: reduced their narrow-screen size to 25 px and rechecked both routes.
6. Reading pages lacked a primary heading and the embedded packet duplicated it: now one h1 per page.
7. Cross-route homepage hash links landed before React content existed: added an initial fragment scroll after mount.
8. Aerial image lacked the requested field/zone depiction: added original fictional A/B/C polygons, accessible labels and selected-zone styling. Demo overlay height matches its raster at each breakpoint.
9. Contact/demo inquiry headings reused pilot language: added purpose-specific headings, submit labels and optional operator/data-owner details for those enquiries.

## Viewports and routes

- 35 route/state URLs at 1440 px and 390 px: 70 structural checks, all with one h1, footer, no detected loaded-image failures and no page-width overflow. Evidence: `qa/routes-smoke.json`.
- Additional 320 px checks across all five products, evaluation, company, enquiry and demo; no remaining heading/page overflow after correction. Evidence: `qa/narrow-smoke.json`.
- Field Review visually checked at 1440, 1024, 768 and 390 px; homepage cloud chapter checked at 1440 and the user's 556 px viewport.
- Main routes are listed in `route-coverage.md`. Shared case template supports ten fixture IDs plus report views; the first case and report were exercised end to end. Structural route coverage is broader than full screenshot-by-screenshot visual inspection.

## Interactions verified in the browser

- Mobile navigation opens and scrolls; product submenu routes to Field Review. Shared footer links are real routes. Back-to-top works.
- Field Review zone selection changes the highlighted polygon and its corresponding explanation. Proposed rates remain withheld.
- Field Desk “Needs review” filters the register; Field Proof source-expiry state changes its dated next action; Field Signal manifest check updates local status while equipment export stays disabled.
- Features filters return the selected module's capabilities; equipment-format selection changes the data-permission assessment.
- Pricing selection carries Field Proof into the pilot form. Required-field/consent form test with invented data prepares a local draft and explicitly reports that nothing was sent. Contact and guided-demo buttons use their own labels.
- Demo query with no matches shows an empty state; resetting and selecting Blocked returns two of ten seed cases.
- Rejecting without a reason shows an error. Review remains disabled until all simulated checks are selected. Recorded review survives reload. Equipment export remains disabled after review.
- Downloaded JSON retains synthetic labeling, reviewer reason, source methods/dates, withheld rates, original display-only zone coordinates and no-control boundary. Validated local file: `qa/downloaded-synthetic-packet.json`.
- Reset the QA demo changes through the public reset control; initial Pending review fixtures restored.
- Cloud transforms advance while running. Pause sets both CSS animation states to paused; Resume restarts. Reduced-motion mode leaves the background static. Offscreen/document visibility handling is implemented in `Clouds.jsx`.
- Lenis/GSAP hero animation settles to readable opacity 1 and the intended note transforms. Browser error/warning log was empty at the final review checkpoint.

## Build verification

`npm run build`: passed; 44 modules, static client plus preserved Sites server/config output.
`npm run test:sites`: all four checks passed (asset serving, SPA fallback, missing API/write behavior and packaging).

## Limits and remaining activation work

Frontend only, local URL. No deployment, domain connection, live authentication, analytics, contact delivery, payments, production field records or equipment integrations. Real buyer validation, agronomic/legal review, consent, paid SOW and publication decisions remain future work. Pricing is explicitly hypothetical, social profiles unverified, results unobserved. Reduced motion is tested via the site setting; this is not a complete assistive-technology/conformance audit.

## Follow-up: straight cards and bidirectional scrolling

- Removed CSS rotation from paper notes/slips, quote and enquiry cards, intro folios, review stamp and added decorative card-art transforms. Preserved the approved field scene and botanical artwork. All seven Field Review note/slip/scope containers were measured as identity matrices after animation settled.
- Moved the single shared navbar out of the clipped hero into a page-level sticky header, with a readable scrolled surface, dropdown stacking and responsive heights. Preserved the 950 px desktop hero composition with an offset header slot.
- Replaced homepage once-only reveals with 64 independent text/card/label targets. Timelines hold a fully readable middle state and reverse with scrolling, including direction-dependent vertical/sideways arrivals. No pinned scrolling or horizontal scroll hijacking was added.
- Header top remained 0 at scroll positions 600, 1300 and 600 again. Evidence heading opacity was 1 → 0.08 (outside the viewport) → 1 on the return journey. Evidence: `qa/scroll-replay-check.json`.
- Added restrained hero-layer separation and evidence/reviewer/pilot artwork depth; no rotation is introduced to the card containers by the new motion.
- Tested the sticky desktop product menu and mobile navigation; Escape closes the mobile menu. At 390 px the section anchor landed below the 80 px header without horizontal overflow.
- Reduced-motion toggle removes the Lenis class and all 64 scroll-reveal markers, restoring heading opacity 1 and transform none. Header remains sticky. Restored the user's animated preview after testing.
- Browser warning/error log was empty. `npm run build` passed (46 modules); all four `npm run test:sites` checks passed.
- Evidence: `qa/straight-cards-desktop.png`, `qa/straight-cards-mobile.png`, `qa/homepage-sticky-scroll.png`.

## Follow-up: blue and pink cloud backgrounds

- Extended the original cloud-bank artwork to homepage evidence, human review, evaluation and resources sections, plus shared blue source-context and pink conflict/working-method chapters on separate pages.
- Kept backgrounds behind content, feathered image edges and adjusted cloud sizing for tall mobile sections. No horizontal overflow at 390 px.
- Verified per-section pause/resume, offscreen pausing and reduced motion; restored animated preview after checking.
- Desktop and mobile visual evidence: `qa/clouds-pink-review.png`, `qa/clouds-blue-resources.png`, `qa/clouds-mobile.png`.
- Final build passed (47 modules); all four Sites routing/packaging checks passed.

## Through the Clouds intro — 26 October 2026

Source visual truth: `qa/intro-reference/through-the-clouds-storyboard.png` (first displayed ideation result, 1536 × 1024). The dominant cinematic keyframe is x18–1518/y65–620; the lower storyboard panels describe timing, not customer-facing sections.

Implementation: `qa/intro-desktop.png` at 1440 × 900 CSS pixels, and `qa/intro-mobile.png` at 390 × 844. Screenshots captured at 1×. State: field and evidence layers revealed, intro revisited after completion, navbar hidden. `qa/intro-comparison.jpg` places the source keyframe and desktop capture together, fitted to the same 780 px comparison width without stretching; source board margins are excluded. Final viewport adapts the keyframe to full viewport height.

Fidelity surfaces:
- Typography: retained existing brand serif/sans and approved headline, large left-aligned two-line treatment. Added only small brand/disclosure, chapter and playback labels.
- Spacing/layout: dominant field to the right, layered clouds framing an open left headline, controls below. Mobile stacks headline above field with reachable 44 px controls. No horizontal overflow.
- Colors: pale blue, warm ivory, olive and pastel evidence layers retained. Backdrop opacity reduced for readable dark text.
- Images: new original countryside background (1672 × 941) matches the approved landscape; existing transparent field, map and cloud assets retain continuity into the hero. The reference's composite landscape is recreated as independently animated layers, not a pasted screenshot.
- Content: no yield promises, integration claims or customer data; concept/simulated label visible. No navigation links in intro.

Comparison history:
- P2: initial heading could inherit generic section sizing after CSS reload. Moved intro stylesheet after global styles and scoped heading specificity; final desktop capture confirms display sizing.
- P2: supporting sentence crossed busy terrain; removed it to match the chosen headline-only keyframe and lightened background.
- P2: mobile terrain extended too far outside frame; reduced width from 122% to 106%. Final mobile capture retains the field and both evidence layers.

Interaction checks: normal playback reaches hero top 0 with navbar top 0; paused progress remains unchanged; Skip reaches the hero and focuses its H1; reduced motion shows no landscape/field transforms and arrives directly at hero; direct #offers link remains there with navbar visible; manual scrolling pauses playback. Browser warning/error log empty. Final production build and four Sites adapter checks pass.

Expected adaptation: this is a live animated introduction, not an exported video file. Original site assets replace the storyboard's inseparable field composite to allow independent layer motion. No substantive P0/P1/P2 findings remain. The full-view pair makes headline, spacing, scene and controls readable; focused DOM checks cover navigation visibility, focus, progress and dimensions.

final result: passed

## Final responsive QA

Completed 78 viewport/route layout checks across32 routes and visually inspected representative intro, product, card, form, demo and footer flows. Fixed hero anchor offsets, entering-navbar menu height, landscape intro control placement, phone input typography, stacked pilot steps and keyboard-accessible table scrolling. Full evidence and limitations: `qa/responsive-final/report.md`.

final result: passed
