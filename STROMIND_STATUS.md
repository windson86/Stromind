# STROMIND — CANONICAL PROJECT STATUS

> **READ THIS FIRST IN EVERY NEW STROMIND CHAT / DEVICE SESSION.**
>
> This file is the single operational source of truth for where the project currently stands. Chat memory is helpful, but it is not authoritative. Before changing code, always read this file and verify the actual Git branch / latest commit.

**Last updated:** 2026-08-25  
**Project:** stromind.de / planned Stromind j.d.o.o.  
**Lifecycle:** PRE-LAUNCH  
**Public launch:** intentionally blocked until the company/legal/GDPR launch blockers are cleared.

---

## 1. Current state

- `main` is the production branch.
- Production is intentionally held behind the temporary holding / pre-launch setup.
- Current `main` head observed on 2026-08-25: `555f5b0` — **Hold production until company launch**.
- The most advanced legal/GDPR work is currently on branch `legal/jdoo-gdpr-ready`.
- At the last verification, `legal/jdoo-gdpr-ready` had diverged from `main`: it contained substantial legal/GDPR work but was also **3 commits behind `main`**. Reconcile with current `main` before treating it as merge-ready.
- Other relevant branches present include `security/netlify-forms-hardening`, `gpdr`, `dev`, SEO branches, encoding fix branch and gallery branch. Do not assume they are merged just because the work was discussed in chat.

---

## 2. What is already implemented on `legal/jdoo-gdpr-ready`

### Legal / privacy
- Draft `impressum.html` prepared for future Stromind j.d.o.o. company data.
- Privacy notices prepared in German, English and Croatian:
  - `datenschutz.html`
  - `privacy.html`
  - `privatnost.html`
- Persistent legal/footer links were added to the site scripts.
- A detailed launch blocker list exists in `LEGAL_GO_LIVE_CHECKLIST.md`.
- Draft commercial/legal terms are in `LEGAL_UVJETI_POSLOVANJA_DRAFT.md`.

### Candidate application / CV flow
- Candidate form posts to `/api/apply` instead of using Netlify Forms for the CV.
- Candidate CV upload is optional.
- Allowed CV types are limited to PDF / DOCX.
- Size limit is 3.5 MB client- and server-side.
- Server performs basic PDF/DOCX signature validation.
- Candidate Praxis-Check score is recalculated server-side, so a hidden client field cannot fake `5/5`.
- Silent automatic rejection/non-submission for `0/5` was removed.
- Teamleiter / Bauleiter / Projektleiter applications do not require the five-question test.
- Candidate is warned not to upload unnecessary sensitive documents/data.
- Application endpoint contains honeypot, method/origin/content-type checks and rate limiting.
- SMTP delivery is implemented through a Netlify Function using environment variables; real credentials are not committed to GitHub.
- STRATO SMTP defaults are prepared (`smtp.strato.de`, TLS/465).

### Company form / Netlify privacy-hardening
- Netlify Forms are intentionally disabled during pre-launch.
- Company form retains a honeypot.
- External `intl-tel-input` / jsDelivr dependency was removed from sensitive forms.
- reCAPTCHA was removed from the company enquiry flow for a privacy-minimal initial launch.

---

## 3. Launch blockers still open

### Company identity / Impressum
Do **not** publish the legal pages as final until the actual j.d.o.o. registration data exists and every placeholder is replaced, including where applicable:
- exact registered company name
- registered address / seat
- director / management board member
- competent commercial court
- MBS / register number
- OIB
- share capital information
- business contact details
- business bank / IBAN information where legally required for the final setup
- VAT/PDV ID only if actually assigned

### Recruitment / employment business model
Before the first real placement / recruitment activity:
- confirm the exact registered business activity
- confirm any required Croatian ministry registration/evidence for employment-related placement activity
- define the actual operating model: direct employment by Stromind, temporary-agency work, subcontract/service work, or placement to another employer
- ensure website wording, contracts, registrations and GDPR legal basis match that real model

