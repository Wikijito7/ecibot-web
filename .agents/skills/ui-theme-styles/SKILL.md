---
name: ui-theme-styles
description: "IMPORTANT: Load when creating or modifying Svelte components, SCSS files, or theme-related code. Keeps UI consistent with project conventions."
---

## When to use me
- Creating or editing `.svelte` components
- Editing SCSS files in `src/scss/`
- Working with light/dark theme toggle
- Adding new pages or UI elements

## Not intended for
- Routing or data loading → use `sveltekit-routing`
- Backend integration → use `api-backend`

---

## SCSS Conventions

### File Structure
```
src/scss/
├── _colors.scss        → color variables
├── _dimens.scss        → spacing/sizing variables
└── app.scss             → global styles (imported in root +layout.svelte)
```

### Color Variables (`_colors.scss`)
```scss
$primary-color: #fdfdfd;
$primary-color-hover: #fafafa;
$secondary-color: #01b05b;
$secondary-color-hover: #008c48;
$black: #1b1f24;
$black-hover: #050607;
$dark: #262b32;
$white: #fdfdfd;
$red: #a94442;
$lightred: #f2dede;
```

### Dimension Variables (`_dimens.scss`)
```scss
$body1: 1em;
$max-width: 1360px;
$document-padding: 1.5em;
```

### Theme System
The app has light/dark mode toggling.

**Component style** must use `@use` (not `@import`):
```scss
<style lang="scss">
  @use '/src/scss/dimens';
  @use '/src/scss/colors';
  // component styles...
</style>
```

Theme classes `.light` / `.dark` are applied to the root `<div class="main {lightMode ? 'light' : 'dark'}">` in `+layout.svelte`.

### Global Classes (in `app.scss`)
- `.roundedbackground` — rounded card with semi-transparent background
- `.shadow` — material-style box shadow

### Button Pattern
All buttons follow global styles from `app.scss` (green background, bold, rounded). Override via component SCSS when needed.

### Layout Max Width
All page content should be constrained to `dimens.$max-width` (1360px) and centered with `margin: auto`.

### Typography
- Font: 'Open Sans' from Google Fonts (loaded in `app.html`)
- Body: `dimens.$body1` (1em)
- Icons: Font Awesome 5 via CDN (loaded in `app.html`)

## Common Pitfalls
- Always use `@use` not `@import` for SCSS modules
- Do NOT import `app.scss` in component styles — only in `+layout.svelte`
- For component-level SCSS, import `colors` and `dimens` directly with `@use '/src/scss/colors'`
- Always use `lang="scss"` on `<style>` blocks, never plain CSS
- SVG backgrounds use inline SVGs with floating animation classes (`.triangle-float1`/`.triangle-float2`/`.triangle-float3`)
