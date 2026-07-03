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
- Resume PDF: `public/Asim_Altaf_CV.pdf`

The university campus CTA links to the official FAST-NUCES Islamabad site.

## Swap the CV

Replace:

```text
public/Asim_Altaf_CV.pdf
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

1. Import the GitHub repository in Vercel.
2. Framework preset: `Vite`.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Deploy.

## Deploy on GitHub Pages

1. Install dependencies and build:

```bash
npm install
npm run build
```

2. Publish the `dist` folder with your preferred Pages workflow.
3. If serving from a repository subpath instead of a custom domain, set Vite `base` in `vite.config.ts` before building.

## Deviations

`public/Asim_Altaf_CV.pdf` was generated from the supplied DOCX with Python document tooling because no LibreOffice, Pandoc, or unoconv binary was available in this environment.
