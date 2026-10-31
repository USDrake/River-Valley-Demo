#!/usr/bin/env python3
"""Switch absolute SEO URLs from the current pages.dev host to a new HTTPS host.

Usage:
  python tools/set-domain.py https://yourdomain.com

Run from the repository root, and review canonical URLs / redirects afterward.
"""
from pathlib import Path
from urllib.parse import urlparse
import sys

OLD = 'https://river-valley-demo.pages.dev'

if len(sys.argv) != 2:
    raise SystemExit('Usage: python tools/set-domain.py https://yourdomain.com')
new = sys.argv[1].rstrip('/')
parsed = urlparse(new)
if parsed.scheme != 'https' or not parsed.netloc or parsed.path not in ('', '/') or parsed.query or parsed.fragment:
    raise SystemExit('Enter an HTTPS origin with no path, e.g. https://yourdomain.com')
if parsed.username or parsed.password:
    raise SystemExit('Credentials are not allowed in a domain.')
root = Path(__file__).resolve().parents[1]
public = root/'public'
files = sorted(public.rglob('*.html')) + [public/'robots.txt', public/'sitemap.xml']
updated = 0
for path in files:
    content = path.read_text(encoding='utf-8')
    if OLD in content:
        path.write_text(content.replace(OLD, new), encoding='utf-8')
        updated += 1
print(f'Updated {updated} HTML/robots/sitemap files to {new}')
print('Next: set Cloudflare custom domain, add redirects from old origin, verify Search Console and submit new sitemap.')