### Candidate data operations
Still define / verify:
- exactly who may access candidate applications
- controlled primary mailbox/location for active candidate records
- retention/deletion process (current organisational target: unsuccessful application records deleted no later than six months after the concrete process / last substantive contact unless a documented legal reason requires longer)
- data-subject request process
- incident / data-breach log and response procedure
- process for transparently forwarding a candidate profile/CV to a concrete external employer/client

### STRATO / Netlify configuration
Still required before live candidate intake:
- create/confirm the dedicated Stromind application mailbox (planned example: `bewerbung@stromind.de`, final choice not yet fixed)
- set `STROMIND_SMTP_USER`
- set secret `STROMIND_SMTP_PASS`
- set `STROMIND_APPLICATION_TO`
- restrict mailbox access and use strongest available authentication/security
- verify actual Netlify Functions region; prefer an appropriate EU region if the account/plan supports it
- document the applicable Netlify DPA and transfer safeguards for any processing outside the EEA

### End-to-end tests
Before launch, test at minimum:
- synthetic PDF CV under 3.5 MB
- synthetic DOCX CV under 3.5 MB
- filename, score, phone/contact fields and Reply-To delivery
- malformed / oversized file rejection
- company enquiry form once deliberately enabled
- legal links on mobile and desktop
- language routing for legal pages
- Android/mobile and Windows/desktop layouts
- absence of intentional logging of CV/application body by our code
- deletion of all synthetic test emails/files/submissions afterwards

---

## 4. SEO / public launch state

- SEO work for electrician jobs in Germany / Balkan audience already exists in the repository history.
- Production remains intentionally held before company launch.
- Do not remove the global production `noindex` / holding protections until legal, privacy, form and end-to-end blockers are green.
- At launch, re-check `robots.txt`, `sitemap.xml`, legal page accessibility and the final production crawl/index state.

---

## 5. Immediate next technical step

**Do not start a new feature first.**

1. Read this file.
2. Re-check `main` and `legal/jdoo-gdpr-ready` heads.
3. Reconcile the legal/GDPR branch with the latest `main` because it was last observed 3 commits behind.
4. Review the resulting diff and ensure production holding behavior is preserved.
5. Continue with the first unchecked item in `LEGAL_GO_LIVE_CHECKLIST.md` that can be completed without final j.d.o.o. registration data.
6. Update this `STROMIND_STATUS.md` whenever a meaningful task is completed, a branch is merged, or the next action changes.

---

## 6. Session protocol — prevents Android / Windows / new-chat drift

Whenever the user says **“nastavljamo Stromind”**, **“idemo dalje”**, or otherwise resumes this project:

1. Do **not** ask the user to repeat the project history if GitHub is available.
2. Read `STROMIND_STATUS.md` first.
3. Check the actual GitHub repository state: relevant branch heads, latest commit(s), and outstanding branch divergence.
4. If status file and Git disagree, **Git wins for code state** and this file must be corrected.
5. Use chat/project memory only as supporting context, never as the sole source of current technical state.
6. Before ending a meaningful work session, update this file with:
   - what was completed
   - branch / merge state
   - remaining blocker
   - exact next action

This protocol applies regardless of whether the user continues from Android, Windows, laptop, an old chat or a new chat inside the Stromind project.

---

## 7. Important reference files

- `STROMIND_STATUS.md` — canonical current project status
- `LEGAL_GO_LIVE_CHECKLIST.md` — detailed legal/GDPR/pre-launch checklist
- `LEGAL_UVJETI_POSLOVANJA_DRAFT.md` — draft commercial/legal terms
- `impressum.html` — j.d.o.o. Impressum draft
- `datenschutz.html` / `privacy.html` / `privatnost.html` — privacy notices
- `netlify/functions/submit-application.mts` — candidate submission / CV mail endpoint
- `_headers` — production indexing / holding-related headers

---

## Core project rule

**Never infer “where we stopped” from chat alone. Verify GitHub first.**
