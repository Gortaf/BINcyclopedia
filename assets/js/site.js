/* Renders the landing page from LESSONS/CATEGORIES (lessons.js) and ICONS
   (icons.js), grouped by domain, with a live text search over title, blurb,
   category, and tags. Clicking a tag re-runs the search on that tag. */

function categoryOf(lesson) {
  return CATEGORIES.find(c => c.id === lesson.category) || null
}

function matches(lesson, query) {
  if (!query) return true
  const cat = categoryOf(lesson)
  const hay = [
    lesson.title,
    lesson.blurb,
    cat ? cat.name : "",
    cat ? cat.domain : "",
    ...lesson.matter,
    ...lesson.classes,
  ].join(" ").toLowerCase()
  return hay.includes(query)
}

function tagButton(label, cls) {
  return `<button class="tag ${cls}" data-tag="${label}">${label}</button>`
}

function lessonCard(lesson) {
  const cat = categoryOf(lesson)
  const tags = [
    cat ? tagButton(cat.name, "tag-category") : "",
    ...lesson.matter.map(m => tagButton(m, "tag-matter")),
    ...lesson.classes.map(c => tagButton(c, "tag-class")),
  ].join("")
  const icon = ICONS[lesson.icon] || ""
  return `
    <li>
      <a class="lesson-link" href="${lesson.href}">
        <div class="lesson-icon">${icon}</div>
        <div class="lesson-body">
          <span class="lesson-title">${lesson.title}</span>
          <p>${lesson.blurb}</p>
        </div>
      </a>
      <div class="tags">${tags}</div>
    </li>
  `
}

function render(query) {
  const q = (query || "").trim().toLowerCase()
  const shown = LESSONS.filter(l => matches(l, q))
  const byDomain = {}
  shown.forEach(l => {
    const domain = categoryOf(l) ? categoryOf(l).domain : "Uncategorized"
    ;(byDomain[domain] = byDomain[domain] || []).push(l)
  })
  const root = document.getElementById("lessons")
  const domains = Object.keys(byDomain)
  if (!domains.length) {
    root.innerHTML = `<p class="empty">No lessons match "${query}".</p>`
    return
  }
  root.innerHTML = domains.map(domain => `
    <section class="domain">
      <h2 class="domain-title" style="--c:${DOMAIN_COLORS[domain] || "var(--accent)"}">${domain}</h2>
      <ul class="lesson-list">${byDomain[domain].map(lessonCard).join("")}</ul>
    </section>
  `).join("")
  root.querySelectorAll("[data-tag]").forEach(btn => {
    btn.addEventListener("click", () => {
      search.value = btn.dataset.tag
      render(btn.dataset.tag)
    })
  })
}

const search = document.getElementById("search")
search.addEventListener("input", () => render(search.value))
render("")
