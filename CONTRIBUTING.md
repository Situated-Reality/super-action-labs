# Contributing

Thank you for helping maintain the Super-Action Labs website. This is a company-owned public repository; contributions are reviewed for product accuracy, brand consistency, accessibility, and production safety.

## Workflow

1. Start from the latest `main`.
2. Create a focused branch such as `content/update-platform-copy` or `fix/mobile-hero-layout`.
3. Make one coherent change per pull request.
4. Preview through a local HTTP server.
5. Complete the validation checklist below.
6. Open a pull request using the repository template.

Do not commit directly to `main` unless handling an explicitly approved production emergency.

## Local preview

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Content conventions

- Write public-facing website content in English unless a multilingual experience is intentionally reintroduced.
- Use **Super-Action Labs**, **Context Engine**, and **Context Operating System** consistently.
- Use an en dash in “Human–AI.”
- Distinguish product direction, research, simulation, and shipped capability.
- Keep telemetry labels short and product copy concrete.
- Update README or `docs/` when behavior, architecture, domain setup, or brand rules change.

## Code conventions

- Preserve the dependency-free implementation unless a reviewed architectural decision says otherwise.
- Prefer semantic HTML and existing CSS tokens.
- Keep JavaScript progressive and isolated by interaction system.
- Avoid inline third-party scripts, trackers, secrets, and personal data.
- Keep asset filenames lowercase and descriptive.
- Do not edit generated imagery merely to reduce file size without comparing visual output.

## Validation checklist

- [ ] Page loads without console errors.
- [ ] Primary links and the email call to action work.
- [ ] Live context values and semantic colors update.
- [ ] Context Engine capability selection and policy cycling work.
- [ ] All product-surface tabs update the visualization and copy.
- [ ] Principle cards work with pointer and keyboard input.
- [ ] Mobile menu opens, closes, and remains keyboard accessible.
- [ ] No horizontal page overflow appears at representative widths.
- [ ] Hero copy and live telemetry do not overlap.
- [ ] Reduced-motion mode remains usable.
- [ ] Changed images have accurate alternative text.
- [ ] GitHub Pages deployment succeeds.
- [ ] Production HTTPS and the custom domain remain healthy.

## Pull requests

Explain what changed, why it changed, user impact, and how it was checked. Include screenshots for visual changes at desktop and mobile sizes when practical.

Do not include unrelated formatting or copy changes in the same pull request. Security concerns should follow [SECURITY.md](SECURITY.md), not a public issue or PR.

## Rights

Submitting a contribution does not grant a license to reuse Super-Action Labs code, copy, imagery, or brand assets. All accepted contributions become part of this company-owned repository under its existing rights notice.
