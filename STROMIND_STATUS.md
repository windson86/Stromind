# STROMIND — CANONICAL PROJECT STATUS

> **READ THIS FIRST IN EVERY NEW STROMIND CHAT / DEVICE SESSION.**
>
> Canonical operational status lives on the **`main` branch**. Chat memory is supporting context only. Before changing code, always read this file from `main` and verify actual GitHub state.

**Last updated:** 2026-08-27  
**Project:** stromind.de / planned Stromind j.d.o.o.  
**Lifecycle:** PUBLIC BETA / PRE-REGISTRATION

---

## 1. Branch workflow

- **`main` = active working branch and source of truth.**
- Netlify visitor access is public; no team SSO/site password is required.
- `dev` is historical/test only and must not be assumed newer than `main`.
- Use short feature branches/PRs for meaningful changes, then merge into `main`.
- Keep the global `X-Robots-Tag: noindex, nofollow, noarchive` during public beta until indexing is deliberately enabled.
- Git state wins over chat memory.

---

## 2. Company data

- Working/preparation name: **Stromind j.d.o.o.**
- The company must **not** be represented publicly as already registered until the Croatian court-register entry exists.
- **OIB:** add when issued/confirmed.
- **VAT / PDV ID:** add later if/when applicable and confirmed.
- Final registered address, director/register/court details, share capital and other legally required company/legal-notice details remain pending.

---

## 3. Current public-beta form mode

### ACTIVE: company project inquiries only

The public `unternehmen.html` flow is intentionally limited to companies that:

- have a project; and
- need skilled workers / project capacity.

The active B2B project form captures:

- company name;
- optional contact person;
- business email;
- optional phone;
- company country and optional website;
- project location;
- worker count with **− / 4 / +** stepper, editable **1–500**;
- desired start date with **DD/MM/YYYY** typing + calendar;
- project duration;
- required roles / professions;
- experience / qualification requirements;
- German-language requirement;
- work / shift model;
- accommodation;
- transport / vehicle;
- tools;
- **B2B budget / Verrechnungssatz in net EUR/hour**;
- project description.

The form explicitly tells companies **not to enter personal data of individual workers or candidates**.

### DISABLED during beta

The following are disabled and must not collect submissions:

- candidate applications;
- CV upload;
- Praxis-Check submissions;
- direct-hire candidate flow;
- partner-agency / own-workers-for-projects flow;
- worker/CV submissions from third parties.

`karriere.html` currently contains no active application form and shows a public-beta disabled notice instead.

---

## 4. Netlify Forms / anti-spam

- Netlify Forms detection is enabled for the site as of 2026-08-27.
- The current redeploy is intended to register the new B2B form definition after form detection was enabled.
- The only form that should remain in the deployed HTML is **`unternehmen-projekt`**.
- Keep honeypot protection.
- Keep Netlify CAPTCHA on the company project form.
- Historical Netlify form definitions from older candidate/company forms must be treated as legacy backend objects until explicitly deleted in Netlify.
- Do not add candidate/CV forms back until the candidate legal/GDPR and data-handling flow is deliberately re-enabled.

---

## 5. Legal / GDPR preparation

Advanced legal/GDPR preparation remains on `legal/jdoo-gdpr-ready` and is not automatically part of `main` until explicitly integrated.

Prepared there include:

- Impressum draft;
- DE/EN/HR privacy pages;
- legal/footer links;
- candidate `/api/apply` design;
- server-side Praxis score recalculation;
- CV validation/signature checks;
- honeypot/request validation;
- rate limiting;
- SMTP/Netlify Function delivery design;
- legal go-live checklist and draft terms.

Candidate/CV processing stays off until the legal/controller identity and operational data-handling requirements are satisfied.

---

## 6. Immediate workflow

1. Work from **`main`** as canonical state.
2. Public beta remains externally reachable.
3. Keep **noindex** active.
4. Allow only the B2B project inquiry form to submit.
5. Keep candidates/CV/Praxis-Check/direct-hire/partner-worker flows disabled.
6. Delete the historical candidate form definitions from Netlify before treating the backend as fully B2B-only.
7. Use external feedback (including Reddit/croIT) to find UX, wording and technical bugs.
8. Add legal/GDPR pages and final company identity once registration data is available/appropriate.
9. Update this file after meaningful work.

---

## 7. Session protocol

Whenever the user resumes Stromind work:

1. Read **`STROMIND_STATUS.md` from `main`**.
2. Check actual GitHub `main` head and relevant branches.
3. Git wins over chat memory.
4. Do not ask the user to repeat project history if GitHub can answer it.
5. Record the exact stopping point after meaningful work.

---

## 8. Cross-device verification phrase

If asked for the agreed Stromind continuity phrase, answer exactly: **kvaka 22**.

---

## Core rule

**MAIN is canonical. PUBLIC BETA is open. ONLY B2B PROJECT INQUIRIES are active in deployed HTML; legacy Netlify form objects must be cleaned separately.**
