# Heal Health AI Website

A polished, responsive, investor-ready landing page for **Heal Health AI**.

## What is included

- `index.html` — full website markup
- `styles.css` — complete brand styling and responsive layout
- `script.js` — interactivity for navigation, platform tabs, ROI calculator, reveal animations, and demo form handling
- `assets/logo.svg` — editable SVG logo
- `assets/favicon.svg` — browser favicon
- `assets/og-image.svg` — Open Graph preview image
- `robots.txt` — basic crawler settings
- `sitemap.xml` — starter sitemap
- `netlify.toml` — simple Netlify deployment config with security headers
- `package.json` — simple local server script

## Brand system used

- Primary: `#38BDF8` Soft Sky Blue
- Primary Dark: `#0369A1` Deep Ocean Blue
- Secondary: `#0F766E` Deep Teal
- Accent: `#A7F3D0` Mint Green
- Background: `#F8FCFF`
- Surface/Card: `#FFFFFF`
- Primary Text: `#0F172A`
- Secondary Text: `#475569`
- Font pairing: Plus Jakarta Sans for headings, Inter for UI/body text

## How to run locally

Open `index.html` directly in your browser, or run a simple local server:

```bash
cd heal_health_ai_website
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

Or run:

```bash
npm run dev
```

## Notes for production

1. The contact form is front-end only. Connect it to HubSpot, Typeform, Airtable, or your backend.
2. External market/source links are included in the problem and market sections.
3. Google Fonts are loaded from `fonts.googleapis.com`. For a fully offline deployment, self-host the fonts separately.
4. Replace placeholder claims and pilot language with actual customer proof as it becomes available.
5. Update `sitemap.xml` and `robots.txt` with your final production domain if it is not `healhealth.ai`.
6. This static site can be deployed to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static hosting service.

## Suggested next improvements

- Add real product screenshots once MVP screens are ready.
- Add customer proof / pilot metrics.
- Add a short demo video section.
- Connect analytics and CRM form tracking.
- Add privacy policy and terms pages before public launch.
