# BINcyclopedia

## What this is

A collection of interactive entries on bioinformatics and related topics, drawn from years of learning and teaching the subject through a B.Sc., M.Sc., and now PhD.

Live site: https://gortaf.github.io/BINcyclopedia/

## Goal

Most of what's here started as lecture notes, study material, or explanations given to students. The goal of this site is to share that knowledge in a more fun and interactive format than a slide deck or a textbook chapter, for students, future bioinformaticians, and anyone curious enough to click around.

## Entry types

Every page on the site is an "entry", and each one is one of three types:

- **Cheat Sheet**: an interactive infographic you explore rather than work through, like the [Immune System Atlas](https://gortaf.github.io/BINcyclopedia/lessons/immune-system-atlas/index.html).
- **Lesson**: a guided, interactive lesson with examples and checked exercises, like [Intro to Programming](https://gortaf.github.io/BINcyclopedia/lessons/intro-to-programming/index.html).
- **Project**: a fun, do-it-yourself project presented like homework, but without grades. Each one ships with copy-able prompts for turning your own AI assistant into a tutor while you work, and into a reviewer once you're done, like [Number Guessing Game](https://gortaf.github.io/BINcyclopedia/lessons/number-guessing-game/index.html).

## How to browse

Start at the [landing page](https://gortaf.github.io/BINcyclopedia/), which links to every entry, grouped by subject. Each entry is a self-contained interactive page, most built around something you can click, search, run, or explore rather than just read.

## AI disclaimer

Some of the visuals and interactive pages on this site are built with the help of Claude (Anthropic). I write and check all of the underlying science myself, from my own training and experience, and I double-check every page for accuracy before it goes up. Claude's role is the interactive presentation around that content.

## Structure

- `index.html`: landing page, renders itself from the data below
- `assets/css/style.css`: shared styling
- `assets/js/lessons.js`: the `CATEGORIES`, `ENTRY_TYPES`, and `ENTRIES` manifest (see tags below)
- `assets/js/icons.js`: small hand-authored SVG icons, atlas-style, keyed by name
- `assets/js/site.js`: renders the landing page and handles search/tag filtering
- `lessons/<entry-name>/index.html`: one self-contained page per entry

Every entry lives under `lessons/`, including Cheat Sheets and Projects; that folder name is a leftover from before the three-type split and is just a physical path, not a claim about what's inside.

## Tags and categories

Each entry in `ENTRIES` (`assets/js/lessons.js`) carries:

- `type`: one of `cheatsheet`, `lesson`, or `project` (see `ENTRY_TYPES` for display labels and colors)
- `category`: one id from `CATEGORIES`, grouping entries by subject under Computer Science, Biochemistry, Statistics, or Bioinformatics
- `matter`: free-text topic tags for searching (e.g. `"immunology"`, `"dynamic programming"`)
- `classes`: UdeM course codes an entry is useful for (e.g. `"BIN6007"`), left empty until relevant

The type shows as a small colored badge on the entry's card. Category, matter, and classes all show up as clickable tags and feed the search box.

## Adding an entry

1. Create a folder under `lessons/<entry-name>/` with its own `index.html`. Link `../../assets/css/style.css` for consistent styling, or keep styles inline if the entry needs its own look.
2. Add an entry to `ENTRIES` in `assets/js/lessons.js` (title, blurb, href, type, category, matter, classes, icon).
3. If no existing icon in `assets/js/icons.js` fits, add a new one in the same visual style (radial-gradient blob, darker nucleus, a couple of accents) and reference its key from the entry.

### Adding a Project specifically

A Project's brief should read like an engaging homework assignment, not a test: explain the task, give any boilerplate code needed to make the exercise checkable (a fixed random seed, a pre-built input list standing in for live `input()`), and include two copy-able prompt blocks:

- A **tutor prompt**, meant to be pasted into the student's own AI assistant while they work. It should ask the assistant to guide rather than solve, embedding the brief so the student only has to paste their code.
- A **feedback prompt**, meant to be pasted once they're done, asking for specific, honest review rather than a grade.

See `lessons/number-guessing-game/index.html` for a working template of this pattern, including the solution-unlock mechanic borrowed from Intro to Programming's "do it yourself" blocks.

## Local preview

Open `index.html` directly in a browser, or serve the folder so relative fetches behave like they will on GitHub Pages:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
