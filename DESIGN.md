# Python and the World — Design System

Generated with the **UI/UX Pro Max** skill and tuned for a developer/learning
platform audience (adults learning & applying Python worldwide).

## Direction
- **Landing pattern:** Feature-Rich Showcase — Hero → Domains → Stats → Why Python → Testimonials → Final CTA → Footer
- **Style:** Soft UI Evolution — modern, subtle depth, clean surfaces, dark canvas, WCAG AA+
- **Voice:** Confident, welcoming, technical-but-not-jargon-heavy

## Typography ("Developer Mono" direction)
| Role | Font | Notes |
|------|------|-------|
| Display / headings | **Space Grotesk** | Distinctive, techy geometric |
| Body | **IBM Plex Sans** | Neutral, highly readable |
| Code / labels | **JetBrains Mono** | Real code snippets, eyebrow labels |

Base body 16px · line-height 1.6 · fluid `clamp()` scale for headings.

## Color tokens (dark theme, Python brand identity)
| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#0B1120` | Page canvas |
| `--surface` | `#111A2E` | Cards |
| `--surface-2` | `#16223B` | Raised cards / code window |
| `--border` | `#24324D` | Hairlines |
| `--fg` | `#E8EEF7` | Primary text (≈13:1 on bg) |
| `--muted` | `#93A4C0` | Secondary text (≈7:1 on bg) |
| `--primary` | `#4B8BBE` | Python blue — links, accents |
| `--primary-bright` | `#6BA9DE` | Hover/links on dark |
| `--accent` | `#FFD43B` | Python gold — primary CTA |
| `--on-accent` | `#0B1120` | Text on gold CTA (≈14:1) |
| `--success` | `#3FB950` | "Run" / positive state |
| `--destructive` | `#EF4444` | Errors |

## Motion (Standard tier)
- Scroll-reveal stagger, 300–450ms, `cubic-bezier` ease-out
- Micro-interactions 150–250ms on hover/focus
- **All motion gated behind `prefers-reduced-motion: reduce`**

## Non-negotiables (Pre-Delivery Checklist)
- [x] SVG icons only — no emoji as icons
- [x] `cursor: pointer` + visible focus rings on all interactive elements
- [x] Hover transitions 150–300ms
- [x] Text contrast ≥ 4.5:1 in the chosen theme
- [x] Keyboard navigable; skip link; semantic landmarks; aria labels
- [x] `prefers-reduced-motion` respected
- [x] Responsive at 375 / 768 / 1024 / 1440px; no horizontal scroll; zoom enabled
