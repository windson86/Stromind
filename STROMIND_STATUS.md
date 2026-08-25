# STROMIND — CANONICAL PROJECT STATUS

> **READ THIS FIRST IN EVERY NEW STROMIND CHAT / DEVICE SESSION.**
>
> Canonical operational status lives on the **`dev` branch**. Chat memory is supporting context only. Before changing code, always read this file from `dev` and verify actual GitHub branch state.

**Last updated:** 2026-08-25  
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

### Verified branch state on 2026-08-25

- `main` head observed: `555f5b0` — Hold production until company launch.
- `dev` is currently diverged from `main`: **1 commit ahead and 3 commits behind** relative to their merge base.
- The advanced legal/GDPR implementation is on `legal/jdoo-gdpr-ready` and must be integrated/rebased/cherry-picked into the `dev` workflow before it is considered part of the normal tested build.
- Do not assume work from `legal/jdoo-gdpr-ready`, `security/netlify-forms-hardening`, SEO branches, encoding branches or gallery branches is present on `dev` or `main` unless Git proves it.

---

## 2. Current product state

- Stromind.de is intentionally **not public/live** yet.
- Production is held until company formation and go-live requirements are complete.
- Existing site work includes candidate/company flows, multilingual content, SEO work and a production holding setup.
- Candidate flow goal remains: receive candidate contact data, CV (optional) and Praxis-Check result safely and with minimal unnecessary personal-data storage.

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
5. Keep production/`main` untouched while testing.
6. After the change is verified and intentionally approved for production, merge the tested state into `main` at the appropriate launch/release point.
7. Update this file after meaningful work so the exact stopping point survives Android/Windows/new-chat changes.

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

## Core rule

**DEV first for work/testing. MAIN only for deliberate production. Never infer the current technical state from chat alone.**
