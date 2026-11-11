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

  /* Terminal window: rounded badge with window-control dots and a prompt,
     standing in for "code you write and run" the way a cell stands in for
     a specific immune function. */
  terminal: `
    <svg viewBox="-40 -40 80 80" aria-hidden="true">
      <defs>
        <radialGradient id="icon-g-term" cx="0.35" cy="0.25" r="0.9">
          <stop offset="0" stop-color="#a9cdf5"/>
          <stop offset="0.6" stop-color="#5aa2ec"/>
          <stop offset="1" stop-color="#3f72a5"/>
        </radialGradient>
      </defs>
      <rect x="-30" y="-22" width="60" height="44" rx="9" fill="url(#icon-g-term)"/>
      <path d="M-30 -13a9 9 0 0 1 9 -9h42a9 9 0 0 1 9 9v6h-60Z" fill="#000" opacity="0.18"/>
      <circle cx="-23" cy="-16" r="2.1" fill="#fff" opacity="0.85"/>
      <circle cx="-15" cy="-16" r="2.1" fill="#fff" opacity="0.6"/>
      <circle cx="-7" cy="-16" r="2.1" fill="#fff" opacity="0.4"/>
      <text x="-21" y="12" font-family="ui-monospace, monospace" font-size="19" font-weight="700" fill="#e3f0ff">&gt;_</text>
    </svg>
  `,

  /* Node tree: a small root-and-children structure on a purple blob,
     standing in for "how data is organized in memory" the way the terminal
     stands in for "code you write and run". */
  nodes: `
    <svg viewBox="-40 -40 80 80" aria-hidden="true">
      <defs>
        <radialGradient id="icon-g-nodes" cx="0.35" cy="0.28" r="0.88">
          <stop offset="0" stop-color="#ddc3f5"/>
          <stop offset="0.6" stop-color="#b680e4"/>
          <stop offset="1" stop-color="#7c54a0"/>
        </radialGradient>
      </defs>
      <circle r="27" fill="url(#icon-g-nodes)"/>
      <ellipse cx="-9" cy="-10" rx="9" ry="5" transform="rotate(-35 -9 -10)" fill="#fff" opacity="0.2"/>
      <g stroke="#2c1f45" stroke-width="2.2">
        <line x1="0" y1="-14" x2="-15" y2="7"/>
        <line x1="0" y1="-14" x2="15" y2="7"/>
        <line x1="-15" y1="7" x2="-22" y2="18"/>
        <line x1="-15" y1="7" x2="-8" y2="18"/>
      </g>
      <circle cx="0" cy="-14" r="7" fill="#2c1f45"/>
      <circle cx="-15" cy="7" r="6" fill="#e3d4f7"/>
      <circle cx="15" cy="7" r="6" fill="#e3d4f7"/>
      <circle cx="-22" cy="18" r="5" fill="#2c1f45"/>
      <circle cx="-8" cy="18" r="5" fill="#2c1f45"/>
      <circle cx="-2" cy="-16" r="2" fill="#fff" opacity="0.3"/>
    </svg>
  `,
}
