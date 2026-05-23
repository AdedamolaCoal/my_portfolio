# Portfolio Redesign — Drop-in Guide

## What changed and why

The old template had letter-by-letter animated titles, floating blur orbs on every section,
`<html>/<body>` decorative tags, and identical visual weight across every component.
Recruiters (and hiring managers) read dozens of portfolios — the goal here is to look senior,
not clever.

The new design is: **editorial dark**, strong typographic hierarchy, yellow as the sole accent,
mono font for labels/metadata, and generous whitespace. Think senior engineer meets design consultancy.

---

## Files in this folder

| File           | Replaces                               |
| -------------- | -------------------------------------- |
| `Hero.tsx`     | `Hero.tsx`                             |
| `About.tsx`    | `About.tsx`                            |
| `Skills.tsx`   | `Skills.tsx`                           |
| `Projects.tsx` | `Projects.tsx`                         |
| `Contact.tsx`  | `Contact.tsx`                          |
| `Header.tsx`   | `Header.tsx`                           |
| `Sidebar.tsx`  | `Sidebar.tsx`                          |
| `Footer.tsx`   | `Footer.tsx`                           |
| `globals.css`  | Merge into `index.css` or `global.css` |

`AllProjectsModal.tsx` and `ProjectModal.tsx` are unchanged — they work fine as-is.

---

## Setup steps

### 1. Install fonts

In `globals.css` the `@import` pulls **Syne** (display) and **JetBrains Mono** (code labels).
If you use a `<link>` in `index.html` instead, add:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap"
  rel="stylesheet"
/>
```

### 2. Update `tailwind.config.js`

Add the fonts so Tailwind's `font-mono` class maps correctly:

````js
theme: {
  extend: {
    # Adedamola Akinyomi — Portfolio

    A production-ready personal portfolio and showcase site built with React, TypeScript, Tailwind CSS and Vite. The site demonstrates professional UI, responsive layouts, and smooth animations powered by Framer Motion.

    ## Key Highlights

    - Clean, accessible, responsive UI optimized for desktop and mobile
    - TypeScript throughout for improved maintainability
    - Fast development and build workflow using Vite
    - Ready-made components for Hero, About, Projects, Skills, Contact

    ## Tech Stack

    - React 19 + TypeScript
    - Vite (build tool)
    - Tailwind CSS (utility-first styling)
    - Framer Motion (animations)
    - Lucide React (icons)

    ## Quick Start

    Clone and run locally:

    ```bash
    git clone https://github.com/AdedamolaCoal/my_portfolio.git
    cd my-portfolio
    npm install
    npm run dev
    ```

    Open http://localhost:5173 in your browser.

    Build for production:

    ```bash
    npm run build
    npm run preview  # serve the production build locally
    ```

    ## Project Structure

    - `src/` — application source
      - `components/` — UI components (Hero, About, Projects, Contact, etc.)
      - `assets/` — static images and media
      - `main.tsx`, `App.tsx` — app entry and layout
    - `public/` — static public assets
    - `package.json` — scripts and dependencies

    ## Customization

    To personalize the site, update the following files:

    - `src/components/Hero.tsx` — headline, description, CTAs, and socials
    - `src/components/About.tsx` — bio, experience, certifications
    - `src/components/Projects.tsx` — project items and links (public/assets/projects)
    - `src/components/Contact.tsx` — contact form and contact details

    Replace placeholder images in `src/assets/` and update links and text content as needed.

    ## Development Notes

    - The header and sidebar navigation use hash anchors (e.g. `#home`, `#about`) and smooth scrolling.
    - Framer Motion `Variants` are used for entrance animations; if TypeScript reports easing issues, annotate variant objects with `Variants` from `framer-motion`.

    ## Contributing

    Contributions are welcome. Open an issue or send a pull request with clear change descriptions.

    ## License

    MIT

    ---
    If you'd like, I can also:

    - Add a short deploy section with Vercel/Netlify steps
    - Generate a simple contributing guide or code of conduct
    - Update `package.json` scripts or add helpful developer scripts

    Tell me which of the above you'd like next.
````
