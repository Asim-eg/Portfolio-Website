# Asim Altaf Portfolio

One-page Vite, React 18, TypeScript, Tailwind CSS, Framer Motion, and Lucide portfolio for a backend telecom engineer.

The current build uses a dark full-screen panel flow: fixed glass navigation, next/previous section controls, portrait HUD effects, a separate skills stack, rewritten About/Craft sections, compact experience cards, and a readable contact panel.

## Edit the site copy

All portfolio content lives in `content/profile.md`.

Edit that file, then rebuild:

```bash
npm run build
```

The React sections read from `src/lib/content.ts`, which parses `content/profile.md` with `gray-matter`.

Key content fields include:

- `portrait`
- `nav.links`
- `nav.actions`
- `sections`
- `stack`
- `craft`
- `systems`
- `education`

## Assets

- Portrait: `public/media/asim-altaf.png`
- Resume viewer: `public/resume/index.html`
- Resume PDF: `public/Asim_Altaf_Resume.pdf`

The university campus CTA links to the official FAST-NUCES Islamabad site.

## Swap the CV

Replace:

```text
public/Asim_Altaf_Resume.pdf
```

Keep the same filename unless you also update `resume` in `content/profile.md`.

## Run locally

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deploy on Vercel

This repo is a Vite app, not Next.js. The committed `vercel.json` pins the deployment settings:

- Framework preset: `Vite`
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`

In Vercel, set the project **Root Directory** to the folder that contains `package.json`. For this repository that should normally be blank / repository root. Do not set the framework preset to `Next.js`.

After deployment, verify:

- Site: `/`
- Resume viewer: `/resume/`
- Resume PDF: `/Asim_Altaf_Resume.pdf`

## Deploy on GitHub Pages

1. Install dependencies and build:

```bash
npm install
npm run build
```

2. Publish the `dist` folder with your preferred Pages workflow.
3. If serving from a repository subpath instead of a custom domain, set Vite `base` in `vite.config.ts` before building.

## Deviations

`public/Asim_Altaf_Resume.pdf` is generated from the supplied resume PDF and carries explicit PDF metadata for search/share context. Resume buttons open `public/resume/index.html` so the browser tab title is controlled by the site while still embedding the same PDF.
