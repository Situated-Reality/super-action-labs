# Deployment and domain runbook

## Production topology

| Responsibility | Provider |
| --- | --- |
| Source control | GitHub |
| Static hosting and TLS | GitHub Pages |
| Domain registration and DNS management | Squarespace Domains |
| Canonical hostname | `www.super-action.org` |
| Apex hostname | `super-action.org` → canonical hostname |

The Squarespace website subscription is not required to host this repository. Do not cancel or transfer the domain registration when changing website hosting.

## Standard deployment

1. Merge the reviewed change into `main`.
2. GitHub triggers `.github/workflows/pages.yml`.
3. The workflow uploads the repository root as a Pages artifact.
4. GitHub Pages deploys the artifact.
5. Confirm the workflow completed successfully.
6. Open `https://www.super-action.org/` in a fresh browser session and test the changed behavior.

The workflow also supports a manual `workflow_dispatch` run from the GitHub Actions page.

## Required GitHub settings

- Pages build type: **GitHub Actions**
- Custom domain: `www.super-action.org`
- Enforce HTTPS: enabled
- `CNAME` file: exactly `www.super-action.org`

The repository workflow requires `pages: write` and `id-token: write`; do not broaden permissions without a clear need.

## DNS records

The authoritative Squarespace DNS zone should include these website records:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `www` | `situated-reality.github.io` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Do not delete MX, SPF, DKIM, or other email-related records while changing website DNS. DNS caches may retain an older answer until its TTL expires.

## Validation

After deployment, verify:

- The Pages workflow is green.
- Both hostnames resolve to GitHub Pages.
- `https://www.super-action.org/` returns the current homepage.
- `https://super-action.org/` resolves or redirects to the canonical hostname.
- The browser reports a valid certificate for both hostnames.
- HTTPS enforcement remains enabled in repository settings.
- The hero image, vector mark, stylesheet, and JavaScript load without errors.

## Rollback

Use a normal Git revert of the problematic commit and push the revert to `main`. The Pages workflow will deploy the restored state. Avoid destructive branch resets because they obscure production history.

For a presentation-only issue, prefer a small follow-up fix. For a broken or unsafe production state, revert first and diagnose on a separate branch.

## Troubleshooting

### The workflow succeeds but the old page appears

- Perform a hard refresh or use a private browser window.
- Confirm the latest workflow deployment URL and commit.
- Check that the expected file is in the deployed artifact.
- Allow CDN and DNS caches a short propagation window.

### Certificate mismatch or HTTPS unavailable

- Confirm `www` points to `situated-reality.github.io`.
- Confirm all four apex A records are present.
- Confirm the Pages custom domain matches the `CNAME` file.
- Wait for GitHub's certificate status to become approved before enabling HTTPS.
- Do not restore Squarespace website A records; they conflict with GitHub Pages hosting.

### Apex and `www` show different sites

- Check for duplicate or conflicting A/CNAME records.
- Confirm the Pages custom domain is `www.super-action.org`.
- Query authoritative nameservers when local DNS caches show stale answers.

### Local preview differs from production

- Serve the repository root through HTTP rather than opening the file directly.
- Check browser console and network errors.
- Verify filename case exactly; GitHub Pages runs on a case-sensitive filesystem.
