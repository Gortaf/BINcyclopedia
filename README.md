# BINcyclopedia

## What this is

A collection of interactive lessons and reference pages on bioinformatics and related topics, drawn from years of learning and teaching the subject through a B.Sc., M.Sc., and now PhD.

Live site: https://gortaf.github.io/BINcyclopedia/

## Goal

Most of what's here started as lecture notes, study material, or explanations given to students. The goal of this site is to share that knowledge in a more fun and interactive format than a slide deck or a textbook chapter, for students, future bioinformaticians, and anyone curious enough to click around.

## How to browse

Start at the [landing page](https://gortaf.github.io/BINcyclopedia/), which links to every lesson. Each lesson is a self-contained interactive page, most built around something you can click, search, or explore rather than just read.

## AI disclaimer

Some of the visuals and interactive pages on this site are built with the help of Claude (Anthropic). All of the underlying information is mine, written and vetted from my own training and experience, and I double-check every page for accuracy before it goes up. Claude helps with the interactive presentation; it doesn't write the science.

## Structure

- `index.html` — landing page, links to all lessons
- `assets/css/style.css` — shared styling
- `lessons/<lesson-name>/index.html` — one self-contained page per lesson

## Adding a lesson

Create a folder under `lessons/<lesson-name>/` with its own `index.html`, link `../../assets/css/style.css` for consistent styling (or keep styles inline if the lesson needs its own look), and add an entry to the list in `index.html`.

## Local preview

Open `index.html` directly in a browser, or serve the folder so relative fetches behave like they will on GitHub Pages:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
