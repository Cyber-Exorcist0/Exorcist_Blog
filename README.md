# CYBER EXORCIST — Personal Cybersecurity Research Blog

> **Exposing the Anatomy of Digital Crime.**  
> A personal informative blog authored and operated by a Computer Engineer exploring cybersecurity, software flaws, and digital forensics through independent technical case studies.

---

## 1. Architectural Overview & Stack Selection

| Component | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | **Astro 5** (Static Site Generator) | Zero runtime JavaScript overhead for editorial content; instant page loads; native Content Collections with type-safety; Markdown/MDX parsing. |
| **Typography & Styling** | **Tailwind CSS** + Custom Palette | Bespoke dark technical editorial palette (`#080B12`, `#0D121C`, `#111827`, `#38BDF8`, `#8B5CF6`). Typography paired with Inter and JetBrains Mono for forensic telemetry. |
| **Content Modeling** | **Astro Content Collections** (`astro:content`) | Strongly typed Zod schemas for case metadata, validation at build time, and effortless expansion for new investigators. |
| **Interactive Components** | **MDX (Markdown + JSX)** | Authors can embed interactive forensic timelines, attack chains, evidence cards, code breakdowns, and warning notices directly in articles without altering page code. |
| **Search Engine** | **Client-Side In-Memory Fuzzy Search** | Instant modal search (`Ctrl+K`) with zero external API dependencies or trackers. |
| **SEO & Discoverability** | `@astrojs/sitemap` + `@astrojs/rss` | Automated Schema.org JSON-LD (`TechArticle`, `WebSite`, `Organization`), Open Graph cards, Twitter metadata, XML sitemap, and RSS feed. |
| **Target Deployment** | **GitHub Pages** + GitHub Actions | 100% static output (`output: 'static'`) with full base-path awareness (`BASE_PATH` env) to support both repository subpaths (`username.github.io/repo/`) and root custom domains. |

---

## 2. Directory Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions deployment workflow
├── public/
│   ├── favicon.svg               # Vector brand mark favicon
│   ├── og-image.svg              # 1200x630 Open Graph preview card
│   ├── robots.txt                # Search crawler configuration & sitemap pointer
│   └── images/
│       ├── authors/              # Contributor avatar vectors
│       └── cases/                # Forensic dossier graphic exhibits
├── src/
│   ├── content.config.ts         # Astro 5 content collections schema (Zod)
│   ├── content/
│   │   ├── authors/              # Scalable author JSON records
│   │   │   └── cyber-exorcist.json
│   │   └── investigations/       # MDX investigative case files
│   │       ├── james-zhong-silk-road-bitcoin-theft.mdx
│   │       ├── alphabay-darknet-marketplace-takedown.mdx
│   │       └── conti-ransomware-internal-chat-leaks.mdx
│   ├── layouts/
│   │   ├── BaseLayout.astro      # Master shell, meta tags, header, footer, search
│   │   └── ArticleLayout.astro   # Long-form journalism template with sticky TOC & schema
│   ├── components/
│   │   ├── Header.astro          # Nav, search modal trigger, mobile drawer
│   │   ├── Footer.astro          # Sector directory, ethical disclaimer, feeds
│   │   ├── SearchModal.astro     # Real-time keyboard-accessible search modal (Ctrl+K)
│   │   ├── InvestigationCard.astro # Editorial card with case ID & category badge
│   │   ├── TableOfContents.astro # Desktop sticky TOC & collapsible mobile accordion
│   │   ├── ReadingProgress.astro # Minimal top scroll indicator
│   │   ├── CategoryBadge.astro   # Sector color-coded badge
│   │   ├── NewsletterBox.astro   # Integration-ready dispatch subscription
│   │   └── article/              # Reusable MDX editorial elements
│   │       ├── InvestigationTimeline.astro
│   │       ├── TechnicalBreakdown.astro
│   │       ├── AttackChain.astro
│   │       ├── EvidenceCard.astro
│   │       ├── KeyFindings.astro
│   │       ├── EditorialAlert.astro
│   │       └── ReferenceList.astro
│   ├── styles/
│   │   └── global.css            # Custom theme variables, scrollbars, code blocks
│   ├── utils/
│   │   └── base.ts               # Base URL helper for GitHub Pages subfolder compatibility
│   └── pages/
│       ├── index.astro           # Homepage: Hero, Featured Case, Sectors, Philosophy
│       ├── investigations/
│       │   ├── index.astro       # Case files archive with search, filter pills, & sort
│       │   └── [slug].astro      # Dynamic case file article renderer
│       ├── technical-analysis/   # Dedicated binary reverse engineering archive
│       ├── authors/[id].astro    # Scalable investigator profile & dossier index
│       ├── about.astro           # Mission, dual methodology, standards
│       ├── rss.xml.ts            # RSS feed generator
│       └── 404.astro             # Themed case file missing page
```

---

## 3. How to Author and Publish a New Investigation

Adding an investigation requires **zero modifications to application code**. Simply add an MDX file into `src/content/investigations/`:

### Step 1: Create the MDX File
Create `src/content/investigations/<case-slug>.mdx`:

```mdx
---
title: "Operation Endgame: The Global Botnet Takedown"
subtitle: "How law enforcement severed the infrastructure of IcedID, SystemBC, and Smokeloader"
description: "A forensic analysis of the largest international operation against malware droppers."
category: "Cybercrime Investigations"
tags: ["Botnets", "IcedID", "Europol", "C2 Infrastructure", "DFIR"]
authors: ["Cyber Exorcist"]
publication_date: "2024-06-01"
updated_date: "2024-06-05"
cover_image: "/images/cases/case-endgame.svg"
reading_time: "12 min read"
featured: false
type: "investigation" # or 'technical'
status: "published"    # or 'draft'
case_id: "CE-2024-05"
threat_actor: "Multiple Cybercrime Syndicates"
target: "Global Financial Infrastructure"
impact: "Over 100 malicious C2 servers seized"
references:
  - title: "Europol Operation Endgame Press Release"
    url: "https://www.europol.europa.eu"
    organization: "Europol"
    date: "May 30, 2024"
