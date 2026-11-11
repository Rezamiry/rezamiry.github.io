# rezamiry.github.io

Personal website of Reza Miry, built with [Astro](https://astro.build) and deployed to GitHub Pages.

Live: https://rezamiry.github.io

## Develop

Requires Node 22.23.4+.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```

## Edit content

| What | Where |
| --- | --- |
| Name, links, about, experience, skills, education, certifications | `src/data/profile.ts` |
| Projects (case studies) | `src/content/projects/*.md` |
| Blog posts | `src/content/blog/*.md` (set `draft: true` to hide) |
| /now page | `src/pages/now.astro` |
| Colors and layout | `src/styles/global.css` |

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`. In the repo settings, set **Pages → Source** to **GitHub Actions** (one-time).

Resumes and the LinkedIn export are intentionally git-ignored and never published.
