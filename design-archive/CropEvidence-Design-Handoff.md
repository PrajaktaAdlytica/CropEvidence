> Superseded visual targets: use [Reference Lock v2](CropEvidence-Reference-Lock-v2.md) and the original supplied images. Earlier expanded layouts below are archived proposals. Business requirements remain applicable.

# CropEvidence — selected design system and page compositions

26 October 2026 · Design specification v1 · Concept preview

## 1. Decision and scope

Homepage: **Terrain Theatre**, the selected option 2. A floating crop field, exposed soil strata and separated evidence layers tell the story of a decision becoming explainable.

Separate marketing pages: **Seasonal Collage**, the selected option 3. Aerial field imagery, botanical cutouts, physical report fragments and pastel evidence cards explain a specific job.

These are two expressions of one brand: shared typography, color roles, navigation, buttons, card geometry, labels and interaction rules. CropEvidence replaces the historical working name Crop Waypoint throughout buyer-facing material.

This package contains a complete desktop homepage composition in two continuous parts, a representative Field Review product-page composition, mobile compositions of their key sections, a shared design system, and motion and asset specifications. It is a design handoff. The images are generated compositions, not browser captures of working software. Motion is specified, not implemented. The complete content architecture and business requirements remain in [the Website Blueprint](CropEvidence-Website-Blueprint.html). This package supersedes that document's earlier visual territory, typography and motion recommendations; it does not remove its required content.

**Canonical information takes precedence over raster mockup text.** Generated desktop illustrations contain approximate small text, including a future sample date, example field names/acreage and method labels. Do not transcribe these into implementation. Use section 8 below and the blueprint's evidence schema. Some lower-home illustrative copy sounds operational; replace it with the exact proposed-state copy in this document. Never use these images as evidence of an operating product.

## 2. Composition gallery

- [Homepage — opening chapters](design/homepage-opening.png)
- [Homepage — continuation and footer](design/homepage-continuation.png)
- [Field Review — desktop](design/field-review-desktop.png)
- [Mobile — key sections of both pages](design/mobile-key-sections.png)

Desktop compositions describe hierarchy and art direction, not fixed pixel-perfect final page heights. Mobile board shows the opening, conflict, offers and review/pilot sections; responsive behavior for all remaining sections is specified below.

## 3. Brand system

### Identity

Use CropEvidence as the single wordmark. Develop the selected contour-leaf symbol into one consistent original vector master before website implementation. The leaf's internal lines should suggest field boundaries and source layers, with an open silhouette at small sizes. Use the same master for the navbar, footer and favicon. The varied raster marks in the compositions are placeholders for that master, not separate logos. No trademark, domain or logo ownership claim is established by this package.

Wordmark: dark olive on ivory; ivory on dark olive. Clear space: half the symbol's height. Navbar symbol: 28–32 px; favicon: simplified silhouette at 16 and 32 px. No decorative leaf motifs inside essential status icons. Final logo SVG and favicon files remain an asset-production task.

### Palette and usage

| Token | Value | Role |
|---|---|---|
| Paper | #F7F4EA | Main background, quiet reading sections |
| Olive | #39472C | Body text, primary buttons, inverse sections |
| Matcha | #D5E1BC | Roles, field context, restrained support panels |
| Blush | #F1CCD6 | Source comparison and review chapters |
| Sky | #CCDFEC | Provenance, weather and explanatory layers |
| Apricot | #F3CEAD | Evaluation, timing and commercial prompts |
| Coral | #A8433C | Warning icon/line, never decorative yield indicator |
| Warning ink | #77342D | Warning text on pastel backgrounds |
| White | #FFFFFF | Raised evidence surfaces |
| Muted ink | #535C4B | Secondary copy on light surfaces |

Pastels are surfaces, not light-colored body text. Use olive for all body copy on pastels. Warning status combines an icon, explicit wording and a border; color is supplementary. Dark olive appears selectively, at the review boundary and final decision, to give the story contrast. Do not alternate colors mechanically; each surface belongs to its subject.

