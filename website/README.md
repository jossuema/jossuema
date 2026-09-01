# jossuema.me

Personal portfolio, built with [Astro](https://astro.build). Project cards
are rendered from [`../data/projects.yaml`](../data/projects.yaml); the rest
of the content lives in [`src/content/profile.ts`](src/content/profile.ts)
and is distilled from [`../knowledge/`](../knowledge/).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
```

The CV served at `/cv.pdf` is a copy of [`../cv/cv.pdf`](../cv/cv.pdf) —
update both together (`cp ../cv/cv.pdf public/cv.pdf`).
