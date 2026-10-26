# CropEvidence homepage correction — QA, 26 October 2026

## Scope

This report supersedes the earlier four-section homepage acceptance. The previous implementation was incomplete against the homepage IA, had a sparse footer and insufficient grid/spacing structure. It should not have been described as the complete homepage.

The correction retains the approved opening visual sequence, restores nine further buyer-facing chapters and replaces the compact footer with a five-column directory. It does not mark the complete multi-page site finished.

## Actual visual evidence

- `qa/homepage-full-1440-v2.png`: complete desktop browser capture at 1440 × 1000 CSS viewport, with all images loaded, dialogs closed and motion reduced for static inspection.
- `qa/homepage-full-390-v2.png`: final mobile browser capture at 390 × 844, including rechecked small-screen evidence annotation spacing.
- `qa/homepage-full-556-v2.png`: intermediate-width browser capture, the width at which the prior hero/navigation collided.
- `qa/homepage-contact-sheet-v2.jpg`: labeled crops from the desktop screenshot, not generated UI.
- `qa/opening-comparison-v2.jpg`: approved reference beside actual implementation. The comparison preserves composition/art direction while intentionally increasing spacing.
- `qa/footer-1440-v2.png`: actual desktop footer crop.

## Layout changes and verification

- Shared 1280 px main content grid, responsive 20–72 px side gutters and 72–112 px chapter padding.
- Primary card groups use 24–32 px desktop gaps; card padding, internal hierarchy and responsive rows are explicit.
- Five offer cards remain one desktop row at 1440 px; tablet and phone layouts reflow deliberately.
- Hero action buttons, floating cards and navigation no longer collide at 556 px. Mobile navigation is introduced before desktop links become crowded.
- Footer has complete link groups, legal/concept/accessibility entries, a motion setting and verified-status disclosure for inactive social profiles.
- No horizontal overflow or out-of-viewport headings/paragraphs found at 390, 556, 768 and 1440 px. Native screenshots inspected at all four widths.
- All rendered image sources loaded; no broken images. Fine layer labels were moved away from the mobile field graphic.
- Opening reference and updated desktop opening compared side by side. Generated parcel/paper geometry differs from the source; the approved brand assets replace the concept mark. This is not a pixel-identical claim.

## Functional browser checks

- Desktop Products menu opens; Escape closes it and returns focus to its trigger. Mobile menu opens and closes on navigation.
- All internal anchor targets exist and no duplicate IDs were found.
- Four platform controls change the visible source/conflict/draft/reviewer content. Draft state shows three withheld rates.
- Selecting Field Signal in pricing updates the selected scope and opens the enquiry with Field Signal selected.
- Protocol, workspace-access, concept-terms and accessibility panels open and close.
- FAQ expands and collapses with its answer visible.
- Footer reviewer-packet action opens the Packet view, with the download control available.
- Demo equipment export remains disabled in the tested reviewer state. Earlier sign-off/packet/form-download regression evidence remains in `qa/` from the previous pass; it is not described as newly rerun here.
- Browser-local reduced-motion toggle works; essential content remains present. OS preference integration is code-reviewed, not represented as OS-emulated.
- Console inspected after the tested journeys: no errors or warnings.
- Production build succeeds and all four existing adapter tests pass.

## Remaining site work

Dedicated product, platform, company and evaluation routes, connected enquiry delivery, analytics, authentication, deployment and domain verification remain outstanding. Current navigation resolves to homepage sections and functional panels. Social profiles are inactive until verified; no placeholders impersonate real accounts.

No formal accessibility audit or agronomic validation is claimed. The local concept preserves its synthetic-data and no-equipment-control boundary.
