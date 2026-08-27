# STROMIND — CANONICAL PROJECT STATUS

> **READ THIS FIRST IN EVERY NEW STROMIND CHAT / DEVICE SESSION.**
>
> Canonical operational status lives on the **`main` branch**. Chat memory is supporting context only. Before changing code, always read this file from `main` and verify actual GitHub state.

**Last updated:** 2026-08-27  
**Project:** stromind.de / planned Stromind j.d.o.o.  
**Lifecycle:** PRE-LAUNCH / PUBLIC BETA

---

## 1. Branch workflow — IMPORTANT

- **`main` = active working branch and current source of truth.**
- Netlify visitor SSO/password protection was removed on 2026-08-27 so the site can be reviewed publicly as a beta.
- `dev` remains as historical/test branch only; do not assume it is newer than `main`.
- Before any meaningful change: read this file from `main`, inspect current GitHub state, then work from `main` via a short feature branch/PR when appropriate.
- Public beta access does **not** mean the legal/commercial launch is complete.
- Keep the global `X-Robots-Tag: noindex, nofollow, noarchive` header until we deliberately decide to allow indexing.

### Verified transition on 2026-08-27

- PR #8 merged the current `dev` work into `main`.
- PR #9 switched the canonical workflow to `main` and removed the obsolete catch-all redirect to `wartung.html`.
- Current `main` after that transition: `594aeb3` — Switch Stromind workflow to main.
- Netlify public visitor access is now open; no team SSO or site password is required.

---

## 2. Company data

- Working/preparation name: **Stromind j.d.o.o.**
- The company is **not yet treated as a registered/publicly operating j.d.o.o.** until official registration is complete.
- Do not publish wording that represents Stromind j.d.o.o. as already registered before the court-register entry exists.
- **OIB:** add when issued/confirmed.
- **VAT / PDV ID:** add later if/when applicable and confirmed.
- Final registered address, director/register/court details, share capital and other legally required Impressum data still need to be filled from the official registration documents.

---

## 3. Current product state

The current B2B company form is part of the `main` codebase.

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

Public beta goal: let external reviewers test layout, mobile behavior, wording, conditional logic and technical bugs before full legal/commercial launch.

---

## 4. Forms / GDPR state

- Netlify Forms remain **disabled** for now.
- Reason: the legal/GDPR pages are not yet integrated into `main`, and the final controller/provider identity cannot be published as a registered j.d.o.o. before registration.
- Do not accept real CVs, candidate applications or company-contact submissions from the public beta until the controller identity/contact information and legal notices are valid and visible at the point of collection.
- The form UI can still be reviewed visually and functionally during the public beta.

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

Next legal integration target is **`main`**.

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
2. Public beta access is open on Netlify.
3. Keep **noindex** active during beta unless deliberately changed.
4. Keep **Forms disabled** until valid controller/provider identity and legal notices are integrated.
5. Use public beta feedback (including Reddit/croIT) to find UX, wording and technical problems.
6. Integrate the required legal/GDPR work into `main` after reviewing it against the current code.
7. Enable real form submissions only after the legal notice/privacy/controller identity gate is satisfied.
8. Update this file after meaningful work.

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

**MAIN is the canonical working branch. PUBLIC BETA may be visible, but real data collection stays off until legal/controller identity is ready.**
