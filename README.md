# BINcyclopedia

Interactive lessons and reference pages on bioinformatics and related topics, collected from years of learning and teaching the subject through a B.Sc., M.Sc., and now PhD.

Live site: https://gortaf.github.io/BINcyclopedia/ (once GitHub Pages is enabled, see below)

## Structure

- `index.html` — landing page, links to all lessons
- `assets/css/style.css` — shared styling
- `lessons/<lesson-name>/index.html` — one self-contained page per lesson

## Adding a lesson

Create a folder under `lessons/<lesson-name>/` with its own `index.html`, link `../../assets/css/style.css` for consistent styling, and add an entry to the list in `index.html`.

## Local preview

Open `index.html` directly in a browser, or serve the folder so relative fetches behave like they will on GitHub Pages:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Enabling GitHub Pages

In the repo on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main`, folder: `/ (root)`**. The site then publishes at `https://gortaf.github.io/BINcyclopedia/`.
