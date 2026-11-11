# BINcyclopedia

## What this is

A collection of interactive lessons and reference pages on bioinformatics and related topics, drawn from years of learning and teaching the subject through a B.Sc., M.Sc., and now PhD.

Live site: https://gortaf.github.io/BINcyclopedia/

## Goal

Most of what's here started as lecture notes, study material, or explanations given to students. The goal of this site is to share that knowledge in a more fun and interactive format than a slide deck or a textbook chapter, for students, future bioinformaticians, and anyone curious enough to click around.

## How to browse

Start at the [landing page](https://gortaf.github.io/BINcyclopedia/), which links to every lesson. Each lesson is a self-contained interactive page, most built around something you can click, search, or explore rather than just read.

## AI disclaimer

Some of the visuals and interactive pages on this site are built with the help of Claude (Anthropic). I write and check all of the underlying science myself, from my own training and experience, and I double-check every page for accuracy before it goes up. Claude's role is the interactive presentation around that content.

## Structure

- `index.html`: landing page, renders itself from the data below
- `assets/css/style.css`: shared styling
- `assets/js/lessons.js`: the `CATEGORIES` and `LESSONS` manifest (see tags below)
- `assets/js/icons.js`: small hand-authored SVG icons, atlas-style, keyed by name
- `assets/js/site.js`: renders the landing page and handles search/tag filtering
- `lessons/<lesson-name>/index.html`: one self-contained page per lesson

## Tags and categories

Each entry in `LESSONS` (`assets/js/lessons.js`) carries:

- `category`: one id from `CATEGORIES`, grouping lessons by subject under Computer Science, Biochemistry, Statistics, or Bioinformatics
- `matter`: free-text topic tags for searching (e.g. `"immunology"`, `"dynamic programming"`)
- `classes`: UdeM course codes a lesson is useful for (e.g. `"BIN6007"`), left empty until relevant

All three show up as clickable tags on the landing page and feed the search box.

## Adding a lesson

1. Create a folder under `lessons/<lesson-name>/` with its own `index.html`. Link `../../assets/css/style.css` for consistent styling, or keep styles inline if the lesson needs its own look.
2. Add an entry to `LESSONS` in `assets/js/lessons.js` (title, blurb, href, category, matter, classes, icon).
3. If no existing icon in `assets/js/icons.js` fits, add a new one in the same visual style (radial-gradient blob, darker nucleus, a couple of accents) and reference its key from the lesson entry.

## Local preview

Open `index.html` directly in a browser, or serve the folder so relative fetches behave like they will on GitHub Pages:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
