---
name: api-backend
description: "CRITICAL: Load when modifying API calls, authentication, or data fetching. Missing auth or wrong endpoints = broken features."
---

## When to use me
- Making HTTP requests to the backend API
- Working with authentication or tokens
- Creating new data-fetching logic in `+page.js`, `+page.server.js`, or components
- Uploading audio files

## Not intended for
- UI components → use `ui-theme-styles`
- SvelteKit routing → use `sveltekit-routing`

---

## API Configuration

**Base URI**: `https://ecibot.wokis.es/api` (defined in `src/constants/AppConstants.js`)

```js
import { baseUri } from '../../constants/AppConstants';
```

## Authentication Pattern

All authenticated requests must include a Bearer token:

```js
fetch(`${baseUri}/endpoint`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer <token>'
  }
})
```

The token should be obtained from the login response and stored for subsequent requests.

## Endpoints Used

| Endpoint | Method | Purpose | Auth Required |
|----------|--------|---------|---------------|
| `/login` | POST | User authentication | No |
| `/stats` | GET | Usage statistics | Yes |
| `/audios` | GET | Pending audio list | Yes |
| `/audio` (or similar) | POST | Upload audio file | Yes |

## Data Loading Patterns

### Server Load (with auth)
Use `+page.server.js` for API calls that need auth headers (keeps tokens server-side):

```js
/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const data = await fetch(`${baseUri}/endpoint`, {
    headers: { Authorization: 'Bearer <token>' }
  }).then(r => r.json());
  return { data };
}
```

### Client Load (public data)
Use `+page.js` for public data or data that doesn't need auth.

## Error Handling Pattern
```js
const response = await fetch(`${baseUri}/endpoint`, { ... });
if (!response.ok) {
  // handle error
  return { error: 'Failed to fetch' };
}
const data = await response.json();
```

## File Upload Pattern
For audio uploads use `FormData`:
```js
const formData = new FormData();
formData.append('audio', fileObject);
fetch(`${baseUri}/upload`, {
  method: 'POST',
  headers: { Authorization: 'Bearer <token>' },
  body: formData
});
```
Do NOT set `Content-Type` for FormData — the browser sets it automatically with the boundary.

## Common Pitfalls
- Do NOT hardcode the base URL — always import from `AppConstants.js`
- Always handle API errors (check `response.ok`)
- Bearer token must NOT be empty string — ensure it's populated before making requests
- Do NOT set `Content-Type` when sending `FormData`
- Login response should be checked before redirecting — don't redirect on failure