### Typography

Display direction: **Instrument Serif**, regular, with a licensed local font file verified before shipping. UI/body: **Manrope**, regular/medium/semibold; tabular numerals for measurements and prices. These replace the earlier blueprint's three-family direction. The generated letterforms approximate this pairing; the font files are the implementation source of truth.

Desktop H1 88/88 px, H2 56/58 px, H3 30/34 px. Mobile H1 48/48 px, H2 36/38 px, H3 26/30 px. Body 17/27 px desktop and 16/25 px mobile. UI 14/20 px. Evidence labels minimum 12/18 px desktop and 13/19 px mobile. Eyebrows 11/16 px with 0.12em tracking; avoid long uppercase sentences. No dense serif data tables. Display tracking -0.035em; body tracking normal.

### Layout and surfaces

Design widths: desktop 1440, mobile 390. Desktop content maximum 1280 px, 80 px side gutters at 1440; mobile 20 px gutters and 350 px content. Twelve desktop columns with 24 px gaps; four mobile columns with 16 px gaps. Scale gutters fluidly at intermediate widths. Section spacing: 112–144 px desktop, 64–80 px mobile. Navigation: 72 px desktop, 64 px mobile.

Cards: 12 px radius, 1 px quiet olive border where definition is needed. Floating evidence cards can use a soft shadow and a maximum 3-degree tilt; dense workbench panels remain straight. Buttons: 48 px minimum height, capsule silhouette, 20–24 px horizontal padding. Primary olive/ivory; secondary outlined olive. Minimum interactive target 44×44 px. Avoid enormous blurred shadows, glass panels over readable evidence or repeated generic feature grids.

### Shared components and states

| Component | Content and behavior |
|---|---|
| Header | Wordmark; Products, Platform, Evaluation, Pricing; request evaluation. Mobile menu exposes all routes and Escape closes it. |
| Primary CTA | “Request a paid evaluation”; navigates to qualification. No payment action implied. |
| Secondary CTA | “Explore the demo”; enters a separately labeled simulated environment. |
| Offer card | Module name, one-line job, unique illustration, price-hypothesis link and product-page destination. Exactly five. |
| Evidence card | Source ID, sample date, received date, analyte, units, method/depth status, provenance link and DEMO label. |
| Conflict notice | “Method / depth unverified. Values may not be directly comparable. Draft withheld pending review.” |
| Zone map | Original synthetic geometry, three zones, pattern plus text for unresolved zones; equivalent accessible table. |
| Review panel | Named demo reviewer, dated next action, required checks and explicit blocked state. |
| Inverse boundary | Human-review requirement and machine-export-disabled statement. No fake security badges. |
| Pricing row | Scope, unit, proposed amount and “Test hypothesis — not an active offer.” |
| Form | Visible labels, inline errors, clear pending/success/failure state, separate optional marketing consent. |
| FAQ | Native disclosure behavior, keyboard accessible, one consistent icon treatment. |

Hover: buttons darken gently and arrow translates 3 px; offer art lifts 4 px; links gain underline. Focus is visible with a 2 px olive outline and 3 px ivory separation. Hover never reveals indispensable information. Disabled actions retain legible text and a nearby explanation. No cursor replacement, magnetic controls or card tilt on touch.

## 4. Homepage — complete story

Persistent concept status: “CONCEPT PREVIEW · SIMULATED DATA”. Put “DEMO · SIMULATED DATA” directly on every operational artifact, including mobile. Main CTA stays available without waiting for animation.

