# ComicTeach — marketing & community site

The public-facing website for [ComicTeach](https://comicteach.com) — the
open-source AI agent that turns lessons into manga.

**Stack:** Next.js 14 (App Router) · Tailwind CSS · TypeScript · deployed on
Vercel.

> The agent itself lives in a separate repo: `github.com/comicteach/comicteach`.
> This repo is *only* the marketing site.

---

## Quickstart

```bash
# 1. install
npm install                # or pnpm install / yarn

# 2. run locally
npm run dev                # → http://localhost:3000

# 3. ship a production build
npm run build && npm start
```

Node 18.17+ is required.

## Project layout

```
comicteach-site/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # Founder + story
│   ├── demo/page.tsx       # Live showcase
│   ├── docs/page.tsx       # Self-host quickstart
│   ├── opengraph-image.tsx # Auto-generated OG image
│   ├── robots.ts
│   └── sitemap.ts
├── components/             # Section components (hero, features, etc.)
├── lib/site.ts             # ★ Single source of truth for name + URLs
├── public/showcase/        # Real generated comic pages + demo video
├── tailwind.config.ts      # Whitepaper palette + serif/sans pairing
└── package.json
```

## Brand customization

Almost everything (name, URLs, founder bio, photo path, showcase assets) is
centralized in [`lib/site.ts`](./lib/site.ts). Edit that file once and the
whole site updates.

To change the **photo**, drop `public/founder.jpg`.

To change the **palette**, edit `tailwind.config.ts` (look for `colors.indigo`
and `colors.accent`).

## Deploy

### Option A — Vercel (recommended)

```bash
npm install -g vercel
vercel             # first time: links the project
vercel --prod      # deploy to comicteach.com
```

### Option B — any Node host

```bash
npm run build
npm start          # binds to PORT, defaults to 3000
```

## License

The marketing site is MIT licensed. The ComicTeach agent itself is Apache-2.0.
