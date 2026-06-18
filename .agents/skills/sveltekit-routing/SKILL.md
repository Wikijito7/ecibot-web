---
name: sveltekit-routing
description: "CRITICAL: Load when creating or modifying routes, layouts, page loads, or data fetching. Wrong SvelteKit patterns = broken navigation and data flow."
---

## When to use me
- Creating or modifying a `+page.svelte`, `+layout.svelte`, `+page.js`, `+layout.js`, or `+page.server.js`
- Working with SvelteKit navigation (`$app/navigation`, `$app/stores`)
- Setting up route params or dynamic routes `[id]`

## Not intended for
- UI component styling → use `ui-theme-styles`
- API integration → use `api-backend`

---

## Project Conventions

### SPA Mode
This project runs as a SPA. `ssr = false` is set in `src/routes/+layout.js`. Do **not** enable SSR.

### Route Structure
| Pattern | Purpose |
|---------|---------|
| `/` | Landing page (public) |
| `/login` | Login form |
| `/recover-pass` | Password recovery |
| `/app` | Authenticated app dashboard |
| `/app/audio-request` | Audio upload flow |
| `/app/audio/[id]` | Single audio detail |
| `/app/profile` | User profile |

### Layout Hierarchy
```
+layout.svelte (.js)       → global layout (Header or AppHeader based on route)
├── /                       → +page.svelte (landing)
├── /login                  → +page.svelte
├── /recover-pass           → +page.svelte
└── /app/+layout.svelte     → app sub-layout
    ├── /app                → +page.svelte (+page.js, +page.server.js)
    ├── /app/audio-request  → +page.svelte
    ├── /app/audio/[id]     → +page.svelte (+page.ts)
    └── /app/profile        → +page.svelte
```

### App Routing Detection
The global layout (`+layout.js`) detects `/app` routes via `route.id?.includes('app')` and stores it as `data.appRouting`. This controls which header to show:
- `data.appRouting == false` → `Header.svelte` (public nav)
- `data.appRouting == true` → `AppHeader.svelte` (app nav)

### Data Loading Patterns
- **Client-only data** (`+page.js` / `+layout.js`): Use `load()` that returns plain data
- **Server-only data** (`+page.server.js`): Use for API calls with secrets. **Do NOT move server load data to client load unless necessary**
- **Type imports**: Always import types from `./$types`:
  - `import type { PageLoad } from './$types'`
  - `import type { PageServerLoad } from './$types'`
  - `import type { PageData } from './$types'`
  - `import type { LayoutLoad } from './$types'`

### Navigation
```js
import { goto } from '$app/navigation';
goto('/some-route');
```

### Page Title
Set `document.title` at the top of `<script>` in each page component.

## Common Pitfalls
- Don't use `$app/stores` page store in `load()` functions — only in components
- Don't enable SSR — SPA only
- Don't use `+server.js` for API routes unless necessary (fetch directly to backend instead)