| Chapter | Copy direction and exact headline | Matching visual | Surface and progression |
|---|---|---|---|
| H01 Hero | “See beneath every field decision.” Supporting: “Draft zone-level input plans for an agronomist to approve.” Buyer: “For independent agronomy service leads working in one crop and region.” | Floating fictional field, exposed soil, three source layers and evidence/weather/reviewer callouts. | Ivory and quiet landscape; field rises, layers separate, callouts arrive. |
| H02 Problem | “The source. The gap. The decision.” “Two results can differ because their method, depth or timing differs. Keep the draft withheld until an agronomist reviews the context.” | 18 and 31 mg/kg sample cards connected to a withheld plan, beside exploded layers. | Sky; comparison builds before the connection to the draft. |
| H03 Offers | “Five ways to review the field.” Five separately quotable proposed modules. | Soil reports; zone tile; weather ribbon; approval map; season packet. | Ivory with five distinct pastels; horizontal desktop atlas, vertical mobile cards. |
| H04 Demo | “Follow one decision from source to review.” CTA “Open the simulated case”. | Real-text workbench specification: queue, map, conflict, evidence pane, reviewer and disabled export. | Blush; highlighted sources lead to reviewer status. |
| H05 Roles | “Clear roles. Accountable decisions.” “An advisor owns the decision; an operator organizes the case; a data owner manages permissions.” | Three role cards connected to one case and a grower-consent note. | Matcha; connection lines appear after role labels. |
| H06 Platform | “One case. Every source in context.” “Proposed workflow: connect each source, exception and review decision in an exportable evidence packet.” | Five artifact types converge on a case folder and reviewer packet. | Ivory; artifacts align into the folder without suggesting a live integration. |
| H07 Use cases | “Start where review matters.” Soil-source disagreement; missing field history; timing exception. | Three scenario cards with a distinct map, document and weather visual. | Sky; scenario details appear in reading order. |
| H08 Evaluation | “Prove the workflow, one season at a time.” “Start with a blinded retrospective comparison. Agree a paid seasonal scope only after permissions and review requirements are clear.” | Three steps: compare, define protocol, evaluate season. | Apricot; step line draws with each step. |
| H09 Boundary | “The reviewer stays in control.” “No equipment commands. No automatic application. Machine export is disabled in this concept preview.” | Sources → human review gate → locked machine export. Separate data-permission and physical-control panels. | Deep olive; gate closes visibly, status is always readable. |
| H10 Commercial | “Five scopes. Separately testable.” All five prices and units from section 8. | Editorial pricing ledger with a small artifact icon for each scope. | Ivory; restrained row reveals, no checkout buttons or savings calculator. |
| H11 FAQ | “Before a field enters an evaluation.” Questions on permissions, comparison, human approval, local validation and what the demo cannot do. | Side-by-side field dossier with labeled permissions/checks. | Matcha; static diagram supports readable disclosures. |
| H12 Conversion | “Bring one workflow into focus.” “Discuss a permissioned evaluation for one crop and region.” Primary paid-evaluation CTA, optional consented updates link. | Soft field landscape and a closed evidence packet. | Landscape with solid ivory text region; no text over busy crops. |
| H13 Footer | Product links, Platform, Evaluation, Pricing, About, Contact, Privacy, Sources and DEMO. “Research-stage concept. No operating product or performance claim.” | Small consistent leaf mark and quiet contour line. | Ivory; no excessive animation. |

Home FAQ answers: synthetic records only in demo; no production connectors; no equipment control; legal/procurement permissions required for real-data evaluation; no universal yield or savings promise; participating grower consent and local agronomic/legal review are necessary. Waitlist counts are not demand validation.

## 5. Field Review — representative inner page

URL direction: `/products/field-review`. The shared header and footer remain identical to home. Hero art switches to the selected Seasonal Collage grammar; the core product view uses precise, original vector geometry and real text.

