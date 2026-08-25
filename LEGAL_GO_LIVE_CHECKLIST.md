# STROMIND j.d.o.o. — legal & GDPR go-live checklist

Status: **PRE-LAUNCH**. Do not remove Netlify access protection, enable the company form, remove the global noindex hold or expose the production site until the relevant launch blockers below are green.

## A. Company / Impressum — launch blockers

- [ ] Replace `[[VOLLSTÄNDIGE_FIRMA_LAUT_SUDSKI_REGISTAR]]` with the exact registered company name from Sudski registar.
- [ ] Insert the exact registered street, house number, postcode and seat.
- [ ] Insert director / management-board member exactly as registered.
- [ ] Insert competent Trgovački sud.
- [ ] Insert MBS / court-register number.
- [ ] Insert OIB.
- [ ] Insert registered share capital and whether it is fully paid.
- [ ] Insert business bank name + seat and business IBAN where required for the company website/business communications.
- [ ] Add PDV/VAT ID only if actually assigned; do not invent or pre-fill it.
- [ ] Insert a business telephone number that will actually be monitored.
- [ ] Remove every `[[...]]` placeholder and the red draft warning before public launch.

## B. Employment / recruitment activity — launch blockers if STROMIND performs placement

- [ ] Confirm that the company is registered for the intended employment-related / recruitment activity.
- [ ] Before beginning regulated employment-related / placement activity, obtain the required entry in the competent evidence/register of the Croatian labour ministry.
- [ ] Insert the ministry evidence number into `impressum.html` if applicable.
- [ ] Use that evidence number where Croatian law requires it in legal dealings, business documents, correspondence and job advertisements.
- [ ] For recruitment/placement for work abroad (including Germany), define the operating procedure required for the actual business model and the information that must be given to candidates.
- [ ] Do not charge jobseekers for employment-placement services where Croatian rules prohibit this.
- [ ] Confirm the exact contractual model before the first real placement: direct employment by STROMIND, temporary-agency work, subcontracting/service contract, or placement to another employer. Website text, legal bases, licences/registrations and contracts must match the real model.

## C. Candidate GDPR and application process

- [x] Privacy notice available in German, English and Croatian.
- [x] Candidate form links directly to the privacy notice.
- [x] Privacy checkbox records that the notice was read; it is not presented as consent for processing already based on another lawful basis.
- [x] Praxis-Check result is used only as support for human review.
- [x] Removed silent automatic rejection/non-submission of candidates with 0/5.
- [x] Teamleiter / Bauleiter / Projektleiter applications do not require the five-question test.
- [x] Praxis score is recalculated server-side; a candidate cannot fake `5/5` by editing a hidden client field.
- [x] Candidate CV no longer uses Netlify Forms file storage.
- [x] CV upload is optional and limited client- and server-side to PDF/DOCX and 3.5 MB.
- [x] Server checks basic PDF/DOCX file signatures in addition to filename/size.
- [x] Candidate is told not to upload ID copies, bank data, medical documents or other unnecessary sensitive data.
- [x] Application endpoint uses a honeypot and same-origin/method/content-type checks.
- [x] Application endpoint has a Netlify Function rate limit (6 POST requests / 60 seconds per IP+domain grouping).
- [ ] Define exactly who may access candidate applications/mailbox. Use least privilege; no shared personal logins.
- [ ] Confirm the controlled primary location for active candidate records. Intended initial location: restricted STROMIND business mailbox at STRATO.
- [ ] Keep unsuccessful-application records only as long as needed; organisational target is deletion no later than six months after the concrete process / last substantive contact unless a documented legal reason requires longer retention.
- [ ] Do not create a general talent pool or retain CVs for unrelated future roles without separately assessing/documenting the lawful basis.
- [ ] Before forwarding a CV/profile to a concrete external employer/client, make recipient/purpose transparent to the candidate and document the applicable lawful basis for that actual model.
- [ ] Create a simple data-subject-request procedure for access, correction, deletion, restriction, portability and objection requests sent to `info@stromind.de`.
- [ ] Create an internal incident/data-breach log and response procedure.

## D. Candidate mail endpoint / STRATO — launch blockers

