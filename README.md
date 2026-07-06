# NOMAD BUILD — AI Web Interaction Demo

A static Next.js implementation of the "NOMAD BUILD" construction-management
landing page, built from [Figma](https://www.figma.com/design/VITeKdA9ofn2MXsF0sLghy)
for a lesson on prompting AI to add motion to a web page.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- `framer-motion` is installed but **not used anywhere yet** — that's the point.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## For the lesson

Every section in [components/sections/](components/sections/) renders as a
static, motionless layout. The exercise is to prompt an AI coding assistant to
introduce animation — page load transitions, scroll reveals, hover states,
tab/FAQ open-close transitions — using the already-installed `framer-motion`
package.

Good starting prompts to try:

- "Animate the Hero section so the heading and buttons fade/slide in on load."
- "Add a stagger animation to the drone gallery photos as they scroll into view."
- "Animate the FAQ accordion open/close with `AnimatePresence`."
- "Add a smooth transition when switching tabs in the Technology section."