| Chapter | Copy | Visual and behavior |
|---|---|---|
| P01 Hero | Eyebrow “PROPOSED MODULE · FIELD REVIEW”. “A zone-level draft. A human decision.” Supporting: “Bring soil results and field history into a source-linked draft for an agronomist to review.” | Asymmetric aerial field collage, three outlined zones, report fragment, leaf cutout, source annotation. Two CTAs: request evaluation / inspect demo case. |
| P02 Inputs | “Every source has context.” | Three cards for soil evidence, field history and timing; each includes timestamp, missingness and source link. |
| P03 Conflict | “When sources disagree, pause the draft.” | Two source cards, warning bridge, withheld plan. Keep unverified method/depth explicit. |
| P04 Workbench | “Review the evidence beside the draft.” | Three-zone map, alternative explanations, source pane, annotations, owner and dated next action. Proposed rates are withheld where unsupported. |
| P05 Review | “Check. Question. Decide.” | Three editorial step cards: check context; record explanation; accept or reject the simulated draft. Approval changes only local demo state. |
| P06 Packet | “A record of the reasoning.” | Layered dossier with source inventory, uncertainty, exceptions, reviewer decision and next action. A future reversible reviewer-packet export retains simulation labels. |
| P07 Evaluation | “Test Field Review on one agreed workflow.” “Proposed price hypothesis: $50 per field per season.” | Small comparison protocol and clearly labeled quote sheet. No checkout, savings or accuracy guarantee. |
| P08 FAQ/related | Inputs needed; how disagreements are handled; meaning of approval; permitted evaluation. Related Field Desk and Field Signal. | FAQ plus two product-specific art cards; explain handoff between QC, drafting and approved export direction. |
| P09 Footer | Shared full footer and concept disclaimer. | Quiet brand closure. |

Field Review's first paid evaluation module is a proposal, not a commitment. All five modules remain separately quotable. The qualification form records the selected module without silently bundling the others.

## 6. Motion storyboard

Use Lenis for desktop smooth-scroll pacing and GSAP/ScrollTrigger for scroll-linked transformations. This is an implementation specification; no animation runs inside the generated compositions. Recheck current library APIs when building. Native browser scrolling remains the fallback. Only one smooth-scroll owner; no duplicated requestAnimationFrame loops.

| Sequence | Start → middle → resolved state | Trigger and timing | Mobile/reduced motion |
|---|---|---|---|
| Home hero | Field y 64/scale 0.96 → field settles/layers separate → annotations connect and composition rests. Headline is readable from first paint. | One finite desktop stage, maximum 140vh scroll distance, pin only ≥1200 px wide and ≥800 px high. Scrub 0.6; no snap. | Static field or one 300ms opacity transition; no pin, no parallax, no automatically oscillating field. |
| Headline entrances | Whole line y 24/opacity 0 → y 0/opacity 1. | 650ms, 90ms line stagger, once when 85% viewport threshold crossed. Respect natural reading order. | Short 250ms fade; immediate in reduced motion. Never split accessible text into separate announced letters. |
| Problem layers | Sample A x −32, Sample B x 32 → connector draws → withheld label is emphasized. | 500–700ms per grouping; ordinary vertical flow. | Comparison stacks A then B then warning; static connectors. |
| Product atlas | All five names visible in compact index → track advances across five large cards → fifth card finishes fully in viewport. | Second and final desktop pinned sequence; travel equals track scrollWidth minus container width; no forced snap; skip-to-next link. | Five vertical cards in the same order. No swipe-only content or horizontal page overflow. |
| Review scene | Highlight source → conflict → reviewer; status text remains in place. | CSS sticky artwork beside three short steps; no extra JS pin and no auto-approval. | Vertical case summary, source comparison, then review panel. |
| Roles/platform | Cards enter with x ±24; connecting lines draw only after labels. | 450ms entrances, 80ms stagger; once. | Single-column, clear top-to-bottom connectors. |
| Evaluation | Step 1 → step 2 → step 3, active line grows. | 500ms, one step per natural scroll threshold. | Stacked numbered cards; no horizontal line. |
| Review gate | Evidence cards align → human gate appears → locked export remains visible. | 600ms sequence, no lock-to-unlock transition. | Static diagram with all boundary labels. |
| Product-page hero | Aerial mask expands → report slides from left → note rises from bottom → zone outlines draw. | Initial 900ms overall; 100ms staggers; headline/CTAs visible immediately. | Original map crop with one evidence card; no offscreen rotating papers. |
| Product-page source chapter | Cards converge at warning; draft stays withheld. | Scroll reveal, no pin. | Static stacked comparison. |
| Hover/focus | Small art lift, shadow increase, arrow shift 3 px. | 180–220ms ease-out. | Focus equivalents; hover disabled on coarse pointer. |

