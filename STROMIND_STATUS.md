# STROMIND — CANONICAL PROJECT STATUS

> **READ THIS FIRST IN EVERY NEW STROMIND CHAT / DEVICE SESSION.**
>
> Canonical operational status lives on the **`dev` branch**. Chat memory is supporting context only. Before changing code, always read this file from `dev` and verify actual GitHub branch state.

**Last updated:** 2026-08-28  
**Project:** stromind.de / planned Stromind j.d.o.o.  
**Lifecycle:** PRE-LAUNCH

---

## 1. Branch workflow — IMPORTANT

- **`dev` = active working/test branch.**
- Netlify is used to preview/test work from `dev` without publishing the production site from `main`.
- **`main` = production branch.** Do not use `main` for everyday testing and do not merge/push work to `main` merely to preview it.
- Public production remains intentionally held until Stromind j.d.o.o. exists and legal/GDPR/form launch blockers are green.
- Before any meaningful code change: read this file from `dev`, inspect current branch heads, then work on `dev` unless the task explicitly requires a separate feature branch.
- Only merge into `main` when the change has been tested on `dev` and we deliberately decide it is production-ready.

### Verified branch state on 2026-08-27

- `main` head observed: `555f5b0` — Hold production until company launch.
- `dev` head observed before this status update: `03a28bf` — Improve company form worker count and date inputs.
- Relative to `main`, `dev` was **7 commits ahead and 3 commits behind** immediately before this status update.
- The production-only side contains the temporary holding-page work and its merge into `main`.
- The advanced legal/GDPR implementation is on `legal/jdoo-gdpr-ready` and must be integrated/rebased/cherry-picked into the `dev` workflow before it is considered part of the normal tested build.
- Do not assume work from `legal/jdoo-gdpr-ready`, `security/netlify-forms-hardening`, SEO branches, encoding branches or gallery branches is present on `dev` or `main` unless Git proves it.


### Live branch comparison recorded 2026-08-28

After the candidate-language commits, GitHub reported `dev` relative to `main` as **3 commits ahead and 19 commits behind** (status: `diverged`). This live comparison supersedes older counts above; do not merge or rewrite branches without inspecting the commit history first.

---

## 2. Current product state

- Stromind.de is intentionally **not public/live** yet.
- Production is held until company formation and go-live requirements are complete.
- Existing site work includes candidate/company flows, multilingual content, SEO work and a production holding setup.
- Candidate flow goal remains: receive candidate contact data, CV (optional) and Praxis-Check result safely and with minimal unnecessary personal-data storage.

### Company B2B form prototype now on `dev`

Commit `9fd47d2` expands `unternehmen.html` so a company first chooses why it is contacting Stromind:

- **Project / workers needed**
- **Own workers available for projects**
- **Both / partnership**

For a project request the company then chooses between:

- temporary / Zeit-style project staffing, where the relevant commercial value is the **B2B budget / Verrechnungssatz in net EUR per hour**;
- direct hiring from the candidate pool, where the relevant value is the **candidate gross salary** in EUR gross per hour or month.

The project path also captures location, worker count, start, duration, roles, experience/qualifications, language level, work/shift model, accommodation, transport/vehicle and tools.

The partner-worker path captures worker count, profiles, availability, nationalities, possible work regions, employment status with the offering company, A1 status, experience, languages, accommodation, transport/vehicle, tools and the offered **B2B net hourly rate**.

No generic "work permit" field is requested in this form. Any actual right-to-work/permit check must be done later for the concrete worker and deployment situation.

Commit `03a28bf` refines the B2B form UX on `dev`:

- project worker count is now a **− / number / + stepper**, defaults to **4**, remains manually editable and is limited to **1–500**;
- project start uses a calendar-enabled masked date field with **DD/MM/YYYY** guidance;
- manual date typing automatically inserts `/` separators and keeps the unentered part of the format visible in grey;
- the same date interaction is used for partner-worker **Verfügbar ab** so the two B2B paths stay consistent;
- paired labels were added so project location/count and date/duration rows remain aligned on desktop and mobile.

This remains a **dev prototype for visual/logic review**. The expanded B2B form now has complete user-facing DE/EN/HR switching with `?lang=de|en|hr`, including both conditional flows, rates/salary blocks, placeholders, date messages and phone-search labels. Before production, review wording, test mobile/desktop behavior and test actual form delivery.

---

### B2B persistent floating labels on `dev`

Commits `26fc96d` and `933bf7b` add real floating labels to B2B text, URL, numeric-money and textarea fields. Empty fields retain the clean placeholder presentation; on focus or after entry, the translated field name remains visible above the value. HR → EN → DE switching preserves entered values and updates labels. Number steppers, date controls and the phone widget remain excluded. The corrected initialization order was verified on the live `dev` preview with no new console errors.

### B2B form visual consistency on `dev`

Commit `060fc7f` aligns the partner-worker top row with the project-request layout: the available-worker count now uses the same independent − / number / + stepper with default `4` and limits `1–500`, and both worker count and trades/profiles have aligned labels above their controls. HR/EN labels and independent stepper behavior were browser-tested with no console errors.

### Expanded B2B form translations on `dev`

Commits `093d761`, `e23488f` and `c3bb7f` translate all user-facing content in `unternehmen.html` across DE/EN/HR while preserving Netlify field names and stored option values. The `dev` preview was tested for repeated HR → EN → DE switching, both conditional request paths, temporary B2B rate and direct-hire salary blocks, phone placeholders/search labels and clean `?lang=` URLs with no console errors.

