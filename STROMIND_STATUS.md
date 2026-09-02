# STROMIND — CANONICAL PROJECT STATUS

> **READ THIS FIRST IN EVERY NEW STROMIND CHAT / DEVICE SESSION.**
>
> Canonical operational status lives on the **`dev` branch**. Chat memory is supporting context only. Before changing code, always read this file from `dev` and verify actual GitHub/Netlify state.

**Last updated:** 2026-09-02  
**Project:** stromind.de / Stromind j.d.o.o. in formation  
**Lifecycle:** PUBLIC TEST / PRE-LAUNCH

---

## 1. Branch workflow — IMPORTANT

- **`dev` = active working/test branch.** All normal changes and browser testing happen here first.
- **`main` = production branch** currently served to users at `https://stromind.de`.
- Production is publicly reachable, but launch/legal work is still incomplete.
- Do not use `main` for everyday development.
- Only promote tested/approved `dev` work to `main` deliberately.
- `main` and `dev` have diverged historically; do not blindly merge or reset `dev`.
- Preserve the current company-form and candidate/CV work on `dev` during any reconciliation.

---

## 2. Company formation / launch timing

- Stromind j.d.o.o. is still in formation.
- Planned primary activity: **78.10.0 — employment/recruitment agency activity**.
- Planned additional activities discussed for registration before launch:
  - **43.60.0** — project/business intermediation for specialized construction services;
  - **82.40.0** — broader business-support intermediation for future non-construction cases.
- Exact legal/NKD fit and contract wording must be professionally verified before first real invoicing.
- User intends to finish formation/financial activation around **15.09.2026**, rather than forcing commercial activity before then.
- Initial private risk budget discussed: **800 EUR**, intended to be introduced as a documented owner/member loan to Stromind rather than locking the whole amount as share capital.

Do not invent OIB, court/register number, VAT ID or other company identifiers before they exist.

---

## 3. Business model clarified — 2026-09-02

Stromind is intended to be an **intermediary**, not an employer/leasing company and not the contractor performing the electrical works.

### Project intermediation

- A DE company tells Stromind it has a project and needs a certain number of electricians.
- Stromind finds a suitable Croatian company that can take the project.
- After introduction, the **DE company and HR company communicate directly and conclude their own contract**.
- Stromind does not invoice the DE project's hourly rate and does not participate in payroll, A1, accommodation, work instructions or execution of the works.
- Current commercial concept: **180 EUR per active project place / worker / month** for a project introduced by Stromind.
- The 180 EUR project fee follows the **active project place**, not the identity of a specific worker. If the HR company replaces workers but continues to use the project capacity introduced by Stromind, the project fee continues for the occupied places during the agreed protection/fee period.

### Candidate / employment intermediation

- If the HR company does not have enough of its own workers, Stromind can offer vetted candidates from its candidate base.
- Current commercial concept: **+250 EUR per Stromind-introduced candidate / month** during an agreed fixed period.
- The 250 EUR candidate fee follows the **candidate/employment relationship with that HR company**, independently of which project the HR company later assigns the candidate to.
- Moving a Stromind candidate from a Stromind-introduced project to another project must not remove the candidate fee.
- Candidate and project fees are therefore independent.

Example: 7 active places on a Stromind project = 7 × 180 EUR/month. If 2 employed people were also introduced by Stromind, add 2 × 250 EUR/month for the agreed candidate-fee period.

### Quality / relationship principle

- Stromind does not need workers' salary/hourly-rate data for its own pricing model.
- Stromind should keep direct periodic contact with candidates it introduced to verify that they are still with the employer and to understand how they are being treated on the project.
- This contact is also a quality-control mechanism for the internal database of trusted workers and trusted partner companies.
- Contracts need anti-bypass/protection-period language so that direct HR ↔ DE communication, which is desired, does not eliminate Stromind's agreed intermediation fee.

### Legal boundary

- Stromind must be described and operated as **intermediation**, not as worker leasing/Arbeitnehmerüberlassung.
- Do not use language such as “Stromind ustupa radnika” in final contracts/marketing when the worker is actually employed by the HR company; use wording equivalent to “Stromind introduced/mediated the candidate”.
- The HR ↔ DE contractual and operational relationship must separately comply with German law (including AÜG/Werkvertrag distinctions where relevant). Actual execution matters more than labels.
- Before first real contract/invoice, have Croatian/German legal/accounting professionals verify the final model and invoicing language.

---

## 4. Homepage language + ad-readiness — 2026-09-02

Changes now committed on **`dev`**:

- `1892346` — **Set Croatian as default homepage language**
  - homepage static/fallback HTML is Croatian;
  - `<html lang="hr">`;
  - HR is the initially active language;
  - Croatian meta description / Open Graph description;
  - DE and EN remain available.

