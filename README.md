<p align="center">
  <img src="assets/mark.svg" width="88" alt="Super-Action Labs mark" />
</p>

<h1 align="center">Super-Action Labs</h1>

<p align="center">
  <strong>The Context Operating System for Human–AI Collaboration.</strong><br />
  Intelligence that understands the moment before it acts.
</p>

<p align="center">
  <a href="https://www.super-action.org/">Live website</a> ·
  <a href="mailto:hello@super-action.org">Contact</a> ·
  <a href="docs/ARCHITECTURE.md">Architecture</a> ·
  <a href="docs/BRAND.md">Brand guide</a>
</p>

[![Deploy to GitHub Pages](https://github.com/Situated-Reality/super-action-labs/actions/workflows/pages.yml/badge.svg)](https://github.com/Situated-Reality/super-action-labs/actions/workflows/pages.yml)

## What we are building

Super-Action Labs develops **context intelligence**: technology that continuously understands people, activity, intent, space, and timing, then decides whether to help, wait, ask, or step back.

The long-term platform is a Context Engine that can support multiple product surfaces:

- AI glasses and personal computing
- Enterprise and frontline guidance
- Human–robot collaboration
- XR and spatial interfaces
- Situated software agents

The website is an interactive expression of that thesis. Its live context telemetry, Context Engine console, product-surface explorer, and principle diagrams are simulations designed to communicate the product direction—not production inference outputs.

## Context Engine

```text
Context Engine
├── Multimodal Perception
├── Spatial Intelligence
├── User Model
├── Activity Model
├── Memory
├── Planning
├── UI Policy
├── Intervention Policy
└── Device Manager
```

The core product question is consistent across every surface: **how can AI understand the human, task, and environment well enough to intervene at the right time, in the right place, and in the right way?**

## Website experience

| Section | Purpose |
| --- | --- |
| Hero / Live Context | Introduces context intelligence through changing activity, intent, and intervention confidence |
| 01 — Thesis | Frames continuous contextual understanding as the platform after the prompt |
| 02 — The Platform | Demonstrates sensing, context state, and intervention-policy decisions |
| 03 — Product Surfaces | Explores AI glasses, enterprise, robotics, XR, and agents |
| 04 — Our Principles | Communicates action, intelligence, connection, and forward motion |

## Technology

The site is intentionally dependency-free:

- Semantic HTML in `index.html`
- Responsive layout, brand system, and motion in `styles.css`
- Vanilla JavaScript interactions and simulations in `script.js`
- GitHub Actions deployment to GitHub Pages
- Squarespace-managed domain registration with GitHub Pages hosting

No build step, framework, package manager, analytics SDK, cookies, or client-side data collection is required.

## Run locally

Serve the repository root with any static web server:

```bash
python3 -m http.server 4173
```

Open [http://localhost:4173](http://localhost:4173). Opening `index.html` directly is not recommended because a local server more closely matches production behavior.

## Repository map

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/       # Structured maintenance requests
│   ├── workflows/pages.yml   # GitHub Pages deployment
│   ├── CODEOWNERS
│   └── pull_request_template.md
├── assets/
│   ├── context-studio.png    # Hero campaign image
│   └── mark.svg              # Canonical vector mark
├── docs/
│   ├── ARCHITECTURE.md
│   ├── BRAND.md
│   └── DEPLOYMENT.md
├── CNAME                     # Canonical production hostname
├── CONTRIBUTING.md
├── SECURITY.md
├── index.html
├── script.js
└── styles.css
```

## Deployment

Every push to `main` triggers `.github/workflows/pages.yml`. The workflow uploads the repository as a static artifact and deploys it to GitHub Pages at [www.super-action.org](https://www.super-action.org/).

Domain registration and website hosting are separate: Squarespace remains the domain registrar, while GitHub Pages serves the website. See [the deployment runbook](docs/DEPLOYMENT.md) before changing DNS, the `CNAME` file, or Pages settings.

## Maintaining the site

Before publishing a change:

1. Confirm the copy and links are accurate.
2. Exercise the live context, engine nodes, surface tabs, mobile menu, and principle cards.
3. Check desktop, compact laptop, tablet, and narrow mobile layouts.
4. Verify there is no horizontal overflow or text/telemetry overlap.
5. Respect `prefers-reduced-motion` and preserve keyboard access.
6. Confirm the Pages workflow succeeds and the production domain loads over HTTPS.

Detailed conventions are in [CONTRIBUTING.md](CONTRIBUTING.md).

## Security and privacy

This public website is static and does not intentionally collect visitor data. Please report suspected vulnerabilities privately using the process in [SECURITY.md](SECURITY.md); do not open a public security issue.

## Rights

Copyright © 2026 Super-Action Labs. All rights reserved.

No open-source license has been granted for this repository. The code, copy, visual identity, and generated imagery may not be reused or redistributed without permission.
