/* Small hand-authored vector icons in the same visual language as the Immune
   System Atlas cell art (radial-gradient blob, darker nucleus, membrane
   accents). Keyed by name, referenced from LESSONS[].icon in lessons.js. */

const ICONS = {
  /* Killer T cell (CTL): blue lymphocyte with TCR spikes on its rim and a
     red granzyme marker, the atlas's own visual shorthand for "kills". */
  ctl: `
    <svg viewBox="-40 -40 80 80" aria-hidden="true">
      <defs>
        <radialGradient id="icon-g-ctl" cx="0.35" cy="0.3" r="0.85">
          <stop offset="0" stop-color="#aed0f6"/>
          <stop offset="0.6" stop-color="#5aa2ec"/>
          <stop offset="1" stop-color="#3f74a8"/>
        </radialGradient>
      </defs>
      <g stroke="#e3f0ff" stroke-width="2.4" stroke-linecap="round" fill="none">
        <g transform="rotate(0)"><path d="M0 -27V-35M0 -35l-4.5 -4.5M0 -35l4.5 -4.5"/></g>
        <g transform="rotate(60)"><path d="M0 -27V-35M0 -35l-4.5 -4.5M0 -35l4.5 -4.5"/></g>
        <g transform="rotate(120)"><path d="M0 -27V-35M0 -35l-4.5 -4.5M0 -35l4.5 -4.5"/></g>
        <g transform="rotate(180)"><path d="M0 -27V-35M0 -35l-4.5 -4.5M0 -35l4.5 -4.5"/></g>
        <g transform="rotate(240)"><path d="M0 -27V-35M0 -35l-4.5 -4.5M0 -35l4.5 -4.5"/></g>
        <g transform="rotate(300)"><path d="M0 -27V-35M0 -35l-4.5 -4.5M0 -35l4.5 -4.5"/></g>
      </g>
      <circle r="27" fill="url(#icon-g-ctl)"/>
      <ellipse cx="-9" cy="-10" rx="9" ry="5" transform="rotate(-35 -9 -10)" fill="#fff" opacity="0.2"/>
      <circle r="16" fill="#2c4f7c"/>
      <circle cx="-5" cy="-5" r="4.5" fill="#fff" opacity="0.14"/>
      <circle cx="29" cy="-11" r="5.5" fill="#ff5a5f"/>
      <circle cx="29" cy="-11" r="2.2" fill="#ffb3b3"/>
    </svg>
  `,
}
