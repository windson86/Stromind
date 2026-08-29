# STROMIND — CANONICAL PROJECT STATUS

> **READ THIS FIRST IN EVERY NEW STROMIND CHAT / DEVICE SESSION.**
>
> Canonical operational status lives on the **`dev` branch**. Chat memory is supporting context only. Before changing code, always read this file from `dev` and verify actual GitHub/Netlify state.

**Last updated:** 2026-08-29  
**Project:** stromind.de / Stromind j.d.o.o. in formation  
**Lifecycle:** PUBLIC TEST / PRE-LAUNCH

---

## 1. Branch workflow — IMPORTANT

- **`dev` = active working/test branch.** All normal changes and browser testing happen here first.
- **`main` = production branch** currently served to users at `https://stromind.de`.
- Production is publicly reachable, but indexing remains intentionally disabled (`noindex`) while launch/legal work is incomplete.
- Do not use `main` for everyday development.
- Only promote tested/approved `dev` work to `main` deliberately.
- If branch history diverges, do not blindly merge `dev` into `main`; reconcile intentionally and preserve production safety decisions.

### Verified branch state — 2026-08-28

Before this status commit, GitHub reported:

- `main`: `97aa4f7` — **Add persistent floating labels to form fields**
- `dev`: `82b7337` — **Style localized floating validation errors**
- comparison `main...dev`: **diverged**
- `dev` ahead by **23** commits and behind by **19** commits
- aggregate changed files: `STROMIND_STATUS.md`, `karriere.html`, `responsive.css`, `subpages.js`, `unternehmen.html`

The divergence sounds large in commit count but the live surface is concentrated in those files. Do not reset `dev`; it contains the current company-form and candidate-form work we want to keep.

---

## 2. Current public / production state (`main`)

- `https://stromind.de` is publicly reachable.
- No Netlify password or team-login requirement is enabled.
- Search-engine indexing is intentionally blocked for now.
- Current production is the safer B2B-oriented public beta.
- Candidate/CV functionality is not the production baseline yet; candidate work is being tested on `dev`.

Company formation is now in progress. User reports that the remaining company identity items are the final **OIB** and **court/register entry number**. Do not invent or publish those values before they exist.

---

## 3. Company/B2B form on `dev`

Keep the current `dev` B2B work. It includes the expanded company flow and today's UX work:

- project / workers needed;
- own workers / partnership prototype;
- temporary project staffing vs direct-hire model;
- project location, worker count, start, duration, roles, experience, language, shifts, accommodation, transport and tools;
- B2B hourly-rate / salary fields according to selected model;
- partner-worker availability and profile fields;
- worker steppers defaulting to `4`, editable up to `500`;
- masked/calendar date controls;
- DE/EN/HR translations;
- persistent floating labels;
- reversible language switching through `?lang=de|en|hr`.

These company-form changes are intentionally retained on `dev` and must not be lost during branch reconciliation.

---

## 4. Candidate/CV form on `dev`

The candidate form currently contains:

- name, email and phone;
- years of experience;
- preferred work countries and German regions;
- 5-question Praxis-Check;
- optional message;
- optional PDF/Word CV upload (current Netlify form limit 5 MB);
- DE/EN/HR user-facing language support;
- centered application panel.

### Mobile/Firefox validation fix — 2026-08-28

A real Firefox Android test exposed that an omitted required field could make the submit button look non-functional even though Chrome/Brave normally jump back to the missing field.

Changes now on `dev`:

- `a1c3d55` — **Harden candidate form validation on mobile**
  - `experience` is now a true numeric field;
  - default value is `0`;
  - minimum value is `0`;
  - mobile receives numeric input behavior;
  - browser-independent invalid-field highlighting/focus behavior was added;
  - Praxis-Check score no longer determines whether the form may be submitted; even `0/5` remains a valid application result and is recorded rather than blocking the application.

- `ef80dbc` — **Add localized candidate validation messages**
  - required-field messages are now explicit and language-aware:
    - HR: **Ovo polje je obavezno.**
    - DE: **Dieses Feld ist erforderlich.**
    - EN: **This field is required.**
  - candidate validation errors are rendered independently of browser-native Firefox/Chrome behavior.