- [x] Candidate form posts to `/api/apply` instead of Netlify Forms.
- [x] Netlify Function validates input, recalculates the test and forwards application + optional CV using authenticated SMTP.
- [x] SMTP host is configured for STRATO TLS (`smtp.strato.de`, port 465, secure connection).
- [x] SMTP credentials are read only from Netlify environment variables; no real secret is stored in GitHub.
- [x] Nodemailer is configured to disallow attachment loading from local paths or remote URLs.
- [ ] Create/confirm the dedicated application mailbox (planned example: `bewerbung@stromind.de`) or deliberately choose another controlled STROMIND mailbox.
- [ ] Set `STROMIND_SMTP_USER` in Netlify environment variables.
- [ ] Set secret `STROMIND_SMTP_PASS` in Netlify environment variables; never put it in GitHub, chat, HTML or client JavaScript.
- [ ] Set `STROMIND_APPLICATION_TO` to the mailbox that should actually receive candidate applications.
- [ ] Restrict mailbox access and enable the strongest authentication/security options available for the mailbox/account.
- [ ] Test one synthetic PDF CV and one synthetic DOCX CV under 3.5 MB; verify delivery, filename, score, phone and Reply-To.
- [ ] Test malformed/oversized files and verify the endpoint rejects them without sending mail.
- [ ] Review Netlify Function logs after testing and verify application body/CV content is not intentionally logged by our code.
- [ ] Delete synthetic test emails/files after verification.

## E. Netlify / processor configuration

- [x] Current Netlify site is access-gated before launch.
- [x] Netlify Forms are currently disabled before launch.
- [x] Company enquiry form retains a honeypot field.
- [x] Candidate endpoint retains a honeypot field.
- [x] Removed external `intl-tel-input` / jsDelivr dependency from the sensitive forms.
- [x] Removed reCAPTCHA from the company enquiry form for a privacy-minimal initial launch.
- [ ] In Netlify Project configuration, check the **actual Functions region** immediately before launch. Netlify's current documented default is `cmh` (Ohio) unless changed/configured otherwise.
- [ ] If the account/plan allows an EU Functions region, prefer/configure an appropriate EU region such as Frankfurt (`fra`) and redeploy; otherwise document the actual non-EEA processing and transfer safeguards.
- [ ] Save/document the Netlify Data Processing Agreement version applicable to the STROMIND account at launch.
- [ ] Document the transfer mechanism used for any Netlify processing outside the EEA (for example SCCs and/or another applicable adequacy mechanism under the current DPA).
- [ ] For the company enquiry form only: enable Netlify Forms after legal review/testing is ready.
- [ ] Submit a synthetic company enquiry and verify only the intended fields are stored/notified.
- [ ] For company enquiry copies stored in Netlify Forms, define routine deletion and target deletion no later than 30 days after transfer into the controlled business process unless a documented need requires longer retention.
- [ ] If spam becomes material, assess additional bot protection before adding a third-party CAPTCHA; update the privacy notice if a new processor/external service is introduced.

## F. Website legal visibility and SEO

- [x] Impressum page prepared for j.d.o.o. data.
- [x] Privacy pages prepared DE/EN/HR.
- [x] Main script and subpage script add persistent Impressum/privacy footer links.
- [ ] Test legal links from homepage, Karriere, Unternehmen, Leistungen, Projekterfahrung, SEO landing page and thank-you page on mobile and desktop.
- [ ] Decide whether the legal pages themselves remain `noindex`; they must remain directly and easily accessible regardless of indexing preference.
- [ ] On public launch remove the global production `X-Robots-Tag: noindex, nofollow, noarchive` hold from `_headers`.
- [ ] Re-check `robots.txt` and `sitemap.xml` after removing the global hold.
- [ ] Submit synthetic candidate and company-enquiry tests before opening public access.
- [ ] Verify the Praxis score, phone number, contact details and CV handling end-to-end.
- [ ] Only then remove Netlify visitor access protection and expose the production site publicly.

## G. Final 15-minute launch check

- [ ] Search repository for `[[` — result must be zero in public legal HTML.
- [ ] Search repository for old `obrt`, old address/company data and obsolete MBO wording — remove anything not applicable to j.d.o.o.
- [ ] Search public pages for `noindex` and confirm only intentionally non-indexed pages remain.
- [ ] Open `impressum.html`, `datenschutz.html`, `privacy.html`, `privatnost.html` directly from the production deployment.
- [ ] Test language switching and legal-link language routing.
- [ ] Test forms at Android/mobile width and Windows/desktop width.
- [ ] Confirm candidate application arrives in the intended STRATO mailbox through `/api/apply`.
- [ ] Confirm company enquiry appears in Netlify Forms only after Forms are deliberately enabled.
- [ ] Delete all synthetic test submissions/emails/files.
- [ ] Record launch date, actual Functions region and legal/privacy document versions used at launch.