---

import InvestigationTimeline from '../../components/article/InvestigationTimeline.astro';
import TechnicalBreakdown from '../../components/article/TechnicalBreakdown.astro';
import AttackChain from '../../components/article/AttackChain.astro';
import EvidenceCard from '../../components/article/EvidenceCard.astro';
import KeyFindings from '../../components/article/KeyFindings.astro';
import EditorialAlert from '../../components/article/EditorialAlert.astro';
import ReferenceList from '../../components/article/ReferenceList.astro';

## Executive Summary
Article narrative text begins here...

<KeyFindings
  title="Critical Findings"
  items={[
    "Over 100 malicious C2 nodes seized across Europe and the Americas.",
    "Sinkholing operation captured telemetry from 2,000,000 infected endpoints."
  ]}
/>

<TechnicalBreakdown title="C2 Domain Generation Algorithm" complexity="Deep Forensic">
  Analysis of domain generation algorithms...
</TechnicalBreakdown>
```

### Step 2: Validate Build
Run the static compiler:
```bash
npm run build
```
The new case file will automatically be included in:
- The `/investigations/` archive
- Real-time search index
- Category filters
- Corresponding author pages
- The XML sitemap and RSS feed

---

## 4. How to Add a New Author

Create a new JSON record in `src/content/authors/<author-id>.json`:

```json
{
  "id": "network-forensic-lead",
  "name": "Network Forensic Lead",
  "role": "Packet Analysis & Infrastructure Specialist",
  "bio": "Investigates malicious autonomous systems, BGP hijacking, fast-flux DNS operations, and covert network channels.",
  "avatar": "/images/authors/network-forensic-lead.svg",
  "areas_of_expertise": [
    "Traffic Analysis",
    "BGP Security",
    "C2 Infrastructure",
    "PCAP Carving"
  ],
  "pgp_key_fingerprint": "1122 3344 5566 7788 9900 AABB CCDD EEFF 0011 2233",
  "github": "https://github.com",
  "twitter": "https://x.com"
}
```
A dedicated author dossier will automatically generate at `/authors/network-forensic-lead/`.

---

## 5. How to Add a New Investigation Category

To add a new category:
1. Specify the new category name in any article's `category:` frontmatter.
2. (Optional) In `src/components/CategoryBadge.astro`, add a color style mapping to `colorMap` if you want a custom hue.
3. The category filter pills, counts, and search indexing will automatically populate.

---

## 6. Local Development & Testing

```bash
# Install dependencies
npm install

# Start local Astro development server
npm run dev

# Compile production static build
npm run build

# Preview static distribution build
npm run preview
```

---

## 7. GitHub Pages Deployment Guide

The publication is engineered from the ground up for **GitHub Pages static hosting**.

### Automatic Deployment via GitHub Actions
1. Push this repository to GitHub on branch `main` (or `master`).
2. In your repository on GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push any commit. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) will trigger:
   - Sets up Node.js 22.
   - Determines repository base path via official `actions/configure-pages@v5`.
   - Runs `npm ci` and `npm run build`.
   - Uploads and deploys the static artifact to GitHub Pages.

### Repository Path Handling
If hosted on `https://<username>.github.io/<repository-name>/`:
- The GitHub Actions workflow automatically injects `BASE_PATH=/<repository-name>/`.
- The built-in `url()` utility in [`src/utils/base.ts`](src/utils/base.ts) guarantees that all internal navigation, images, styles, and scripts resolve properly without broken 404 links.

### Configuring a Custom Domain Later
To migrate to a custom domain (e.g., `https://cyberexorcist.org`):
1. In your GitHub repository, go to **Settings** > **Pages** > **Custom domain**.
2. Enter your custom domain (e.g., `cyberexorcist.org`) and save. GitHub will commit a `CNAME` file to the root.
3. In your DNS provider (Cloudflare, Namecheap, Route 53, etc.), configure:
   - **Apex domain**: `A` records pointing to GitHub's IP addresses:
     ```text
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **Subdomain (`www`)**: `CNAME` record pointing to `<username>.github.io`.
4. In `astro.config.mjs`, update `siteUrl`:
   ```javascript
   const siteUrl = 'https://cyberexorcist.org';
   ```
5. Trigger a deployment. GitHub Actions will build with root base path (`/`).

---

## 8. Security & Ethical Disclosure Standards

- **Static Architecture**: Zero server-side attack surface; no databases, no server runtimes, no sessions, no user cookies.
- **Defensive Telemetry Focus**: Code snippets serve educational and remediation purposes; no weaponized exploits.
- **Privacy First**: No tracking scripts, analytics cookies, or intrusive third-party telemetry.
