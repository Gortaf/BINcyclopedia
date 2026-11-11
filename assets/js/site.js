/* Renders the landing page from ENTRIES/CATEGORIES (lessons.js) and ICONS
   (icons.js), grouped by domain, with a live text search over title, blurb,
   category, type, and tags. Clicking a tag re-runs the search on that tag. */

function categoryOf(entry) {
  return CATEGORIES.find(c => c.id === entry.category) || null
}

function matches(entry, query) {
  if (!query) return true
  const cat = categoryOf(entry)
  const type = ENTRY_TYPES[entry.type]
  const hay = [
    entry.title,
    entry.blurb,
    cat ? cat.name : "",
    cat ? cat.domain : "",
    type ? type.label : "",
    ...entry.matter,
    ...entry.classes,
  ].join(" ").toLowerCase()
  return hay.includes(query)
}

function tagButton(label, cls) {
  return `<button class="tag ${cls}" data-tag="${label}">${label}</button>`
}

function entryCard(entry) {
  const cat = categoryOf(entry)
  const type = ENTRY_TYPES[entry.type]
  const tags = [
    cat ? tagButton(cat.name, "tag-category") : "",
    ...entry.matter.map(m => tagButton(m, "tag-matter")),
    ...entry.classes.map(c => tagButton(c, "tag-class")),
  ].join("")
  const icon = ICONS[entry.icon] || ""
  const typeBadge = type
    ? `<button class="entry-type" style="--c:${type.color}" data-tag="${type.label}">${type.label}</button>`
    : ""
  return `
    <li>
      <a class="entry-link" href="${entry.href}">
        <div class="entry-icon">${icon}</div>
        <div class="entry-body">
          ${typeBadge}
          <span class="entry-title">${entry.title}</span>
          <p>${entry.blurb}</p>
        </div>
      </a>
      <div class="tags">${tags}</div>
    </li>
  `
}

function render(query) {
  const q = (query || "").trim().toLowerCase()
  const shown = ENTRIES.filter(e => matches(e, q))
  const byDomain = {}
  shown.forEach(e => {
    const domain = categoryOf(e) ? categoryOf(e).domain : "Uncategorized"
    ;(byDomain[domain] = byDomain[domain] || []).push(e)
  })
  const root = document.getElementById("lessons")
  const domains = Object.keys(byDomain)
  if (!domains.length) {
    root.innerHTML = `<p class="empty">No entries match "${query}".</p>`
    return
  }
  root.innerHTML = domains.map(domain => `
    <section class="domain">
      <h2 class="domain-title" style="--c:${DOMAIN_COLORS[domain] || "var(--accent)"}">${domain}</h2>
      <ul class="entry-list">${byDomain[domain].map(entryCard).join("")}</ul>
    </section>
  `).join("")
  root.querySelectorAll("[data-tag]").forEach(btn => {
    btn.addEventListener("click", e => {
      // the type badge sits inside the card's own link, so without this the
      // click would also navigate instead of just filtering
      e.preventDefault()
      e.stopPropagation()
      search.value = btn.dataset.tag
      render(btn.dataset.tag)
    })
  })
}

const search = document.getElementById("search")
search.addEventListener("input", () => render(search.value))
render("")
