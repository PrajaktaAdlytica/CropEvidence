# Final responsive QA — CropEvidence

Result: passed for the tested browser viewports.

Scope: 78 layout measurements across all 32 named routes. Homepage widths: 320, 390, 556, 768, 1024 and 1440 px. Representative product, evaluation, pricing, pilot, demo and sign-in templates additionally checked at 320, 768 and 1440 px. Remaining named routes checked at 390 and 1440 px. Phone landscape: 844 × 390. Detailed matrix: layout-matrix.json.

## Journey and findings

1. Intro and hero — passed. Narrow portrait scene remains readable. Fixed landscape intro min-height so Pause/Skip now end at y372 in a 390px viewport. Removed duplicate anchor offsets and global scroll padding; hero and navbar both now land at y0. Evidence: 01-intro-320.png, 05-intro-landscape.png.
2. Navigation — passed. Expand/collapse and Escape work. Fixed available menu height so a navbar entering the viewport partway through intro scrolling cannot place menu controls below the viewport. Measured menu bottom y824 at viewport height844, with internal scrolling.
3. Homepage and product layouts — passed. No page-wide horizontal overflow or clipped text found in tested layouts. Five offers remain one column on phones, two on tablet and two-plus-three on desktop. Product collage headings wrap correctly. Evidence: 02-product-320.png, 06-offers-tablet.png, 07-pricing-desktop.png.
4. Forms — passed. Phone form inputs are now 16px and at least48px high. Pilot protocol steps stack into one column with13px copy rather than three cramped columns. Evidence: 08-form-fixed-390.png; 03-form-320.png records pre-fix inputs.
5. Demo and scorecards — passed. Wide tables intentionally scroll within their own containers. Added scroll hints, named keyboard-focusable regions and focus outlines. ArrowRight moved the demo table scrollLeft to40 while page overflow stayed0. Reviewer tab opens and retains the disabled equipment boundary. Evidence: 04-demo-review-320.png.
6. Footer and separate routes — passed in sampled layouts. Footer groups remain in readable mobile columns. No missing images or text overflow found in additional route measurements.

## Verification

- Final production build passes; all four existing Sites adapter tests pass.
- No browser warnings/errors observed in this run.
- Motion preference restored to normal/system after reduced-motion layout checks.
- No data submitted, payment attempted, deployment performed or real field records used.

## Limits

This is desktop browser viewport simulation, not physical iOS/Android or Safari testing. Phone keyboard behavior, touch ergonomics, screen-reader operation and full accessibility conformance need device/assistive-technology testing. Avoid claiming the checks certify production readiness or live service behavior.
