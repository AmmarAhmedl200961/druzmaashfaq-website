<!--
Guidance for AI coding agents working on this repository.
Keep this file short, concrete and tied to discoverable patterns.
-->
# AI Coding Instructions — druzmaashfaq-website

This is a small, static Next.js (App Router) portfolio site using TypeScript, Tailwind v4
and shadcn/ui components. Use these notes to make focused, repository-aware edits.

## Project Structure

- **Content**: `app/page.tsx` contains all site content organized in inline sections (hero, services,
  portfolio, testimonials, contact). To edit copy, update this file directly.
- **Layout & Styles**: `app/layout.tsx` defines metadata and HTML shell. `app/globals.css` uses
  Tailwind v4's `@theme inline` directive for CSS variables. Prefer variable changes in globals.css
  over component-level style overrides.

## Component Patterns

- **UI Primitives** (`components/ui/`): shadcn/ui-style components (New York variant).
  - All use `React.forwardRef` for ref forwarding and composability.
  - Use `cn(...)` utility (from `lib/utils.ts`) for className merging with `clsx` + `tailwind-merge`.
  - `button.tsx` demonstrates CVA (class-variance-authority) pattern for variants.
  - Example: `<Button variant="outline" size="lg" asChild><a href="#">Link</a></Button>`
  
- **Section Components** (`components/*.tsx`): Extracted page sections like `services-section.tsx`,
  `portfolio-section.tsx`, `reviews-section.tsx`, `footer.tsx`, `cta-section.tsx`.
  - Keep section logic simple; data arrays defined inline (see `services` array in services-section).
  - When adding sections, follow this pattern: export named function, accept no props (static content),
    use semantic HTML (`<section>`, `<article>`), include accessible headings.

## Icons & Accessibility

- **Icons**: Use Lucide React (`lucide-react` package). Apply `aria-hidden="true"` to decorative icons.
  - Pattern: `<CheckCircle className="h-4 w-4" aria-hidden="true" />`
  - For interactive elements with icons only, add `aria-label` to parent.
- **Accessibility**: Semantic HTML (`<section>`, `<article>`, `<nav>`), proper heading hierarchy,
  descriptive link text. See `app/page.tsx` hero section for reference.

## Configuration & Tooling

- **Module Aliases**: Import with `@/` prefix (e.g., `import { Button } from "@/components/ui/button"`).
  Configured in `tsconfig.json` paths.
- **shadcn/ui**: Configured with "new-york" style in `components.json`. Use `npx shadcn@latest add <component>`
  to add new components.
- **Tailwind v4**: Uses `@theme inline` in `globals.css` for CSS variables. Color tokens reference
  HSL variables (e.g., `hsl(var(--primary))`). Modify theme in `:root` block.

## Development Workflow

- **Dev**: `npm run dev` → localhost:3000 (Next.js dev server)
- **Build**: `npm run build` → static export in `out/` directory
- **Lint**: `npm run lint` → ESLint with Next.js config
- **Runtime**: Node 20+, Next.js 16, React 19

## Deployment & Static Export

- **Config**: `next.config.ts` sets `output: 'export'` and `images.unoptimized: true`. This is a
  **fully static site** with no server runtime.
- **CI/CD**: `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`.
  Build must be deterministic; avoid server-only code (getServerSideProps, API routes).

## Key Conventions

- **Component Style**: Use `forwardRef` + `cn(...)` + CVA for variants in `components/ui/`.
- **Content Edits**: Edit `app/page.tsx` directly for copy changes; extract to section components
  if logic becomes complex.
- **Static Data**: Define data arrays inline within components (see `services` in `services-section.tsx`).
  Do not add dynamic data fetching—this is a static site.
- **Class Merging**: Always use `cn(...)` for combining Tailwind classes to avoid conflicts.

## What to Avoid

- Server-only Next.js features (API routes, `getServerSideProps`, middleware)
- Changing `output: 'export'` without updating deployment workflow
- Component-level inline styles; prefer Tailwind utilities or CSS variables

## Quick Reference

```tsx
// Import pattern
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// Class merging with cn
className={cn("p-4 rounded-lg", isActive && "bg-primary")}

// Icon with accessibility
<ArrowRight className="h-5 w-5" aria-hidden="true" />

// Button with asChild pattern (renders as child element)
<Button asChild variant="outline"><a href="#section">Link</a></Button>
```

For questions about tests, release process, or adding new routes, ask for clarification.
