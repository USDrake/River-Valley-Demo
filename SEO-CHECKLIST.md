# Phase 2 — SEO, domain and launch checklist

## Status
- Domain configured in tags and sitemap: **https://river-valley-demo.pages.dev/**
- Nine page titles/meta descriptions: added
- Canonicals and Open Graph/Twitter previews: added
- Organization/WebSite/BreadcrumbList/Service/FAQPage JSON-LD: added
- robots.txt: crawl enabled; sitemap linked
- sitemap.xml: lists nine pages
- Cloudflare Pages _headers: included
- Form delivery and actual cloud deployment: **not done**

## Complete BEFORE allowing this fictional-concept demo to be indexed publicly

1. **Verify real NAP**: phone, public business email, display name, city and any official physical address. Replace placeholders site-wide.
2. Verify any named owners/team biographies on the About page and remove concept/fictional-business notices when appropriate.
3. Verify listed areaServed communities, services, hours (weekday 8–5; Saturday by appointment; emergency Mon–Sat 6 AM–midnight), policy on free estimates, and the 60-minute arrival promise for covered addresses.
4. Verify any licensing, insurance, warranty, experience, certifications, and claim wording before adding them to the site or structured data.
5. Configure a working contact form service or backend with spam prevention and request receipt; current form uses mailto only.
6. Make sure emergency calls are handled by the actual phone number, and the disclosed emergency-hours limits are accurate.
7. Verify image usage rights (some site photographs were cropped from supplied reference images).

## Indexing control until ready

By default the generated sitemap and metadata allow indexing of `https://river-valley-demo.pages.dev`. For a private-in-practice launch, add under the `/*` block of `public/_headers`:

    X-Robots-Tag: noindex

Then remove that line and redeploy when business details are real and ready. Cloudflare's `_headers` file applies to static Pages responses. Do not simultaneously block robots crawling, because search engines need to crawl a page to see its noindex directive.

## Deployment and domain

1. Deploy to GitHub + Cloudflare Pages with output directory `public` and verify all nine `https://...` URLs.
2. Verify `https://river-valley-demo.pages.dev/robots.txt` and `/sitemap.xml` load as expected.
3. Check each canonical URL matches the public URL and returns HTTP 200.
4. Verify all links, form actions, and click-to-call links.
5. Use mobile and desktop Lighthouse/PageSpeed checks after publishing; improve any slow assets identified.
6. Validate JSON-LD syntax with schema.org tools. Do not assume Google will display rich snippets; FAQ rich results are no longer displayed.
7. Verify Google Search Console ownership, submit `sitemap.xml`, monitor indexing/coverage and Core Web Vitals.
8. After the business is real and verified, set up or claim Google Business Profile, with identical NAP, business categories, and service areas.

## When you move to a custom domain

Run `python tools/set-domain.py https://your-new-domain.com` to update the nine HTML pages, `robots.txt` and `sitemap.xml`. Also update references in the documentation and verify custom-host HTTPS, and set permanent redirects from the old `.pages.dev` URLs to the new canonical host when feasible. Re-submit the sitemap in Search Console for the new host. Avoid having both hostnames indexable with conflicting canonical signals.

## About image SEO

The website already uses descriptive alt text on content photography. Phase 2 adds dimensions to the homepage logos, a lightweight sharing preview, small favicons, hero image preload and async decoding. Photos remain local, avoiding remote dependencies. Page visual design is unchanged.
