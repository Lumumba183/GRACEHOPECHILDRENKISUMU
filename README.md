# Grace and Hope Children's Home — Official Website

> *"We make a life by what we give."*

Official website for **Grace and Hope Children's Home**, a registered children's home in
Nyabera Got Village, Awendo, Kenya — rescuing, sheltering, feeding, clothing, healing and
educating abandoned, orphaned and vulnerable children.

## ✨ Features

- **Home** — hero, mission, the "first 24 hours" rescue journey, programs, campaign band, stories, photo gallery
- **About Us** — vision, mission, core values, team
- **Our Programs** — the six care programs with real photos from the home
- **Donate** — impact table + all giving channels:
  - M-Pesa: `+254 718 572 537`
  - National Bank of Kenya: `ACC 01503217409300`
  - PayPal: `graceandhopechildrenhome2024@gmail.com`
  - Sendwave / Remitly / Wise: `+254 718 572 537`
- **Building Campaign** — the $200,000 storey building on Plot 361 (66 children), matched giving
- **Urgent Needs** — food, school supplies, medical, clothing, expansion
- **Stories & News** — full blog with articles from the home
- **Contact** — email, Facebook, visit info, message form
- Floating **WhatsApp button** (+254 718 572 537) — the single WhatsApp contact point site-wide

## 🛠 Tech Stack

- React 19 + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- React Router (SPA)
- Lucide icons

## 🚀 Local development

```bash
npm install
npm run dev
```

## 📦 Build

```bash
npm run build   # outputs to dist/
```

## ☁️ Deploying to Netlify

This repo is Netlify-ready — `netlify.toml` at the root already contains everything:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Steps:

1. In Netlify: **Add new site → Import an existing project → GitHub** and pick this repository.
2. Leave **Build command** and **Publish directory** *blank* in the UI so `netlify.toml` wins
   (deploy log should show `commandOrigin: config` and `publishOrigin: config`).
3. Deploy — the build creates `dist/` automatically and the SPA redirect rule keeps
   every route (`/about`, `/donate`, `/stories/...`) working.
4. Point the custom domain **www.graceandhopekenya.org** at the site in
   **Site settings → Domain management** and enable HTTPS.

## 📬 Contact

- Email: gracehope647@gmail.com
- Facebook: Grace and Hope Children's Home
- Location: Nyabera Got Village, Awendo, Kenya
