# STROMIND — CANONICAL PROJECT STATUS

> **READ THIS FIRST IN EVERY NEW STROMIND CHAT / DEVICE SESSION.**
>
> Canonical operational status now lives on the **`main` branch**. Chat memory is supporting context only. Before changing code, always read this file from `main` and verify actual GitHub state.

**Last updated:** 2026-08-27  
**Project:** stromind.de / Stromind j.d.o.o.  
**Lifecycle:** PRE-LAUNCH / PRIVATE ACCESS

---

## 1. Branch workflow — IMPORTANT

- **`main` = active working branch and current source of truth.**
- The site remains non-public because Netlify access control is enabled for the project.
- `dev` remains as historical/test branch only; do not assume it is newer than `main`.
- Before any meaningful change: read this file from `main`, inspect current GitHub state, then work from `main` via a short feature branch/PR when appropriate.
- Public launch is a separate decision from merging code to `main`.
- Keep the global `X-Robots-Tag: noindex, nofollow, noarchive` header until we deliberately go public.

### Verified transition on 2026-08-27

- Previous `main` head: `555f5b0` — production holding page.
- Latest `dev` head before promotion: `766f85d`.
- PR #8 merged the current `dev` work into `main`.
- Merge commit: `e92a7a0` — Move current Stromind work to main.
- The old `_redirects` rule that forced all traffic to `wartung.html` is being removed because Netlify access control now provides the private pre-launch gate.

---

## 2. Company data

- Company name to use for preparation: **Stromind j.d.o.o.**
- The company is not yet treated as publicly launched.
- **OIB:** add when issued/confirmed.
- **VAT / PDV ID:** add later if/when applicable and confirmed.
- Final registered address, director/register/court details, share capital and other legally required Impressum data still need to be filled from the official registration documents before public launch.

---

## 3. Current product state

The current B2B company form is now part of the `main` codebase.

A company first chooses:

- **We have a project / need skilled workers**
- **We have skilled workers available for projects**
- **Both / partnership**

For project requests:

- temporary / Zeit-style staffing → **B2B budget / Verrechnungssatz in net EUR/hour**;
- direct hiring from the candidate pool → **candidate gross salary**, hourly or monthly.

The project path captures location, worker count, start date, duration, roles, experience/qualifications, German level, work/shift model, accommodation, transport/vehicle, tools and project description.

The partner-worker path captures worker count, profiles, availability, nationalities, possible work regions, employment status, A1 status, experience, languages, accommodation, transport/vehicle, tools and offered **B2B net hourly rate**.

No generic work-permit field is requested; concrete right-to-work/permit checks are handled later for the actual worker and deployment.

Latest B2B UX refinements include:

- worker count stepper **− / 4 / +**, manually editable, range **1–500**;
- calendar-enabled **DD/MM/YYYY** fields;
- automatic `/` insertion on manual date entry;
- matching date control for partner-worker availability.

Before public use: complete DE/EN/HR wording, test mobile/desktop behavior and verify actual form delivery end-to-end.

---

## 4. Legal / GDPR work

Advanced legal/GDPR preparation still exists on `legal/jdoo-gdpr-ready` and is **not automatically considered integrated into `main`** until Git proves it.

Prepared items there include:

- Impressum draft
- DE/EN/HR privacy pages
- legal/footer links
- candidate `/api/apply`
- server-side Praxis score recalculation
- CV validation/signature checks
- honeypot/request validation
- rate limiting
- SMTP/Netlify Function delivery design
- legal go-live checklist and draft terms

Next legal integration target is now **`main`**, not `dev`.

---

## 5. Main launch blockers

### Company / Impressum
Fill the final official company registration details when available: registered address, director, register/court data, OIB, share capital and any other required company identifiers.

### Recruitment business model
Confirm the exact operating model and any Croatian/EU registrations, evidence or licences required for the real recruiting / staffing model. Public wording and contracts must match that model.

### Candidate data operations
Define and verify mailbox access, retention/deletion, data-subject requests, incident procedure and the process/legal basis for forwarding candidate data to a concrete employer/client.

### STRATO / Netlify
Verify candidate mailbox, SMTP environment variables, mailbox security, Netlify Functions region, DPA/transfer safeguards and end-to-end submissions.

---

## 6. Immediate workflow

1. Work from **`main`** as the canonical branch.
2. Keep Netlify access control enabled while Stromind is pre-launch.
3. Keep `noindex` active until deliberate public launch.
4. Continue visually testing the B2B form, especially worker stepper, dates and both financial branches.
5. Integrate the required legal/GDPR work into `main` only after reviewing it against the current code.
6. Update this file after meaningful work.

---

## 7. Session protocol

Whenever the user resumes Stromind work:

1. Read **`STROMIND_STATUS.md` from `main`**.
2. Check actual GitHub `main` head and relevant branches.
3. Git wins over chat memory for technical state.
4. Do not ask the user to repeat project history if GitHub can answer it.
5. Before ending meaningful work, record the exact stopping point here.

---

## 8. Cross-device verification phrase

If asked for the agreed Stromind continuity phrase, answer exactly: **kvaka 22**.

---

## Core rule

**MAIN is now the canonical working branch. PRIVATE ACCESS is controlled by Netlify. PUBLIC LAUNCH remains a separate deliberate step.**