Only the homepage hero and product atlas may pin. No scroll capture inside forms or dialogs. Navigation anchors must land correctly with the sticky header. Scroll reveals are progressive enhancement: without JS all content is visible. On `prefers-reduced-motion`, remove Lenis smoothing, pins, parallax, clip reveals and stagger; render final static compositions. Recompute geometry after fonts/images load and on resize. Do not animate layout height or large blur filters. Pause decorative rendering offscreen.

## 7. Responsive rules

Desktop ≥1200: full split scenes, side-by-side source comparisons and five-card overview/index. Tablet 768–1199: two-column scenes, no pinned sequences, three/two offer-card rows. Mobile <768: one content column, full-width primary CTA, natural scroll, all five products visible sequentially.

Home mobile: headline → buyer/subtitle → CTAs → field visual → source/review labels → source story → comparison → five offers. Role, platform and evaluation diagrams become numbered stacks. Privacy/control panels stack independently. Pricing becomes five labeled quote rows with units never truncated. FAQ and footer become readable disclosures/link groups.

Field Review mobile: hero copy → field visual → evidence cards → warning → source-linked workbench summary → reviewer → packet → evaluation → FAQ. The workbench gets a compact map plus accessible zone list, not a scaled desktop screenshot. Source and Review tabs are allowed only when both are clearly labeled and keyboard accessible; the current warning and export boundary sit outside tabs. Evidence tables may scroll inside labeled containers, but surrounding page never scrolls horizontally.

At 390 px, preserve 16 px body text, visible timestamps, DEMO status and button labels. At 200% zoom, content reflows and no control overlaps text. On low-end/mobile devices use flattened field artwork with vector labels; reserve layered depth for capable desktop devices. Decoration can simplify; evidence cannot disappear.

## 8. Canonical data, commercial copy and claims

All records and people below are synthetic. Demo clock: **20 Apr 2026, 15:00 UTC**. Crop/region choice for the first real evaluation remains unconfirmed; do not infer a real operating region from the imagery. Use one consistent demo crop label only after the fixture is chosen, and label that choice illustrative.

| Field | Required display |
|---|---|
| Case / field | DEMO-CE-001 / DEMO-F01 |
| Area / zones | 30 illustrative ha; Z1 12 ha, Z2 10 ha, Z3 8 ha |
| Test A | Phosphorus (P), 18 mg/kg; sampled 12 Apr 2026; method/depth unverified |
| Test B | Phosphorus (P), 31 mg/kg; sampled 13 Apr 2026; method/depth unverified |
| Interpretation | Values may not be directly comparable. No average or recommendation inferred from the difference. |
| Draft | Withheld pending source-context review. No actionable chemical prescription in the public concept. |
| Reviewer/buyer | DEMO Mira Hale, independent agronomy service lead |
| Operator | DEMO Owen Reed |
| Data owner | DEMO Leah Finch |
| Grower consent role | DEMO Rowan Vale; permission status illustrative, not actual consent |
| Next action | DEMO Mira Hale to verify method/depth by 21 Apr 2026, 12:00 UTC |
| External action | Machine export disabled; no live integrations, writeback or equipment commands |

The original blueprint contains a fuller ten-case fixture and data dictionary. Preserve internally consistent counts and chronological events when implementing; do not pull numbers from generated artwork. Any sample proposed rate in a future private prototype must be explicitly unvalidated and must never become agronomic advice or a machine export.

