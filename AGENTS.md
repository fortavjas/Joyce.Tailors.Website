# AGENTS.md

## Project Overview

This project is a one-page website for Joyce Station Tailors & Dry Cleaners, a local tailoring and dry cleaning business in Vancouver, BC. The page is designed for local conversion: phone calls, directions, service discovery, reviews, and store details.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router |
| Build | Vite |
| Styling | Tailwind CSS v4 import plus custom CSS |
| Icons | Lucide React |
| Deployment | Netlify |

## Key Files

```text
src/routes/__root.tsx   Root document, metadata, and global stylesheet import
src/routes/index.tsx    Main one-page website content and section structure
src/styles.css          Global visual system, layout, responsive behavior, and interactions
public/                 Static public assets
netlify.toml            Netlify build and dev configuration
```

## Architecture Notes

The homepage is implemented as a single React route at `/`. Content is intentionally local-business focused and mostly static. The site does not use persistent data, API routes, authentication, or Netlify Functions.

The visual system uses custom CSS variables for the navy, white, and gold identity. Tailwind is available through the v4 stylesheet import, but the page relies primarily on semantic class names in `src/styles.css` to keep the marketing layout readable.

The hero uses a remote tailoring image from Unsplash. If replacing it, keep the image garment-care specific and ensure it works as a full-bleed background with the existing dark overlay.

## Conventions

- Keep page content in `src/routes/index.tsx` unless adding a reusable component has a clear benefit.
- Keep global layout and design tokens in `src/styles.css`.
- Use Lucide React icons for interface icons.
- Preserve the single-page navigation anchors: `#services`, `#about`, `#reviews`, and `#contact`.
- Avoid adding build artifacts or generated validation output to the repository.
