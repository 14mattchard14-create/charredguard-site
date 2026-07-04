# Charred Guard — Marketing Site

Public marketing site for Charred Guard, built as a plain Next.js app so it
can later grow into a full web app (logins, database, dynamic content) the
same way the internal Wildfire Field Notes app did, without a rebuild.

## Pages
- `/` — Home (hero, zone overview, how it works, stats, CTA)
- `/services` — Full inspection zone breakdown
- `/about` — Company story
- `/contact` — Inspection request form (currently a placeholder — see below)

## Design
Colors and structure intentionally match the Wildfire Field Notes app's day
theme (navy header `#2C4257`, tan accent `#A8876D`, light background
`#EEF2F5`) so the public site and the inspector app read as one brand.

Fonts: Archivo (display), Inter (body), IBM Plex Mono (labels/data) — loaded
via `next/font/google`, so they're fetched at build time and self-hosted in
the deployed app (no runtime call to Google's CDN).

The horizontal "zone band" (structure → 0–5ft → 5–30ft → ember zone) is the
signature visual element, used as a section divider on Home and Services. It
mirrors the real WPH zone structure from the inspector app's `criteria.js`.

## Run locally
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Deploy
Push to a GitHub repo, then import it in Vercel (same flow as the
`wildfire-notes` app). No environment variables are required for this site
as-is.

To point your existing domain at it: in Vercel, go to the project → Settings
→ Domains → add your domain, then add the DNS records Vercel gives you at
your domain's registrar.

## Next steps when you're ready to add features
- **Contact form**: `app/contact/page.js` currently just shows a success
  message locally on submit — it doesn't send anywhere yet. Wire it to an
  email service (e.g. Resend, Formspree) or a Supabase table + API route.
- **Auth / database**: add Supabase the same way the inspector app does
  (`lib/supabase.js`, `AuthProvider`), once you need logins or saved data.
- **Favicon**: `public/icon-*.png` and `public/favicon.ico` were generated
  from your logo. Swap them if you get a refined/vector version of the logo.
