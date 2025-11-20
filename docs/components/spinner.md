---
title: Spinner
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/5006152
scraped: 2025-11-16T03:30:58.491Z
---

# Spinner
```markdown
## Overview

Spinners are visual indicators that reassure users that an action or process is underway, ensuring they know their input is being processed.

## Usage Guidelines

Use spinners to provide feedback during various loading states or asynchronous operations.

### When to use a Spinner

*   **Full Page Loads:**
    *   When the application is first loading after login.
    *   When a new page is opened or a full page reload is initiated by the user.
    *   Typically positioned underneath the logo during initial load.
*   **Segmented Page Loads:**
    *   When loading or reloading specific sections or components of a page.
    *   For example, when applying filters in a data pipeline, loading payment statuses, or refreshing tables.
*   **Within Other Components:**
    *   Embed spinners inside components like buttons to indicate processing (e.g., a "Save" button spinning while data is submitted).
*   **In Dynamic Lists:**
    *   When a user searches or filters items in a dynamic list, indicating that results are being fetched.
*   **During External API Communication:**
    *   When the application needs to communicate with external services (e.g., an integration saving data via an external API like Gusto).
*   **With Copy for Detailed Progress:**
    *   For more complex or longer operations, combine the spinner with descriptive copy, often seen in progress toasts for bulk actions.

## Anatomy/Structure

A spinner is an animated visual icon.

*   **Icon:** The visual shape of the spinner.
*   **Animation:** The continuous motion of the icon, which is crucial for conveying progress and reassurance.

## Variants/States

*   **States:** *(No specific states mentioned in the provided content beyond 'loading' implied by usage.)*
*   **Interactions:** *(No specific interactions mentioned in the provided content.)*
*   **Variants:** *(No specific variants mentioned in the provided content.)*

## Properties/Options

| Property | Type   | Description                                           | Default |
| :------- | :----- | :---------------------------------------------------- | :------ |
| `color`  | string | The color of the spinner, which can match context.    | N/A     |

## Best Practices

### Do's

*   **Always animate:** Ensure the spinner is consistently animated. Animation is fundamental to its purpose of reassuring the user that a task is ongoing.
*   **Match color contextually:** When used within other components (like buttons), the spinner's color should match the appropriate information or component styling.
*   **Combine with copy for bulk actions:** For bulk actions or processes with more detailed progress, pair the spinner with descriptive text, often within a progress toast.

### Don'ts

*   **Don't use different styles for different speeds/statuses:** Avoid using varying styles or icons for different types or speeds of loading indicators. This increases cognitive load, prompting users to question the differences ("Why are they different?", "Is this a slower or faster indicator?"), rather than simply understanding that an action is in progress.
*   **Don't use a static icon:** A static (non-animated) icon fails to convey the soothing reassurance that a task is still happening. Animation is paramount.

## Accessibility

*(No explicit accessibility considerations were mentioned in the provided content.)*

## Code Examples

*(No code examples were provided in the extracted content.)*

## Spacing/Sizing

*(No specific measurements, padding, or margins were mentioned in the provided content.)*

## Related Components

*   [Progress Toasts](link-to-progress-toasts-guideline)
```