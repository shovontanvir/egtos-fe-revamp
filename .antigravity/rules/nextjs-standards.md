# Next.js 16.2 & SEO Standards

## 1. Architectural Standards (App Router)
- **RSC First:** Default to React Server Components. Only add `"use client"` if using hooks (GSAP, state, etc.).
- **Data Fetching:** Fetch data in Server Components and pass it down as props.
- **Streaming:** Use `loading.tsx` and `<Suspense>` boundaries for Partial Prerendering (PPR).

## 2. Meta & SEO API
- **Metadata API:** Use the `metadata` object in `layout.tsx` for static tags.
- **Dynamic SEO:** Use `export async function generateMetadata({ params })` for dynamic routes.
- **Verification:** Every page must include `title`, `description`, `canonical`, and `openGraph` images.
- **Robots/Sitemap:** Use `sitemap.ts` and `robots.ts` inside the `/app` folder for automated crawling.

## 3. Performance & Asset Optimization
- **Images:** Use `next/image`. Always set `priority` for Hero/LCP images. Set `alt` text for every image.
- **Fonts:** Use `next/font/google` to eliminate Layout Shift (CLS).
- **Scripts:** Load third-party scripts with `next/script` using `afterInteractive`.

## 4. Semantic HTML & Accessibility
- **Hierarchy:** Maintain a strict `H1 -> H2 -> H3` structure.
- **Landmarks:** Use `<main>`, `<header>`, `<footer>`, `<section>`, and `<article>` correctly.
- **Links:** Use `next/link` for internal navigation to enable prefetching.