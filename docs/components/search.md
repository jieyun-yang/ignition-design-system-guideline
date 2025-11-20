---
title: Search
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/4635754
scraped: 2025-11-16T03:19:19.146Z
---

# Search
```markdown
## Overview

The Search component provides a fundamental interface for users to discover content within an application. It enables both localized list filtering and comprehensive global searches, offering immediate feedback and efficient user interaction for clearing queries and handling results.

## Usage Guidelines

### Types of Search

The Search component supports different use cases based on the scope of the search:

| Type            | Description                                                                                             |
| :-------------- | :------------------------------------------------------------------------------------------------------ |
| **List search** | Used to perform a keyword search to filter a specific list or set of items, producing a refined list of results. |
| **Global search** | Used to perform a keyword search across the entire application, displaying results in a dropdown for user selection. |

### Interactions

The Search component incorporates the following key interactions to enhance user experience:

#### Fetch Live Results

*   **Interaction**: Search results appear dynamically as the user types or stops typing.
*   **In-app Example**: Search results appearing in a "Pipeline" as the user stops typing.
*   **Notes**: In table contexts, live results are typically fetched every X seconds after the user stops typing. This eliminates the need for an additional 'Search' button or Call-to-Action (CTA).

#### Clear Input and Results

*   **Interaction**: Users can clear their search input and filter results with a single action.
*   **Trigger**: An 'X' icon-button appears on the right side of the input field once the user enters at least one character.
*   **Action**: Clicking the 'X' icon clears all data from the input field instantly.
*   **Effect**: This action also unfits or clears the previously filtered results from the UI, returning the display to its starting (unfiltered) state.
*   **Benefit**: Provides a faster and more convenient method to clear the input compared to repeatedly using backspace.

#### Error Validation

*   **Approach**: Error validation for search inputs is handled by communicating resolution steps in the output display, rather than using inline messages.
*   **Reasoning**: For search inputs, a string of characters typically generates "no results" rather than a technical error.
*   **Implementation**: Instead of showing an inline error validation message (as defined/styled in a base Text Input component), the output communicates guidance to resolve the issue (e.g., "No results found. Try a different keyword or check your spelling.").

## Anatomy/Structure

The Search component is composed of the following visual elements:

| Element                       | Description                                                     |
| :---------------------------- | :-------------------------------------------------------------- |
| **Search icon**               | A magnifying glass icon that visually identifies the input as a search field. |
| **Text input or placeholder** | The primary area for users to type their search queries. It can display a placeholder text when empty. |
| **Clear icon (X)**            | An 'X' icon that appears conditionally, allowing users to quickly clear entered text and associated results. |

## Variants/States

The Search component supports the following states to indicate its current condition or user interaction:

*   Default
*   Hover
*   Focus
*   Input
*   Clear input default
*   Clear input hover

## Properties/Options

No specific configurable properties or settings were explicitly mentioned beyond the conditional appearance of the clear icon, which is covered under Anatomy and Best Practices.

## Best Practices

### Do

*   Show an 'X' icon when a user has entered text into the field.
*   Accompany the search box with a magnifying glass icon.
*   Place the search box on the top-left of a list of items that it filters.

### Don’t

*   Do not show an 'X' icon when a user has not entered any text yet.

## Accessibility

The provided content does not contain a dedicated section for accessibility guidelines. However, the specified approach to "Error validation" – communicating steps to resolve issues in the output rather than using inline error messages for "no results" scenarios – indirectly contributes to a clearer and potentially more accessible user experience by avoiding ambiguous error states.

## Code Examples

No code snippets were provided in the extracted content.

## Spacing/Sizing

No specific measurements, padding, or margins were mentioned in the extracted content.

## Related Components

No links to related components or guidelines were mentioned in the extracted content.
```