### Candidate-form language and CV control update on `dev`

Commits `ba748b2`, `6f40457` and `97b7168` improve the candidate form without touching `main`:

- CV upload now uses a compact STROMIND-styled control instead of the browser's unstyled file field;
- DE/EN/HR buttons write the selected language to the URL as `?lang=de|en|hr` while preserving parameters such as `role=monteur`;
- direct language links and page refreshes keep the requested language;
- candidate-form headings, questions, contact placeholders, CV label/button and empty-file text switch across DE/EN/HR;
- PDF/Word acceptance and the 5 MB limit remain unchanged;
- the Netlify `dev` preview was browser-tested in all three languages with no console errors.
- obsolete public `role=monteur|team|lead` URL handling was removed in commit `7fe379a`; the candidate form now uses clean URLs such as `karriere.html?lang=hr`, while retaining a fixed internal `position=monteur` form value for submission identification.

### Candidate preferred work locations on `dev`

Commits `6421abb` and `83b415d` add the translated candidate question “Where would you like to work?” / “Gdje želiš raditi?” / “Wo möchtest du arbeiten?” to the career application. Candidates can select Germany, Croatia and/or other EU countries. Selecting Germany reveals translated multi-select regions for München, Stuttgart, Regensburg, Berlin, Nürnberg, Frankfurt, all Germany or another region, plus an optional willingness to work outside the selected regions. At least one country is required; when Germany is selected, at least one German region is required. The values are submitted as Netlify form fields `work_country`, `germany_region` and `work_flexible`. JavaScript syntax and form-field presence were verified; browser/preview behavior remains to be visually checked.

---

## 3. Legal / GDPR work already prepared on `legal/jdoo-gdpr-ready`

The following exists on that branch and is not automatically considered present on `dev` until integrated and tested:

- `LEGAL_GO_LIVE_CHECKLIST.md`
- `LEGAL_UVJETI_POSLOVANJA_DRAFT.md`
- `impressum.html`
- German / English / Croatian privacy pages
- persistent legal/footer links
- candidate endpoint `/api/apply`
- server-side Praxis score recalculation
- optional PDF/DOCX CV upload, max 3.5 MB
- basic file signature checks
- honeypot and request validation
- rate limiting
- authenticated SMTP delivery design via Netlify Function
- STRATO SMTP defaults via environment variables
- no real SMTP secret committed to GitHub
- removal of unnecessary external phone/CAPTCHA dependencies from sensitive forms

---

## 4. Main launch blockers still open

### Company / Impressum
Final registered j.d.o.o. data is still required before public launch, including exact company name, registered address, director, court/register data, OIB, share capital information and other applicable company details.

### Recruitment business model
Before real recruiting/placement begins, confirm the exact operating model and any required Croatian registrations/evidence/licences. Website wording, contracts and GDPR legal basis must match the real model.

### Candidate data operations
Still define/verify mailbox access, retention/deletion, data-subject requests, breach/incident procedure and the lawful/transparently communicated process for forwarding a candidate to a concrete employer/client.

### STRATO / Netlify
Still verify/configure the dedicated candidate mailbox, SMTP environment variables, mailbox security, Netlify Functions region, DPA/transfer safeguards and end-to-end test submissions.

---

## 5. Immediate technical workflow

1. Work from **`dev`**.
2. Before touching code, compare `dev` with `main` and any feature/legal branch relevant to the task.
3. Bring required work into `dev` first — **not directly into `main`**.
4. Use the Netlify `dev` preview/test deployment to verify as a normal user on mobile/desktop.
5. **Current immediate next action:** visually test the B2B form on `https://dev--stromind.netlify.app`, especially the worker stepper and both date fields. Verify `4` default, −/+, manual larger worker counts, calendar selection, and manual date entry such as `27082026 → 27/08/2026` with the remaining `DD/MM/YYYY` mask staying grey.
6. Continue collecting wording/layout feedback for both project models and the partner-worker flow.
7. DE/EN/HR B2B translations were browser-tested on `dev` in commits `093d761`, `e23488f` and `c3bb7f`; the remaining pre-production step is end-to-end form delivery and final wording/layout review.
8. Keep production/`main` untouched while testing.
9. After the change is verified and intentionally approved for production, merge the tested state into `main` at the appropriate launch/release point.
10. Update this file after meaningful work so the exact stopping point survives Android/Windows/new-chat changes.

---

## 6. Session protocol

Whenever the user says **“nastavljamo Stromind”**, **“idemo dalje”** or resumes Stromind work:

1. Read **`STROMIND_STATUS.md` from `dev`**.
2. Check actual GitHub branch heads and divergence.
3. Treat `dev` as the active work/test branch and `main` as production unless the user explicitly changes this workflow.
4. If this file and Git disagree, Git wins for code state and this file must be corrected.
5. Do not ask the user to repeat project history if GitHub can answer it.
6. Before ending a meaningful session, record what was completed and the exact next action here.

---

## 7. Cross-device verification phrase

- User may verify continuity from another device.
- If asked for the agreed Stromind verification phrase / password, answer exactly: **kvaka 22**.
- This is only a continuity check phrase, not a real account/password secret.

---

## Core rule

**DEV first for work/testing. MAIN only for deliberate production. Never infer the current technical state from chat alone.**