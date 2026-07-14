# Planufacture Support Docs — Review

## Stack & Deployment
- **Docusaurus 3.10.1** with React 19, TypeScript 6
- Deployed to **GitHub Pages** via Actions on push to `main`
- Blog disabled; dev server on port 3100
- Sidebar auto-generated from filesystem

## Theming
`custom.css` correctly maps the Planufacture brand palette (`--primary: #352b4e`, `--secondary: #535b77`, `--info: #219cb0`, etc.) into Docusaurus Infima variables. Fonts are **Raleway** (headings) and **Montserrat** (body). Dark mode respects system preference. Navbar is dark purple with logo only (title hidden). Footer uses the gradient.

## Content: 15 `.mdx` Doc Pages
All follow a consistent structure: **Overview → UI Elements → Common Workflows → Conceptual Explanation → Tips → Integration with Other Modules**.

| # | Page | Lines | Covers |
|---|------|-------|--------|
| 1 | `intro` | 43 | Navigation map, key concepts, links |
| 2 | `schedule` | 276 | Gantt view, drag-drop, context menu, auto-scheduler, inventory panel |
| 3 | `inventory` | 156 | Current Stock, Days Cover, Stock chart tabs |
| 4 | `batch-trace` | 169 | Lot traceability, event history, FEFO, compliance |
| 5 | `materials` | 161 | Available/Forecast tabs, shortage detection, PO creation |
| 6 | `work-orders` | 209 | Status lifecycle, release, change line, export |
| 7 | `capacity-report` | 171 | Utilization metrics, resource heatmap, daily/weekly |
| 8 | `demand-forecast` | 250 | Table/Chart views, bulk upload wizard (time series + average) |
| 9 | `sales-orders` | 170 | Customer orders, line items |
| 10 | `purchase-orders` | 183 | Supplier orders, line items, new PO |
| 11 | `skus` | 258 | Product master data, inventory params, production network |
| 12 | `bill-of-materials` | 174 | BOM details, primary/alternate materials |
| 13 | `processes` | 305 | Batch params, resource configs, production network, stepped processes |
| 14 | `resources` | 264 | Machine config, changeover, availability, bulk upload |
| 15 | `availability` | 226 | Time patterns, weekly calendar, pattern CRUD |

## Homepage
- **Hero**: gradient banner with "Get Started" → `/docs/intro` and "Try Demo" → `demo.planufacture.tech`
- **HomepageFeatures**: 3 cards (Getting Started, User Guides, Best Practices) — still using **Docusaurus placeholder SVGs** (undraw_docusaurus_*)
- **QuickLinks**: 6 cards linking to key modules

## Screenshots
**42 real PNGs** in `/static/img/screenshots/` covering all modules. Most are substantial (100–275 KB), indicating genuine app captures.

## Key Observations
- **`intro.mdx` has no H1 title** — it's a sparse index page, not a proper landing doc
- **Footer links** ("Getting Started", "User Guide", "Support") all point to the same `/docs/intro`
- **HomepageFeatures** still uses stock Docusaurus SVGs rather than Planufacture-specific illustrations
- The **Batch Trace quick link** on the homepage has a broken emoji (`�` instead of 🔍)
- Content is **reference/how-to** style — describes UI screen-by-screen with field-level detail; written for end-users
- The domain context is **food & beverage manufacturing** — MRP, FEFO, batch traceability, capacity planning
