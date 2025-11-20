---
title: Input
category: Components
url: https://design.ignitionapp.com/25ddf264c/p/4946434
scraped: 2025-11-16T03:17:17.186Z
---

# Input
## Overview

The Input component is a fundamental UI element designed for user data entry. It provides a standardized way to collect text, numerical, or other character-based information, often incorporating visual cues, character limits, and various interactive states to ensure a consistent and user-friendly experience across the system.

## Usage Guidelines

The Input component serves various purposes depending on its configuration and context.

### When to Use

*   **Basic Input**: For general text entry such as email addresses, names, addresses, or any other free-form text.
*   **Input with Elements (Icons)**: When there's a need to visually indicate specific data types, such as currency (dollar/pound icons) or percentages.
*   **Character Limit Input**: To restrict the length of user input, particularly when content needs to be concise or fit within specific database constraints.
*   **Flushed Input**: Specifically designated for numerical input in NPE (New Product Experience) contexts.

### Anatomy/Structure

The Input component is composed of several key elements:

| Element               | Description                               |
| :-------------------- | :---------------------------------------- |
| `Placeholder, or text` | The displayed text when the input is empty |
| `Input field`         | The primary area for user text entry      |
| `Left element`        | An optional element (e.g., icon) to the left of the input field |
| `Right element`       | An optional element (e.g., icon or character count) to the right of the input field |
| `Character count`     | A numerical display indicating the remaining or total characters |

### Variants/States

The Input component supports various visual and interactive states to communicate its status to the user.

#### Standard States

| State       | Description                                   |
| :---------- | :-------------------------------------------- |
| `Default`   | The initial, inactive state of the input      |
| `Hover`     | The state when the user's cursor is over the input |
| `Focus`     | The state when the input is actively selected for text entry |
| `Disabled`  | The state when the input is non-interactive and unable to accept input |

#### Flushed States

Flushed inputs have specific states tailored for their unique usage, often in numerical contexts.

| State           | Description                                   |
| :-------------- | :-------------------------------------------- |
| `Flushed default` | The initial, inactive state for a flushed input |
| `Flushed focus`   | The active state for a flushed input          |
| `Flushed error`   | The state indicating invalid input for a flushed input |

#### Styling Variants

The Input component can have different styling configurations.

| Variant     | Description                               |
| :---------- | :---------------------------------------- |
| `Size large` | A larger input size, currently only used on the Log in page |

### Properties/Options

#### Interactions

The Input component defines the following user interactions:

*   **On Focus**: Users can enter or edit text while the input field is in a focused state.

### Best Practices

#### Do

*   **Provide informative placeholders**: Ensure placeholders clearly indicate the expected input type or format.
*   **Use left and right icons**: Utilize icons to semantically indicate the type of data being entered, such as price or percentage.
*   **Use a character count**: Implement a character count display when content needs to be kept minimal or adhere to specific length constraints.

#### Don't

*   **Stray from standard input styling**: Avoid custom styling that deviates significantly from the design system's standards, as this can reduce faster recognition and usability.
*   **Display inputs horizontally or in multiple columns**: Avoid arranging input fields in horizontal or multi-column layouts, which can hinder readability and user flow.

### Accessibility

(No specific accessibility considerations were provided in the extracted content.)

### Code Examples

(No code examples were provided in the extracted content.)

### Spacing/Sizing

(While "Size large" is mentioned, no specific measurements or spacing guidelines were provided.)

### Related Components

(No explicit related components were provided, though specific usage contexts like "Log in page" and "NPE" are mentioned.)