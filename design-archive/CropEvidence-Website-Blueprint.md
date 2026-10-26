# CropEvidence
## Website architecture, visual direction and validation-demo specification

26 October 2026 · Concept 39 · Version 1.0 · Specification only

**Recommended direction:** an editorial field atlas: warm paper, dark soil, original field geometry and a precise evidence workbench. The visitor follows one field from incomplete records to a reviewable decision. Five distinct proposed products remain visible throughout the buying journey.

**Status:** research-stage concept, synthetic demo planned, no operating product established. The $100,000 ambition is a design and commercial aspiration supplied by the user, not verified product value, accepted pricing, development budget or revenue. No build, deployment, account creation, campaign, payment, domain purchase or Notion activity was performed for this specification.

## 01. Scope, priority and naming

The user's current request is research, information architecture and website structure. The uploaded master guide governs quality, page coverage, branding and motion. The supplied concept brief supplies the complete product, buyer, evaluation and demo requirements. Its one-landing-page suggestion is expanded into the master guide's connected multi-page experience while retaining that landing page's complete narrative. Its spec-only boundary matches this request.

The guide itself says the brief comes first; the user's explicit instruction for this task says the brief must not override the guide. This document follows the current user instruction. There is no need to sacrifice the brief's honesty requirements to meet the guide's visual or architectural standard.

- **Public brand:** CropEvidence, as explicitly supplied by the user. Name, trademark and domain ownership remain unverified.
- **Historical identifiers:** Concept 39 / Agriculture Input Agent / Category D / Crop Waypoint. Preserve in internal records only; do not mix brand names in public navigation.
- **Legacy domain:** cropwaypoint.com and its historical RDAP 404 belong to the old brief. They establish neither current availability nor ownership, and say nothing about CropEvidence domains.
- **Sector:** energy, industry and resilience portfolio; the buyer-facing category is agronomy decision support. Do not add unrelated energy-management features.
- **No supplied video:** the referenced video and screenshots/39-website-preview.png were not accessible attachments. Their existence in prose is not evidence of an implemented or deployed product.
- **Deliverable distinction:** the companion HTML is a readable planning document, not the CropEvidence website or a product screenshot.

Every substantive brief requirement is mapped in section 20. Public information, simulated product behavior, and internal validation work are retained in appropriate places rather than publishing employee instructions as marketing copy.

## 02. Buyer, positioning and proof

**Primary buyer and accountability owner:** independent agronomy service lead serving growers in one crop and region. Grower/co-op procurement is separate. Recruit a named day-to-day operator and data/integration owner. Obtain the relevant procurement, grower and legal permissions before real records are used.

**Primary job:** inspect inconsistent field evidence, draft zone-specific input options, and document a human-owned review decision before any permitted future equipment export.

**Proposed distinction to test:** a readable chain from soil/history evidence to exceptions, rationale, reviewer disposition and an exportable reviewer packet. This is not an established competitive advantage.

**Vision:** advisors can explain each field-specific recommendation and obtain grower approval before equipment export.

**Mission:** help independent agronomy service leads move from fragmented evidence to a defensible human-approved decision, preserving provenance and uncertainty.

**Problem:** soil assays, historical applications, zones and weather differ in freshness and quality. A generic rate does not resolve conflicting samples, missing permissions, local judgment or label constraints.

**Audience separation:** growers, cooperatives, multi-farm operators, input dealers, crop consultants and equipment dealers can be participants, acquisition channels or future buyer hypotheses. They must not be counted as one pooled demand segment. One primary buyer journey is designed now; no duplicate co-op/grower sales pages implying validated demand.

