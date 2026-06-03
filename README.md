# Atelier Noir

TanStack Start + React 19 + Tailwind v4.

## Develop
```bash
bun install   # or npm install
bun run dev
```

## Build
```bash
bun run build
```

Output directory: `.output/public` (static assets) and `.output/server` (SSR server).

## Deploy

TanStack Start produces a Nitro-style `.output/` directory.

- **Vercel / Netlify / Cloudflare Pages**: build command `npm run build`, output directory `.output/public`.
- **Node server**: run `node .output/server/index.mjs` after building.
- **Pure static host**: not supported — this app uses SSR.
