---
title: Page layouts
category: Page layouts
url: https://design.ignitionapp.com/25ddf264c/p/2946045
scraped: 2025-11-16T03:02:02.763Z
---

# Page layouts
This document outlines guidelines and best practices for creating page layouts within our design system.

## Overview
No content provided for this section in the input. This section would typically describe the purpose of page layouts, their role in structuring content, and how they contribute to user experience and consistency.

## Usage Guidelines
No content provided for this section in the input. This section would typically detail when to use specific layout patterns, such as when to use a single-column vs. multi-column layout, or when to include a sidebar.

## Anatomy/Structure
No content provided for this section in the input. This section would typically break down common page layout components (e.g., header, main content area, sidebar, footer) and explain their typical arrangement and purpose.

## Variants/States
No content provided for this section in the input. This section would typically describe different predefined page layout variants (e.g., full-width, two-column, dashboard layout) and any responsive states they might have.

## Properties/Options
No content provided for this section in the input. This section would typically include a table of configurable properties for layouts, such as:

| Property | Type | Description | Default |
|---|---|---|---|
| `layoutType` | `string` | Defines the overall structure (e.g., `full-width`, `two-column`, `dashboard`) | `full-width` |
| `hasSidebar` | `boolean` | Determines if a sidebar is present | `false` |
| `sidebarPosition` | `string` | Position of the sidebar (`left`, `right`) if `hasSidebar` is true | `left` |
| `contentWidth` | `string` | Maximum width of the main content area (e.g., `constrained`, `fluid`) | `constrained` |

## Best Practices
No content provided for this section in the input. This section would typically cover:
*   **Do:** Ensure layouts are responsive and adapt well to different screen sizes.
*   **Do:** Prioritize content hierarchy and readability within the layout.
*   **Don't:** Deviate from established layout patterns without a strong justification.
*   **Don't:** Overload a single page with too many complex layout elements.

## Accessibility
No content provided for this section in the input. This section would typically address:
*   Semantic HTML for layout elements (e.g., `<header>`, `<main>`, `<aside>`, `<footer>`).
*   Keyboard navigation order.
*   Screen reader compatibility with layout structures.

## Code Examples
No content provided for this section in the input. This section would typically show examples of how to implement different layouts using HTML, CSS, or a specific framework.

```html
<!-- Example of a basic two-column layout structure -->
<div class="page-layout">
  <header>Page Header</header>
  <div class="page-body">
    <main class="page-content">
      <h1>Main Content Title</h1>
      <p>This is the primary content area.</p>
    </main>
    <aside class="page-sidebar">
      <h2>Sidebar Content</h2>
      <ul>
        <li>Navigation Link 1</li>
        <li>Navigation Link 2</li>
      </ul>
    </aside>
  </div>
  <footer>Page Footer</footer>
</div>
```

## Spacing/Sizing
No content provided for this section in the input. This section would typically define:
*   Standard gutter widths between columns.
*   Vertical spacing between sections.
*   Maximum content widths for different breakpoints.
*   Padding around page elements.

## Related Components
No content provided for this section in the input. This section would typically link to other related guidelines or components, such as:
*   [Grid System](/design-system/components/grid-system)
*   [Headers](/design-system/components/headers)
*   [Footers](/design-system/components/footers)
*   [Sidebars](/design-system/components/sidebars)
*   [Section Dividers](/design-system/components/section-dividers)