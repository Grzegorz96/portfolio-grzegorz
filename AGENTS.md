# Repository Guidelines

## Project Structure & Module Organization
- App entry lives in `src/app/[locale]`, which holds page layout, section components, and loading state per locale. Shared styles reside in `src/app/globals.css`.
- Reusable UI and motion primitives are in `src/components` (e.g., `ui/`, `motion/`, `header/`, `footer/`). Keep new shared components colocated here.
- Domain data and helpers sit in `src/lib` (`data/` for content like marquees, `utils/` for helpers).
- Localization strings live in `messages/*.json`; routing helpers are in `src/i18n`.
- Public assets are under `public/` (grouped by project). Favor reusing existing folders instead of adding new top-level buckets.

## Build, Test, and Development Commands
- `npm run dev` – Start the Next.js dev server with Turbopack on port 3000.
- `npm run build` – Production build; required before deploying or testing static output.
- `npm run start` – Serve the built app locally for smoke checks.
- `npm run lint` – ESLint (Next.js config) for TS/JS and React conventions. Run before every PR.

## Coding Style & Naming Conventions
- TypeScript + React 19 with Next 15; prefer functional components and server components unless client features are needed.
- File and folder names use kebab-case; React components use PascalCase; hooks/utilities use camelCase.
- Follow existing patterns: UI primitives in `src/components/ui`, section-specific components under `src/app/[locale]/_components/<section>/`.
- Formatting is via ESLint + Next defaults; keep imports ordered and remove unused code. Tailwind 4 is available—reuse design tokens and utility classes from `globals.css`.

## Testing Guidelines
- No automated tests exist yet. When adding them, colocate with features or use a `tests/` directory; prefer React Testing Library for components and lightweight integration tests for critical flows (nav, language switching, contact form).
- Ensure new tests run on `npm run build` output where possible; keep fixtures under `public/` when they mirror user-facing assets.

## Commit & Pull Request Guidelines
- Recent history mixes `feat:`/`Feature:`/`Refactor:` prefixes. Standardize on lowercase Conventional Commit-style (`feat:`, `fix:`, `chore:`, `refactor:`) with imperative summaries (e.g., `feat: add faq accordion transitions`).
- For PRs: include a brief change summary, screenshots or GIFs for visual updates (desktop + mobile), mention impacted routes/locales, and link related issues/tasks. Note any follow-up work or tech debt.

## AI & Documentation
- When using AI tools (Cursor, Windsurf, Codex, etc.) with the installed Context7 MCP server, fetch docs through it and match the version to this repo (Next.js 15 / React 19). Avoid preview versions (e.g., Next 16) unless explicitly needed.

## Localization & Content Tips
- Keep string keys stable across `messages/*.json`; update all locales when adding or changing keys.
- When introducing locale-aware components, rely on helpers in `src/i18n` and keep locale-specific props minimal to avoid divergence.