- `6a6267e` — **Default homepage to Croatian and preserve ad attribution**
  - homepage JavaScript default/fallback language changed from DE to HR;
  - `?lang=de|en|hr` still overrides the default;
  - selected language still persists through `localStorage`;
  - internal HTML links now carry the active `lang` parameter;
  - common ad-attribution parameters are preserved when visitors continue from the landing page to internal forms/pages:
    - `utm_source`, `utm_medium`, `utm_campaign`, `utm_id`, `utm_term`, `utm_content`;
    - `gclid`, `gbraid`, `wbraid`, `msclkid`.

Advertising implication:

- general/direct visitors can land on Croatian by default;
- future DE ads can point directly to `/?lang=de` (plus campaign parameters);
- EN campaigns can use `/?lang=en`;
- attribution parameters should survive the first internal click to the form, ready for later analytics/form capture work.

Do not add Google/Meta tracking IDs or connect personal accounts until the dedicated Stromind business account/configuration is ready.

---

## 5. Company/B2B form on `dev`

Keep the current `dev` B2B work. It includes:

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

Important: the business model was clarified after the current form was designed. Before launch, review the B2B form wording/fields so it reflects the new **project intermediation + candidate intermediation** model and does not unnecessarily ask for data Stromind does not need.

---

## 6. Candidate/CV form on `dev`

Current candidate form includes:

- name, email and phone;
- years of experience;
- preferred work countries and German regions;
- 5-question Praxis-Check;
- optional message;
- optional PDF/Word CV upload (current Netlify form limit 5 MB);
- DE/EN/HR support;
- centered application panel.

Relevant fixes already on `dev`:

- `a1c3d55` — harden candidate form validation on mobile;
- `ef80dbc` — localized required-field validation messages;
- `82b7337` — floating validation messages / invalid-state styling;
- `2acb1e0` — Firefox radio-group validation fix;
- `dd54edf` — prevent submit button locking when validation already blocked submission.

A synthetic PDF application successfully reached Netlify in Firefox Android testing. Samsung Chrome still needs deliberate valid/invalid retesting after current deploys.

---

## 7. Existing homepage/browser work to preserve

- `b53e80a` — German homepage copy polishing:
  - hero: **„Wir verbinden Fachkräfte mit Ihrem Projekt.“**
  - company copy: **„Senden Sie uns Ihre Projektanfrage. Wir prüfen Ihren Bedarf und melden Ihnen verfügbare Kapazitäten zurück.“**
- `37a790c` and `a49e3a3` — protect STROMIND brand and DE / EN / HR selector from browser auto-translation (`translate="no"`, `notranslate`).

The new HR-default change must not remove the polished German copy when `?lang=de` is selected.

---

## 8. Netlify forms / test-data note

Current form infrastructure recognizes `bewerbung-karriere` and the company forms. Candidate submissions on `dev` are test submissions while the flow is being validated.

Privacy hygiene:

- prefer synthetic PDFs and fake/test data during technical tests;
- do not use real CVs unless necessary;
- remove test submissions when they are no longer needed.

---

## 9. Legal / GDPR prepared work

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

Before real recruiting/CV processing becomes production, verify final company identity, controller wording, retention/deletion process, mailbox security, forwarding basis and end-to-end form delivery.

---

## 10. Immediate next actions

1. Verify the latest `dev` deploy contains `1892346` and `6a6267e`.
2. On mobile, open the homepage without query parameters: it must start in **HR** without a German content flash.
3. Test `?lang=de` and `?lang=en`; both must still translate the homepage correctly.
4. Test an ad-style URL such as `/?lang=de&utm_source=test&utm_medium=cpc&utm_campaign=stromind-test`, then tap a company/candidate CTA and confirm language + UTM parameters remain in the next URL.
5. Retest Samsung + Chrome candidate validation/submission and Firefox radio behavior.
6. Review `unternehmen.html` against the newly clarified business model; remove or reword fields that imply Stromind sells worker hours or directly supplies/leases labor.
7. Before real ads: finalize legal/GDPR integration, company identifiers, business mailbox, conversion measurement and final DE/HR landing copy.
8. Reconcile `main` and `dev` deliberately later; never reset or overwrite wanted `dev` work.
9. Promote to `main` only after explicit approval.

---

## 11. Session protocol

Whenever the user resumes Stromind work:

1. Read **`STROMIND_STATUS.md` from `dev`**.
2. Verify actual `dev` and `main` heads and Netlify deploy state.
3. Treat `dev` as work/test and `main` as production.
4. Git/Netlify beat chat memory for technical state.
5. Do not ask the user to repeat project history if GitHub/Netlify can answer it.
6. Update this file after meaningful work.

---

## 12. Cross-device verification phrase

If the user asks for the agreed Stromind verification phrase/password, answer exactly:

**kvaka 22**

This is only a continuity check phrase, not a real credential.

---

## Core rule

**DEV first for work/testing. MAIN only for deliberate production. Preserve the B2B/candidate work and keep Stromind operationally an intermediary, not a worker-leasing employer.**