- `82b7337` — **Style localized floating validation errors**
  - ordinary candidate inputs show the message as a small red floating label across the input border;
  - invalid fields receive a red border;
  - grouped controls such as Praxis questions/work-location blocks show the validation message within the block instead of relying only on the browser popup.

- `2acb1e0` — **Fix Firefox radio-group validation**
  - choosing any radio answer now clears a stale required/custom-validity error from the entire question group;
  - wrong Praxis answers remain valid answers and never block application submission.

A Firefox Android submission using the synthetic `STROMIND_TEST_UPLOAD.pdf` successfully reached Netlify during testing. Earlier attempts that did not reach Netlify are the reason for the explicit validation UX above.

### Browser-translation protection — 2026-08-29

Chrome/Google browser translation was observed translating the brand and language codes incorrectly (for example `STROMIND` and `DE / EN / HR`).

- `37a790c` — subpages now mark `.brand` and `.lang` as `translate="no"` plus `notranslate`.
- `a49e3a3` — the same protection is applied on the homepage script.
- Browser translation remains available for normal page content; only the STROMIND brand and language selector are protected.

---

## 5. Netlify forms / test-data note

Current form infrastructure recognizes `bewerbung-karriere` and the company forms. Candidate submissions on `dev` are test submissions while this flow is being validated.

For privacy hygiene:

- prefer synthetic PDFs and fake/test data during technical tests;
- do not use real CVs unless necessary;
- delete test submissions after the current validation round when they are no longer needed.

---

## 6. Legal / GDPR prepared work

Advanced legal/GDPR work exists on `legal/jdoo-gdpr-ready` and is **not automatically part of `dev`** until intentionally integrated and tested. It includes:

- go-live checklist;
- draft terms;
- Impressum;
- DE/EN/HR privacy pages;
- legal/footer links;
- server-side candidate endpoint design;
- server-side Praxis score recalculation;
- PDF/DOCX file checks and smaller hardened upload limit;
- honeypot/request validation/rate limiting;
- authenticated SMTP delivery design;
- Netlify/STRATO environment-variable design with no real secret committed.

Before real recruiting/CV processing becomes public production, final company identity, controller wording, retention/deletion process, mailbox security, forwarding basis and end-to-end form delivery must be verified.

---

## 7. Immediate next actions

1. Verify the latest `dev` branch deploy contains the Firefox radio fix and browser-translation protection.
2. Retest `https://dev--stromind.netlify.app` on **Firefox Android**, including a deliberately wrong Praxis answer; it must not show “required” after an answer is selected.
3. Retest the same path in Brave/Chrome Android to ensure no regression.
4. Turn on Chrome/Google browser translation and confirm **STROMIND** and **DE / EN / HR** remain unchanged while ordinary content is translated.
5. Submit one synthetic PDF test and verify it reaches `bewerbung-karriere` correctly.
6. Delete no-longer-needed test submissions after testing.
7. Separately continue B2B/company-form visual and end-to-end tests.
8. Reconcile `main` into `dev` deliberately later; preserve all wanted B2B changes and candidate/CV work while retaining production legal/safety intent.
9. Promote to `main` only after explicit approval.

---

## 8. Session protocol

Whenever the user resumes Stromind work:

1. Read **`STROMIND_STATUS.md` from `dev`**.
2. Verify actual `dev` and `main` heads and Netlify deploy state.
3. Treat `dev` as work/test and `main` as production.
4. Git/Netlify beat chat memory for technical state.
5. Do not ask the user to repeat project history if GitHub/Netlify can answer it.
6. Update this file after meaningful work.

---

## 9. Cross-device verification phrase

If the user asks for the agreed Stromind verification phrase/password, answer exactly:

**kvaka 22**

This is only a continuity check phrase, not a real credential.

---

## Core rule

**DEV first for work/testing. MAIN only for deliberate production. Never lose today's B2B form work during branch reconciliation.**