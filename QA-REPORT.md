# River Valley Plumbing — Phase 1 integration QA

Completed checks on the 9 combined pages:

- All 9 URLs present with their own `index.html`, stylesheet, and script.
- 307 local href/image references checked for correct files or fragment targets; no missing targets.
- Shared static assets deduplicated: logo.webp, logo.png, hero.webp, footer-logo.webp, and cta-mountains.webp.
- Responsive Chromium renders completed at **320, 390, 768, 1024, and 1440 pixels** for each of the 9 pages (45 viewports total).
- No horizontal scrolling at any of these viewport sizes.
- No JavaScript page errors or broken rendered images.
- Mobile navigation menus opened successfully on all pages.
- Desktop service dropdown menus opened successfully on all pages.
- FAQ accordion tested open and closed successfully.
- Homepage About Us button goes to the full About page.
- Header and footer FAQ controls go to the dedicated FAQ page.
- Service cards with no detail pages route to the Contact page with a preselected service category.

This is a **static-site/integration QA**, not a production backend or live Cloudflare domain test. Page navigation targets were checked as relative URLs; browser rendering used embedded local assets because network and local URL navigation are restricted in the test environment. Form delivery and live deployment are not yet configured.