| Proposed module | Scope | Price hypothesis |
|---|---|---|
| Field Desk | Soil-test and field-history ingest/quality control | $25/field/season |
| Field Review | Zone-specific input plan drafting | $50/field/season |
| Field Proof | Weather/timing exception alerts | $10/field/month in season |
| Field Signal | Prescription-map export with agronomist approval; public demo remains disabled | $35/field |
| Field Report | Application record and outcome/economic retrospective | $75/field |

Price qualifier everywhere: **“Proposed pilot pricing for discussion. Test hypotheses, not established market rates or active checkout offers.”** No $100,000 contract claim: that figure describes the requested quality ambition, not validated willingness to pay.

Trust copy: “Proposed access model: only explicitly authorized participants would receive permitted evaluation records. Access design and legal review remain future work.” Do not imply shipped access controls or certifications. Separate data constraints (heterogeneous lab formats, private yield maps, machine permissions) from physical/control constraints (labels, local law, calibrated applicators, human approval).

Pilot ask: name the budget owner, operator and integration owner; agree a permissioned blinded retrospective comparison with agronomists, then a paid seasonal SOW. Pre-register baseline, evaluator, comparison method, observation window and failure threshold. Measure advisor acceptance and unsafe/invalid recommendation rate against historical plans. Seasonal input/yield analysis acknowledges weather confounding. Count adjacent buyer segments separately.

Proceed beyond demo only after a signed paid seasonal pilot, participating growers' consent, appropriate procurement/legal permissions, local agronomic/legal review and enforced agronomist vetoes. Pause if permission, safety sign-off or comparator is unavailable. No payment or sensitive records collected in the public demo.

## 9. Remaining-page visual assignments

| Route/family | Hero and signature visual |
|---|---|
| Products overview | Five physical artifact compositions around one field; all five scopes visible without a carousel dependency. |
| Field Desk | Soil sample, laboratory sheet and field-history folder; missingness ledger. |
| Field Proof | Weather strips over a landscape; timing-window exceptions, never a guaranteed “safe to apply” status. |
| Field Signal | Original zone map, sign-off docket and locked machine-export preview; no automatic unlock in demo. |
| Field Report | Seasonal dossier and annotated comparison chart; illustrative outcomes with weather uncertainty, no invented uplift. |
| Platform | Source folders, exception cards and reviewer packet connected in a clear provenance diagram. |
| Evaluation | Three-step protocol, named roles and prespecified scorecard. |
| Pricing | Five artifact-led quote rows with explicit hypotheses and scope/units. |
| About / sources | Editorial field notebook, research references and clear concept-stage positioning. |
| Contact / request demo | Compact dossier illustration beside accessible qualification form; no operational upload. |
| Privacy / limitations | Quiet paper background and simple data-flow diagram; prioritise legibility. |
| Demo / preview access | Separate labeled workbench and polished concept access screen; no implied production login or fake authentication. |

## 10. Asset-production manifest

The delivered page compositions are reference images. Do not ship a giant screenshot as the website. Rebuild text, controls, pricing, map annotations and evidence cards as accessible interface elements.

| Asset | Production direction | Delivery/behavior |
|---|---|---|
| Shared mark/wordmark/favicon | Consistent original contour leaf; final vector refinement needed | SVG master; simplified 16/32 px favicon exports; accessible brand text |
| Home landscape | Quiet rolling agricultural background with space around headline | Wide AVIF/WebP, mobile art-directed crop; decorative empty alt |
| Floating field | Original fictional field block, realistic soil edge and gentle crops | Separable transparent layers, 1600px desktop target; mobile flattened image |
| Evidence layers | Three original translucent map slices aligned to field geometry | SVG/transparent assets; labels stay HTML; no inferred agronomic telemetry |
| Product hero aerial | Fictional field with no actual coordinates, readable zone shapes | 1400px crop plus mobile portrait composition |
| Five offer illustrations | Report stack / field tile / weather ribbon / reviewed map / dossier | Five independent 600–800 px assets; each semantically distinct |
| Supporting cutouts | Soil vial, leaf, paper edge, annotated note | Transparent assets; restrained repetition; decorative empty alt |
| Workbench/maps | Original polygons and source links based on canonical fixture | Native SVG + HTML, accessible zone table, keyboard interactions |
| Icons | Source, history, weather, warning, reviewer, lock | One consistent 1.5 px stroke family; warning/lock labels always visible |
| Reviewer packet | Original layered papers with HTML labels | Separate layers for motion; final packet content generated from fixture |

