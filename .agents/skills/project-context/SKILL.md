---
name: noufal-website-context
description: Everything about Noufal and his personal website — identity, tech stack, design system, color palette, typography, project structure, component patterns, coding conventions, and third-party integrations.
---

# Noufal's Personal Website — Full Context

## About Noufal

- **Name**: Noufal Rahman
- **Role**: Full Stack Developer & Creative Thinker
- **Current Job**: Member Technical Staff at **Zoho Corporation**, Madurai, India (Feb 2024 – Present)
- **Past Experience**: Tech Lead at Optigon Ventures, Trainee at Bosch, Intern at C1Exchange, Intern at RMarketing M8
- **Education**:
  - **IIT Madras** — B.S. Data Science and Applications (2020–2025)
  - **GCT Coimbatore** — B.E. Computer Science and Engineering (2020–2024)
- **Technical Skills**:
  - Languages: TypeScript, JavaScript, Java, Python, SQL, Dart
  - Frontend: React, Next.js, Tailwind CSS, Framer Motion, Flutter
  - Backend: Node.js, Express, Spring Boot, PostgreSQL, Firebase
  - Tools: Git, Docker, AWS, Linux, Figma
- **Website URL**: [noufal.dev](https://noufal.dev)
- **Tagline**: "Using 0s and 1s to write my life" / "Building stuff that matters"
- **Hero description**: "Hi, I'm Noufal. I'm a Full Stack Developer & Creative Thinker."

---

## Tech Stack

| Layer        | Technology                                |
|--------------|-------------------------------------------|
| Framework    | **Next.js 16** (App Router)               |
| React        | **React 19**                              |
| Language     | **TypeScript 5**                          |
| Styling      | **Tailwind CSS v4** (PostCSS plugin)      |
| Typography   | `@tailwindcss/typography` plugin          |
| Animations   | **Framer Motion 12**                      |
| Icons        | **lucide-react**                          |
| Linter       | **Biome 2.2** (replaces ESLint/Prettier)  |
| CMS          | **Ghost** (headless, for blog posts)      |
| Music        | **Spotify API** (currently playing track) |
| CSS Utility  | `clsx`, `tailwind-merge`                  |
| Code Highlight | **Prism.js**                            |

---

## Design System

### Color Palette

All colors are defined as CSS custom properties in `src/app/globals.css`:

| Token                | Value               | Usage                    |
|----------------------|---------------------|--------------------------|
| `--color-brand-primary` | `#4FFFB0`        | Primary / CTA green      |
| `--color-brand-primary-hover` | `#3DDB93` | Primary hover state      |
| `--color-brand-primary-glow` | `#80FFCE`  | Accent / glow highlights |
| `--color-brand-accent` | `#1C8C6E`         | Secondary green          |
| `--color-bg-dark`    | `#052640`           | Page background          |
| `--color-bg-darker`  | `#02121F`           | Deeper background        |
| `--color-surface`    | `#0B3655`           | Card / surface fill      |
| `--color-surface-glass` | `rgba(11,54,85,0.7)` | Glassmorphism overlay |
| `--color-border`     | `#1E4C6E`           | Subtle borders           |
| `--color-text-main`  | `#F5F9FC`           | Primary text (white-ish) |
| `--color-text-muted` | `#9FBCCF`           | Secondary / muted text   |

**Tailwind Semantic Tokens** (via `@theme inline`):

- `primary` → brand primary green
- `secondary` → brand accent green
- `accent` → brand glow green
- `background` → dark blue bg
- `foreground` → light text
- `surface` / `surface-glass` → card backgrounds
- `text-main` / `text-muted` → text colors

### Typography

| Role     | Font Family | CSS Variable     | Usage                    |
|----------|-------------|------------------|--------------------------|
| Body     | **Inter**   | `--font-inter`   | All body text (`font-sans`) |
| Headings | **Outfit**  | `--font-outfit`  | Headings (`font-heading`)  |

Both loaded from Google Fonts in `layout.tsx`.

### Design Principles

- **Dark mode by default** — deep navy/teal palette, no light mode
- **Premium aesthetic** — glassmorphism, gradients, subtle glow effects
- **Decorative blurs** — large `bg-secondary/10 blur-3xl` blobs for depth
- **Rounded corners** — `rounded-lg` to `rounded-2xl` on cards
- **Hover interactions** — border glow, scale transforms, color transitions
- **Framer Motion** — entrance animations (`initial` → `whileInView`/`animate`)
- **Tech/terminal vibe** — monospace subtitles, command-like descriptions (e.g., `shuf -n 7 facts.txt`, `cat /dev/spotify`)

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (TransitionProvider, Navbar, PageTransitionWrapper, Subscribe, Footer)
│   ├── globals.css         # Design tokens, Tailwind config, prose overrides
│   ├── page.tsx            # Home page (Hero, AtAGlance, FeaturedBlogs)
│   ├── life/page.tsx       # Life page (SpotifyWidget, RandomFacts, TravelLogs, Library)
│   ├── blog/               # Blog listing + [slug] dynamic route
│   └── docs/page.tsx       # Resume/docs page (About, Experience, Education, Skills, Projects)
├── components/
│   ├── home/               # Hero, AtAGlance, FeaturedBlogs
│   ├── life/               # RandomFacts, Library, TravelLogs, SpotifyWidget
│   ├── blog/               # BlogGrid, PrismLoader
│   ├── layout/             # Navbar, Footer, Subscribe
│   └── transition/         # TransitionProvider, TransitionLink
├── utils/
│   ├── ghost.ts            # Ghost CMS API client (blog posts)
│   ├── spotify.ts          # Spotify auth + currently playing / last played ("use server")
│   ├── tailwind.ts         # cn() utility (clsx + tailwind-merge)
│   ├── actions.ts          # Server actions
│   └── types.d.ts          # Shared type definitions
└── actions/                # Server actions
```

---

## Page Layout

The root `layout.tsx` wraps all pages with:
1. `<TransitionProvider>` — context provider for page transitions (wraps everything)
2. `<Navbar />` — sticky navigation (uses `TransitionLink` for nav items)
3. `<main>` — animated wrapper for page content (fade + slide + blur)
4. `<Subscribe />` — newsletter section
5. `<Footer />` — site footer

All pages use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for consistent horizontal containment.

---

## Component Patterns

- **Client components**: Prefix with `"use client"` directive. Used for Framer Motion animations, interactivity, and browser APIs.
- **Server components**: Default. Used for data fetching (Ghost posts, Spotify data).
- **Dynamic imports**: `next/dynamic` for client-only widgets (e.g., `SpotifyWidget`).
- **Card pattern**: `rounded-2xl bg-surface/50 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-colors` with `p-6`.
- **Section headings**: Icon + title + monospace subtitle (terminal-style command).
- **Skill/tech tags**: `text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded border border-primary/20`.
- **Decorative blobs**: Large `absolute` positioned divs with `bg-secondary/10 blur-3xl`.
- **Animation pattern**: `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}` with staggered `delay`.
- **Page transitions**: `TransitionProvider` (context) + `PageTransitionWrapper` (AnimatePresence) + `TransitionLink` (drop-in `<a>` replacement). Exit: fade out + slide up + blur. Enter: fade in + slide up from below + unblur. Navbar uses `TransitionLink` instead of `next/link` `Link`.

---

## Coding Conventions

- **Formatter**: Biome — 2-space indent, tabs
- **Linting**: Biome recommended rules + Next.js + React domains
- **Import organization**: Biome auto-organizes imports
- **Path aliases**: `@/` maps to `src/` (configured in `tsconfig.json`)
- **Tailwind v4 syntax**: Use `bg-linear-to-r` instead of `bg-gradient-to-r`
- **CSS-first tokens**: Colors are defined in `globals.css` as CSS vars, then mapped via `@theme inline` for Tailwind
- **No ESLint/Prettier** — Biome handles everything
- **Update everything in SKILL.md**: After making changes to a file or a page, make sure it's updated in the SKILL.md file such that the next agent can understand. No need to update the entire changes as a separate thing. For example, if a new page is added, then the knowledge of the page should be there in the SKILL.md file. If some fixes are done, just check if it's necessary to append to the file or to an existing section and handle accordingly.
- Always strictly follow the color palette and typography.

---

## Third-Party Integrations

### Ghost CMS (Blog)
- Headless Ghost instance for blog posts
- API client in `src/utils/ghost.ts`
- Uses JWT auth with `jsonwebtoken`
- Featured posts fetched on homepage, full posts on blog pages
- Prose styling customized in `globals.css` (images, galleries, iframes, code blocks)

### Spotify API
- Shows currently playing / last played track on the Life page
- Auth flow: client credentials with token caching (1-hour expiry)
- Only 2 files: `src/utils/spotify.ts` (server action with auth + API calls) and `src/components/life/SpotifyWidget.tsx` (self-contained client component, fetches its own data on mount)
- Dynamically imported on the Life page via `next/dynamic`

### Image Sources (next.config.ts remote patterns)
- `digitalpress.fra1.cdn.digitaloceanspaces.com` — Ghost CMS images
- `images.unsplash.com` — Unsplash
- `lh3.googleusercontent.com` — Google profile images
- `i.scdn.co` — Spotify album art
- `covers.openlibrary.org` — Book covers (Library section)
