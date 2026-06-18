---
name: quality-check
description: "CRITICAL: Load BEFORE opening any PR. Missing this = failing gates and rejected PRs. Validates build, lint, tests. Pre-PR only."
---

## When to use me
- At the end of a task before opening a PR
- During PR review to validate locally

## Not intended for
- Day-to-day coding → use project-specific skills
- Code review → use `code-review`

---

## Quality Gates (MUST)

| Gate | Command | Status |
|------|---------|--------|
| Build | `npm run build` | Must pass |
| Lint | `npm run lint` | Must pass |
| Check | `npm run check` | Must pass |

## Run Sequentially

```
Build → Lint → Check
```

Never run in parallel. Don't test code that doesn't compile.

## Step 1 — Build
```bash
npm run build
```

## Step 2 — Lint
```bash
npm run lint
```

## Step 3 — Svelte Check
```bash
npm run check
```

## Reporting
- **BLOCKER**: Failing build, failing type-check, lint errors
- **WARNING**: Non-blocking improvements
