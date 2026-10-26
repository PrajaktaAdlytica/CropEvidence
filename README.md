# CropEvidence

Premium agronomy concept website with a cinematic intro, responsive product pages and isolated synthetic demo.

## Deployment

- **Source:** `main` branch.
- **Hostinger PHP/HTML:** connect the prebuilt `hostinger` branch to `public_html`. No Node.js web-app slot or PHP rewrite is required.
- **Instructions:** [Hostinger setup guide](HOSTINGER-DEPLOYMENT.md).
- **Manual upload:** download the hosting ZIP from [Releases](https://github.com/PrajaktaAdlytica/CropEvidence/releases).
- **Design files:** `design-archive/` includes the brand kit, logo explorations, reference imagery and website blueprint.

GitHub Actions builds/tests changes to `main` and updates `hostinger`. Only compiled public files go to the hosting branch; source, QA, design originals and dependencies are not served.

---

# CropEvidence — Seasonal Collage pages

Local preview: http://127.0.0.1:4173/
Field Review: http://127.0.0.1:4173/products/field-review

The approved Terrain Theatre homepage is preserved, with original drifting cloud artwork behind its evidence chapter. The approved Seasonal Collage direction now extends across the dedicated product and editorial pages: large left-aligned serif, angled aerial, handwritten source notes, pastel chapters, botanical cutout and olive reviewer-packet ending. Utility pages use the same typography, palette and paper surfaces with layouts suited to forms, reading and workbench tasks.

## Implemented scope

32 main routes including the homepage, five product detail pages, product index, platform, features, buyer solutions, evaluation, scorecard, integrations/permissions, pricing, resources, company, trust, enquiry, access and legal pages. The isolated demo adds ten case URLs, report views, a pilot checklist and a recovery screen. Navigation and the grouped footer use real route links.

Each product has its own interactive artifact: Field Desk source filtering; Field Review fictional zones and explanations; Field Proof dated timing states; Field Signal a local manifest check with permanently disabled equipment export; Field Report an explicitly unobserved outcome ledger. Pricing preserves all five separate hypotheses and carries the selected offer into the pilot form.

The demo includes ten internally consistent synthetic cases, state/search filters, source evidence, a reason-required reviewer decision, tab-session persistence, a labeled downloadable evidence packet and an illustrative pilot checklist. The source geometry uses original synthetic display coordinates over generated aerial imagery; it has no geographic projection and cannot control equipment.

The navbar stays visible above every page while scrolling. Paper notes, quote cards and card hover imagery are straight. Homepage chapters use reversible scroll-linked GSAP sequences: text and cards enter, hold at full visibility for reading, then leave, following the same path back when scrolling up. Field layers and review artifacts have restrained depth movement. Lenis uses a 1.2-second smoothing duration and offsets anchor navigation below the header.

Homepage clouds have a pause/resume button, stop offscreen or in a hidden document, and stay still under the system or site reduced-motion setting. Lenis/GSAP reveals respect those motion settings. Responsive navigation has a scrollable mobile menu.

## Boundaries

This is a local frontend concept, not a live agronomy service or deployed site. Enquiry forms prepare downloadable local drafts; nothing is submitted. Production authentication, live records, analytics, email delivery, payments and equipment connections are not connected. All case identities and records are fictional. Every price is a test hypothesis. No yield, savings, customer traction or certification is claimed. Social profile buttons remain visibly unverified.

## Project structure

- `src/App.jsx`: homepage, shared motion, route entry and local draft forms.
- `src/HomepageSections.jsx`: expanded homepage, navigation, footer and reading content.
- `src/Pages.jsx`, `src/pageData.js`: dedicated page layouts and route-specific content.
- `src/DemoPages.jsx`: synthetic queue, case, report and pilot views.
- `src/FieldZones.jsx`: original fictional zone data and accessible map overlay.
- `src/Clouds.jsx`: motion lifecycle and pause control.
- `src/pages.css`, `src/layout.css`, `src/styles.css`: responsive visual system.
- `public/assets`, `asset-originals`: optimized art and retained originals.
- `public/brand`, favicons: approved Evidence Layers identity.
- `asset-prompts-inner-pages.md`: new artwork provenance and prompts.
- `route-coverage.md`, `design-qa.md`, `qa/`: route inventory and real browser evidence.

## Development and verification

`npm run dev -- --port 4173` starts the local preview. The preview was started and verified during this task.

`npm run build` creates the static client and preserved Sites adapter. `npm run test:sites` runs four packaging/routing checks. On a clean independent checkout use `npm ci` first. The current machine uses matching dependency symlinks to previously installed packages after the earlier disk-space issue; do not distribute those symlinks. No source in that other project was changed.

Reference artwork: `../design-v2/homepage-original-master.png` and `../design-v2/inner-pages-original-master.png`. Content architecture: `../CropEvidence-Website-Blueprint.md`. The reference's bottom “scroll choreography” strip is a design annotation, not a customer-facing page section.

## Cloud backgrounds

The approved cloud-bank artwork now drifts behind blue and pink homepage sections and the matching Seasonal Collage chapters on separate pages. Each section has an independent pause control, offscreen pausing, reduced-motion support and mobile-specific cloud sizing. Styles live in `src/clouds.css`.

## Through the Clouds intro

The homepage now opens with the selected cloud-and-field sequence above the original hero. This is a live GSAP cinematic scene with separate photographic layers, rather than an encoded MP4. It runs for 10.5 seconds, then moves to the hero over 1.65 seconds through the existing Lenis instance; the navbar appears as the hero enters. Pause, replay and skip are real controls. Manual wheel, touch scrolling or scroll keys cancel the automatic transition. Hidden tabs pause playback. Deep links into the homepage bypass autoplay.

Reduced motion uses a seven-second opacity-only sequence and a direct jump into the hero. `src/IntroScene.jsx` owns playback and interruption; `src/intro.css` owns composition and navbar reveal. The generated countryside asset is stored in `public/assets/intro-countryside.webp`, with the original retained in `asset-originals/`. Existing approved field, map, clouds and logo assets are reused. No third-party video services or audio are used.
