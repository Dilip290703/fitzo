# FitZo

FitZo is a fashion delivery landing page built with Next.js, TypeScript, and Tailwind CSS.

The current project scope is the homepage experience only. We are actively building it as a team, so the structure is set up to support collaborative iteration on individual sections and visual refinements.

## Current Scope

The homepage currently includes:

- Navbar
- Hero section
- Trust strip
- How it works
- Featured stores / brand rail
- Value proposition
- Experience preview
- Testimonials
- CTA section
- Footer

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```bash
http://localhost:3000
```

If port `3000` is already in use:

```bash
npm run dev -- --port 3001
```

Then open:

```bash
http://localhost:3001
```

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx

components/
  CTA.tsx
  ExperiencePreview.tsx
  FeaturedStores.tsx
  Footer.tsx
  Hero.tsx
  HowItWorks.tsx
  Navbar.tsx
  Testimonials.tsx
  TrustStrip.tsx
  ValueProposition.tsx

public/
  brands/
```

## Team Workflow Notes

- Keep changes section-focused when possible.
- Prefer reusable components over large one-file edits.
- Store static brand assets under `public/brands`.
- Avoid committing generated directories like `.next` or `node_modules`.

## Scripts

- `npm run dev` - start the local development server
- `npm run build` - create a production build
- `npm run start` - run the production server

## Status

This repository is in active early-stage development and currently focuses on homepage implementation and visual polish.
