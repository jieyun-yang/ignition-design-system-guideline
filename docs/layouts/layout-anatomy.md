---
title: Layout anatomy
category: Layouts
url: https://design.ignitionapp.com/25ddf264c/p/6971524
scraped: 2025-11-16T03:37:46.021Z
---

# Layout anatomy
```markdown
## Overview

The "Layout anatomy" guideline establishes a consistent system for defining content widths across the design system. It specifies a set of predefined maximum widths that content areas should adhere to, ensuring a predictable and responsive layout structure for various page types. This guideline helps in creating unified user experiences by standardizing how content is presented horizontally on different screen sizes.

## Usage Guidelines

The choice of layout size should be driven by the content's complexity, density, and the primary user task on a given page. Selecting the appropriate size helps optimize readability, focus, and overall user experience.

*   **Small (768px / 3xl):**
    *   **When to use:** Ideal for highly focused content, minimal forms, legal documents, payment processes, or simple data entry where a narrow column helps concentrate user attention.
    *   **Examples:** New Patient Experience (NPE) pages for General information, payments, terms and conditions, or send functionalities.
*   **Medium (1280px / 7xl):**
    *   **When to use:** Suitable for dashboard views, overview pages, or content that requires a moderate amount of horizontal space to display information clearly without being overwhelming.
    *   **Examples:** Dashboard views.
*   **Large (1600px / 9xl):**
    *   **When to use:** Employed for richer content, detailed presentations, or pages with complex visual elements that benefit from more expansive horizontal real estate.
    *   **Examples:** New Patient Experience (NPE) pages for Services or presentations.
*   **Full width:**
    *   **When to use:** Reserved for content that genuinely benefits from occupying the entire available screen width, such as dense data tables, media-rich experiences, or pages where extensive horizontal information display is a primary requirement.
    *   **Examples:** Clients pages, pipelines pages, collections pages.

## Anatomy/Structure

Layouts within this design system are primarily structured around a central content area, which is horizontally constrained by a `max-width` property. This `max-width` determines the maximum horizontal space the content can occupy. When the screen width exceeds this defined `max-width`, the content area typically remains centered, with symmetrical margins appearing on either side to maintain visual balance and readability.

## Variants/States

The layout system provides the following predefined size variants, each with a specific maximum width:

*   Small
*   Medium
*   Large
*   Full width

## Properties/Options

The following properties define the characteristics and application of each layout size:

| Property    | Description                                                                                             | Values                                                          | Examples of Use                                                                 |
| :---------- | :------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| `Size`      | The named variant that designates the standard maximum width for a given content area.                  | `Small`, `Medium`, `Large`, `Full width`                        | Used to select the appropriate content constraint for a page or section.        |
| `Max-width` | The explicit maximum horizontal dimension the main content area will occupy. Corresponds to design tokens. | `768px (3xl)`, `1280px (7xl)`, `1600px (9xl)`, `Full-width`     | Dictates the content area's maximum size, influencing responsiveness.           |
| `Examples`  | Illustrative page types or specific components where this layout size is typically and effectively applied. | `NPE( General, payments, terms, send)`, `Dashboard`, `NPE( Services, presentations )`, `Clients, pipelines, collections pages` | Provides concrete guidance for context-specific application.                    |

## Best Practices

*   **Do** always consider the primary goal and the specific content density of the page when choosing a layout size.
*   **Do** leverage `Small` layouts for highly focused tasks like forms, critical alerts, or single-purpose interactions to minimize distractions.
*   **Do** use `Full width` judiciously, reserving it for content that genuinely requires and benefits from expansive horizontal space, such as complex data tables, timelines, or large image galleries.
*   **Don't** arbitrarily select a layout size without a clear rationale regarding content and user experience.
*   **Don't** apply `Full width` to pages with sparse content, as this can lead to awkward visual gaps, excessive white space, and reduced readability.
*   **Don't** override or exceed the defined `Max-width` for content areas, as this will compromise the system's consistency and responsiveness.

## Accessibility

No specific accessibility considerations are detailed in the provided content. However, by defining consistent `max-width` values and implicitly promoting responsive design, these guidelines contribute to better overall accessibility as content adapts predictably to various viewport sizes, improving readability and usability for all users.

## Code Examples

No specific code examples related to layout implementation are provided in the extracted content.

## Spacing/Sizing

The core sizing for layout variants is defined by their respective `max-width` properties:

*   **Small:** `768px` (corresponds to the `3xl` design token)
*   **Medium:** `1280px` (corresponds to the `7xl` design token)
*   **Large:** `1600px` (corresponds to the `9xl` design token)
*   **Full width:** The content expands to occupy the entire available width of the viewport, with no explicit maximum constraint.

These `max-width` values dictate the maximum horizontal extent of the content area. When the viewport is wider than the specified `max-width`, implicit horizontal margins are typically applied to center the content, ensuring consistent visual presentation.

## Related Components

No explicit related components or links to other guidelines are mentioned in the provided content.
```