Asset priorities: shared logo/font licensing → hero layers → five offer illustrations → field collage → precise workbench → supporting motifs. Target initial critical image transfer under 700 KB and total initial route under 1.5 MB, then measure on actual build. Reserve image dimensions, defer lower-page imagery, use local fonts with appropriate fallback metrics. These are proposed budgets, not measured results.

## 11. Acceptance and next implementation pass

Design accepted in principle: homepage Terrain Theatre, inner pages Seasonal Collage. This package translates that selection; no new style choice is needed.

Next implementation pass: produce independent final assets and vector identity, build the shared header/footer/components, implement these two page templates and their responsive motion, then extend the remaining routes from the full blueprint. Capture actual browser renders at 1440 and 390 px only after the prototype exists. The current generated images must never be relabeled as those captures.

Verify before extending: no missing offers; all hypothesis units correct; simulation watermark persistent; method/depth conflict withholds draft; reviewer action only changes local state; machine export stays disabled; all CTAs have truthful destinations; no fake successful form submission; keyboard/focus/reduced-motion behavior; mobile source timestamps; no horizontal overflow; image/font budgets measured; no template marks; logo and favicon consistent.

The complete blueprint retains the original required deliverables: data dictionary, sample evidence packet, pilot scorecard, ad variants, consent and analytics events, source references and full traceability. Nothing in this visual package authorizes external campaigns, Notion changes, real-data ingestion or production deployment.

## 12. Image-generation record

Mode: built-in image generation, with the user's two selected attachments as visual references. Four final page-board assets are included; a first mobile attempt with a duplicated product card was discarded and corrected. The following is the consolidated prompt specification for reproducibility, not a verbatim transcript of every iterative prompt.

Shared prompt: Create a premium CropEvidence website composition using ivory, deep olive, matcha, blush, sky and apricot; large editorial Instrument Serif-style headings and clean Manrope-style body. Terrain Theatre on home: cinematic floating field and evidence layers. Seasonal Collage on Field Review: aerial photo, botanical cutouts, paper reports and source cards. Every textual section has its own explanatory visual. Keep all five proposed modules distinct, all pricing hypothetical, human review required, simulated data labeled and machine export disabled. No real customer names, third-party marks, ROI or live telemetry claims.

Homepage opening prompt: Compose navigation; floating-field hero “See beneath every field decision”; sky source-conflict/exploded-layer section; exactly five illustrated offer cards; blush evidence-review workbench; matcha buyer/operator/data-owner roles. Preserve a premium spacious editorial hierarchy and clear CTAs.

Homepage continuation prompt: Continue the same design with shared-platform folder/packet scene; three illustrated use cases; apricot retrospective-to-pilot protocol; deep-olive human-review boundary; all five price hypotheses with units; FAQ with dossier art; landscape final CTA and full footer.

Field Review prompt: Compose a complete inner product page with asymmetrical field/photo collage hero; three input-evidence cards; pink 18-versus-31 mg/kg source conflict; source-linked map/reviewer workbench; three review steps; olive evidence packet; $50/field/season test hypothesis; FAQ, two related modules and shared footer. No equipment execution.

Mobile final refinement prompt: Show two 390 px logical page columns with real mobile recomposition. Home: hero, field, source conflict and exactly five product cards in order Field Desk, Field Review, Field Proof, Field Signal, Field Report. Product: hero, source comparison, review panel and pilot hypothesis. Correct Test A sample date 12 Apr 2026 and Test B 13 Apr 2026; method/depth unverified; reviewer 20 Apr 2026. Retain simulation labels, legible copy and disabled machine export; remove duplicated offer card.
