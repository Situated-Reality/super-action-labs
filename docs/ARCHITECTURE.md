# Website architecture

## Purpose

This repository contains the public Super-Action Labs company website. It is a communication layer for the Context Operating System vision, not the Context Engine runtime itself.

The implementation favors a small attack surface, fast loading, direct editability, and durable hosting. There is no application server, database, authentication layer, build pipeline, or runtime dependency.

## Request lifecycle

```text
Browser request
      ↓
GitHub Pages CDN
      ↓
index.html
  ├── styles.css
  ├── script.js
  └── assets/
```

All visitor interactions remain in the browser. Reloading the page resets the simulated telemetry and interface state.

## Content structure

`index.html` is the source of truth for public copy and document semantics:

- Header and primary navigation
- Hero, value proposition, and live context simulation
- Thesis and perceive–understand–negotiate–act loop
- Context Engine capability and policy demonstration
- Product-surface explorer
- Company principles
- Contact call to action and footer

Section IDs (`#manifesto`, `#engine`, `#surfaces`, and `#principles`) are public anchors. Preserve them unless redirects and incoming links are considered.

## Styling system

`styles.css` owns:

- Brand tokens in `:root`
- Typography and spacing
- Desktop and responsive layouts
- Product-surface and principle visualizations
- Interaction states and motion
- Reduced-motion behavior
- Semantic status colors for normal, warning, and critical telemetry

The CSS is currently maintained as a single file to keep delivery dependency-free. When changing it, extend existing tokens and breakpoints before introducing one-off values.

## Interaction systems

`script.js` contains four independent systems:

1. **Product surfaces** — changes copy and visual state between glasses, enterprise, robotics, XR, and agents.
2. **Context Engine** — updates the selected capability and cycles intervention policies.
3. **Live context telemetry** — generates illustrative confidence values, including warning and critical states.
4. **Page behavior** — reveal-on-scroll effects and the responsive navigation menu.

The percentages and policies are illustrative. They must not be presented as benchmark results or production system measurements.

## Accessibility contract

Maintain the following behaviors:

- Meaningful images require useful alternative text.
- Decorative visuals use `aria-hidden="true"` or remain outside the accessibility tree.
- Interactive cards and controls must work by keyboard.
- Focus states must remain visible.
- Text must remain readable without relying solely on color.
- Motion must be disabled or reduced when `prefers-reduced-motion: reduce` is active.
- Heading hierarchy and landmark elements must remain coherent.

## Responsive contract

The production layout should be checked at minimum around these viewport classes:

| Class | Representative size |
| --- | --- |
| Wide desktop | 1440 × 900 |
| Compact laptop | 1280 × 720 |
| Tablet | 768 × 1024 |
| Mobile | 390 × 844 |
| Narrow mobile | 360 × 800 |

Acceptance criteria:

- No document-level horizontal scrolling
- No overlap between hero copy and live telemetry
- Navigation remains operable
- Product tabs remain discoverable and scrollable where needed
- Interactive diagrams remain legible
- Section copy is not clipped

## Performance and privacy

The largest payload is `assets/context-studio.png`. Optimize or replace it carefully and compare visual quality across high-density and mobile displays.

The site intentionally contains no analytics, advertising tags, cookies, forms, or third-party application scripts. Any future data collection requires an explicit privacy review and appropriate public disclosure.

Google Fonts are currently loaded by CSS. If a stricter privacy or availability posture is required, self-host the approved font files and update the documentation.
