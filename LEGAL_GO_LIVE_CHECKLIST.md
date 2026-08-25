# STROMIND j.d.o.o. — legal & GDPR go-live checklist

Status: PRE-LAUNCH. Do not remove access protection or enable Forms until all launch blockers are green.

## A. Company / Impressum — launch blockers

- [ ] Replace `[[VOLLSTÄNDIGE_FIRMA_LAUT_SUDSKI_REGISTAR]]` with the exact registered company name from Sudski registar.
- [ ] Insert the exact registered street, house number, postcode and seat.
- [ ] Insert director / management-board member exactly as registered.
- [ ] Insert competent Trgovački sud.
- [ ] Insert MBS / court-register number.
- [ ] Insert OIB.
- [ ] Insert registered share capital and whether it is fully paid.
- [ ] Insert business bank name + seat and business IBAN as required for the company website/business communications.
- [ ] Add PDV/VAT ID only if actually assigned; do not invent or pre-fill it.
- [ ] Insert a business telephone number that will actually be monitored.
- [ ] Remove all `[[...]]` placeholders and the red draft warning before public launch.

## B. Employment / recruitment activity — launch blockers if STROMIND performs placement

- [ ] Confirm that the company is registered for the intended employment-related / recruitment activity.
- [ ] Before beginning such activity, obtain entry in the competent evidence/register of the Croatian labour ministry.
- [ ] Insert the ministry evidence number into `impressum.html`.
- [ ] Use that evidence number where Croatian law requires it in legal dealings, business documents, correspondence and job advertisements.
- [ ] For recruitment for work abroad (including Germany), define the operational procedure for giving candidates required information about living/working conditions and applicable rights/obligations.
- [ ] Do not charge jobseekers for employment-placement services.
- [ ] Confirm the exact contractual model before the first placement: direct employment by STROMIND, temporary-agency work, subcontracting/service contract, or placement to another employer. The website/privacy text and licences must match the real model.

## C. Candidate GDPR process

- [x] Privacy notice available in German, English and Croatian.
- [x] Candidate form links directly to the privacy notice.
- [x] Privacy checkbox records that the notice was read; it is not presented as consent for processing necessary to handle the application.
- [x] Praxis-Check result is used only as support for human review.
- [x] Removed silent automatic rejection/non-submission of candidates with 0/5.
- [x] Teamleiter / Bauleiter / Projektleiter applications do not require the five-question test.
- [x] CV upload is optional and limited client-side to PDF/DOC/DOCX and 5 MB.
- [x] Candidate is told not to upload ID copies, bank data, medical documents or other unnecessary sensitive data.
- [ ] Define who may access applications. Use least privilege; no shared personal logins.
- [ ] Define the controlled primary location for active application records after receipt.
- [ ] Delete Netlify form/submission copies regularly and no later than 30 days after transfer into the controlled workflow.
- [ ] Keep unsuccessful-application records generally no longer than six months after the relevant process / last substantive contact unless a documented lawful reason requires longer retention.
- [ ] Do not create a general talent pool or keep CVs for unrelated future roles without a separate documented lawful basis where required.
- [ ] Do not forward a candidate profile/CV to an unspecified third party. For a specific employer/project, make the intended recipient/purpose transparent to the candidate before or when the sharing occurs.
- [ ] Create a simple data-subject-request procedure for access, correction, deletion, restriction, portability and objection requests sent to `info@stromind.de`.
- [ ] Create an internal incident/breach log and response process.

## D. Netlify / STRATO / processors

- [x] Netlify Forms currently disabled before launch.
- [x] Current Netlify site is access-gated before launch.
- [x] Forms use a honeypot field.
- [x] Removed external `intl-tel-input` / jsDelivr dependency from the two sensitive forms.
- [x] Removed reCAPTCHA from the company enquiry form for the privacy-minimal initial launch.
- [ ] Save/document the Netlify Data Processing Agreement version applicable to the STROMIND account at launch.
- [ ] Document the transfer mechanism used for Netlify processing outside the EEA (e.g. SCCs / applicable adequacy mechanism under the current DPA).
- [ ] Confirm the STRATO business mailbox is active at `info@stromind.de` and restrict mailbox access.
- [ ] Test that Netlify form notifications contain only the intended fields and do not expose CV URLs to unintended recipients.
- [ ] Review Netlify submission retention after the first test submission and verify manual deletion works.
- [ ] If spam becomes material, assess additional bot protection before adding a third-party CAPTCHA; update the privacy notice if a new processor/external service is introduced.

## E. Website legal visibility and SEO

- [x] Impressum page prepared for j.d.o.o. data.
- [x] Privacy pages prepared DE/EN/HR.
- [x] Main script and subpage script add persistent Impressum/privacy footer links.
- [ ] Test legal links from homepage, Karriere, Unternehmen, Leistungen, Projekterfahrung, SEO landing page and thank-you page on mobile and desktop.
- [ ] Decide whether legal pages remain `noindex`; this is acceptable if they stay directly accessible, but verify final SEO preference.
- [ ] On public launch remove the global production `X-Robots-Tag: noindex, nofollow, noarchive` hold from `_headers`.
- [ ] Re-check `robots.txt` and `sitemap.xml` after removing the hold.
- [ ] Only after the company/legal launch blockers are complete: enable Netlify Forms.
- [ ] Submit test candidate and company enquiry using synthetic/non-personal test data.
- [ ] Verify the Praxis score, phone number, contact details and CV handling end-to-end.
- [ ] Delete all test submissions/files immediately after testing.
- [ ] Only then remove Netlify visitor access protection and expose the production site publicly.

## F. Final 15-minute launch check

- [ ] Search repository for `[[` — result must be zero in public legal HTML.
- [ ] Search repository for old `obrt`, old address/company data and obsolete MBO wording — remove anything not applicable to j.d.o.o.
- [ ] Search production pages for `noindex` and confirm only intentionally non-indexed pages remain.
- [ ] Open `impressum.html`, `datenschutz.html`, `privacy.html`, `privatnost.html` directly from production.
- [ ] Test language switching and legal link language routing.
- [ ] Test forms on Android/mobile width and Windows/desktop width.
- [ ] Confirm `info@stromind.de` receives notifications.
- [ ] Confirm Netlify Forms dashboard shows only expected test fields.
- [ ] Delete test submissions.
- [ ] Record launch date and the legal/privacy document version used at launch.
