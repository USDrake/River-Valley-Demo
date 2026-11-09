# River Valley Plumbing — Complete Website

This is the complete nine-page static demo website, including the latest map, icon, navigation, and mobile-layout updates.

## Upload to GitHub
1. Extract this ZIP.
2. Upload all extracted files AND folders to the repository root, preserving the folder structure. Upload the contents, not the ZIP itself.
3. Confirm index.html is at the repository root, beside assets/, about/, contact/, and the other page folders.
4. Commit the files.

## Production domain and SEO
Production URL: https://river-valley-demo.pages.dev/

All nine HTML files include page-specific canonical and Open Graph URLs. The root sitemap.xml lists all nine pages, and robots.txt points search engines to the sitemap. This is a fictional demo website.

## Cloudflare Pages
Connect the GitHub repository to Cloudflare Pages. Select no framework, leave the build command blank, and use the repository root as the output directory (enter . if a directory is required). No npm install or build step is needed.

## Included pages
- Home: /
- About: /about/
- Contact and service areas: /contact/
- Services: /services/
- FAQ: /faq/
- Drain cleaning: /drain-cleaning/
- Leak detection and pipe repair: /leak-detection/
- Water heaters: /water-heaters/
- Emergency plumbing: /emergency-plumbing/

General Plumbing Repairs remains a section of Services, not a separate page.

## Notes
This is a fictional-business demo. Its sample phone number, email address, and disclaimer are preserved. Request forms prepare an email in the visitor's email app; no submission backend is included. All images and scripts are local. No ChatGPT login or hosting service is needed to run this export.

Links start at the domain root. This package is suitable for Cloudflare Pages, a custom domain, or root-level GitHub Pages. A GitHub Pages project URL under /repository-name/ would require adapting root-relative paths first.

For local preview, serve this folder with a static web server (for example python3 -m http.server 8000) and visit http://localhost:8000. Opening individual HTML files directly may not resolve root-relative assets.