**Existing alternatives:** CropX, Deere precision application, agronomist recommendations, soil laboratories, co-op retailers and extension guidance. CropX already describes variable-rate application maps and machinery export; Deere already describes targeted spraying. These are category context, not CropEvidence integrations or endorsements. [CropX VRA](https://cropx.com/variable-rate-application/) · [Deere See & Spray Select](https://www.deere.com/en-us/products-solutions/sprayers-and-applicators/see-spray-select)

**Proof policy:** show a labeled synthetic artifact, the proposed evaluation protocol, and precise limitations. No fabricated logos, quotes, customers, team biographies, certifications, uptime, integrations, yield uplift, saved money, ARR or deployment claims. The brief assesses incumbent-capability evidence as high and independent uplift evidence as low; preserve that as a research assessment, not a quantified study result.

## 03. Research and visual references

Research used the configured Perplexity high research preset and direct browser inspection. References were reviewed on 26 October 2026. Browser observations below are a desktop sample at approximately 1280 × 720, not a full cross-device audit. Proposals are explicitly separated from observations.

| Reference | Evidence from this session | What CropEvidence should adopt | What to avoid borrowing |
|---|---|---|---|
| [Watershed homepage](https://watershed.com/en-GB) | Browser inspected hero, vertical sections and feature rail. White hero with oversized sans-serif type and layered imagery; sticky white navigation; navy product section; return to white feature cards. Next-feature click moves the horizontal rail. Product-step media changed independently of scrolling. | Alternating editorial and technical environments; clear numbered workflow; cropped product artifacts; deliberate horizontal browsing with visible controls. | Its blue identity, customer proof, AI claims, or an assertion that its horizontal rail is scroll-scrubbed. |
| [Linear homepage](https://linear.app/) | Browser inspected hero and intake chapter. Near-black surface, large restrained type, dense interface, fine borders, generous chapter spacing and fixed navigation. Initial hero render appeared before content settled. | Credible UI density, owner/activity context, disciplined visual hierarchy. Reserve dark surfaces for focused workbench moments. | The all-dark brand, agent-autonomy language, customer strip, tiny low-contrast labels or initial content blanking. |
| [Linear Intake](https://linear.app/intake) | Browser inspected hero and page structure. Perspective interface imagery behind a large product-specific title; deeper sections address intake, triage and requests with different UI examples. | Dedicated product heroes built around each module's own artifact; section depth beyond a repeated card grid. | Reusing exactly the same hero for all five CropEvidence offers. |
| [Apple AirPods Pro](https://www.apple.com/airpods-pro/) | Browser inspected opening and consecutive scroll positions. Persistent local navigation, large isolated product object, broad pale stages and subsequent imagery. Several media assets reported playback failure; the sequence was only partially rendered. | One focal object per chapter, strong scale changes, local product navigation and good still-image fallbacks. | Treating the partially rendered visit as verification of exact animation timings or copying hardware imagery. |
| [GSAP scroll showcase](https://gsap.com/scroll/) | Browser inspected sequential scroll positions. The pin/scrub example holds a rotating graphic while explanatory copy progresses; its code and start/end markers make the mechanism explicit. | A finite pinned evidence story with measured entry/exit, reversible progress and stable labels. | The showcase's playful palette or excessive animation density. |
| [Stripe Payments](https://stripe.com/payments) | Perplexity content research; motion not browser verified. Multiple concrete UI examples explain capabilities at different depths. | Product-specific diagrams and one explanatory artifact per capability. | Claiming its current scroll mechanics were observed; copying payment UI or gradients. |
| [Regrow platform](https://www.regrow.ag/platform) | Perplexity content research; visual motion not browser verified. Connects scientific foundation, planning, reporting and collaboration. | Agricultural context paired with explicit methodology and limits. | Transferring scientific validation or certification claims to this concept. |
| [CropX enterprise management](https://cropx.com/solutions/enterprise-farm-management/) | Perplexity factual/category research; no motion audit. Broad field/data/stakeholder structure. | Operational specificity and recognition of existing alternatives. | Broadening CropEvidence into an established farm-management or hardware-control platform. |

### Horizontal versus vertical reference findings

Watershed supplies an observed **user-controlled horizontal rail**, GSAP supplies an observed **vertical pinned sequence**, and the official ScrollTrigger documentation supplies the mechanism for **vertical-scroll-driven horizontal translation**. These are different interactions. A carousel does not establish that a site hijacks wheel scrolling. [ScrollTrigger documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

For CropEvidence, use normal vertical scrolling as the foundation, a short horizontal product portfolio passage on sufficiently large screens, and one separate vertical evidence sequence. Keep each product directly reachable without watching either animation. No evidence supports claiming that every reference page or its hover behavior was exhaustively tested.

## 04. Three visual territories

| Territory | Composition and material | Signature story | Typography direction | Fit |
|---|---|---|---|---|
| **A. The Evidence Atlas — recommended** | Warm ivory editorial spreads; olive field geometry; rust annotations; occasional dark-soil workbench. | A field boundary acquires source pins, exposes a conflict and becomes a review packet. | Expressive display serif, contemporary sans body, mono provenance. | Balances agriculture, evidence and premium enterprise clarity. |
| B. The Agronomy Instrument | Pale technical drafting sheets, dense measurement rails, dark graphite inspection bays. | Cross-sectional evidence layers align against a reviewer gate. | Sans-led headings and monospaced specimen labels. | More industrial and exacting; less warm and editorial. |
| C. The Seasonal Journal | Large licensed seasonal photography, generous margins and report-like spreads. | Preparation, review, season observation and retrospective become four editorial chapters. | Large serif titles and quiet utilitarian captions. | Warmest and most agricultural; needs care to keep product specificity strong. |

Proceed with A as a recommendation for planning, not as a claim of user approval. B and C are genuine alternative compositions, not palette swaps.

### Brand foundation for direction A

**Character:** observant, exact, grounded, candid, considered.

**Logo proposal:** an original open field-boundary mark containing three contour segments and one evidence point. The open edge suggests a record awaiting review; avoid checkmark certification symbolism, a generic sprout, or tractor icon. Wordmark: CropEvidence in a carefully spaced sans-serif, with a custom optical treatment at the p/E junction. Favicon uses the simplified boundary and point only.

**Future asset handoff:** editable vector source; primary/reverse/monochrome SVG marks; horizontal/compact lockups; SVG and ICO favicon; 16/32/48/192/512px PNGs; 180px Apple icon; social image; manifest. Clear space at least one mark-point diameter, wordmark minimum 120px, standalone mark minimum 20px; redraw the 16px favicon for pixel clarity. These are specified assets, not completed or trademark-cleared assets.

| Role | Proposed value | Usage |
|---|---|---|
| Paper | #F6F3EA | Main page ground |
| Porcelain | #FFFEFA | Forms, tables, evidence sheets |
| Soil / primary ink | #20291F | Main type, dark stages |
| Olive | #485B37 | Primary action and field outlines |
| Sage | #DDE4D2 | Secondary panels and source layers |
| Straw | #E9D69E | Illustration accents, never untested body text |
| Clay | #9B482D | Exceptions and editorial annotation |
| Muted ink | #586052 | Secondary copy on light backgrounds |
| Border | #D3D7C9 | Subtle separators; stronger borders for controls |
| Error | #A52B34 | Error icon plus written explanation |
| Focus | #6A42AA | Visible focus outline with contrasting offset |

Status always includes a word/icon/pattern. A sage fill does not mean approval. Contrast must be measured on final pairings; this palette is not a completed accessibility certification.

**Typography proposal:** Instrument Serif regular/italic for short display headlines; Manrope 400/500/600/700 from the Google Fonts OFL distribution for body/UI; IBM Plex Mono 400/500 for IDs, timestamps and units. Pin font versions and preserve license files. Manrope V5 from the creator has different terms; do not assume it is the same distribution. [Instrument Serif](https://github.com/Instrument/instrument-serif) · [Manrope OFL](https://github.com/google/fonts/blob/main/ofl/manrope/OFL.txt) · [IBM Plex](https://github.com/IBM/plex)

Type scale: hero 88/88 desktop, 48/50 mobile; H2 56/60 and 36/40; H3 28/34 and 24/30; body 18/28 and 16/25; data 14/20; labels 13/18 minimum. Serif is reserved for editorial statements, never long tables. Headline max 14–18 characters per line where meaningful; body max 65–72 characters. Do not enforce line breaks that break narrow screens.

**Layout:** 1280px content maximum, 1440px visual maximum, 720px reading column; 64px desktop gutters, 32px tablet, 20px mobile. Twelve-column desktop, six-column tablet, four-column mobile. Spacing 4/8/12/16/24/32/48/64/96/128. Chapter padding 112–144px desktop and 64–80px mobile. Primary buttons 48px high; mobile controls at least 44 × 44px. Radius 6px controls, 12px sheets, 20px media; avoid making every surface pill-shaped.

**Imagery:** original schematic polygons rather than copied satellite tiles; crop/region-appropriate licensed field photographs for atmosphere only. Preserve license/creator records. Do not imply an atmospheric photo is a customer's field. Use subtle paper texture away from body copy, no constantly moving grain. Draw editable SVG diagrams with attached connectors, legends and accessible text equivalents. Product screenshots must come from the later built demo; generated art must never impersonate working software evidence.

## 05. Product inventory and copy-ready offer cards

Public names below replace only the legacy brand prefix. The five responsibilities, order and prices are preserved. The original Field Proof/Field Signal names are not silently swapped; subtitles disambiguate them.

**Shared badge:** Proposed module · Pilot price hypothesis · Not an active checkout.

| ID / product | Copy-ready card | Included artifact | Proposed price hypothesis | CTA / route |
|---|---|---|---|---|
| O1 · CropEvidence Field Desk | **Start with evidence you can inspect.** Bring soil tests and field history into a source-linked review, with timestamps, missing information and conflicts exposed. | Intake inventory, unit/method checks, missingness register and QC notes. | $25 / field / season | Explore Field Desk → `/products/field-desk` |
| O2 · CropEvidence Field Review | **Draft a zone plan with its reasoning attached.** Examine proposed inputs beside their source evidence, assumptions and unresolved questions before an agronomist decides. | Zone draft, alternative explanations, rationale and reviewer queue. | $50 / field / season | Explore Field Review → `/products/field-review` |
| O3 · CropEvidence Field Proof | **See when timing assumptions change.** Review weather and timing exceptions with a dated source and a named next action. | Exception timeline, freshness flags and reviewer disposition. | $10 / field / month in season | Explore Field Proof → `/products/field-proof` |
| O4 · CropEvidence Field Signal | **Review the prescription before any export.** Inspect a proposed map and its approval requirements. The concept demo keeps machine export disabled. | Prescription preview, approval checklist and illustrative export manifest. | $35 / field | Explore Field Signal → `/products/field-signal` |
| O5 · CropEvidence Field Report | **Close the season with a traceable account.** Compare permitted application and outcome records with the agreed evaluation protocol, exposing gaps and confounders. | Application/outcome comparison and economic retrospective, when permissioned records exist. | $75 / field | Explore Field Report → `/products/field-report` |

Pricing copy: **“These figures are interview prompts for separately scoped pilot offers. They are not established market rates, vendor quotes or current purchasable plans. Final scope, permissions, services and seasonal terms require a reviewed proposal.”** No bundled five-tab CRM package; no fabricated annual enterprise price; no savings guarantee. Select one module for the first pilot. A whole-suite guided conversation remains possible without selling all five as a validated bundle.

## 06. Information architecture

### Primary navigation

Products · Platform · Solutions · Evaluation · Pricing · Resources · Company. Right side: Sign in; **Request a paid evaluation**. “Explore the simulated demo” is a distinct secondary action, never a disguised live trial.

Products mega menu exposes all five names, short responsibilities and `/products`. Platform includes capabilities, data/permissions and trust. Resources includes methodology, example evidence packet and source references. Company includes About and Contact. Menu opens by click or keyboard; hover may preview but cannot be required. Escape closes and returns focus. Mobile drawer uses the same destinations, focus management and normal page scrolling after dismissal.

### Sitemap and route responsibilities

| Route | Page purpose / core content | Primary conversion |
|---|---|---|
| `/` | Complete buyer narrative, all five products, artifact, evaluation, limitations and price entry. | Request a paid evaluation |
| `/why-change` | Fragmented evidence, freshness, incompatible samples, permissions, accountability. | Inspect the example conflict |
| `/solutions` | Independent advisor workflow; three job-based use cases without pooling buyer segments. | Choose the first workflow |
| `/solutions/independent-agronomists` | Buyer lead, operator and data owner; one crop/region; seasonal evaluation. | Qualify an evaluation |
| `/products` | Five separate offers with scope, outputs, relationship and indicative pricing. | Select one pilot module |
| `/products/field-desk` | Soil-test and field-history ingest / QC. | Discuss Field Desk |
| `/products/field-review` | Zone-specific plan drafting / review. | Discuss Field Review |
| `/products/field-proof` | Weather/timing exceptions. | Discuss Field Proof |
| `/products/field-signal` | Approval-gated prescription-map preview/export direction. | Discuss Field Signal |
| `/products/field-report` | Application/outcome/economic retrospective. | Discuss Field Report |
| `/platform` | Proposed shared evidence model, annotations, review states, ownership and packet. | View the simulated workbench |
| `/features` | Capability index linking to product sections; missingness, source lineage, reviewer veto, packet versioning. | Find the relevant module |
| `/integrations` | Data and permissions: potential file formats, machinery permission boundary, no live connectors. | Discuss data feasibility |
| `/evaluation` | Blinded retrospective → permissioned season pilot → go/no-go; scorecard and failure conditions. | Request a paid evaluation |
| `/results` | Evaluation measures and example scorecard; no measured results yet. | Read the evaluation method |
| `/pricing` | All five hypotheses, units, scope exclusions, one-module pilot, conditional SOW. | Request a scoped proposal |
| `/request-demo` | Guided conversation request; product selection and prospect context. | Send a guided-demo request, once connected |
| `/pilot` | Qualified paid-evaluation intake and next steps; no records uploaded. | Submit an evaluation request, once connected |
| `/demo` | Synthetic queue and disclosure; free exploration with no sign-in. | Open a simulated case |
| `/demo/cases/DEMO-CE-001` | Map, exceptions, source pane, proposed rate table and local reviewer action. | Record a simulated review |
| `/demo/cases/DEMO-CE-001/report` | Watermarked packet / summary; machine export stays locked. | Download a synthetic reviewer packet |
| `/demo/pilot` | Fictional buyer/operator/data owner, consent statuses, season protocol, proposed quote and task. | Inspect the simulated pilot checklist |
| `/resources` | Practical method and evidence resources; no invented publication history. | Read a guide |
| `/resources/evidence-packet` | Complete synthetic packet with limitations and reversible export instructions. | View the sample packet |
| `/resources/pilot-protocol` | Comparator, metrics, thresholds, observation window and decision method. | Prepare a discovery conversation |
| `/resources/sources` | Attributed factual research, dates and distinction from product claims. | Read primary sources |
| `/company` | Mission, vision, stage, scope and evidence principles; no invented founders. | Contact the team |
| `/contact` | General enquiry and routing; verified contact details added later. | Submit an enquiry, once connected |
| `/trust` | Separate data access, human control, commercial/evidence limits; planned controls labeled. | Review responsibilities |
| `/sign-in` | Polished concept access screen and access-help path; authentication unconnected. | Enter the synthetic demo |
| `/access-help` | Explain controlled future access; no fake recovery email. | Request access information |
| `/legal/privacy` | Draft notice: collection, purposes, consent, retention/deletion and contact owner to finalize. | Contact privacy owner when established |
| `/legal/terms` | Draft concept-preview terms; no agronomic or equipment authority. | Return to the demo |
| `/accessibility` | Motion controls, navigation help and contact path; no untested conformance claim. | Change motion preference |
| `404` | Original field-line visual, useful recovery paths. | Home / Products / Contact |

**Footer:** all products; Platform/Features/Data permissions; Solutions; Evaluation/Results/Pricing; Resources; Company/Contact; Trust/Privacy/Terms/Accessibility; sign-in; motion toggle. LinkedIn and Crunchbase icons only use verified CropEvidence profile URLs. Until supplied, show an accessible “Profile not yet available” inactive state, with no meaningless `#` links. No invented address, phone, registration number or copyright ownership assertion beyond the selected brand's proposed footer copy.

### Buyer journeys

1. **Qualified advisor:** role-specific ad or homepage → offer page → synthetic artifact → `/pilot` → manually reviewed discovery → permitted blinded retrospective → paid pilot SOW → season review → go/no-go.
2. **Operator:** product page → `/demo` → conflict record → evidence pane → simulated reviewer disposition → packet → invite lead to guided conversation.
3. **Data owner:** `/integrations` → `/trust` → permission checklist → discovery. No real field files in a public intake.
4. **Exploring visitor:** resources → methodology → optional consented waitlist. This is weak interest, not validation.

## 07. Homepage: copy and section-by-section storyboard

### Copy-ready hero

Eyebrow: **CROPEVIDENCE / AGRONOMY DECISION SUPPORT CONCEPT**

Headline: **Draft zone-level input plans for an agronomist to approve—not a sprayer to execute.**

Body: **For independent agronomy service leads serving growers in one crop and region. Bring soil tests, field history and timing evidence into a source-linked review, with conflicts visible and the agronomist accountable for the decision.**

Primary CTA: **Request a paid evaluation** → `/pilot`.

Secondary CTA: **Explore the simulated demo** → `/demo`.

Visible adjacent label: **DEMO · SIMULATED DATA · Research-stage concept. No equipment control.**

Support line: **Start with a blinded retrospective comparison. Discuss a paid season pilot only after scope, permissions and review responsibilities are agreed.**

### Scroll chapters

All motion below is proposed. Hero and essential text are present immediately; motion enhances artwork. Each chapter retains complete static content. Product names and links appear before the horizontal passage so the full suite never depends on scrolling through five scenes.

| Chapter / copy | Composition and background | Scroll / appearance behavior | Exit and small-screen treatment |
|---|---|---|---|
| H1 · Hero, above | Ivory editorial title left; large original field polygon right; labels float on solid paper plaques. Three soil zones and one clay conflict point. | No intro gate. Over first 0–70% of hero traversal, boundary strokes resolve, source pins appear, conflict annotation opens. Headline never waits for animation. | Up-scroll reverses artwork only. Mobile uses heading → CTAs → static map with persistent disclosure. |
| H2 · “One field. Several versions of the truth.” | Porcelain evidence table; three offset document sheets: soil test, history, weather. Thin clay annotation lines connect incompatible dates/methods. | Enter at top 80% viewport: sheets align by 12px, source timestamps remain fixed; mismatch rule draws. 500ms once. | Copy remains visible on return. Mobile stacks three sheets and warning. |
| H3 · “Five proposed offers. Five distinct decisions.” | Sage title band containing all five names/links, followed by a wide horizontal atlas of five unique artifacts. | Desktop vertical scroll translates the atlas through O1–O5. Show section numbers and direct controls. Each panel reveals its output, boundary and hypothesis price. | Natural exit after finite track; Skip product story links below. Mobile/reduced motion show five complete stacked panels. |
| H4 · “Follow the evidence before the recommendation.” | Dark-soil stage. Light workbench stays in view; narrative rail tracks source → conflict → draft → review. | One pinned vertical sequence; map remains stable while the source drawer, conflict and reviewer requirement are progressively emphasized. Scroll never performs approval. | Up-scroll restores visual steps, not local demo decisions. Mobile uses four screenshots/diagrams with captions. |
| H5 · “Every proposal needs an owner.” | Paper responsibility swimlane: advisor lead / operator / data owner / grower. | Lines connect roles to artifacts as the section enters; no animated avatars or invented endorsements. | Entire diagram visible in still mode; mobile role rows preserve order. |
| H6 · “A source-linked record across the proposed suite.” | White architectural spread; five small module outputs feed a common case envelope and packet. | Draw only relevant connectors once; clicking a module highlights its artifact and links to its page. | Links and labels usable without animation; compact vertical architecture on mobile. |
| H7 · “Three jobs to evaluate first.” | Three editorial rows with different visuals: pre-season QC sheet, zone review overlay, end-season evidence ledger. | Subtle viewport reveal, 16px maximum; hover highlights the referenced output, keyboard does the same. | No lateral carousel required; full content always available. |
| H8 · “Test the work before expanding the promise.” | Straw-toned protocol spread: blinded comparison, permissioned season, decision review. | A vertical timeline fills as chapters enter; scorecard fields appear as “Not evaluated,” never counting up fake results. | Reduced motion shows complete timeline. Links to Evaluation and Results. |
| H9 · “Permissions and judgment are part of the workflow.” | Dark section with two distinct columns: data access versus physical/control. A clear machine-control boundary across the bottom. | Boundary line draws once; no lock turning green, no badge implying certification. | Mobile places data and control requirements one after another. |
| H10 · “Scope one offer for one season.” | Quiet ivory quotation sheet, all five hypothesis prices listed with exact units. | No pinned motion. A user-selected module highlights its line; default remains neutral. | Price qualifier stays beside numbers at every size. CTA preselects offer in pilot intake. |
| H11 · “Questions worth settling early.” | Porcelain accordion with fine separators; useful buying questions. | User-controlled open/close, about 180ms; content never auto-rotates. | Keyboard and touch equivalent; links to deeper pages. |
| H12 · “Bring one crop, one region and one decision to test.” | Licensed field-edge photograph in restrained crop, solid ivory CTA panel over it; no text directly over busy crops. | Image reveal on entry, no mandatory parallax. Primary paid-evaluation CTA, secondary guided-demo link, optional waitlist. | Static crop on mobile; consent/privacy summary visible. |
| H13 · Footer | Soil background, reverse logo, complete link map and source/limitations links. | No decorative animation. Motion preference control persists locally. | Accessible accordions only if needed; all links in document order. |

### Copy-ready supporting sections

**Problem:** “A recent result is not always a comparable result. Review sampling dates, methods, zones and previous applications before a draft becomes a decision.”

**Mechanism:** “Inspect the source. Resolve the conflict. Review the draft. Keep the decision attached.”

**Accountability:** “The agronomy lead owns the evaluation. A named operator handles the case. The data owner confirms permitted access. The agronomist and grower retain the relevant approval rights.”

**Limitations:** “This preview uses invented records. It does not connect to machinery, assess a real field or establish a safe application window. Local agronomic and legal review remains necessary.”

**Pilot ask:** “Start with a blinded review of historical recommendations. If the evaluation supports proceeding, agree a paid season pilot with permitted records, a prespecified measurement protocol and an agronomist veto.”

**FAQ answers:** Is it live? Research-stage concept only. Who decides? The accountable agronomist, with required grower and other approvals. Does it control equipment? No. Are these prices established? No, they are test hypotheses. Can we upload field records? Not through the public demo. Does it promise yield or savings? No. Are CropX/Deere connected? No integration is established. Why one crop and region? Local validation and permission constraints must be tested before expansion.

## 08. Dedicated page structures and unique heroes

Every product page includes: badge/status → responsibility → buyer problem → inputs → workflow → detailed artifact → outputs → source/control requirements → evaluation measure → proposed price → relationship to suite → FAQ → product-aware pilot CTA. No page is just a hero and the same repeated cards.

### Field Desk — `/products/field-desk`

Hero: **“Make the field record inspectable.”** A tall evidence sheet on porcelain, with source tabs projecting from its edge. As the first section enters, mixed documents align into rows; a missing unit remains visibly unresolved. Sections: input inventory → format/method/date checks → conflicts and missingness → source register → scope and price → pilot. Distinct visual: a comparison lens linking two soil records to one zone. Outputs do not certify the source's accuracy. Evaluation: conflicts found, false flags and reviewer usefulness against a pre-agreed reference set. FAQ: accepted source formats are to be assessed, not claimed as implemented connectors. CTA: **Discuss a Field Desk evaluation.**

### Field Review — `/products/field-review`

Hero: **“Keep the reasoning beside the zone.”** Olive contour map with a cream rationale sheet, not a full-screen dashboard. Sections: field/zone context → source-linked options → conflicting evidence → agronomist decision → versioned packet → scope and price. One short sticky map accompanies three normal-flow evidence notes; each changes a highlight, never a real recommendation. Outputs are draft options with assumptions and alternative explanations. Measure blinded acceptance, revisions, rejection reasons and invalid recommendations. CTA: **Evaluate a zone-plan draft.**

### Field Proof — `/products/field-proof`

Hero: **“Know which timing assumptions need another look.”** Soft mineral/sage horizon with a dated weather-window strip and freshness marker. Sections: source issue time versus forecast window → example exception → stale-data state → assigned next action → limitations → monthly in-season hypothesis. Scrub a timeline cursor through synthetic events; no “safe to spray” green band. Source expiry introduces “Review required,” not automatic cancellation or dispatch. Evaluate exception relevance, stale-data detection and reviewer handling; do not claim a weather prediction service. CTA: **Discuss timing-exception review.**

### Field Signal — `/products/field-signal`

Hero: **“Make approval visible before export.”** Dark-soil approval corridor; light prescription sheet stops at a labeled gate. Sections: draft manifest → agronomist review → grower/permission/regulatory checks → illustrative format preview → machine export disabled → scope and price. Scrolling draws the route to the gate and stops. Only deliberate demo controls change local review state; even after simulated sign-off, machine export stays disabled. Future compatibility is unverified. CTA: **Scope a reviewed-map evaluation.**

### Field Report — `/products/field-report`

Hero: **“Close the season without losing the evidence.”** Ivory report spread with planned/recorded/unknown columns; no fabricated growth chart. Sections: protocol baseline → permitted application records → input/yield comparison → economic assumptions → missingness/weather confounding → evidence packet → price. Scroll assembles report leaves into a readable stack; charts use “Not observed” until real authorized observations exist. The public demo has no executed application records. Measurement concerns completeness and interpretation, not promised causal uplift. CTA: **Plan a seasonal retrospective.**

### Supporting-page composition and motion

| Page | Hero and visual | Section order | Motion and CTA |
|---|---|---|---|
| Why change | “The gaps between records become review work.” Annotated document collage on off-white. | Sources → time/method mismatch → consequence for review → alternatives → proposed method. | Document alignment reveal; Inspect the conflict. |
| Solutions overview | “Start with the decision your advisor owns.” Three large numbered job rows. | Primary buyer → pre-season QC → zone review → retrospective → participant roles. | Connector highlights; Choose one workflow. |
| Independent agronomists | “One crop. One region. A review your team can own.” Advisor/operator/data-owner cards beside a field notebook. | Scope → roles → workflow → data feasibility → pilot ask. | Role-to-task lines; Request a paid evaluation. |
| Products | “Five proposed offers, separately scoped.” Oversized five-part atlas index. | Product inventory → outputs → comparison → shared platform → prices → CTA. | Native horizontal optional browsing plus complete vertical links; Select a module. |
| Platform | “One case, from source to reviewer packet.” Architectural cutaway of evidence envelope. | Inputs → source model → annotations → review states → packet → future connectors/boundaries. | One finite vertical layer build; Open simulated workbench. |
| Features | “The details that make a case reviewable.” Annotated index. | Intake → provenance → missingness → exceptions → review → packet; link each to its owner module. | Light enter reveals, searchable/filterable only if useful; Find module. |
| Integrations | “Establish permission before connection.” Source-format matrix on drafting grid. | Soil formats → private maps → weather → machinery permission → future connector assessment. | Permission lanes highlight on selection; Discuss feasibility. No vendor logo wall. |
| Evaluation | “Agree what evidence would change the decision.” Large protocol timeline. | Qualification → blinded comparator → signed SOW → season measurement → failure thresholds → go/no-go. | Milestone progression, no fake completed steps; Request a paid evaluation. |
| Results | “How the concept will be evaluated.” Blank scorecard with denominators and units. | No results yet → proposed measures → illustrative packet → confounders → publication criteria. | Static charts/empty states; Read the protocol. No fabricated testimonial strip. |
| Pricing | “Begin with a scoped, paid test.” Editorial quotation sheet. | Five hypotheses → included/excluded work → services/permissions → SOW process → FAQ. | User selection only; Request a scoped proposal. |
| Guided demo request | “Walk through the evidence with us.” Small annotated specimen beside form. | What is shown → offer choice → minimal context → consent → next steps. | No pinning; factual delivery states. |
| Pilot | “Propose one evaluation.” Protocol checklist beside form. | Buyer → module/crop/region → operator/data owner → readiness → consent → manual review. | Form step transitions only, no fake urgency. |
| Demo queue/case/report/pilot | Functional workbench; visible synthetic header on all routes. | Queue → selected case/source pane → local decision → packet; separate pilot checklist. | Direct UI actions; no scroll-led hiding of evidence. |
| Resources / source pages | “Methods before claims.” Folio index with sample document cover. | Guides → packet → protocol → sources → related offers. | Reading-friendly anchor navigation; no pinning. |
| Company | “Evidence before expansion.” Licensed field-detail image and editorial principles. | Mission → vision → research stage → first buyer → principles → contact. | One quiet image reveal; Contact. No invented team portraits. |
| Contact | “Start with the question.” Calm paper split layout. | Enquiry type → form → privacy → response process, without an invented SLA. | Simple form states. |
| Trust | “Access, judgment and control are separate responsibilities.” Two-column responsibility diagram. | Data access → physical/control → commercial liability → evidence limits → current/proposed controls. | Connectors enter once; Read responsibilities. |
| Sign-in / access-help | “Your evidence workspace.” Cropped static synthetic record with clear concept badge. | Auth unconnected notice → demo access → guided access help → privacy. | No scroll effect; do not collect actual passwords or pretend to send recovery emails. |
| Privacy / Terms / Accessibility | Editorial title and side contents; no decorative hero. | Draft status → actual intended behavior → responsibilities → outstanding publication details → contact path. | Normal anchor navigation; reduced-motion control on Accessibility. |
| 404 | “This record isn't here.” Broken field contour without an error animation loop. | Explanation → Home / Products / Contact. | Static accessible recovery. |

## 09. Motion choreography and interaction specifications

### M1: Horizontal product atlas

Enable only at viewport width ≥1200px, height ≥800px and no reduced-motion preference. At other sizes use stacked panels. Before entry, show all five product names and direct page links in ordinary flow.

The parent pins below the 72px header. Five panels each about 70–76vw wide share a horizontal track. Travel equals the actual track width minus viewport width; scroll distance equals that travel, recalculated after fonts/images load. Progress 0–20% O1; 20–40% O2; 40–60% O3; 60–80% O4; 80–100% O5. Allow pauses to read at any point, do not force snapping. A direct numbered control moves to the corresponding document scroll position; keyboard focus to a panel first exposes it. Provide “View products as a list” and “Skip product story.” The final panel releases into H4 with no blank spacer.

Use the parent for pinning and linear translation; child `containerAnimation` triggers may reveal artwork but must not be separately pinned/snapped. `horizontal: true` is for native horizontal scrolling and is not the switch for this effect. Source: [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/).

### M2: Vertical evidence review

Maximum 220vh additional scroll travel on eligible desktop screens. Pin a stable outer workbench; animate children. Four steps: 0–25% source timestamps; 25–50% incompatible tests; 50–75% draft/withheld rate; 75–100% assigned reviewer and locked export. The disclosure, case ID, warning and no-control boundary never move offscreen. Text steps remain normal-flow semantic content. Up-scroll reverses visual emphasis only. A user review decision is never made or undone by a scroll timeline.

### M3: Typography, background and image motion

Headings may use a 400–550ms line reveal after entering the lower 80% of the viewport, with 40–60ms line stagger and at most 16px travel. Keep an accessible heading intact; decorative split spans are hidden from assistive technology. Never animate every word of a paragraph. Background color transitions occur across a 15–20vh overlap between major chapters, with type contrast stable throughout. Hero imagery may shift at most 24px; no parallax on touch/reduced-motion. Atmospheric video, if later commissioned, needs a poster, pause and skip and must not block content.

### Micro-interactions

| Component | Default → interaction | Accessibility / state |
|---|---|---|
| Primary button | Olive fill; hover moves arrow 4px within a slot and slightly deepens fill, 160ms. | Text stable; focus ring; pressed 1px; loading reserved for real work. |
| Product link/card | Thin edge rail thickens; linked artifact highlights its output, 180ms. | Same effect on focus; essential copy never hidden; no tilt. |
| Source row | Hover/focus emphasizes matching point and source ID. | Click/Enter opens pane, Escape closes, focus returns. |
| Map zone | Outline thickens; hatch and text label identify selection. | Parallel zone list and semantic table; pointer not required. |
| Review decision | Explicit button opens rationale/reviewer form. | Missing reason shows inline error; changes local synthetic state only. |
| Machine export | Disabled with persistent explanation beside it. | No hover-only tooltip. Cannot activate via keyboard, code path or URL. |
| Accordions/tabs | Small height/opacity transition; no auto-rotation. | Correct expanded/selected state, focus order and arrow navigation where appropriate. |
| Form submit | Pending state only after connected request; preserve inputs on error. | Error summary and field links; success only after server acknowledgment. Demo form says nothing sent. |

### Implementation constraints for the future build

React/TypeScript with a suitable multi-page framework; original CSS/token system; GSAP ScrollTrigger for coordinated sequences. Native scrolling by default. Lenis is optional only if it preserves input, anchors, focus and reduced motion; it is not a prerequisite for premium quality. Destroy animations/listeners on route changes, refresh after layout settles, avoid duplicating pin spacers. [GSAP responsive setup](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/)

Respect OS reduced motion and a persistent in-site toggle: remove pinning, parallax, transforms and animated background changes; display all steps in final readable states. Explicitly support nonessential interaction-motion disablement and pause/stop/hide where applicable. [W3C animation from interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) · [W3C pause, stop, hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)

Proposed engineering targets, not measured results: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at the 75th percentile when sufficient field data exist. Until then, use lab checks on representative mobile hardware/network and label them as lab checks. Budget initial critical assets near 1MB compressed, lazy-load demo/media, serve appropriately sized images and subset fonts. Avoid WebGL dependency for understanding the offering.

## 10. Simulated workflow and state model

**Illustrative scope assumption:** maize in Iowa, United States, one synthetic 2026 season. This makes the storyboard concrete and is not an approved target market or locally validated agronomic model. A real pilot must select and validate its own crop, region and agronomic/legal reviewers. No pesticide products, label determinations or machine-executable prescriptions are specified.

**Fictional account:** DEMO Alder Field Advisory. Buyer/accountability owner: DEMO Mira Hale, independent agronomy service lead. Operator: DEMO Owen Reed. Data/integration owner: DEMO Leah Finch. Agronomist reviewer: DEMO Mira Hale. Grower representative: DEMO Rowan Vale. Every name, organization, ID, date and event in the demo is invented.

**Main case:** DEMO-CE-001, Field DEMO-F01, 30 illustrative hectares, zones Z1 12ha / Z2 10ha / Z3 8ha. Geometry uses local non-geographic coordinates, with no actual parcel or location exposed. Area values are fictional attributes, not measured from the drawing.

**Core event:** two source tests associated with Z2 disagree and lack sufficient matching method/depth context. The system must not average them into a confident rate. An inherited draft option is withheld, the uncertainty note is visible, and the agronomist can reject it or request clarification. A simulated human disposition creates a new local review event and packet version. It does not make machine export operational.

**Sequence:** source artifact → timestamp/method exception → linked evidence comparison → proposed next action → assigned reviewer → recorded local disposition → synthetic reviewer packet. Separate the reviewer-packet download from a machinery prescription export.

**Case states:** pending intake; blocked; in review; review complete; rejected. “Review complete” means only that a synthetic review step is complete. It never means a field application occurred.

**Export state:** machine export disabled in all demo states. A separate `review_packet_ready` flag can become true after a local simulated review. Packet is JSON/HTML/PDF direction only, visibly watermarked, versioned and deletable/resettable; no georeferenced machine command or operational prescription file.

### Ten queue records

All dates UTC. Frozen demo clock: 20 April 2026, 15:00 UTC. Relative ages must be calculated from this clock, never the visitor's current date. All rows visibly carry DEMO / SIMULATED. Default queue totals: 3 pending, 3 blocked, 2 review complete, 2 rejected; total 10. These are fixture counts, not traction metrics.

| Case | Field / zone | Offer | Created → last event | State / next action | Owner |
|---|---|---|---|---|---|
| DEMO-CE-001 | F01 / Z2 | O2 | Apr 18 09:00 → Apr 20 14:00 | Blocked: methods conflict; request matched test context Apr 21 10:00. | Mira |
| DEMO-CE-002 | F02 / all | O1 | Apr 17 09:00 → Apr 20 11:00 | Pending: map legacy units; next review Apr 21 11:00. | Owen |
| DEMO-CE-003 | F03 / all | O3 | Apr 18 10:00 → Apr 20 12:00 | Pending: acknowledge synthetic weather exception Apr 21 09:00. | Mira |
| DEMO-CE-004 | F04 / all | O4 | Apr 18 11:00 → Apr 20 12:30 | Blocked: permission not established; request scope Apr 21 13:00. | Leah |
| DEMO-CE-005 | F05 / all | O1 | Apr 16 08:00 → Apr 19 16:00 | Review complete: QC inventory documented; packet ready. | Owen |
| DEMO-CE-006 | F06 / Z1 | O2 | Apr 16 10:00 → Apr 19 17:00 | Rejected: unsupported carry-over draft; reopen only with new evidence. | Mira |
| DEMO-CE-007 | F07 / all | O5 | Apr 17 12:00 → Apr 20 10:00 | Blocked: private yield-map permission unknown; no outcome computed. | Leah |
| DEMO-CE-008 | F08 / all | O3 | Apr 17 13:00 → Apr 19 15:00 | Review complete: stale-source exception acknowledged; no application decision. | Mira |
| DEMO-CE-009 | F09 / all | O4 | Apr 18 08:00 → Apr 20 13:00 | Pending: reviewer-packet checklist; machine export disabled. | Owen |
| DEMO-CE-010 | F10 / Z3 | O2 | Apr 16 09:00 → Apr 20 09:00 | Rejected: sample depth missing; candidate withdrawn. | Mira |

### Main-case chronology and evidence

| Event / source | Synthetic timestamp | Meaning |
|---|---|---|
| SRC-S01 soil result A | Sample Apr 12 08:00; issued Apr 14 10:00; ingested Apr 18 09:00 | Z2 illustrative phosphorus index 18 mg/kg; method context incomplete. |
| SRC-S02 soil result B | Sample Apr 13 08:00; issued Apr 15 10:00; ingested Apr 18 09:05 | Z2 illustrative phosphorus index 31 mg/kg; method/depth alignment unverified. Not directly comparable. |
| SRC-H01 field history | Record date Oct 15 2025; ingested Apr 18 09:10 | Source placeholder describing prior applications; no executed application rows in public demo. |
| SRC-Z01 zone sketch | Created Apr 17 16:00; ingested Apr 18 09:15 | Original schematic boundary/zone file; no real location. |
| SRC-W01 weather window | Issued Apr 18 06:00; valid through Apr 19 18:00 | Stale at frozen demo clock; not a safe operating window. |
| EX-001 conflict | Apr 18 09:20 | Two test methods/depths cannot be aligned; draft blocked. |
| RV-001 operator note | Apr 19 10:00 | Owen requests reviewer assessment; candidate rate hidden. |
| RV-002 reviewer task | Apr 20 14:00 | Mira assigned; next action Apr 21 10:00; label/local checks still required. |

**Proposed rate table:** Z1 displays **90 kg N/ha — fictional UI fixture, unvalidated draft, not approved**; Z2 displays **Withheld — conflicting tests**; Z3 displays **Withheld — missing sampling depth**. The Z1 number is an invented design value, not calculated from the soil samples or proposed for a real field. Columns include candidate amount, unit, basis, uncertainty and reviewer. Z2/Z3 amounts are `null`, never zero. Keep the fictional-data label beside the table; no numeric draft can be machine-exported. Local agronomy review is required before using any real-field rates in a later permissioned evaluation.

**Alternate approved-preview storyboard:** DEMO-CE-009 can demonstrate the requested operator-reviewed prescription presentation. Deliberate controls let the operator mark fixture checks “Simulated only”; an explicitly assigned agronomist must then enter a rationale and choose “Simulate approval of this preview.” The UI records the operator, agronomist, time and version, with “SIMULATED APPROVAL — NOT VALID FOR APPLICATION” directly beside the prescription. Unknown checks block that action; an operator alone cannot bypass the agronomist. Machine export remains disabled even after this local state change. The default queue remains pending until the visitor takes the action; counts then recompute from local state and reset restores the original ten-record fixture.

### Simulated pilot record

DEMO-PILOT-001; stage “Evaluation proposed”; offer O1; buyer Mira; operator Owen; data owner Leah; grower consent “Not established — synthetic record”; equipment export permission “Not established”; season protocol “Draft”; proposed seasonal quote 12 fictional fields × $25 = $300, **hypothesis, not sent or accepted**; paid SOW “Not signed”; next task “Review permissions and comparator,” Apr 21 10:00 UTC. This planning-only record does not alter the ten-case queue totals and establishes no pipeline or revenue.

## 11. Data dictionary

All demo entities require `is_synthetic=true` and visible synthetic labels. No public upload endpoint, real credentials, production writeback or external integration. The schema is a future implementation contract, not a deployed database.

| Entity / field | Type / example | Validation or meaning |
|---|---|---|
| account.id / display_name | String / DEMO-ACCOUNT-001 | Synthetic prefix; fictional organization. |
| account.buyer_segment | Enum / independent_advisor | Do not merge co-op/grower segments. |
| account.buyer_id / operator_id / data_owner_id | Role references | Each role explicitly assigned; may be separate people. |
| case.id / offer_id | String / DEMO-CE-001 / O2 | One separately scoped offer per case. |
| case.field_id / zone_ids | References | Existing field and zones only. |
| case.status | Enum | Pending, blocked, in_review, review_complete, rejected. |
| case.created_at / updated_at | ISO 8601 UTC | Updated time not before creation. |
| case.next_action / due_at | String / timestamp | Named owner and explicit date; null when appropriately closed. |
| case.crop / region / season | Strings / maize / Iowa / 2026 | Demo assumptions, not validation claims. |
| field.geometry | Local polygon array | Non-georeferenced; no real parcel coordinates. |
| field.area_ha / zone.area_ha | Decimal | Synthetic attributes; zone sum equals field total. |
| source.id / document_ref | String | Source pane resolves fixture document; no broken links. |
| source.kind | Enum | Soil, history, weather, zone, permission, protocol. |
| source.sampled_at / issued_at / ingested_at | Nullable timestamps | Distinguish collection, publication and import. |
| source.valid_from / valid_to | Nullable timestamps | Relevant for forecasts; not universal truth expiry. |
| source.value / unit / analyte | Decimal or null / mg/kg / P-index | Fictional observations only; units never silently inferred. |
| source.method / depth_cm | Nullable metadata | Missing values cause review, not imputed comparability. |
| source.permission_status | Enum | Unknown, requested, permitted, denied; demo all labeled simulated. |
| source.provenance_note / quality_flags | Text / array | Missingness, age, conflict, method mismatch. |
| exception.id / source_ids / severity | References / enum | Severity rule documented; no certification. |
| exception.reason / disposition | Text / enum | Human-readable cause and resolution/withhold/reject. |
| plan.id / version / zone_id | References / integer | Immutable local snapshots; source IDs attached. |
| plan.proposed_rate / rate_unit | Nullable decimal / string | Z1 fixture 90 kg N/ha is invented and unvalidated; withheld is null, never zero. No executable export. |
| plan.rationale / alternatives / uncertainty | Text | Explain why draft exists, why it may fail, missing evidence. |
| review.id / reviewer_id / reviewed_at | References / timestamp | Deliberate local action; no implicit scroll approval. |
| review.decision / reason | Enum / required text | Request info, reject, acknowledge review, simulated preview approval; no real authority. |
| review.label_check / local_review / grower_approval | Status fields | Required/unknown/simulated only; actual permissions not inferred. |
| export.machine_enabled | Boolean / false | Invariant false in demo regardless of review. |
| packet.id / version / source_ids | References | Exported reviewer artifact retains all synthetic labels. |
| packet.created_at / demo_clock / limitations | Timestamp / text | Stable chronology and no-control boundary. |
| outcome.application_records | Empty list | No executed applications in demo. |
| outcome.input_rate / yield / cost | Nullable measures | No data → not observed; never sample uplift. |
| pilot.offer / price / unit / currency | O1 / 25 / field-season / USD | Hypothesis flag required. |
| pilot.field_count / quote_total | 12 / 300 | Illustrative arithmetic, not queue count or accepted revenue. |
| pilot.consent / comparator / protocol / sow | Status fields | Readiness dimensions tracked separately. |
| lead.followup_consent / marketing_consent | Separate booleans | No prechecked marketing; real lead data restricted to permitted future handler. |

## 12. Sample evidence packet

**DEMO · SIMULATED DATA · CONCEPT PREVIEW**

Packet DEMO-PKT-001 v1 · Case DEMO-CE-001 · Prepared at frozen time 20 April 2026 15:00 UTC · Field DEMO-F01 / zone Z2 · Crop/region assumption: maize, Iowa · Reviewer assigned: DEMO Mira Hale · Status: blocked.

**Question:** Is there enough comparable evidence to release a zone-level draft for review?

**Source inventory:** SRC-S01 and SRC-S02, synthetic soil indices 18 and 31 mg/kg with distinct sampling/issue times; SRC-H01 history placeholder; SRC-Z01 original schematic zone sketch; SRC-W01 expired weather fixture. See section 10 for exact timestamps.

**Exception:** the two soil results are not established as comparable. Method/depth context is incomplete. An average would conceal uncertainty. Weather evidence is stale at the demo clock.

**Alternative explanations:** different assay methods; different sampling depth; spatial variability; transcription error. These are hypotheses, not conclusions about a real field.

**Proposed action:** request matched sampling metadata and reviewer assessment. Withhold the proposed rate. Reassess weather source separately. No application instruction.

**Decision:** pending agronomist review. Next action: Mira to request clarification by 21 April 2026 10:00 UTC. No grower consent, equipment permission or local label review is established by this demo.

**Export manifest:** human-readable review packet only; version, source IDs, timestamps, missingness, notes and decisions included. Machine prescription export disabled. No equipment commands or proprietary vendor format claims.

**Audit trail:** intake Apr 18 → conflict flagged Apr 18 → operator note Apr 19 → reviewer assigned Apr 20. A later local demo decision appends a new event and version; original evidence remains inspectable.

**Limitations:** invented measurements and people; no observed yield, applied rates, economic results, customer commitment or regulatory clearance. Report does not establish agronomic correctness, compliance or a safe operating window.

**Reversibility:** downloadable synthetic packet has visible watermark on each page and in machine-readable metadata; visitor can reset local demo state. No file is transmitted to machinery or an outside account. Do not describe this document's sample packet as a captured working product.

## 13. Pilot ask, protocol and scorecard

### Copy-ready paid-evaluation ask

**“Choose one module, one crop and one region. Bring an accountable agronomy lead, a named operator and a data owner to a discovery review. We will first agree a permissioned, blinded retrospective comparison. A paid season pilot proceeds only with a signed scope, grower consent, local review and a prespecified measurement protocol.”**

Proposed first module: O1 Field Desk, because evidence readiness can be assessed before evaluating consequential plan drafts. This is a recommendation, not a change to the five-offer portfolio. O2 recommendations can be included in a separately scoped retrospective comparison, with agronomist review, before any broader pilot decision.

### Evaluation sequence

1. **Qualify:** record distinct budget owner, buyer segment, named operator, data owner, crop/region, selected module and willingness to pay. Count meetings and waitlist separately.
2. **Authorize:** procurement/legal review, grower consent, permitted field/equipment records and secure handling plan. Confirm access boundaries before transfer; public form cannot receive records.
3. **Pre-register:** freeze baseline, evaluator, comparison method, sample inclusion/exclusion rules, observation window, acceptance and failure thresholds in the pilot SOW before scoring.
4. **Blinded retrospective:** use the historical agronomist plan as comparator; hide origin of candidate/comparator where feasible, randomize order, restrict input evidence to information available at the original decision date, and record source leakage. Independent qualified agronomists rate accept/revise/reject and identify invalid recommendations. Preserve disagreements and vetoes.
5. **Paid season pilot:** only after signed SOW and all permission/safety gates; predefined fields and allowed records, one crop/region, named local reviewers, season-long observation. No autonomous control.
6. **Review:** compare input rate and yield under the agreed field protocol, record weather and management confounders, quantify missingness and services/integration effort, then decide stop, revise or expand.

Sample size, crop-specific agronomic validity criteria, observation dates and agronomically meaningful yield margin require local expert agreement. They are deliberately not represented as validated numeric rules. These must be completed before a real pilot proceeds.

| Measure | Definition / denominator | Proposed acceptance or failure rule | Current value |
|---|---|---|---|
| Buyer readiness | Separate budget owner, operator, authorized dataset and willingness-to-pay records. | All four documented, plus signed paid SOW before season pilot. | Not evaluated |
| Advisor acceptance | Accept without change / all evaluable blinded draft cases; report revise/reject separately. | Interview starting hypothesis ≥80%; evaluator may change before preregistration, never after seeing scores. Not a product claim. | Not evaluated |
| Invalid/unsafe recommendation rate | Evaluator-defined invalid cases / all scored cases; critical cases listed individually. | Proposed critical-invalid threshold 0 observed; any critical finding pauses progression. Zero in a small sample is not proof of safety. Noncritical threshold must be set locally before scoring. | Not evaluated |
| QC usefulness | Correctly flagged known issues and false positives in pre-agreed reference set. | Threshold agreed in SOW with denominator, missing-case policy and review cost. | Not evaluated |
| Input rate | kg nutrient/ha or other correctly specified unit by allowed field/zone. | Prespecified comparison; no generic reduction target. | Not observed |
| Yield | Crop-appropriate mass/area with measurement method and harvest window. | Prespecified comparator and locally justified margin; report uncertainty/weather confounding. | Not observed |
| Economics | Observed revenue/input changes less software, agronomy service, integration and measurement costs. | Sensitivity analysis, not attribution of all variation to software. | Not observed |
| Human accountability | Vetoes retained; no export bypass; reviewer/decision/time captured. | Any control bypass or permission failure pauses pilot. | Not evaluated |
| Paid conversion | Signed paid commitments / distinct qualified primary buyers. | Report cohorts and separate adjacent buyer segments; waitlist is not numerator. | No demonstrated commitments |

**Proceed gate:** advisor signs paid season pilot; participating growers consent; historical comparator is available; equipment/field permissions cover proposed scope; region-specific agronomic/legal review is available; agronomist veto enforced; protocol frozen. **Pause gate:** missing permission, safety sign-off, comparator, or critical validity/control failure. Do not manufacture value through autonomous control.

**Expansion hypothesis:** after local validation, advisor/co-op-group expansion into additional crops and workflows may be possible where evidence transfers. Estimate potential software revenue only from verified buyer count × tested annual contract value × reachable share, with services/integration costs accounted for. Acres, fertilizer spend, equipment capex and sector losses are not software TAM. A million-dollar product remains an untested hypothesis.

## 14. Lead capture, privacy and access

### `/pilot` fields

Required: work email, organization, role/budget responsibility, crop, region, selected offer, current workflow, pilot timeframe, permission to follow up about this request. Ask whether an operator/data owner can join and whether records could be authorized; names can be gathered in discovery. Optional: field/site-count range and concise question. No file upload, precise parcel locations, yield maps, pesticide details, credentials or financial records.

Marketing checkbox separate and unchecked: **“Send me occasional CropEvidence research and product updates.”** Request checkbox: **“You may contact me about this evaluation request.”** Adjacent note: **“Do not submit field records or confidential information here. Any request for real data will go through a human security and legal review.”**

Form states: empty, focused, validation error, submitting, confirmed receipt, retryable failure, duplicate request, withdrawn consent. In an unconnected prototype, button says **“Preview request”** and confirmation says **“Nothing was sent. This is a concept preview.”** No “meeting booked” or “we received your request” without actual evidence from the delivery system.

### Guided demo and optional waitlist

Guided demo is a distinct request with module or full-suite interest, role, organization, work email and follow-up consent. Optional waitlist adds sector/site-count range, current workflow and timeframe; it does not require an account. Never gate the synthetic artifact behind marketing consent. Dedupe contacts in the restricted lead store, not analytics payloads.

### Privacy copy, draft for review

**“CropEvidence is a research-stage concept. The public preview uses simulated records. If a connected enquiry form is provided, we use the information you submit to review and respond to your request. Marketing updates require separate consent. Do not upload operational or confidential records. You may request correction or deletion through the verified contact route.”**

Before actual collection, finalize controller identity, lawful basis/jurisdiction, processor list, retention period, deletion/contact process and cookie behavior with the responsible owner. This is a publication dependency, not a claim of an operating compliance program.

Sign-in is visually complete but explicitly unconnected; route to the demo and access-help. Do not accept real passwords, pretend SSO is available, simulate an actual recovery email, or imply an active customer workspace.

## 15. Analytics event plan

Design specification only; no analytics have fired. Respect required consent and deletion choices. Use a separate test environment for QA. No names, emails, parcel IDs, soil values, notes, URLs containing sensitive query data or raw form answers in analytics.

| Event | Trigger | Allowed properties / integrity rule |
|---|---|---|
| `page_view` | Route rendered, once per navigation. | Sanitized route, consented anonymous session, source/campaign allowlist. |
| `offer_card_view` | ≥50% card visible for ≥1 second. | O1–O5, route; dedupe per offer/session. |
| `demo_open` | Synthetic demo route successfully shown. | Entry route, selected offer, demo version; never a trial-start claim. |
| `pilot_cta` | Actual primary CTA activation. | Placement, offer selection, sanitized UTM. |
| `form_start` | First meaningful field interaction. | Form ID only, no field value. |
| `form_submit` | Future connected handler acknowledges valid intake. | Request ID opaque and non-identifying; consent status; do not fire on click or failure. |
| `meeting_booked` | Confirmed booking from future approved system/manual verified workflow. | Opaque booking ID, campaign cohort; not a calendar-link click. |
| `demo_review_action` | Optional diagnostic: local synthetic decision. | Fixed enum only, marked synthetic; not approval of a real plan. |

Track distinct qualified buyers, named operators, authorized datasets, willingness to pay and signed SOWs in a permissioned evaluation register with restricted access. Do not infer these from page events. Report traffic/clicks, qualified conversations and paid commitments as separate funnels, segmented by buyer type. Use sanitized UTM source/campaign consistently; avoid fingerprinting and unauthorised identity joins.

## 16. Acquisition and ad variants

Initial channels: independent agronomists, input dealers, cooperatives, crop consultants and equipment dealers. Recruit via co-op and consultant networks, but target the independent agronomy service lead as the initial budget owner. Grower and co-op procurement remain separate. One crop/region, season-long measurement.

**LinkedIn variant A — the job**

Headline: **“Before the zone plan, reconcile the evidence.”**

Body: **“Soil tests, field history and weather do not arrive with the same dates or context. CropEvidence is exploring a source-linked review workflow for independent agronomy leads. Inspect a fictional conflict and discuss a paid evaluation in one crop and region.”**

Creative: original two-source comparison beside one schematic zone; visible DEMO · SIMULATED DATA.

**LinkedIn variant B — the artifact**

Headline: **“What belongs behind a reviewed zone plan?”**

Body: **“A source timestamp. An unresolved conflict. A named reviewer. Explore CropEvidence's simulated evidence packet, then discuss whether a permissioned retrospective comparison fits your practice.”**

Creative: original watermarked packet and locked machine-export preview. No spraying-automation footage.

Both link to `/solutions/independent-agronomists` with distinct campaign values and clear pilot CTA. No claims of savings, accuracy, safety, regulatory certification or traction. No campaign launched in this workstream.

**Capped test proposal for later approval:** USD 300 total, USD 150 per variant, maximum 14 days, platform daily limits consistent with total cap; no automatic budget expansion. Review halfway through. Pause on tracking/consent failure, materially wrong-role traffic, misleading creative, or zero qualified conversations after the prespecified halfway spend. Treat this as an initial learning rule, not a statistical winner criterion. Record actual targeting, spend, clicks, qualified conversations, consented requests and CPC only after delivery. Paid seasonal commitments and permitted pilot fields matter more than signups; definitions must be fixed before comparing variants.

## 17. Responsive screenshots and asset brief

**Future requirement:** real browser captures of the implemented deterministic demo. No AI-generated UI image qualifies as implementation evidence. Parent/project owner verifies the screenshot, brand/domain and publication status. The old mentioned concept screenshot is neither a deployed site nor a substitute for these captures.

| Frame | Required content | Desktop / mobile composition |
|---|---|---|
| Website hero | CropEvidence mark, exact thesis, buyer, two CTAs, concept label and original field visual. | 1440px wide capture; separate 390px capture, text readable without zoom. |
| Queue | Ten records with exact 3/3/2/2 totals, owners, timestamps, states and selected CE-001. | Desktop list; mobile cards preserve ID, status, owner and source affordance. |
| Open case | Field polygon, 3 zones, conflicting tests, timestamps, withheld-rate table, source pane, reviewer and next action. | 1440px full-screen frame; 390px mobile uses one-column case summary and accessible Map/Evidence/Review navigation. |
| Review feedback | Required reason, local decision confirmation, immutable source context, disabled machine export. | No toast as sole record of decision; mobile confirmation inline. |
| Report | Packet version, source list, uncertainty, no-control boundary, no observed outcomes. | Full desktop report frame and mobile-safe crop; watermark on each report/chart. |
| Pilot record | Named roles, grower consent, export permission, protocol and proposed unpaid quote. | Clearly simulated; no signed customer or payment status. |

Badges on every frame: **DEMO — SYNTHETIC DATA** and **CONCEPT PREVIEW**. Include source timestamps in full readable form, explicit uncertainty, named reviewer and “No equipment control.” Charts say “Illustrative” or “Not observed”; no fabricated telemetry.

At 390px: minimum 16px main text and 13px metadata; essential evidence above any decorative imagery; no sideways page scroll; tables become labeled rows or intentionally bounded accessible scroll regions. Never crop out the warning, timestamp, disclosure or disabled-export reason to make a screenshot cleaner.

Example alt text: **“Synthetic CropEvidence case CE-001 showing a three-zone field sketch, two incompatible soil-test records for zone Z2, a withheld draft and disabled machine export.”**

Capture log: route, fixture version, frozen clock, viewport, browser/version, motion setting, local state, filename and reviewer. Review at 100% zoom for every label/number. Suggested filenames: `crop-evidence-home-1440.png`, `crop-evidence-case-390.png`, `crop-evidence-report-1440.png`. These files are future deliverables, not claimed to exist now.

## 18. Risk and boundary register

| Boundary | Relevant constraints | Website / demo behavior |
|---|---|---|
| Data access | Heterogeneous soil laboratory formats, private yield maps, weather sources, farm machinery access and permissions. | Show source freshness/missingness; human permissions review; no public uploads or live connector claim. |
| Physical/control | Pesticide labels, local regulations, calibrated applicators, agronomist/farmer approval. | Label-check required status; no safe-to-spray assurance; machine export disabled; no commands. |
| Commercial | Dealer incentives, seasonality, liability and uncertain budget ownership. | Separate buyer cohorts, scoped conditional pilot proposal, explicit unvalidated prices. |
| Evidence | Strong incumbent capability context; low evidence for independent uplift. | Protocol and empty results, no universal yield promise. |
| Unanswered gaps | Region-specific trials, farmer/retailer budgets, reliable source formats and viable service economics. | Research backlog; do not imply resolved fit. |

Global disclaimer: **“CropEvidence is a research-stage concept. Product screens, organizations, people, field geometry, records and activity shown in this preview are simulated. No real field recommendation, equipment command, live integration, customer result or accepted price is represented. Any future pilot requires appropriate data permissions, qualified local review and human approval. Yield, savings and performance are not guaranteed.”**

Copyright and attribution: original text, diagrams, fictional organizations and synthetic records. License atmospheric imagery and fonts. Do not copy competitor UI, maps, vendor copy, regulator marks or customer identifiers. Factual sources are linked without implying endorsement.

## 19. Build handoff and quality gates

### What is complete in this specification

Research/reference notes; proposed brand system; complete route map; copy-ready hero and five offer cards; page/hero/section plans; horizontal and vertical motion specification; synthetic workflow and ten-record fixture plan; data dictionary; sample packet; pilot ask and scorecard; disclaimer; form/analytics/ad plans; screenshot brief; coverage matrix.

### Future execution order

1. Confirm visual territory and crop/region for actual recruitment; verify name/domain/trademark and supplied profile/contact information.
2. Create original logo/favicon assets, palette/type/icon tokens and license inventory before high-fidelity pages.
3. Build source-consistent demo states and editable diagrams, then page wireframes and responsive design.
4. Implement all planned routes, meaningful forms/auth boundaries, native-scroll motion and reduced-motion states.
5. Verify copy/claims, links, forms, states, data consistency, accessibility and performance; capture real desktop/mobile screenshots.
6. Connect lead handling only with a finalized privacy/data process; obtain approvals for real records separately.
7. Authorized GitHub push → Vercel deployment → owned custom domain/DNS → final public review. These remain future tasks.

### Acceptance evidence required for the build

- Five products appear on homepage, menu, portfolio, individual routes and intake; exact scopes and price units match section 05.
- All planned routes have useful content and working navigation; no dead CTA, unrelated link, empty product page or fabricated profile.
- Original logo/favicons present; default icons, Lovable/builder artifacts and third-party marks removed.
- Synthetic label visible in hero, every demo route, every row and every export; no real records, false live status or operating-product claim.
- Ten fixture rows and 3/3/2/2 default totals agree; events are chronological; source panes resolve; null rate remains withheld; the numeric Z1 example stays labeled unvalidated; no executed application rows. Local decisions recompute counts, and reset restores the default.
- Machine export invariant remains false before/after every simulated review and direct-route reload; reviewer packet retains watermark; reset works.
- Qualification distinguishes budget owner/operator/dataset/willingness to pay; consent checkboxes separate; prototype cannot falsely claim delivery.
- Test widths 1440, 1280, 1024, 768, 390 and 320; short landscape; 200% zoom; keyboard; touch; reduced motion and preference changes; up/down scroll and direct anchors.
- No trapped scroll, offscreen focused links, clipped tables, invisible copy, animation-dependent disclosure or sticky overlay covering warnings.
- Contrast and meaningful status labels checked; focus/hover/pressed/loading/disabled/error/success states verified; diagrams accessible as text/table.
- Production build, runtime console, internal links, image/font loading, metadata, social preview and favicon checked. Lab and field performance distinguished.
- Real screenshots inspected at 100%; no proprietary screenshots, copied maps, customer identifiers or generated evidence of a live integration.
- Evaluation comparator, evaluator, metric definitions, dates and thresholds finalized before a real pilot. No paid conversion reported without actual signed commitment.

### Internal tracking handoff — no Notion access

Parent-managed fields to create later: idea number; working title; buyer/budget owner; operator; hypothesis; five offer IDs; price hypotheses; source links; contact consent; interview date; permissioned dataset status; baseline/evaluator/threshold; paid SOW status; integration owner; safety boundary; regulatory review; demo URL; screenshot verification; name/domain verification; traffic cohort/spend; qualified meetings; decision; next action. Track co-op/grower demand separately. No profile/account creation is authorized by including this register.

## 20. Brief-to-website traceability

Repeated brief requirements are consolidated below without dropping their substance. “Future acceptance” means a build/pilot condition, not evidence of completion today.

| Brief heading / requirement | Placement | Specification / future acceptance |
|---|---|---|
| Buyer/pain and initial accountability owner | Hero, Solutions, Pilot | Sections 02, 07, 14; primary buyer named, operator/data owner recruited. |
| Competitors/substitutes and no new spraying claim | Why change, Sources, FAQ | Sections 02–03; primary links, no integration endorsement. |
| Acquisition / one crop-region / season outcomes | Solutions, Evaluation; internal campaign plan | Sections 13, 16. |
| Five sellable offers | Home, Products menu/index, five pages, Pricing, intake | Sections 05–08; O1–O5 each intact. |
| Actual field polygon demo cue / timestamps / conflict / approved prescription preview | Demo case and screenshot plan | Fictional but concretely rendered polygon; local simulated sign-off only; export remains disabled, sections 10, 17. |
| Demand test / paid seasonal commitment | Evaluation, Pilot | Blinded retrospective, permitted exports/records, sign-off, prespecified protocol, section 13. |
| Expansion / no acreage-spend TAM | Evaluation FAQ; internal business hypothesis | Section 13; buyer-based bottom-up sizing. |
| Data / physical / commercial barriers / evidence gap | Trust, Integrations, Evaluation | Section 18; separately stated constraints. |
| Concept 39, synthetic-only, non-operating status | Hero, demo headers, footer, internal record | Sections 01, 07, 10, 18. |
| Proposed Crop Waypoint name/domain history | Internal naming note | Section 01; superseded by user-supplied CropEvidence, no ownership claim. |
| Research-only / no demand, revenue, customer, deployment or accepted pricing evidence | Results, Pricing, Company, disclosure | Sections 01–02, 05, 13, 18. |
| Tagline, basic info, vision, mission, problem | Hero, Company, Why change | Sections 02, 07–08; exact thesis preserved. |
| Solutions and five separate quotes | Product family, Pricing | Section 05; no conversion to CRM tabs. |
| Source-linked case / alternative explanations / annotations / packet | Platform, Demo, Resources packet | Sections 10–12. |
| Validation site and app experience / mobile provenance | Home and Demo | Sections 07, 10, 17. |
| LinkedIn GTM and fictional map review | Internal acquisition plan / role-specific landing page | Section 16; no campaign execution. |
| Million-dollar possibility remains hypothesis | Evaluation/business appendix | Section 13; no sector spend as revenue. |
| Initial MVP read-only scope / reversible export | Demo, Trust | Sections 10–12; no production connectors/control. |
| Validation website full narrative / optional waitlist | Homepage, Evaluation, Pilot | Sections 06–07, 14. |
| Fake CRM account/roles/case/activity/task/deal | Demo case and separate Demo pilot record | Section 10; invented names, permission status, unsigned quote. |
| Validation-first funnel / distinct readiness counts | Evaluation and internal register | Sections 06, 13, 15. |
| Product screenshot parent verification / readable desktop/mobile | Future capture handoff | Section 17; no generated product evidence. |
| Fake CRM rules / no sensitive records / export labels / no writeback | Demo and Trust | Sections 10–12, 18. |
| Ad and traffic tests / capped spend / qualified meetings | Internal GTM plan | Section 16; truth-based variants and proposed pause rule. |
| Validation metrics / baseline / evaluator / threshold | Evaluation / Results / SOW direction | Section 13; weather confounding and no outcomes yet. |
| Build decision / pause / agronomist veto | Evaluation / Trust | Sections 13, 18–19. |
| Notion tracking fields; no Notion activity | Internal handoff only | Section 19; every requested field retained. |
| Builder conversion concept / deterministic conflict / local review | Demo / Pilot | Sections 10, 14; no production software authorization. |
| Required deliverables: hero, offers, workflow, dictionary, packet, pilot, scorecard, disclaimer, analytics, ads, screenshot | This document and companion reader | Sections 05, 07, 10–18. |
| Original prescribed page-section order | Homepage expanded for master guide | Section 07 preserves hero → pain/evidence → five offers → artifact → evaluation → boundaries → pilot → privacy/sources. |
| Screenshot requirements / no proprietary logo/customer identifiers | Future QA | Sections 17–19. |
| Copyright rules / original maps/text / attribution | Asset library / Sources | Sections 03–04, 18. |
| Waitlist / seven events / UTMs / dedupe / deletion | Forms, Privacy, analytics spec | Sections 14–15. |
| Quality checklist before pushing | Build acceptance | Section 19; evidence needed, not claimed passed. |
| Definition of done / no website or Notion activity now | Scope and handoff | Sections 01, 19; spec done separate from pilot/build done. |
| Mentioned concept screenshot is not deployed site | Internal artifact register | Sections 01, 17; missing attachment acknowledged. |
| Employee handoff / Category D / select one pilot module | Internal scope and product portfolio | Sections 01, 05, 13. |
| Five optional product names under brand | Product inventory | Section 05 preserves Field Desk, Review, Proof, Signal, Report. |
| 8–12 consistent records / pending, blocked, complete, rejected / failed recommendation | Demo fixture | Section 10 supplies ten rows with two rejected drafts. |
| Real browser captures at 1440 and 390 / queue, record, sources, action, report | Future screenshot brief | Section 17. |
| Handoff acceptance: navigation, early access, consent, sources, pages, pricing, screenshots | Future build verification | Sections 06–09, 14–19. |
| Master guide: multi-page depth, branding, font/icon system, scroll variation, auth, social footer | Full architecture and design system | Sections 04, 06–09, 19. |

## 21. Decisions still needed before implementation or publication

These do not block this research/IA deliverable: final brand approval; name/domain/trademark review; actual pilot crop/region; selected first pilot module; locally qualified evaluator; product-fixture agronomy review if adding numeric rates; licensed imagery; verified company/contact/social information; lead-handler/privacy ownership; final SOW thresholds; target GitHub/Vercel accounts and owned domain. The missing reference video can refine the motion direction later without changing the coverage already planned.

## 22. Primary-source register

Visual observations and research findings are distinguished in section 03. These links support category, implementation or licensing context; none establishes CropEvidence validation.

- [Watershed homepage](https://watershed.com/en-GB) — directly inspected visual reference.
- [Linear homepage](https://linear.app/) and [Intake](https://linear.app/intake) — directly inspected interface and product-page references.
- [Apple AirPods Pro](https://www.apple.com/airpods-pro/) — partially rendered browser reference; playback limitations recorded.
- [GSAP scroll showcase](https://gsap.com/scroll/) — directly inspected pin/scrub example.
- [Stripe Payments](https://stripe.com/payments) — researched content reference, no live motion verification.
- [Regrow platform](https://www.regrow.ag/platform) — researched agriculture/platform context.
- [CropX enterprise management](https://cropx.com/solutions/enterprise-farm-management/) and [variable-rate application](https://cropx.com/variable-rate-application/) — adjacent capabilities.
- [John Deere See & Spray Select](https://www.deere.com/en-us/products-solutions/sprayers-and-applicators/see-spray-select) — established machinery-side targeted application context.
- [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) and [matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/) — proposed implementation behavior and responsive cleanup.
- [W3C animation from interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) and [pause, stop, hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) — motion requirements; not a conformance audit.
- [Instrument Serif source/license](https://github.com/Instrument/instrument-serif), [Manrope OFL distribution](https://github.com/google/fonts/blob/main/ofl/manrope/OFL.txt), [Manrope creator's current version](https://www.sharanda.com/manrope), [IBM Plex source/license](https://github.com/IBM/plex) — proposed font sourcing and version-specific licensing.

Source input: STARTUP_WEBSITE_MASTER_GUIDE.md supplied by the user, read in full; the complete Concept 39 brief supplied in chat. No unseen video or screenshot was treated as inspected evidence.
