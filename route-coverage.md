# Route coverage — CropEvidence

All 32 main routes below render distinct route content and share the finished navigation/footer. Local frontend scope; no public deployment or connected services.

| Route | Page |
|---|---|
| `/` | Home |
| `/products` | Products |
| `/products/field-desk` | Field Desk |
| `/products/field-review` | Field Review |
| `/products/field-proof` | Field Proof |
| `/products/field-signal` | Field Signal |
| `/products/field-report` | Field Report |
| `/why-change` | Why change |
| `/solutions` | Solutions |
| `/solutions/independent-agronomists` | Independent agronomists |
| `/platform` | Proposed platform |
| `/evaluation` | Evaluation |
| `/company` | Company |
| `/trust` | Trust & responsibilities |
| `/features` | Features |
| `/integrations` | Data & integrations |
| `/results` | Evaluation scorecard |
| `/pricing` | Pilot pricing |
| `/resources` | Resources |
| `/resources/evidence-packet` | Example evidence packet |
| `/resources/pilot-protocol` | Pilot protocol |
| `/resources/sources` | Research sources |
| `/pilot` | Paid evaluation request |
| `/request-demo` | Guided demo request |
| `/contact` | Contact |
| `/sign-in` | Workspace access |
| `/access-help` | Access help |
| `/legal/privacy` | Privacy & limitations |
| `/legal/terms` | Concept terms |
| `/accessibility` | Accessibility |
| `/demo` | Synthetic demo |
| `/demo/pilot` | Synthetic pilot checklist |

The demo also supports `/demo/cases/DEMO-CE-001` through `DEMO-CE-010` and a `/report` view for each case. Unknown URLs have a recovery page; unknown case IDs have a case-not-found state.

## User journeys

- Product → module-specific artifact → pilot query parameter → local enquiry draft.
- Pricing selection → same module on pilot form.
- Demo queue → evidence → reason-required review or rejection → labeled packet download; equipment export disabled in every state.
- Data owner → integrations input category → trust boundary → contact draft.
- Navigation and grouped footer → dedicated pages; home FAQ links preserve the fragment.

## Page families

Product and narrative pages use the approved Seasonal Collage composition. The library, pricing and feature catalog use aligned paper cards and generous grids. Legal/resources are reading layouts with related navigation. Enquiries and access use the shared cream/olive identity. The synthetic workbench uses readable evidence tables and explicit controls.
