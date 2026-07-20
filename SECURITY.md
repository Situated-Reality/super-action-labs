# Security policy

## Scope

This policy covers the public website at `www.super-action.org`, this repository, and its GitHub Pages deployment workflow.

The site is static and intentionally has no authentication, database, visitor form, analytics SDK, or first-party tracking. Issues may still arise from repository permissions, workflow configuration, domain/DNS changes, third-party assets, browser behavior, or accidental disclosure.

## Reporting a vulnerability

Please report suspected vulnerabilities privately to [hello@super-action.org](mailto:hello@super-action.org) with the subject **Security report**.

Include, where possible:

- The affected URL, file, workflow, or configuration
- A concise description of the issue and potential impact
- Reproduction steps or a minimal proof of concept
- Browser, operating system, and relevant versions
- Any suggested remediation

Do not open a public GitHub issue for an unpatched vulnerability, publish visitor or account data, perform destructive testing, disrupt availability, or attempt to access systems beyond what is necessary to demonstrate the issue.

We will review good-faith reports and coordinate disclosure when a fix is available. This policy does not create a bug-bounty program or promise compensation.

## Supported version

The current production deployment from `main` is the supported version. Historical commits and local forks are not maintained deployments.
