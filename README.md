# River Valley Plumbing — complete nine-page website, SEO-ready (Phase 2)

This **replaces the Phase 1 ZIP** and includes all nine HTML pages with their original styling, scripts, working internal links, and shared assets. No separate add-on installation is needed.

## Canonical production URL for this package

**https://river-valley-demo.pages.dev/**

The URL is centralized in the SEO metadata, `sitemap.xml`, and `robots.txt`. If you switch to a custom domain, **update every occurrence of `https://river-valley-demo.pages.dev`** across this project before launch and regenerate the XML sitemap. A helper is provided: `python tools/set-domain.py https://your-new-domain.com`. Do not keep two competing indexable hostnames with different canonicals.

## Directory structure

- `public/index.html` — Home (`/`)
- `public/about/index.html` — About (`/about/`)
- `public/services/index.html` — Services (`/services/`)
- `public/emergency-plumbing/index.html` — Emergency (`/emergency-plumbing/`)
- `public/drain-cleaning/index.html` — Drain cleaning (`/drain-cleaning/`)
- `public/water-heaters/index.html` — Water heaters (`/water-heaters/`)
- `public/leak-detection/index.html` — Leak detection (`/leak-detection/`)
- `public/contact/index.html` — Contact (`/contact/`)
- `public/faq/index.html` — 15 questions (`/faq/`)
- `public/sitemap.xml` — XML sitemap (all nine canonical page URLs)
- `public/robots.txt` — crawl permissions and sitemap URL
- `public/_headers` — Cloudflare Pages static security/privacy headers
- `public/assets/seo/` — favicon, touch icon, brand and social preview images
- `SEO-CHECKLIST.md` — content verification, Search Console, and domain migration checklist
- `SEO-AUDIT.md` — Phase 2 automated integrity checks

## Added SEO (each of nine pages)

- Unique, human-readable HTML title and meta description.
- Absolute self-canonical URL.
- Open Graph and Twitter/X social preview metadata.
- `robots=index,follow,max-image-preview:large` (currently **indexing allowed**).
- Schema.org JSON-LD: website/organization identity, page identity, breadcrumbs, and appropriate service definitions; 15 visible FAQ questions marked up for semantic use.
- Optimized 1200 × 630 sharing preview and small favicons.
- Preload of the common hero image and asynchronous image decoding.

## Deploy on GitHub + Cloudflare Pages

1. Create/upload the **contents** of this ZIP into the root of your GitHub repo (so `public/` is at repo root).
2. Connect the repo to a Cloudflare Pages project using the main branch.
3. Framework: None; build command: `exit 0` (or leave empty); output directory: **`public`**.
4. Test all nine URLs, then check `https://river-valley-demo.pages.dev/sitemap.xml` and `https://river-valley-demo.pages.dev/robots.txt`.
5. When ready to index **verified real-business content**, submit the sitemap URL in Google Search Console. Site ownership verification is a separate Cloudflare/Google step.

The website is static and does not require npm, a backend, or package installation.

## IMPORTANT: Demo business data and indexing

- Current web pages contain a placeholder telephone `(360) 555-1234`, email `john@rivervalleyplumbing.example`, fictional-business notices, and unverified business/person details. **Replace/verify before public indexing and launch.**
- SEO schema deliberately **omits phone number, physical street address, license, insurance, and unverified ratings** rather than implying those facts were validated.
- Free estimates and emergency arrival within 60 minutes or less during listed service hours were explicitly supplied as policy details; verify operating conditions before taking live bookings.
- This build defaults to indexable URLs because SEO was requested for the named `.pages.dev` domain. To keep a work-in-progress out of search results, add `X-Robots-Tag: noindex` to `public/_headers` under `/*` until publication, then remove that header and redeploy. Do **not** block crawling using robots.txt while relying on noindex.
- Website forms still prepare an email through the visitor's email app (not a backend submission). Connect a real form endpoint before launch.

## Local development

```bash
cd public
python -m http.server 8080
```

Open http://localhost:8080/. Schema tags and canonical URLs refer to the deployed production URL rather than localhost by design.

## Google-specific note

FAQPage schema remains semantically accurate; Google stopped displaying FAQ rich results in 2026, so do **not** expect FAQ star/accordion rich snippets from this markup. No third-party star ratings or fake testimonials were added.

See `SEO-CHECKLIST.md` and `SEO-AUDIT.md` for deployment steps and validation.
