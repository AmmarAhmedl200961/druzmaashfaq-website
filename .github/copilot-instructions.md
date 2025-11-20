<!--
Guidance for AI coding agents working on this repository.
Keep this file short, concrete and tied to discoverable patterns.
-->
# AI Coding Instructions — druzmaashfaq-website

This is a small, static Next.js (App Router) portfolio site using TypeScript, Tailwind v4
and shadcn-style UI components. Use these notes to make focused, repository-aware edits.

- Project entry: `app/page.tsx` contains most site content and layout sections (hero, services,
  portfolio, testimonials, contact). Changes to content or copy usually live here.
- Layout & global styles: `app/layout.tsx` and `app/globals.css` control HTML shell and Tailwind
  variables. Prefer small CSS tweaks in `globals.css` rather than component-level overrides.

- UI components: `components/ui/` contains shared UI primitives.
  - `button.tsx` uses `class-variance-authority` (CVA) for variants and `forwardRef`.
  - `card.tsx` uses `forwardRef` and the `cn` utility for class merging.
  When adding components follow the same pattern: `forwardRef`, `cn(...)`, small props,
  and export named components (e.g. `Button`, `Card`).

- Utility pattern: `lib/utils.ts` exports `cn(...)` which composes `clsx` + `twMerge`.
  Use `cn` for all Tailwind class concatenation to keep class merging consistent.

- Module aliases: code imports using `@/...` (for example `@/components/ui/button`).
  Keep edits consistent with that alias — TypeScript paths are configured in `tsconfig.json`.

- Build & runtimes:
  - Dev: `npm run dev` (Next dev server, localhost:3000)
  - Build: `npm run build` (Next build configured for static export; output placed in `out/`)
  - Lint: `npm run lint` (runs `eslint`)
  - Node: project expects Node 20+; Next 16 + React 19.

- Next.js config: `next.config.ts` sets `output: 'export'` and `images.unoptimized = true`.
  - Treat the site as a static export. Avoid introducing server-only APIs or getServerSideProps.

- Deployment: `.github/workflows/deploy.yml` builds and publishes to GitHub Pages on `main`.
  - Commits to `main` trigger CI/CD. Keep builds deterministic and avoid environment-specific
    runtime code paths.

- Conventions & patterns to follow:
  - Minimal component logic in `app/page.tsx`; prefer extracting repeatable UI to `components/ui/`.
  - Use `forwardRef` for UI primitives to maintain composability.
  - Use the `cn` utility and CVA for Tailwind class management and variants.
  - Prefer in-place static content edits over adding dynamic data fetching.

- What to avoid:
  - Do not add server-only endpoints (API routes) because the site is exported statically.
  - Avoid changing the `output: 'export'` setting unless you update deployment accordingly.

- Examples (copyable):
  - Importing a component: `import { Button } from "@/components/ui/button"`
  - Using `cn`: `className={cn("p-4", isActive && "bg-primary")}`

If something here is unclear or you need deeper rules (tests, release process, or new routes),
ask for clarification and I will update this file.
