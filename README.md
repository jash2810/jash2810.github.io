# Static Portfolio (React)

This is a simple, professional static portfolio built with React + Vite.

## Quick start

1. Put your headshot at `public/profile.jpeg` (keep the same filename).
2. Update your content in `src/constants/*.constants.js`.

### Run locally

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages (github.io)

1. Push this repo to GitHub (default branch should be `main`).
2. In GitHub: `Settings` → `Pages` → set **Source** to **GitHub Actions**.
3. Push to `main` again (or run the workflow manually in `Actions`).

Notes:
- The workflow at `.github/workflows/deploy.yml` publishes `dist/`.
- It automatically sets the correct Vite `base` for:
  - User/Org site repos named `*.github.io` (base `/`)
  - Project sites (base `/<repo>/`)
